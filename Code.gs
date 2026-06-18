/**
 * CIM Screening Test — Google Apps Script backend
 * ------------------------------------------------
 * Paste this entire file into your Apps Script project (replacing the
 * existing Code.gs), then redeploy as a Web App:
 *   Deploy → Manage deployments → Edit (pencil) → New version → Deploy
 *
 * It must stay deployed at the SAME URL your exam.js / admin.js already
 * point to (API_URL), OR if you create a brand-new deployment, copy the
 * new /exec URL into API_URL in both exam.js and admin.js.
 *
 * Required deployment settings:
 *   - Execute as: Me
 *   - Who has access: Anyone (so unauthenticated students can POST results
 *     and the admin page can GET them — the GET endpoint is protected by
 *     the ADMIN_KEY secret below, not by Google account login).
 *
 * Data is stored in a Google Sheet in the SAME spreadsheet this script is
 * bound to (Apps Script → the sheet will be created automatically on first
 * submission if it doesn't exist, named "Submissions").
 */

// 🔑 CHANGE THIS to your own secret before deploying.
// The admin dashboard must send this exact value to read results.
const ADMIN_KEY = "CHANGE-ME-TO-A-LONG-RANDOM-SECRET";

const SHEET_NAME = "Submissions";
const HEADERS = [
  "Timestamp", "Name", "USN", "Score", "TotalQuestions", "Percentage",
  "TimeTakenSec", "Warnings", "Flagged", "Answered", "Skipped", "NotVisited",
  "BreakdownJSON"
];

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = getSheet_();

    sheet.appendRow([
      new Date(),
      data.name || "",
      data.usn || "",
      typeof data.score === "number" ? data.score : "",
      data.totalQuestions || "",
      typeof data.percentage === "number" ? data.percentage : "",
      data.timeTaken || "",
      data.warnings || 0,
      !!data.flagged,
      data.answered || 0,
      data.skipped || 0,
      data.notVisited || 0,
      JSON.stringify(data.breakdown || []),
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  const key = e.parameter.key || "";
  if (key !== ADMIN_KEY) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: "Unauthorized" }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  const sheet = getSheet_();
  const rows = sheet.getDataRange().getValues();
  if (rows.length <= 1) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true, submissions: [] }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  const header = rows[0];
  const idx = {};
  header.forEach((h, i) => { idx[h] = i; });

  const submissions = rows.slice(1).map(row => {
    let breakdown = [];
    try {
      breakdown = JSON.parse(row[idx["BreakdownJSON"]] || "[]");
    } catch (err) {
      breakdown = [];
    }
    return {
      timestamp: row[idx["Timestamp"]] instanceof Date
        ? row[idx["Timestamp"]].toISOString()
        : String(row[idx["Timestamp"]]),
      name: row[idx["Name"]],
      usn: row[idx["USN"]],
      score: row[idx["Score"]],
      totalQuestions: row[idx["TotalQuestions"]],
      percentage: row[idx["Percentage"]],
      timeTaken: row[idx["TimeTakenSec"]],
      warnings: row[idx["Warnings"]],
      flagged: row[idx["Flagged"]],
      answered: row[idx["Answered"]],
      skipped: row[idx["Skipped"]],
      notVisited: row[idx["NotVisited"]],
      breakdown: breakdown,
    };
  });

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, submissions: submissions }))
    .setMimeType(ContentService.MimeType.JSON);
}
