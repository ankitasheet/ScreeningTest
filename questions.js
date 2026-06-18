const questions = [
  {
    "id": "Q-0001",
    "category": "Aptitude",
    "subtopic": "Time & Work",
    "difficulty": "easy",
    "question": "A can complete a piece of work in 24 days and B can complete the same work in 5 days. If they work together, in how many days will the work be completed?",
    "options": [
      "23",
      "14.5",
      "149/29",
      "120/29"
    ],
    "answer": "120/29"
  },
  {
    "id": "Q-0002",
    "category": "Aptitude",
    "subtopic": "Time & Work",
    "difficulty": "easy",
    "question": "A can complete a piece of work in 6 days and B can complete the same work in 5 days. If they work together, in how many days will the work be completed?",
    "options": [
      "5.5",
      "41/11",
      "5",
      "30/11"
    ],
    "answer": "30/11"
  },
  {
    "id": "Q-0003",
    "category": "Aptitude",
    "subtopic": "Time & Work",
    "difficulty": "easy",
    "question": "A can complete a piece of work in 5 days and B can complete the same work in 8 days. If they work together, in how many days will the work be completed?",
    "options": [
      "7",
      "40/13",
      "6.5",
      "53/13"
    ],
    "answer": "40/13"
  },
  {
    "id": "Q-0004",
    "category": "Aptitude",
    "subtopic": "Time & Work",
    "difficulty": "easy",
    "question": "A can complete a piece of work in 18 days and B can complete the same work in 8 days. If they work together, in how many days will the work be completed?",
    "options": [
      "17",
      "13",
      "72/13",
      "85/13"
    ],
    "answer": "72/13"
  },
  {
    "id": "Q-0005",
    "category": "Aptitude",
    "subtopic": "Time & Work",
    "difficulty": "easy",
    "question": "A can complete a piece of work in 20 days and B can complete the same work in 9 days. If they work together, in how many days will the work be completed?",
    "options": [
      "19",
      "14.5",
      "209/29",
      "180/29"
    ],
    "answer": "180/29"
  },
  {
    "id": "Q-0006",
    "category": "Aptitude",
    "subtopic": "Time & Work",
    "difficulty": "medium",
    "question": "A, B and C can complete a work individually in 18, 15 and 10 days respectively. Working together, how many days will they take to finish the work?",
    "options": [
      "14.33",
      "9/2",
      "27/4",
      "13/2"
    ],
    "answer": "9/2"
  },
  {
    "id": "Q-0007",
    "category": "Aptitude",
    "subtopic": "Time & Work",
    "difficulty": "medium",
    "question": "A, B and C can complete a work individually in 6, 24 and 30 days respectively. Working together, how many days will they take to finish the work?",
    "options": [
      "180/29",
      "20",
      "178/29",
      "120/29"
    ],
    "answer": "120/29"
  },
  {
    "id": "Q-0008",
    "category": "Aptitude",
    "subtopic": "Time & Work",
    "difficulty": "medium",
    "question": "A, B and C can complete a work individually in 30, 15 and 18 days respectively. Working together, how many days will they take to finish the work?",
    "options": [
      "59/7",
      "45/7",
      "21",
      "135/14"
    ],
    "answer": "45/7"
  },
  {
    "id": "Q-0009",
    "category": "Aptitude",
    "subtopic": "Time & Work",
    "difficulty": "medium",
    "question": "A, B and C can complete a work individually in 6, 12 and 15 days respectively. Working together, how many days will they take to finish the work?",
    "options": [
      "11",
      "90/19",
      "98/19",
      "60/19"
    ],
    "answer": "60/19"
  },
  {
    "id": "Q-0010",
    "category": "Aptitude",
    "subtopic": "Time & Work",
    "difficulty": "medium",
    "question": "A, B and C can complete a work individually in 20, 15 and 24 days respectively. Working together, how many days will they take to finish the work?",
    "options": [
      "19.67",
      "158/19",
      "120/19",
      "180/19"
    ],
    "answer": "120/19"
  },
  {
    "id": "Q-0011",
    "category": "Aptitude",
    "subtopic": "Time & Work",
    "difficulty": "medium",
    "question": "A, B and C can complete a work individually in 18, 12 and 15 days respectively. Working together, how many days will they take to finish the work?",
    "options": [
      "15",
      "270/37",
      "254/37",
      "180/37"
    ],
    "answer": "180/37"
  },
  {
    "id": "Q-0012",
    "category": "Aptitude",
    "subtopic": "Time & Work",
    "difficulty": "hard",
    "question": "A can do a work in 15 days and B can do it in 20 days. They are paid \u20b91200 for completing the work together. What is A's share of the wage (in \u20b9), based on work done?",
    "options": [
      "4800/7",
      "3600/7",
      "600",
      "2400/7"
    ],
    "answer": "4800/7"
  },
  {
    "id": "Q-0013",
    "category": "Aptitude",
    "subtopic": "Time & Work",
    "difficulty": "hard",
    "question": "A can do a work in 10 days and B can do it in 20 days. They are paid \u20b92400 for completing the work together. What is A's share of the wage (in \u20b9), based on work done?",
    "options": [
      "1600",
      "1700",
      "800",
      "1200"
    ],
    "answer": "1600"
  },
  {
    "id": "Q-0014",
    "category": "Aptitude",
    "subtopic": "Time & Work",
    "difficulty": "hard",
    "question": "A can do a work in 6 days and B can do it in 8 days. They are paid \u20b9900 for completing the work together. What is A's share of the wage (in \u20b9), based on work done?",
    "options": [
      "3600/7",
      "450",
      "1800/7",
      "2700/7"
    ],
    "answer": "3600/7"
  },
  {
    "id": "Q-0015",
    "category": "Aptitude",
    "subtopic": "Time & Work",
    "difficulty": "hard",
    "question": "A can do a work in 10 days and B can do it in 8 days. They are paid \u20b92400 for completing the work together. What is A's share of the wage (in \u20b9), based on work done?",
    "options": [
      "3200/3",
      "1600/3",
      "1200",
      "4000/3"
    ],
    "answer": "3200/3"
  },
  {
    "id": "Q-0016",
    "category": "Aptitude",
    "subtopic": "Time & Work",
    "difficulty": "hard",
    "question": "A can do a work in 8 days and B can do it in 10 days. They are paid \u20b91200 for completing the work together. What is A's share of the wage (in \u20b9), based on work done?",
    "options": [
      "2000/3",
      "600",
      "1600/3",
      "1000/3"
    ],
    "answer": "2000/3"
  },
  {
    "id": "Q-0017",
    "category": "Aptitude",
    "subtopic": "Time & Work",
    "difficulty": "hard",
    "question": "A can do a work in 20 days and B can do it in 15 days. They are paid \u20b91800 for completing the work together. What is A's share of the wage (in \u20b9), based on work done?",
    "options": [
      "7200/7",
      "5400/7",
      "2700/7",
      "900"
    ],
    "answer": "5400/7"
  },
  {
    "id": "Q-0018",
    "category": "Aptitude",
    "subtopic": "Time, Speed & Distance",
    "difficulty": "easy",
    "question": "A train travels at a uniform speed of 45 km/h for 6 hours. What distance does it cover?",
    "options": [
      "264",
      "280",
      "270",
      "315"
    ],
    "answer": "270"
  },
  {
    "id": "Q-0019",
    "category": "Aptitude",
    "subtopic": "Time, Speed & Distance",
    "difficulty": "easy",
    "question": "A train travels at a uniform speed of 90 km/h for 2 hours. What distance does it cover?",
    "options": [
      "270",
      "180",
      "190",
      "178"
    ],
    "answer": "180"
  },
  {
    "id": "Q-0020",
    "category": "Aptitude",
    "subtopic": "Time, Speed & Distance",
    "difficulty": "easy",
    "question": "A car covers a distance of 360 km at a speed of 60 km/h. How long does the journey take?",
    "options": [
      "5.14 hours",
      "5 hours",
      "7 hours",
      "6 hours"
    ],
    "answer": "6 hours"
  },
  {
    "id": "Q-0021",
    "category": "Aptitude",
    "subtopic": "Time, Speed & Distance",
    "difficulty": "easy",
    "question": "A car covers a distance of 240 km at a speed of 60 km/h. How long does the journey take?",
    "options": [
      "5 hours",
      "4 hours",
      "3.43 hours",
      "3 hours"
    ],
    "answer": "4 hours"
  },
  {
    "id": "Q-0022",
    "category": "Aptitude",
    "subtopic": "Time, Speed & Distance",
    "difficulty": "medium",
    "question": "Two cars start from the same point and travel in the same direction at 60 km/h and 40 km/h respectively. After how many hours will they be 200 km apart?",
    "options": [
      "20 hours",
      "11 hours",
      "2 hours",
      "10 hours"
    ],
    "answer": "10 hours"
  },
  {
    "id": "Q-0023",
    "category": "Aptitude",
    "subtopic": "Time, Speed & Distance",
    "difficulty": "medium",
    "question": "Two cars start from the same point and travel in the same direction at 70 km/h and 50 km/h respectively. After how many hours will they be 100 km apart?",
    "options": [
      "5/6 hours",
      "5 hours",
      "10 hours",
      "6 hours"
    ],
    "answer": "5 hours"
  },
  {
    "id": "Q-0024",
    "category": "Aptitude",
    "subtopic": "Time, Speed & Distance",
    "difficulty": "medium",
    "question": "Two cars start from the same point and travel in the same direction at 60 km/h and 50 km/h respectively. After how many hours will they be 100 km apart?",
    "options": [
      "20 hours",
      "10 hours",
      "10/11 hours",
      "11 hours"
    ],
    "answer": "10 hours"
  },
  {
    "id": "Q-0025",
    "category": "Aptitude",
    "subtopic": "Time, Speed & Distance",
    "difficulty": "medium",
    "question": "Two cars start from the same point and travel in the same direction at 50 km/h and 40 km/h respectively. After how many hours will they be 100 km apart?",
    "options": [
      "20 hours",
      "10/9 hours",
      "11 hours",
      "10 hours"
    ],
    "answer": "10 hours"
  },
  {
    "id": "Q-0026",
    "category": "Aptitude",
    "subtopic": "Time, Speed & Distance",
    "difficulty": "medium",
    "question": "Two cars start from the same point and travel in the same direction at 60 km/h and 50 km/h respectively. After how many hours will they be 250 km apart?",
    "options": [
      "50 hours",
      "25 hours",
      "26 hours",
      "25/11 hours"
    ],
    "answer": "25 hours"
  },
  {
    "id": "Q-0027",
    "category": "Aptitude",
    "subtopic": "Time, Speed & Distance",
    "difficulty": "medium",
    "question": "Two cars start from the same point and travel in the same direction at 70 km/h and 60 km/h respectively. After how many hours will they be 200 km apart?",
    "options": [
      "20 hours",
      "20/13 hours",
      "21 hours",
      "40 hours"
    ],
    "answer": "20 hours"
  },
  {
    "id": "Q-0028",
    "category": "Aptitude",
    "subtopic": "Time, Speed & Distance",
    "difficulty": "hard",
    "question": "A train of length 100 m crosses a pole in how many seconds, if its speed is 54 km/h?",
    "options": [
      "10/3 sec",
      "1.85 sec",
      "20/3 sec",
      "35/3 sec"
    ],
    "answer": "20/3 sec"
  },
  {
    "id": "Q-0029",
    "category": "Aptitude",
    "subtopic": "Time, Speed & Distance",
    "difficulty": "hard",
    "question": "A train of length 200 m crosses a pole in how many seconds, if its speed is 54 km/h?",
    "options": [
      "55/3 sec",
      "20/3 sec",
      "3.7 sec",
      "40/3 sec"
    ],
    "answer": "40/3 sec"
  },
  {
    "id": "Q-0030",
    "category": "Aptitude",
    "subtopic": "Time, Speed & Distance",
    "difficulty": "hard",
    "question": "A train of length 120 m crosses a pole in how many seconds, if its speed is 36 km/h?",
    "options": [
      "6 sec",
      "3.33 sec",
      "17 sec",
      "12 sec"
    ],
    "answer": "12 sec"
  },
  {
    "id": "Q-0031",
    "category": "Aptitude",
    "subtopic": "Time, Speed & Distance",
    "difficulty": "hard",
    "question": "A train of length 150 m crosses a pole in how many seconds, if its speed is 90 km/h?",
    "options": [
      "1.67 sec",
      "6 sec",
      "3 sec",
      "11 sec"
    ],
    "answer": "6 sec"
  },
  {
    "id": "Q-0032",
    "category": "Aptitude",
    "subtopic": "Time, Speed & Distance",
    "difficulty": "hard",
    "question": "A train of length 200 m crosses a pole in how many seconds, if its speed is 90 km/h?",
    "options": [
      "8 sec",
      "4 sec",
      "2.22 sec",
      "13 sec"
    ],
    "answer": "8 sec"
  },
  {
    "id": "Q-0033",
    "category": "Aptitude",
    "subtopic": "Percentage",
    "difficulty": "easy",
    "question": "What is 10% of 400?",
    "options": [
      "80",
      "360",
      "60",
      "40"
    ],
    "answer": "40"
  },
  {
    "id": "Q-0034",
    "category": "Aptitude",
    "subtopic": "Percentage",
    "difficulty": "easy",
    "question": "What is 30% of 600?",
    "options": [
      "360",
      "180",
      "210",
      "420"
    ],
    "answer": "180"
  },
  {
    "id": "Q-0035",
    "category": "Aptitude",
    "subtopic": "Percentage",
    "difficulty": "easy",
    "question": "What is 5% of 250?",
    "options": [
      "12.5",
      "237.5",
      "25",
      "17.5"
    ],
    "answer": "12.5"
  },
  {
    "id": "Q-0036",
    "category": "Aptitude",
    "subtopic": "Percentage",
    "difficulty": "easy",
    "question": "A number 200 is increased by 20%. What is the new value?",
    "options": [
      "220",
      "250",
      "240",
      "160"
    ],
    "answer": "240"
  },
  {
    "id": "Q-0037",
    "category": "Aptitude",
    "subtopic": "Percentage",
    "difficulty": "easy",
    "question": "A number 250 is increased by 30%. What is the new value?",
    "options": [
      "325",
      "280",
      "335",
      "175"
    ],
    "answer": "325"
  },
  {
    "id": "Q-0038",
    "category": "Aptitude",
    "subtopic": "Percentage",
    "difficulty": "medium",
    "question": "The value of a product changed from \u20b9500 to \u20b9350. Find the percentage change.",
    "options": [
      "35% decrease",
      "30% decrease",
      "30% increase",
      "15% decrease"
    ],
    "answer": "30% decrease"
  },
  {
    "id": "Q-0039",
    "category": "Aptitude",
    "subtopic": "Percentage",
    "difficulty": "medium",
    "question": "The value of a product changed from \u20b9400 to \u20b9300. Find the percentage change.",
    "options": [
      "30% decrease",
      "25% increase",
      "12.5% decrease",
      "25% decrease"
    ],
    "answer": "25% decrease"
  },
  {
    "id": "Q-0040",
    "category": "Aptitude",
    "subtopic": "Percentage",
    "difficulty": "medium",
    "question": "The value of a product changed from \u20b9800 to \u20b91500. Find the percentage change.",
    "options": [
      "87.5% decrease",
      "92.5% increase",
      "87.5% increase",
      "43.75% increase"
    ],
    "answer": "87.5% increase"
  },
  {
    "id": "Q-0041",
    "category": "Aptitude",
    "subtopic": "Percentage",
    "difficulty": "medium",
    "question": "The value of a product changed from \u20b9400 to \u20b9450. Find the percentage change.",
    "options": [
      "12.5% decrease",
      "17.5% increase",
      "12.5% increase",
      "6.25% increase"
    ],
    "answer": "12.5% increase"
  },
  {
    "id": "Q-0042",
    "category": "Aptitude",
    "subtopic": "Percentage",
    "difficulty": "medium",
    "question": "The value of a product changed from \u20b9600 to \u20b91500. Find the percentage change.",
    "options": [
      "150% increase",
      "75% increase",
      "155% increase",
      "150% decrease"
    ],
    "answer": "150% increase"
  },
  {
    "id": "Q-0043",
    "category": "Aptitude",
    "subtopic": "Percentage",
    "difficulty": "medium",
    "question": "The value of a product changed from \u20b9500 to \u20b9650. Find the percentage change.",
    "options": [
      "35% increase",
      "15% increase",
      "30% increase",
      "30% decrease"
    ],
    "answer": "30% increase"
  },
  {
    "id": "Q-0044",
    "category": "Aptitude",
    "subtopic": "Profit & Loss",
    "difficulty": "easy",
    "question": "An item is bought for \u20b91200 and sold at a loss of 10%. Find the selling price.",
    "options": [
      "1140",
      "1320",
      "1080",
      "1200"
    ],
    "answer": "1080"
  },
  {
    "id": "Q-0045",
    "category": "Aptitude",
    "subtopic": "Profit & Loss",
    "difficulty": "easy",
    "question": "An item is bought for \u20b91000 and sold at a loss of 30%. Find the selling price.",
    "options": [
      "750",
      "1300",
      "700",
      "1000"
    ],
    "answer": "700"
  },
  {
    "id": "Q-0046",
    "category": "Aptitude",
    "subtopic": "Profit & Loss",
    "difficulty": "easy",
    "question": "An item is bought for \u20b9300 and sold at a loss of 10%. Find the selling price.",
    "options": [
      "285",
      "330",
      "300",
      "270"
    ],
    "answer": "270"
  },
  {
    "id": "Q-0047",
    "category": "Aptitude",
    "subtopic": "Profit & Loss",
    "difficulty": "easy",
    "question": "An item is bought for \u20b9800 and sold at a loss of 10%. Find the selling price.",
    "options": [
      "880",
      "720",
      "800",
      "760"
    ],
    "answer": "720"
  },
  {
    "id": "Q-0048",
    "category": "Aptitude",
    "subtopic": "Profit & Loss",
    "difficulty": "easy",
    "question": "An item is bought for \u20b9250 and sold at a loss of 25%. Find the selling price.",
    "options": [
      "312.5",
      "187.5",
      "200",
      "250"
    ],
    "answer": "187.5"
  },
  {
    "id": "Q-0049",
    "category": "Aptitude",
    "subtopic": "Profit & Loss",
    "difficulty": "easy",
    "question": "An item is bought for \u20b9600 and sold at a profit of 15%. Find the selling price.",
    "options": [
      "600",
      "510",
      "690",
      "720"
    ],
    "answer": "690"
  },
  {
    "id": "Q-0050",
    "category": "Aptitude",
    "subtopic": "Profit & Loss",
    "difficulty": "medium",
    "question": "By selling an article for \u20b9920, a shopkeeper makes a profit of 20%. What was the cost price?",
    "options": [
      "796.67",
      "736",
      "920",
      "766.67"
    ],
    "answer": "766.67"
  },
  {
    "id": "Q-0051",
    "category": "Aptitude",
    "subtopic": "Profit & Loss",
    "difficulty": "medium",
    "question": "By selling an article for \u20b91150, a shopkeeper makes a profit of 25%. What was the cost price?",
    "options": [
      "1150",
      "862.5",
      "950",
      "920"
    ],
    "answer": "920"
  },
  {
    "id": "Q-0052",
    "category": "Aptitude",
    "subtopic": "Profit & Loss",
    "difficulty": "medium",
    "question": "By selling an article for \u20b91150, a shopkeeper makes a profit of 20%. What was the cost price?",
    "options": [
      "920",
      "958.33",
      "988.33",
      "1150"
    ],
    "answer": "958.33"
  },
  {
    "id": "Q-0053",
    "category": "Aptitude",
    "subtopic": "Profit & Loss",
    "difficulty": "medium",
    "question": "By selling an article for \u20b9575, a shopkeeper makes a profit of 20%. What was the cost price?",
    "options": [
      "575",
      "460",
      "479.17",
      "509.17"
    ],
    "answer": "479.17"
  },
  {
    "id": "Q-0054",
    "category": "Aptitude",
    "subtopic": "Profit & Loss",
    "difficulty": "medium",
    "question": "By selling an article for \u20b9720, a shopkeeper makes a profit of 25%. What was the cost price?",
    "options": [
      "720",
      "540",
      "606",
      "576"
    ],
    "answer": "576"
  },
  {
    "id": "Q-0055",
    "category": "Aptitude",
    "subtopic": "Profit & Loss",
    "difficulty": "medium",
    "question": "By selling an article for \u20b91380, a shopkeeper makes a profit of 15%. What was the cost price?",
    "options": [
      "1230",
      "1200",
      "1380",
      "1173"
    ],
    "answer": "1200"
  },
  {
    "id": "Q-0056",
    "category": "Aptitude",
    "subtopic": "Profit & Loss",
    "difficulty": "hard",
    "question": "A marked price of \u20b91000 is offered with successive discounts of 10% and 10%. What is the final selling price?",
    "options": [
      "800",
      "810",
      "980",
      "860"
    ],
    "answer": "810"
  },
  {
    "id": "Q-0057",
    "category": "Aptitude",
    "subtopic": "Profit & Loss",
    "difficulty": "hard",
    "question": "A marked price of \u20b91500 is offered with successive discounts of 10% and 10%. What is the final selling price?",
    "options": [
      "1265",
      "1215",
      "1200",
      "1480"
    ],
    "answer": "1215"
  },
  {
    "id": "Q-0058",
    "category": "Aptitude",
    "subtopic": "Profit & Loss",
    "difficulty": "hard",
    "question": "A marked price of \u20b91000 is offered with successive discounts of 20% and 10%. What is the final selling price?",
    "options": [
      "770",
      "700",
      "970",
      "720"
    ],
    "answer": "720"
  },
  {
    "id": "Q-0059",
    "category": "Aptitude",
    "subtopic": "Profit & Loss",
    "difficulty": "hard",
    "question": "A marked price of \u20b91200 is offered with successive discounts of 20% and 5%. What is the final selling price?",
    "options": [
      "912",
      "1175",
      "900",
      "962"
    ],
    "answer": "912"
  },
  {
    "id": "Q-0060",
    "category": "Aptitude",
    "subtopic": "Simple Interest",
    "difficulty": "easy",
    "question": "Find the simple interest on a principal of \u20b910000 at 4% per annum for 2 years.",
    "options": [
      "1000",
      "80",
      "1600",
      "800"
    ],
    "answer": "800"
  },
  {
    "id": "Q-0061",
    "category": "Aptitude",
    "subtopic": "Simple Interest",
    "difficulty": "easy",
    "question": "Find the simple interest on a principal of \u20b910000 at 4% per annum for 4 years.",
    "options": [
      "2000",
      "1600",
      "3200",
      "160"
    ],
    "answer": "1600"
  },
  {
    "id": "Q-0062",
    "category": "Aptitude",
    "subtopic": "Simple Interest",
    "difficulty": "easy",
    "question": "Find the simple interest on a principal of \u20b91000 at 6% per annum for 4 years.",
    "options": [
      "280",
      "480",
      "24",
      "240"
    ],
    "answer": "240"
  },
  {
    "id": "Q-0063",
    "category": "Aptitude",
    "subtopic": "Simple Interest",
    "difficulty": "easy",
    "question": "Find the simple interest on a principal of \u20b912000 at 5% per annum for 2 years.",
    "options": [
      "1200",
      "120",
      "2400",
      "1440"
    ],
    "answer": "1200"
  },
  {
    "id": "Q-0064",
    "category": "Aptitude",
    "subtopic": "Simple Interest",
    "difficulty": "easy",
    "question": "Find the simple interest on a principal of \u20b910000 at 12% per annum for 3 years.",
    "options": [
      "7200",
      "3900",
      "3600",
      "360"
    ],
    "answer": "3600"
  },
  {
    "id": "Q-0065",
    "category": "Aptitude",
    "subtopic": "Simple Interest",
    "difficulty": "easy",
    "question": "Find the simple interest on a principal of \u20b98000 at 4% per annum for 3 years.",
    "options": [
      "96",
      "960",
      "1200",
      "1920"
    ],
    "answer": "960"
  },
  {
    "id": "Q-0066",
    "category": "Aptitude",
    "subtopic": "Compound Interest",
    "difficulty": "medium",
    "question": "Find the compound interest on \u20b94000 at 5% per annum, compounded annually, for 2 years.",
    "options": [
      "4410",
      "400",
      "410",
      "460"
    ],
    "answer": "410"
  },
  {
    "id": "Q-0067",
    "category": "Aptitude",
    "subtopic": "Compound Interest",
    "difficulty": "medium",
    "question": "Find the compound interest on \u20b92000 at 5% per annum, compounded annually, for 3 years.",
    "options": [
      "365.25",
      "315.25",
      "2315.25",
      "300"
    ],
    "answer": "315.25"
  },
  {
    "id": "Q-0068",
    "category": "Aptitude",
    "subtopic": "Compound Interest",
    "difficulty": "medium",
    "question": "Find the compound interest on \u20b92000 at 5% per annum, compounded annually, for 2 years.",
    "options": [
      "205",
      "2205",
      "200",
      "255"
    ],
    "answer": "205"
  },
  {
    "id": "Q-0069",
    "category": "Aptitude",
    "subtopic": "Compound Interest",
    "difficulty": "medium",
    "question": "Find the compound interest on \u20b91000 at 10% per annum, compounded annually, for 3 years.",
    "options": [
      "331",
      "1331",
      "300",
      "381"
    ],
    "answer": "331"
  },
  {
    "id": "Q-0070",
    "category": "Aptitude",
    "subtopic": "Compound Interest",
    "difficulty": "medium",
    "question": "Find the compound interest on \u20b91000 at 5% per annum, compounded annually, for 3 years.",
    "options": [
      "157.63",
      "207.63",
      "150",
      "1157.63"
    ],
    "answer": "157.63"
  },
  {
    "id": "Q-0071",
    "category": "Aptitude",
    "subtopic": "Compound Interest",
    "difficulty": "medium",
    "question": "Find the compound interest on \u20b94000 at 10% per annum, compounded annually, for 3 years.",
    "options": [
      "1374",
      "5324",
      "1200",
      "1324"
    ],
    "answer": "1324"
  },
  {
    "id": "Q-0072",
    "category": "Aptitude",
    "subtopic": "Compound Interest",
    "difficulty": "hard",
    "question": "Find the difference between compound interest and simple interest on \u20b98000 for 2 years at 10% per annum.",
    "options": [
      "160",
      "1600",
      "80",
      "1680"
    ],
    "answer": "80"
  },
  {
    "id": "Q-0073",
    "category": "Aptitude",
    "subtopic": "Compound Interest",
    "difficulty": "hard",
    "question": "Find the difference between compound interest and simple interest on \u20b98000 for 2 years at 20% per annum.",
    "options": [
      "640",
      "3200",
      "3520",
      "320"
    ],
    "answer": "320"
  },
  {
    "id": "Q-0074",
    "category": "Aptitude",
    "subtopic": "Compound Interest",
    "difficulty": "hard",
    "question": "Find the difference between compound interest and simple interest on \u20b910000 for 2 years at 20% per annum.",
    "options": [
      "400",
      "4000",
      "4400",
      "800"
    ],
    "answer": "400"
  },
  {
    "id": "Q-0075",
    "category": "Aptitude",
    "subtopic": "Compound Interest",
    "difficulty": "hard",
    "question": "Find the difference between compound interest and simple interest on \u20b95000 for 2 years at 10% per annum.",
    "options": [
      "50",
      "100",
      "1000",
      "1050"
    ],
    "answer": "50"
  },
  {
    "id": "Q-0076",
    "category": "Aptitude",
    "subtopic": "Probability",
    "difficulty": "easy",
    "question": "A card is drawn at random from a well-shuffled standard deck of 52 playing cards. What is the probability that it is a black card?",
    "options": [
      "1/2",
      "26/51",
      "15/26",
      "1/4"
    ],
    "answer": "1/2"
  },
  {
    "id": "Q-0077",
    "category": "Aptitude",
    "subtopic": "Probability",
    "difficulty": "easy",
    "question": "A card is drawn at random from a well-shuffled standard deck of 52 playing cards. What is the probability that it is a jack?",
    "options": [
      "4/51",
      "2/13",
      "1/4",
      "1/13"
    ],
    "answer": "1/13"
  },
  {
    "id": "Q-0078",
    "category": "Aptitude",
    "subtopic": "Probability",
    "difficulty": "easy",
    "question": "A card is drawn at random from a well-shuffled standard deck of 52 playing cards. What is the probability that it is a queen?",
    "options": [
      "1/13",
      "1/4",
      "2/13",
      "4/51"
    ],
    "answer": "1/13"
  },
  {
    "id": "Q-0079",
    "category": "Aptitude",
    "subtopic": "Probability",
    "difficulty": "easy",
    "question": "A card is drawn at random from a well-shuffled standard deck of 52 playing cards. What is the probability that it is a red card?",
    "options": [
      "1/4",
      "1/2",
      "15/26",
      "26/51"
    ],
    "answer": "1/2"
  },
  {
    "id": "Q-0080",
    "category": "Aptitude",
    "subtopic": "Probability",
    "difficulty": "easy",
    "question": "A card is drawn at random from a well-shuffled standard deck of 52 playing cards. What is the probability that it is a king?",
    "options": [
      "1/13",
      "1/4",
      "4/51",
      "2/13"
    ],
    "answer": "1/13"
  },
  {
    "id": "Q-0081",
    "category": "Aptitude",
    "subtopic": "Probability",
    "difficulty": "easy",
    "question": "A card is drawn at random from a well-shuffled standard deck of 52 playing cards. What is the probability that it is a face card?",
    "options": [
      "3/13",
      "4/17",
      "4/13",
      "1/4"
    ],
    "answer": "3/13"
  },
  {
    "id": "Q-0082",
    "category": "Aptitude",
    "subtopic": "Probability",
    "difficulty": "medium",
    "question": "Two fair dice are rolled together. What is the probability that the sum of the numbers shown is 8?",
    "options": [
      "7/36",
      "5/6",
      "5/36",
      "1/6"
    ],
    "answer": "5/36"
  },
  {
    "id": "Q-0083",
    "category": "Aptitude",
    "subtopic": "Probability",
    "difficulty": "medium",
    "question": "Two fair dice are rolled together. What is the probability that the sum of the numbers shown is 7?",
    "options": [
      "2/9",
      "1/6",
      "11/36",
      "1"
    ],
    "answer": "1/6"
  },
  {
    "id": "Q-0084",
    "category": "Aptitude",
    "subtopic": "Probability",
    "difficulty": "medium",
    "question": "Two fair dice are rolled together. What is the probability that the sum of the numbers shown is 10?",
    "options": [
      "1/2",
      "1/12",
      "1/6",
      "5/36"
    ],
    "answer": "1/12"
  },
  {
    "id": "Q-0085",
    "category": "Aptitude",
    "subtopic": "Probability",
    "difficulty": "medium",
    "question": "Two fair dice are rolled together. What is the probability that the sum of the numbers shown is 4?",
    "options": [
      "1/12",
      "1/6",
      "1/2",
      "5/36"
    ],
    "answer": "1/12"
  },
  {
    "id": "Q-0086",
    "category": "Aptitude",
    "subtopic": "Probability",
    "difficulty": "medium",
    "question": "Two fair dice are rolled together. What is the probability that the sum of the numbers shown is 6?",
    "options": [
      "1/6",
      "5/6",
      "5/36",
      "7/36"
    ],
    "answer": "5/36"
  },
  {
    "id": "Q-0087",
    "category": "Aptitude",
    "subtopic": "Probability",
    "difficulty": "medium",
    "question": "Two fair dice are rolled together. What is the probability that the sum of the numbers shown is 9?",
    "options": [
      "1/9",
      "1/6",
      "2/3",
      "1/4"
    ],
    "answer": "1/9"
  },
  {
    "id": "Q-0088",
    "category": "Aptitude",
    "subtopic": "Probability",
    "difficulty": "hard",
    "question": "4 fair coins are tossed simultaneously. What is the probability of getting exactly 1 head(s)?",
    "options": [
      "1/4",
      "5/16",
      "3/4",
      "1/16"
    ],
    "answer": "1/4"
  },
  {
    "id": "Q-0089",
    "category": "Aptitude",
    "subtopic": "Probability",
    "difficulty": "hard",
    "question": "3 fair coins are tossed simultaneously. What is the probability of getting exactly 1 head(s)?",
    "options": [
      "3/8",
      "5/8",
      "1/8",
      "1/2"
    ],
    "answer": "3/8"
  },
  {
    "id": "Q-0090",
    "category": "Aptitude",
    "subtopic": "Probability",
    "difficulty": "hard",
    "question": "4 fair coins are tossed simultaneously. What is the probability of getting exactly 0 head(s)?",
    "options": [
      "1/32",
      "1/16",
      "1/8",
      "15/16"
    ],
    "answer": "1/16"
  },
  {
    "id": "Q-0091",
    "category": "Aptitude",
    "subtopic": "Probability",
    "difficulty": "hard",
    "question": "2 fair coins are tossed simultaneously. What is the probability of getting exactly 1 head(s)?",
    "options": [
      "3/4 ",
      "1/2",
      "1/4",
      "3/4"
    ],
    "answer": "1/2"
  },
  {
    "id": "Q-0092",
    "category": "Aptitude",
    "subtopic": "Probability",
    "difficulty": "hard",
    "question": "A bag contains 3 red balls and 4 blue balls. One ball is drawn at random. What is the probability that it is red?",
    "options": [
      "4/7",
      "3/7",
      "1/2",
      "3/8"
    ],
    "answer": "3/7"
  },
  {
    "id": "Q-0093",
    "category": "Aptitude",
    "subtopic": "Probability",
    "difficulty": "hard",
    "question": "A bag contains 5 red balls and 4 blue balls. One ball is drawn at random. What is the probability that it is red?",
    "options": [
      "4/9",
      "2/3",
      "1/2",
      "5/9"
    ],
    "answer": "5/9"
  },
  {
    "id": "Q-0094",
    "category": "Aptitude",
    "subtopic": "Probability",
    "difficulty": "hard",
    "question": "A bag contains 4 red balls and 6 blue balls. One ball is drawn at random. What is the probability that it is red?",
    "options": [
      "1/2",
      "3/5",
      "2/5",
      "4/11"
    ],
    "answer": "2/5"
  },
  {
    "id": "Q-0095",
    "category": "Aptitude",
    "subtopic": "Probability",
    "difficulty": "hard",
    "question": "A bag contains 5 red balls and 3 blue balls. One ball is drawn at random. What is the probability that it is red?",
    "options": [
      "3/8",
      "5/8",
      "3/4",
      "5/9"
    ],
    "answer": "5/8"
  },
  {
    "id": "Q-0096",
    "category": "Aptitude",
    "subtopic": "Permutation & Combination",
    "difficulty": "easy",
    "question": "In how many ways can 3 distinct objects be arranged out of 6 distinct objects (i.e. find nPr for n=6, r=3)?",
    "options": [
      "20",
      "120",
      "123",
      "30"
    ],
    "answer": "120"
  },
  {
    "id": "Q-0097",
    "category": "Aptitude",
    "subtopic": "Permutation & Combination",
    "difficulty": "easy",
    "question": "In how many ways can 2 distinct objects be arranged out of 7 distinct objects (i.e. find nPr for n=7, r=2)?",
    "options": [
      "42",
      "7",
      "21",
      "44"
    ],
    "answer": "42"
  },
  {
    "id": "Q-0098",
    "category": "Aptitude",
    "subtopic": "Permutation & Combination",
    "difficulty": "easy",
    "question": "In how many ways can 3 distinct objects be arranged out of 4 distinct objects (i.e. find nPr for n=4, r=3)?",
    "options": [
      "24",
      "12",
      "4",
      "27"
    ],
    "answer": "24"
  },
  {
    "id": "Q-0099",
    "category": "Aptitude",
    "subtopic": "Permutation & Combination",
    "difficulty": "easy",
    "question": "In how many ways can 3 distinct objects be arranged out of 5 distinct objects (i.e. find nPr for n=5, r=3)?",
    "options": [
      "63",
      "60",
      "20",
      "10"
    ],
    "answer": "60"
  },
  {
    "id": "Q-0100",
    "category": "Aptitude",
    "subtopic": "Permutation & Combination",
    "difficulty": "easy",
    "question": "In how many ways can 4 distinct objects be arranged out of 7 distinct objects (i.e. find nPr for n=7, r=4)?",
    "options": [
      "35",
      "210",
      "844",
      "840"
    ],
    "answer": "840"
  },
  {
    "id": "Q-0101",
    "category": "Aptitude",
    "subtopic": "Permutation & Combination",
    "difficulty": "easy",
    "question": "In how many ways can 2 distinct objects be arranged out of 5 distinct objects (i.e. find nPr for n=5, r=2)?",
    "options": [
      "20",
      "5",
      "10",
      "22"
    ],
    "answer": "20"
  },
  {
    "id": "Q-0102",
    "category": "Aptitude",
    "subtopic": "Permutation & Combination",
    "difficulty": "medium",
    "question": "In how many ways can a committee of 3 people be selected from a group of 6 people (find nCr for n=6, r=3)?",
    "options": [
      "20",
      "23",
      "120",
      "15"
    ],
    "answer": "20"
  },
  {
    "id": "Q-0103",
    "category": "Aptitude",
    "subtopic": "Permutation & Combination",
    "difficulty": "medium",
    "question": "In how many ways can a committee of 3 people be selected from a group of 7 people (find nCr for n=7, r=3)?",
    "options": [
      "38",
      "21",
      "35",
      "210"
    ],
    "answer": "35"
  },
  {
    "id": "Q-0104",
    "category": "Aptitude",
    "subtopic": "Permutation & Combination",
    "difficulty": "medium",
    "question": "In how many ways can a committee of 4 people be selected from a group of 5 people (find nCr for n=5, r=4)?",
    "options": [
      "120",
      "9",
      "10",
      "5"
    ],
    "answer": "5"
  },
  {
    "id": "Q-0105",
    "category": "Aptitude",
    "subtopic": "Permutation & Combination",
    "difficulty": "medium",
    "question": "In how many ways can a committee of 2 people be selected from a group of 10 people (find nCr for n=10, r=2)?",
    "options": [
      "10",
      "47",
      "90",
      "45"
    ],
    "answer": "45"
  },
  {
    "id": "Q-0106",
    "category": "Aptitude",
    "subtopic": "Permutation & Combination",
    "difficulty": "medium",
    "question": "In how many ways can a committee of 2 people be selected from a group of 6 people (find nCr for n=6, r=2)?",
    "options": [
      "6",
      "30",
      "15",
      "17"
    ],
    "answer": "15"
  },
  {
    "id": "Q-0107",
    "category": "Aptitude",
    "subtopic": "Permutation & Combination",
    "difficulty": "medium",
    "question": "In how many ways can a committee of 4 people be selected from a group of 8 people (find nCr for n=8, r=4)?",
    "options": [
      "1680",
      "74",
      "56",
      "70"
    ],
    "answer": "70"
  },
  {
    "id": "Q-0108",
    "category": "Aptitude",
    "subtopic": "Permutation & Combination",
    "difficulty": "hard",
    "question": "How many distinct arrangements (permutations) can be made using all the letters of the word 'ALLOY'?",
    "options": [
      "55",
      "60",
      "120",
      "70"
    ],
    "answer": "60"
  },
  {
    "id": "Q-0109",
    "category": "Aptitude",
    "subtopic": "Permutation & Combination",
    "difficulty": "hard",
    "question": "How many distinct arrangements (permutations) can be made using all the letters of the word 'LEVEL'?",
    "options": [
      "40",
      "30",
      "60",
      "120"
    ],
    "answer": "30"
  },
  {
    "id": "Q-0110",
    "category": "Aptitude",
    "subtopic": "Permutation & Combination",
    "difficulty": "hard",
    "question": "How many distinct arrangements (permutations) can be made using all the letters of the word 'APPLE'?",
    "options": [
      "70",
      "60",
      "120",
      "55"
    ],
    "answer": "60"
  },
  {
    "id": "Q-0111",
    "category": "Aptitude",
    "subtopic": "Statistics",
    "difficulty": "easy",
    "question": "Find the mean (average) of the following data set: [5, 16, 38, 41, 45]",
    "options": [
      "45",
      "31",
      "38",
      "29"
    ],
    "answer": "29"
  },
  {
    "id": "Q-0112",
    "category": "Aptitude",
    "subtopic": "Statistics",
    "difficulty": "easy",
    "question": "Find the mean (average) of the following data set: [3, 8, 37, 39, 44]",
    "options": [
      "26.2",
      "28.2",
      "44",
      "37"
    ],
    "answer": "26.2"
  },
  {
    "id": "Q-0113",
    "category": "Aptitude",
    "subtopic": "Statistics",
    "difficulty": "easy",
    "question": "Find the mean (average) of the following data set: [5, 24, 33, 42, 43]",
    "options": [
      "43",
      "31.4",
      "29.4",
      "33"
    ],
    "answer": "29.4"
  },
  {
    "id": "Q-0114",
    "category": "Aptitude",
    "subtopic": "Statistics",
    "difficulty": "easy",
    "question": "Find the mean (average) of the following data set: [7, 24, 28, 32, 41]",
    "options": [
      "28",
      "26.4",
      "28.4",
      "41"
    ],
    "answer": "26.4"
  },
  {
    "id": "Q-0115",
    "category": "Aptitude",
    "subtopic": "Statistics",
    "difficulty": "easy",
    "question": "Find the mean (average) of the following data set: [12, 28, 34, 42, 47]",
    "options": [
      "32.6",
      "34",
      "47",
      "34.6"
    ],
    "answer": "32.6"
  },
  {
    "id": "Q-0116",
    "category": "Aptitude",
    "subtopic": "Statistics",
    "difficulty": "easy",
    "question": "Find the mean (average) of the following data set: [18, 28, 30, 38, 47]",
    "options": [
      "30",
      "47",
      "32.2",
      "34.2"
    ],
    "answer": "32.2"
  },
  {
    "id": "Q-0117",
    "category": "Aptitude",
    "subtopic": "Statistics",
    "difficulty": "medium",
    "question": "Find the median of the following data set: [16, 18, 29, 30, 49, 57]",
    "options": [
      "30",
      "29.5",
      "29",
      "33.17"
    ],
    "answer": "29.5"
  },
  {
    "id": "Q-0118",
    "category": "Aptitude",
    "subtopic": "Statistics",
    "difficulty": "medium",
    "question": "Find the median of the following data set: [12, 14, 21, 32, 55, 59]",
    "options": [
      "26.5",
      "32.17",
      "21",
      "32"
    ],
    "answer": "26.5"
  },
  {
    "id": "Q-0119",
    "category": "Aptitude",
    "subtopic": "Statistics",
    "difficulty": "medium",
    "question": "Find the median of the following data set: [18, 36, 39, 45, 57, 59]",
    "options": [
      "39",
      "45",
      "42.33",
      "42"
    ],
    "answer": "42"
  },
  {
    "id": "Q-0120",
    "category": "Aptitude",
    "subtopic": "Statistics",
    "difficulty": "medium",
    "question": "Find the median of the following data set: [6, 16, 27, 32, 36, 47]",
    "options": [
      "29.5",
      "32",
      "27.33",
      "27"
    ],
    "answer": "29.5"
  },
  {
    "id": "Q-0121",
    "category": "Aptitude",
    "subtopic": "Statistics",
    "difficulty": "medium",
    "question": "Find the median of the following data set: [2, 29, 32, 42, 46, 51]",
    "options": [
      "33.67",
      "42",
      "32",
      "37"
    ],
    "answer": "37"
  },
  {
    "id": "Q-0122",
    "category": "Aptitude",
    "subtopic": "Statistics",
    "difficulty": "hard",
    "question": "Find the (population) standard deviation of the data set: [13, 8, 10, 19, 12, 16] (round to 2 decimal places)",
    "options": [
      "3.65",
      "4.65",
      "13",
      "13.33"
    ],
    "answer": "3.65"
  },
  {
    "id": "Q-0123",
    "category": "Aptitude",
    "subtopic": "Statistics",
    "difficulty": "hard",
    "question": "Find the (population) standard deviation of the data set: [12, 15, 9, 10, 9, 8] (round to 2 decimal places)",
    "options": [
      "10.5",
      "5.58",
      "3.36",
      "2.36"
    ],
    "answer": "2.36"
  },
  {
    "id": "Q-0124",
    "category": "Aptitude",
    "subtopic": "Statistics",
    "difficulty": "hard",
    "question": "Find the (population) standard deviation of the data set: [11, 4, 18, 6, 7, 7] (round to 2 decimal places)",
    "options": [
      "4.6",
      "5.6",
      "21.14",
      "8.83"
    ],
    "answer": "4.6"
  },
  {
    "id": "Q-0125",
    "category": "Aptitude",
    "subtopic": "Statistics",
    "difficulty": "hard",
    "question": "Find the (population) standard deviation of the data set: [4, 7, 10, 8, 12, 6] (round to 2 decimal places)",
    "options": [
      "3.61",
      "7.83",
      "2.61",
      "6.81"
    ],
    "answer": "2.61"
  },
  {
    "id": "Q-0126",
    "category": "Aptitude",
    "subtopic": "Linear Algebra",
    "difficulty": "easy",
    "question": "Find the determinant of the matrix [[5, 1], [1, 9]].",
    "options": [
      "-4",
      "44",
      "41",
      "46"
    ],
    "answer": "44"
  },
  {
    "id": "Q-0127",
    "category": "Aptitude",
    "subtopic": "Linear Algebra",
    "difficulty": "easy",
    "question": "Find the determinant of the matrix [[8, 2], [1, 5]].",
    "options": [
      "38",
      "40",
      "-2",
      "42"
    ],
    "answer": "38"
  },
  {
    "id": "Q-0128",
    "category": "Aptitude",
    "subtopic": "Linear Algebra",
    "difficulty": "easy",
    "question": "Find the determinant of the matrix [[6, 3], [1, 5]].",
    "options": [
      "-9",
      "29",
      "27",
      "33"
    ],
    "answer": "27"
  },
  {
    "id": "Q-0129",
    "category": "Aptitude",
    "subtopic": "Linear Algebra",
    "difficulty": "easy",
    "question": "Find the determinant of the matrix [[7, 8], [2, 1]].",
    "options": [
      "23",
      "6",
      "-9",
      "-7"
    ],
    "answer": "-9"
  },
  {
    "id": "Q-0130",
    "category": "Aptitude",
    "subtopic": "Linear Algebra",
    "difficulty": "medium",
    "question": "Find the dot product of vectors u = (1, 2) and v = (1, 5).",
    "options": [
      "-9",
      "11",
      "14",
      "7"
    ],
    "answer": "11"
  },
  {
    "id": "Q-0131",
    "category": "Aptitude",
    "subtopic": "Linear Algebra",
    "difficulty": "medium",
    "question": "Find the dot product of vectors u = (5, 4) and v = (4, 4).",
    "options": [
      "36",
      "39",
      "34",
      "4"
    ],
    "answer": "36"
  },
  {
    "id": "Q-0132",
    "category": "Aptitude",
    "subtopic": "Linear Algebra",
    "difficulty": "medium",
    "question": "Find the dot product of vectors u = (3, 5) and v = (5, 1).",
    "options": [
      "10",
      "23",
      "28",
      "20"
    ],
    "answer": "20"
  },
  {
    "id": "Q-0133",
    "category": "Aptitude",
    "subtopic": "Linear Algebra",
    "difficulty": "hard",
    "question": "Given matrix A = [[5,2],[3,4]] and matrix B = [[3,9],[2,3]], find the element in row 1, column 1 of the product A\u00d7B.",
    "options": [
      "23",
      "21",
      "16",
      "19"
    ],
    "answer": "19"
  },
  {
    "id": "Q-0134",
    "category": "Aptitude",
    "subtopic": "Linear Algebra",
    "difficulty": "hard",
    "question": "Given matrix A = [[8,5],[1,4]] and matrix B = [[5,5],[8,2]], find the element in row 1, column 1 of the product A\u00d7B.",
    "options": [
      "84",
      "80",
      "89",
      "50"
    ],
    "answer": "80"
  },
  {
    "id": "Q-0135",
    "category": "Aptitude",
    "subtopic": "Linear Algebra",
    "difficulty": "hard",
    "question": "Given matrix A = [[7,2],[9,4]] and matrix B = [[3,5],[3,2]], find the element in row 1, column 1 of the product A\u00d7B.",
    "options": [
      "31",
      "25",
      "24",
      "27"
    ],
    "answer": "27"
  },
  {
    "id": "Q-0136",
    "category": "Aptitude",
    "subtopic": "Pipes & Cisterns",
    "difficulty": "medium",
    "question": "Pipe A can fill a tank in 15 hours, while Pipe B can empty the same full tank in 20 hours. If both pipes are opened together on an empty tank, how long will it take to fill the tank?",
    "options": [
      "35 hours",
      "60 hours",
      "62 hours",
      "60/7 hours"
    ],
    "answer": "60 hours"
  },
  {
    "id": "Q-0137",
    "category": "Aptitude",
    "subtopic": "Pipes & Cisterns",
    "difficulty": "medium",
    "question": "Pipe A can fill a tank in 12 hours, while Pipe B can empty the same full tank in 20 hours. If both pipes are opened together on an empty tank, how long will it take to fill the tank?",
    "options": [
      "30 hours",
      "32 hours",
      "15/2 hours ",
      "15/2 hours"
    ],
    "answer": "30 hours"
  },
  {
    "id": "Q-0138",
    "category": "Aptitude",
    "subtopic": "Pipes & Cisterns",
    "difficulty": "medium",
    "question": "Pipe A can fill a tank in 10 hours, while Pipe B can empty the same full tank in 15 hours. If both pipes are opened together on an empty tank, how long will it take to fill the tank?",
    "options": [
      "6 hours",
      "30 hours",
      "32 hours",
      "25 hours"
    ],
    "answer": "30 hours"
  },
  {
    "id": "Q-0139",
    "category": "Aptitude",
    "subtopic": "Pipes & Cisterns",
    "difficulty": "medium",
    "question": "Pipe A can fill a tank in 6 hours, while Pipe B can empty the same full tank in 8 hours. If both pipes are opened together on an empty tank, how long will it take to fill the tank?",
    "options": [
      "14 hours",
      "26 hours",
      "24/7 hours",
      "24 hours"
    ],
    "answer": "24 hours"
  },
  {
    "id": "Q-0140",
    "category": "Aptitude",
    "subtopic": "Pipes & Cisterns",
    "difficulty": "medium",
    "question": "Pipe A can fill a tank in 8 hours, while Pipe B can empty the same full tank in 12 hours. If both pipes are opened together on an empty tank, how long will it take to fill the tank?",
    "options": [
      "24/5 hours",
      "24 hours",
      "26 hours",
      "20 hours"
    ],
    "answer": "24 hours"
  },
  {
    "id": "Q-0141",
    "category": "Aptitude",
    "subtopic": "Pipes & Cisterns",
    "difficulty": "medium",
    "question": "Pipe A can fill a tank in 20 hours, while Pipe B can empty the same full tank in 24 hours. If both pipes are opened together on an empty tank, how long will it take to fill the tank?",
    "options": [
      "120/11 hours",
      "122 hours",
      "120 hours",
      "44 hours"
    ],
    "answer": "120 hours"
  },
  {
    "id": "Q-0142",
    "category": "Aptitude",
    "subtopic": "Pipes & Cisterns",
    "difficulty": "medium",
    "question": "Pipe A can fill a tank in 10 hours, while Pipe B can empty the same full tank in 12 hours. If both pipes are opened together on an empty tank, how long will it take to fill the tank?",
    "options": [
      "22 hours",
      "60 hours",
      "62 hours",
      "60/11 hours"
    ],
    "answer": "60 hours"
  },
  {
    "id": "Q-0143",
    "category": "Aptitude",
    "subtopic": "Boats & Streams",
    "difficulty": "medium",
    "question": "The speed of a boat in still water is 12 km/h and the speed of the stream is 4 km/h. Find the boat's downstream speed.",
    "options": [
      "16 km/h",
      "8 km/h",
      "12 km/h",
      "20 km/h"
    ],
    "answer": "16 km/h"
  },
  {
    "id": "Q-0144",
    "category": "Aptitude",
    "subtopic": "Boats & Streams",
    "difficulty": "medium",
    "question": "The speed of a boat in still water is 14 km/h and the speed of the stream is 5 km/h. Find the boat's downstream speed.",
    "options": [
      "14 km/h",
      "24 km/h",
      "9 km/h",
      "19 km/h"
    ],
    "answer": "19 km/h"
  },
  {
    "id": "Q-0145",
    "category": "Aptitude",
    "subtopic": "Boats & Streams",
    "difficulty": "medium",
    "question": "The speed of a boat in still water is 14 km/h and the speed of the stream is 4 km/h. Find the boat's downstream speed.",
    "options": [
      "22 km/h",
      "10 km/h",
      "18 km/h",
      "14 km/h"
    ],
    "answer": "18 km/h"
  },
  {
    "id": "Q-0146",
    "category": "Aptitude",
    "subtopic": "Boats & Streams",
    "difficulty": "medium",
    "question": "The speed of a boat in still water is 18 km/h and the speed of the stream is 2 km/h. Find the boat's downstream speed.",
    "options": [
      "18 km/h",
      "20 km/h",
      "16 km/h",
      "22 km/h"
    ],
    "answer": "20 km/h"
  },
  {
    "id": "Q-0147",
    "category": "Aptitude",
    "subtopic": "Boats & Streams",
    "difficulty": "medium",
    "question": "The speed of a boat in still water is 18 km/h and the speed of the stream is 5 km/h. Find the boat's downstream speed.",
    "options": [
      "13 km/h",
      "18 km/h",
      "23 km/h",
      "28 km/h"
    ],
    "answer": "23 km/h"
  },
  {
    "id": "Q-0148",
    "category": "Aptitude",
    "subtopic": "Boats & Streams",
    "difficulty": "medium",
    "question": "The speed of a boat in still water is 14 km/h and the speed of the stream is 3 km/h. Find the boat's downstream speed.",
    "options": [
      "17 km/h",
      "20 km/h",
      "11 km/h",
      "14 km/h"
    ],
    "answer": "17 km/h"
  },
  {
    "id": "Q-0149",
    "category": "Aptitude",
    "subtopic": "Boats & Streams",
    "difficulty": "medium",
    "question": "The speed of a boat in still water is 10 km/h and the speed of the stream is 2 km/h. Find the boat's downstream speed.",
    "options": [
      "14 km/h",
      "12 km/h",
      "10 km/h",
      "8 km/h"
    ],
    "answer": "12 km/h"
  },
  {
    "id": "Q-0150",
    "category": "Aptitude",
    "subtopic": "Mixture & Alligation",
    "difficulty": "hard",
    "question": "30 litres of a solution with 80% acid concentration is mixed with 10 litres of a solution with 20% acid concentration. Find the acid concentration of the resulting mixture (round to 2 decimals).",
    "options": [
      "70%",
      "60%",
      "65%",
      "50%"
    ],
    "answer": "65%"
  },
  {
    "id": "Q-0151",
    "category": "Aptitude",
    "subtopic": "Mixture & Alligation",
    "difficulty": "hard",
    "question": "10 litres of a solution with 80% acid concentration is mixed with 20 litres of a solution with 60% acid concentration. Find the acid concentration of the resulting mixture (round to 2 decimals).",
    "options": [
      "66.67%",
      "61.67%",
      "70%",
      "71.67%"
    ],
    "answer": "66.67%"
  },
  {
    "id": "Q-0152",
    "category": "Aptitude",
    "subtopic": "Mixture & Alligation",
    "difficulty": "hard",
    "question": "40 litres of a solution with 80% acid concentration is mixed with 20 litres of a solution with 40% acid concentration. Find the acid concentration of the resulting mixture (round to 2 decimals).",
    "options": [
      "60%",
      "71.67%",
      "66.67%",
      "61.67%"
    ],
    "answer": "66.67%"
  },
  {
    "id": "Q-0153",
    "category": "Aptitude",
    "subtopic": "Mixture & Alligation",
    "difficulty": "hard",
    "question": "10 litres of a solution with 80% acid concentration is mixed with 30 litres of a solution with 60% acid concentration. Find the acid concentration of the resulting mixture (round to 2 decimals).",
    "options": [
      "60% ",
      "70%",
      "65%",
      "60%"
    ],
    "answer": "65%"
  },
  {
    "id": "Q-0154",
    "category": "Aptitude",
    "subtopic": "Mixture & Alligation",
    "difficulty": "hard",
    "question": "30 litres of a solution with 40% acid concentration is mixed with 40 litres of a solution with 80% acid concentration. Find the acid concentration of the resulting mixture (round to 2 decimals).",
    "options": [
      "62.86%",
      "67.86%",
      "60%",
      "57.86%"
    ],
    "answer": "62.86%"
  },
  {
    "id": "Q-0155",
    "category": "Aptitude",
    "subtopic": "Mixture & Alligation",
    "difficulty": "hard",
    "question": "40 litres of a solution with 60% acid concentration is mixed with 40 litres of a solution with 40% acid concentration. Find the acid concentration of the resulting mixture (round to 2 decimals).",
    "options": [
      "50%",
      "45% ",
      "45%",
      "55%"
    ],
    "answer": "50%"
  },
  {
    "id": "Q-0156",
    "category": "Aptitude",
    "subtopic": "Partnership",
    "difficulty": "hard",
    "question": "A and B invest in a business in the ratio 3:5. If the total profit is \u20b93000, what is A's share of the profit?",
    "options": [
      "1125",
      "1425",
      "1875",
      "1500"
    ],
    "answer": "1125"
  },
  {
    "id": "Q-0157",
    "category": "Aptitude",
    "subtopic": "Partnership",
    "difficulty": "hard",
    "question": "A and B invest in a business in the ratio 2:3. If the total profit is \u20b99000, what is A's share of the profit?",
    "options": [
      "5400",
      "3900",
      "3600",
      "4500"
    ],
    "answer": "3600"
  },
  {
    "id": "Q-0158",
    "category": "Aptitude",
    "subtopic": "Partnership",
    "difficulty": "hard",
    "question": "A and B invest in a business in the ratio 2:5. If the total profit is \u20b93000, what is A's share of the profit?",
    "options": [
      "15000/7",
      "6000/7",
      "8100/7",
      "1500"
    ],
    "answer": "6000/7"
  },
  {
    "id": "Q-0159",
    "category": "Aptitude",
    "subtopic": "Partnership",
    "difficulty": "hard",
    "question": "A and B invest in a business in the ratio 5:2. If the total profit is \u20b96000, what is A's share of the profit?",
    "options": [
      "30000/7",
      "3000",
      "12000/7",
      "32100/7"
    ],
    "answer": "30000/7"
  },
  {
    "id": "Q-0160",
    "category": "Aptitude",
    "subtopic": "Partnership",
    "difficulty": "hard",
    "question": "A and B invest in a business in the ratio 3:4. If the total profit is \u20b94500, what is A's share of the profit?",
    "options": [
      "18000/7",
      "2250",
      "15600/7",
      "13500/7"
    ],
    "answer": "13500/7"
  },
  {
    "id": "R-0001",
    "category": "Reasoning",
    "subtopic": "Number Series",
    "difficulty": "easy",
    "question": "Find the next number in the series: 12, 15, 18, 21, 24, ?",
    "options": [
      "24",
      "27",
      "26",
      "28"
    ],
    "answer": "27"
  },
  {
    "id": "R-0002",
    "category": "Reasoning",
    "subtopic": "Number Series",
    "difficulty": "easy",
    "question": "Find the next number in the series: 4, 10, 16, 22, 28, ?",
    "options": [
      "33",
      "35",
      "28",
      "34"
    ],
    "answer": "34"
  },
  {
    "id": "R-0003",
    "category": "Reasoning",
    "subtopic": "Number Series",
    "difficulty": "easy",
    "question": "Find the next number in the series: 18, 21, 24, 27, 30, ?",
    "options": [
      "32",
      "30",
      "34",
      "33"
    ],
    "answer": "33"
  },
  {
    "id": "R-0004",
    "category": "Reasoning",
    "subtopic": "Number Series",
    "difficulty": "easy",
    "question": "Find the next number in the series: 15, 17, 19, 21, 23, ?",
    "options": [
      "24",
      "26",
      "25",
      "23"
    ],
    "answer": "25"
  },
  {
    "id": "R-0005",
    "category": "Reasoning",
    "subtopic": "Number Series",
    "difficulty": "easy",
    "question": "Find the next number in the series: 3, 9, 15, 21, 27, ?",
    "options": [
      "27",
      "32",
      "34",
      "33"
    ],
    "answer": "33"
  },
  {
    "id": "R-0006",
    "category": "Reasoning",
    "subtopic": "Number Series",
    "difficulty": "easy",
    "question": "Find the next number in the series: 20, 26, 32, 38, 44, ?",
    "options": [
      "44",
      "49",
      "50",
      "51"
    ],
    "answer": "50"
  },
  {
    "id": "R-0007",
    "category": "Reasoning",
    "subtopic": "Number Series",
    "difficulty": "medium",
    "question": "Find the next number in the series: 2, 4, 8, 16, ?",
    "options": [
      "30",
      "32",
      "34",
      "24"
    ],
    "answer": "32"
  },
  {
    "id": "R-0008",
    "category": "Reasoning",
    "subtopic": "Number Series",
    "difficulty": "medium",
    "question": "Find the next number in the series: 2, 6, 18, 54, ?",
    "options": [
      "159",
      "72",
      "162",
      "165"
    ],
    "answer": "162"
  },
  {
    "id": "R-0009",
    "category": "Reasoning",
    "subtopic": "Number Series",
    "difficulty": "medium",
    "question": "Find the next number in the series: 4, 8, 16, 32, ?",
    "options": [
      "66",
      "62",
      "48",
      "64"
    ],
    "answer": "64"
  },
  {
    "id": "R-0010",
    "category": "Reasoning",
    "subtopic": "Number Series",
    "difficulty": "medium",
    "question": "Find the next number in the series: 3, 9, 27, 81, ?",
    "options": [
      "243",
      "108",
      "246",
      "240"
    ],
    "answer": "243"
  },
  {
    "id": "R-0011",
    "category": "Reasoning",
    "subtopic": "Number Series",
    "difficulty": "medium",
    "question": "Find the next number in the series: 5, 15, 45, 135, ?",
    "options": [
      "408",
      "402",
      "405",
      "180"
    ],
    "answer": "405"
  },
  {
    "id": "R-0012",
    "category": "Reasoning",
    "subtopic": "Number Series",
    "difficulty": "medium",
    "question": "Find the next number in the series: 9, 16, 25, 36, ? (Hint: these are perfect squares)",
    "options": [
      "49",
      "64",
      "44",
      "72"
    ],
    "answer": "49"
  },
  {
    "id": "R-0013",
    "category": "Reasoning",
    "subtopic": "Number Series",
    "difficulty": "medium",
    "question": "Find the next number in the series: 64, 125, 216, 343, ? (Hint: these are perfect cubes)",
    "options": [
      "522",
      "512",
      "507",
      "686"
    ],
    "answer": "512"
  },
  {
    "id": "R-0014",
    "category": "Reasoning",
    "subtopic": "Number Series",
    "difficulty": "medium",
    "question": "Find the next number in the series: 8, 27, 64, 125, ? (Hint: these are perfect cubes)",
    "options": [
      "250",
      "216",
      "211",
      "226"
    ],
    "answer": "216"
  },
  {
    "id": "R-0015",
    "category": "Reasoning",
    "subtopic": "Number Series",
    "difficulty": "medium",
    "question": "Find the next number in the series: 125, 216, 343, 512, ? (Hint: these are perfect cubes)",
    "options": [
      "739",
      "724",
      "1024",
      "729"
    ],
    "answer": "729"
  },
  {
    "id": "R-0016",
    "category": "Reasoning",
    "subtopic": "Number Series",
    "difficulty": "hard",
    "question": "Find the next number in the series: 9, 13, 18, 24, 32, ?",
    "options": [
      "42",
      "39",
      "41",
      "37"
    ],
    "answer": "41"
  },
  {
    "id": "R-0017",
    "category": "Reasoning",
    "subtopic": "Number Series",
    "difficulty": "hard",
    "question": "Find the next number in the series: 5, 10, 13, 17, 24, ?",
    "options": [
      "32",
      "30",
      "33",
      "28"
    ],
    "answer": "32"
  },
  {
    "id": "R-0018",
    "category": "Reasoning",
    "subtopic": "Number Series",
    "difficulty": "hard",
    "question": "Find the next number in the series: 6, 8, 14, 20, 26, ?",
    "options": [
      "31",
      "29",
      "34",
      "33"
    ],
    "answer": "33"
  },
  {
    "id": "R-0019",
    "category": "Reasoning",
    "subtopic": "Coding-Decoding",
    "difficulty": "easy",
    "question": "In a certain code, each letter is replaced by the letter 1 place(s) ahead of it in the alphabet. How is 'PENCIL' written in that code?",
    "options": [
      "RGPEKN",
      "MJDOFQ",
      "QFODJM",
      "SHQFLO"
    ],
    "answer": "QFODJM"
  },
  {
    "id": "R-0020",
    "category": "Reasoning",
    "subtopic": "Coding-Decoding",
    "difficulty": "medium",
    "question": "In a certain code, each letter is replaced by the letter 2 place(s) ahead of it in the alphabet. How is 'CASTLE' written in that code?",
    "options": [
      "DBTUMF",
      "ECUVNG",
      "FDVWOH",
      "GNVUCE"
    ],
    "answer": "ECUVNG"
  },
  {
    "id": "R-0021",
    "category": "Reasoning",
    "subtopic": "Coding-Decoding",
    "difficulty": "easy",
    "question": "In a certain code, each letter is replaced by the letter 1 place(s) ahead of it in the alphabet. How is 'ORANGE' written in that code?",
    "options": [
      "PSBOHF",
      "RUDQJH",
      "QTCPIG",
      "FHOBSP"
    ],
    "answer": "PSBOHF"
  },
  {
    "id": "R-0022",
    "category": "Reasoning",
    "subtopic": "Coding-Decoding",
    "difficulty": "easy",
    "question": "In a certain code, each letter is replaced by the letter 1 place(s) ahead of it in the alphabet. How is 'SILVER' written in that code?",
    "options": [
      "TJMWFS",
      "UKNXGT",
      "VLOYHU",
      "SFWMJT"
    ],
    "answer": "TJMWFS"
  },
  {
    "id": "R-0023",
    "category": "Reasoning",
    "subtopic": "Coding-Decoding",
    "difficulty": "medium",
    "question": "In a certain code, each letter is replaced by the letter 3 place(s) ahead of it in the alphabet. How is 'BUTTER' written in that code?",
    "options": [
      "EXWWHU",
      "DWVVGT",
      "FYXXIV",
      "UHWWXE"
    ],
    "answer": "EXWWHU"
  },
  {
    "id": "R-0024",
    "category": "Reasoning",
    "subtopic": "Coding-Decoding",
    "difficulty": "easy",
    "question": "In a certain code, each letter is replaced by the letter 1 place(s) ahead of it in the alphabet. How is 'WINDOW' written in that code?",
    "options": [
      "XPEOJX",
      "ZLQGRZ",
      "XJOEPX",
      "YKPFQY"
    ],
    "answer": "XJOEPX"
  },
  {
    "id": "R-0025",
    "category": "Reasoning",
    "subtopic": "Coding-Decoding",
    "difficulty": "easy",
    "question": "In a certain code, each letter is replaced by the letter 1 place(s) ahead of it in the alphabet. How is 'GARDEN' written in that code?",
    "options": [
      "OFESBH",
      "HBSEFO",
      "JDUGHQ",
      "ICTFGP"
    ],
    "answer": "HBSEFO"
  },
  {
    "id": "R-0026",
    "category": "Reasoning",
    "subtopic": "Coding-Decoding",
    "difficulty": "easy",
    "question": "In a certain code, each letter is replaced by the letter 1 place(s) ahead of it in the alphabet. How is 'FLOWER' written in that code?",
    "options": [
      "HNQYGT",
      "GMPXFS",
      "IORZHU",
      "SFXPMG"
    ],
    "answer": "GMPXFS"
  },
  {
    "id": "R-0027",
    "category": "Reasoning",
    "subtopic": "Coding-Decoding",
    "difficulty": "medium",
    "question": "If 'FISH' is coded as 'GJTI' (each letter shifted forward by 1 in the alphabet), how would 'BIRD' be coded using the same rule?",
    "options": [
      "DKTF",
      "AHQC",
      "CJSE",
      "ESJC"
    ],
    "answer": "CJSE"
  },
  {
    "id": "R-0028",
    "category": "Reasoning",
    "subtopic": "Coding-Decoding",
    "difficulty": "medium",
    "question": "If 'BIRD' is coded as 'CJSE' (each letter shifted forward by 1 in the alphabet), how would 'RUN' be coded using the same rule?",
    "options": [
      "SVO",
      "TWP",
      "QTM",
      "OVS"
    ],
    "answer": "SVO"
  },
  {
    "id": "R-0029",
    "category": "Reasoning",
    "subtopic": "Coding-Decoding",
    "difficulty": "medium",
    "question": "If 'SUN' is coded as 'TVO' (each letter shifted forward by 1 in the alphabet), how would 'BOOK' be coded using the same rule?",
    "options": [
      "ANNJ",
      "LPPC",
      "DQQM",
      "CPPL"
    ],
    "answer": "CPPL"
  },
  {
    "id": "R-0030",
    "category": "Reasoning",
    "subtopic": "Coding-Decoding",
    "difficulty": "medium",
    "question": "If 'DOG' is coded as 'EPH' (each letter shifted forward by 1 in the alphabet), how would 'RUN' be coded using the same rule?",
    "options": [
      "OVS",
      "SVO",
      "TWP",
      "QTM"
    ],
    "answer": "SVO"
  },
  {
    "id": "R-0031",
    "category": "Reasoning",
    "subtopic": "Coding-Decoding",
    "difficulty": "hard",
    "question": "In a certain code, every digit 'd' is replaced by the digit (d+4) mod 10. How is the number 593 written in this code?",
    "options": [
      "159",
      "048",
      "826",
      "937"
    ],
    "answer": "937"
  },
  {
    "id": "R-0032",
    "category": "Reasoning",
    "subtopic": "Coding-Decoding",
    "difficulty": "hard",
    "question": "In a certain code, every digit 'd' is replaced by the digit (d+4) mod 10. How is the number 204 written in this code?",
    "options": [
      "759",
      "537",
      "971",
      "648"
    ],
    "answer": "648"
  },
  {
    "id": "R-0033",
    "category": "Reasoning",
    "subtopic": "Coding-Decoding",
    "difficulty": "hard",
    "question": "In a certain code, every digit 'd' is replaced by the digit (d+4) mod 10. How is the number 252 written in this code?",
    "options": [
      "696",
      "929",
      "474",
      "363"
    ],
    "answer": "696"
  },
  {
    "id": "R-0034",
    "category": "Reasoning",
    "subtopic": "Calendar",
    "difficulty": "medium",
    "question": "If 03 May 2015 is a Sunday, what day of the week will it be 15 days after that date?",
    "options": [
      "Tuesday",
      "Monday",
      "Thursday",
      "Saturday"
    ],
    "answer": "Monday"
  },
  {
    "id": "R-0035",
    "category": "Reasoning",
    "subtopic": "Calendar",
    "difficulty": "hard",
    "question": "If 07 January 2016 is a Thursday, what day of the week will it be 60 days after that date?",
    "options": [
      "Thursday",
      "Monday",
      "Tuesday",
      "Wednesday"
    ],
    "answer": "Monday"
  },
  {
    "id": "R-0036",
    "category": "Reasoning",
    "subtopic": "Calendar",
    "difficulty": "medium",
    "question": "If 17 May 2022 is a Tuesday, what day of the week will it be 30 days after that date?",
    "options": [
      "Tuesday",
      "Thursday",
      "Sunday",
      "Wednesday"
    ],
    "answer": "Thursday"
  },
  {
    "id": "R-0037",
    "category": "Reasoning",
    "subtopic": "Calendar",
    "difficulty": "medium",
    "question": "If 26 April 2019 is a Friday, what day of the week will it be 15 days after that date?",
    "options": [
      "Tuesday",
      "Saturday",
      "Thursday",
      "Friday"
    ],
    "answer": "Saturday"
  },
  {
    "id": "R-0038",
    "category": "Reasoning",
    "subtopic": "Calendar",
    "difficulty": "medium",
    "question": "If 16 May 2000 is a Tuesday, what day of the week will it be 30 days after that date?",
    "options": [
      "Thursday",
      "Tuesday",
      "Saturday",
      "Wednesday"
    ],
    "answer": "Thursday"
  },
  {
    "id": "R-0039",
    "category": "Reasoning",
    "subtopic": "Calendar",
    "difficulty": "medium",
    "question": "If 03 June 2030 is a Monday, what day of the week will it be 15 days after that date?",
    "options": [
      "Wednesday",
      "Tuesday",
      "Friday",
      "Monday"
    ],
    "answer": "Tuesday"
  },
  {
    "id": "R-0040",
    "category": "Reasoning",
    "subtopic": "Calendar",
    "difficulty": "hard",
    "question": "If 20 October 2015 is a Tuesday, what day of the week will it be 100 days after that date?",
    "options": [
      "Monday",
      "Wednesday",
      "Friday",
      "Thursday"
    ],
    "answer": "Thursday"
  },
  {
    "id": "R-0041",
    "category": "Reasoning",
    "subtopic": "Calendar",
    "difficulty": "hard",
    "question": "If 26 July 2029 is a Thursday, what day of the week will it be 90 days after that date?",
    "options": [
      "Wednesday",
      "Tuesday",
      "Friday",
      "Sunday"
    ],
    "answer": "Wednesday"
  },
  {
    "id": "R-0042",
    "category": "Reasoning",
    "subtopic": "Calendar",
    "difficulty": "easy",
    "question": "What day of the week was January 1, 2003?",
    "options": [
      "Sunday",
      "Wednesday",
      "Friday",
      "Saturday"
    ],
    "answer": "Wednesday"
  },
  {
    "id": "R-0043",
    "category": "Reasoning",
    "subtopic": "Calendar",
    "difficulty": "easy",
    "question": "What day of the week was January 1, 2005?",
    "options": [
      "Saturday",
      "Monday",
      "Sunday",
      "Tuesday"
    ],
    "answer": "Saturday"
  },
  {
    "id": "R-0044",
    "category": "Reasoning",
    "subtopic": "Calendar",
    "difficulty": "easy",
    "question": "What day of the week was January 1, 2023?",
    "options": [
      "Wednesday",
      "Sunday",
      "Thursday",
      "Friday"
    ],
    "answer": "Sunday"
  },
  {
    "id": "R-0045",
    "category": "Reasoning",
    "subtopic": "Calendar",
    "difficulty": "easy",
    "question": "What day of the week was January 1, 2001?",
    "options": [
      "Tuesday",
      "Sunday",
      "Monday",
      "Wednesday"
    ],
    "answer": "Monday"
  },
  {
    "id": "R-0046",
    "category": "Reasoning",
    "subtopic": "Calendar",
    "difficulty": "easy",
    "question": "Is the year 2000 a leap year?",
    "options": [
      "Only if it starts on a Monday",
      "No, it is not a leap year",
      "Yes, it is a leap year",
      "Cannot be determined"
    ],
    "answer": "Yes, it is a leap year"
  },
  {
    "id": "R-0047",
    "category": "Reasoning",
    "subtopic": "Calendar",
    "difficulty": "easy",
    "question": "Is the year 2024 a leap year?",
    "options": [
      "Yes, it is a leap year",
      "Only if it starts on a Monday",
      "No, it is not a leap year",
      "Cannot be determined"
    ],
    "answer": "Yes, it is a leap year"
  },
  {
    "id": "R-0048",
    "category": "Reasoning",
    "subtopic": "Calendar",
    "difficulty": "easy",
    "question": "Is the year 2008 a leap year?",
    "options": [
      "Only if it starts on a Monday",
      "No, it is not a leap year",
      "Cannot be determined",
      "Yes, it is a leap year"
    ],
    "answer": "Yes, it is a leap year"
  },
  {
    "id": "R-0049",
    "category": "Reasoning",
    "subtopic": "Clock",
    "difficulty": "hard",
    "question": "What is the angle between the hour hand and the minute hand of a clock at 8:50?",
    "options": [
      "65\u00b0",
      "35\u00b0",
      "17.5\u00b0",
      "325\u00b0"
    ],
    "answer": "35\u00b0"
  },
  {
    "id": "R-0050",
    "category": "Reasoning",
    "subtopic": "Clock",
    "difficulty": "hard",
    "question": "What is the angle between the hour hand and the minute hand of a clock at 9:20?",
    "options": [
      "80\u00b0",
      "200\u00b0",
      "190\u00b0",
      "160\u00b0"
    ],
    "answer": "160\u00b0"
  },
  {
    "id": "R-0051",
    "category": "Reasoning",
    "subtopic": "Clock",
    "difficulty": "medium",
    "question": "What is the angle between the hour hand and the minute hand of a clock at 10:00?",
    "options": [
      "300\u00b0",
      "30\u00b0",
      "60\u00b0",
      "90\u00b0"
    ],
    "answer": "60\u00b0"
  },
  {
    "id": "R-0052",
    "category": "Reasoning",
    "subtopic": "Clock",
    "difficulty": "hard",
    "question": "What is the angle between the hour hand and the minute hand of a clock at 8:15?",
    "options": [
      "202.5\u00b0",
      "78.8\u00b0",
      "187.5\u00b0",
      "157.5\u00b0"
    ],
    "answer": "157.5\u00b0"
  },
  {
    "id": "R-0053",
    "category": "Reasoning",
    "subtopic": "Clock",
    "difficulty": "hard",
    "question": "What is the angle between the hour hand and the minute hand of a clock at 2:50?",
    "options": [
      "175\u00b0",
      "72.5\u00b0",
      "215\u00b0",
      "145\u00b0"
    ],
    "answer": "145\u00b0"
  },
  {
    "id": "R-0054",
    "category": "Reasoning",
    "subtopic": "Clock",
    "difficulty": "medium",
    "question": "What is the angle between the hour hand and the minute hand of a clock at 5:00?",
    "options": [
      "210\u00b0",
      "180\u00b0",
      "75\u00b0",
      "150\u00b0"
    ],
    "answer": "150\u00b0"
  },
  {
    "id": "R-0055",
    "category": "Reasoning",
    "subtopic": "Clock",
    "difficulty": "medium",
    "question": "What is the angle between the hour hand and the minute hand of a clock at 9:00?",
    "options": [
      "270\u00b0",
      "45\u00b0",
      "120\u00b0",
      "90\u00b0"
    ],
    "answer": "90\u00b0"
  },
  {
    "id": "R-0056",
    "category": "Reasoning",
    "subtopic": "Clock",
    "difficulty": "hard",
    "question": "What is the angle between the hour hand and the minute hand of a clock at 10:50?",
    "options": [
      "25\u00b0",
      "335\u00b0",
      "12.5\u00b0",
      "55\u00b0"
    ],
    "answer": "25\u00b0"
  },
  {
    "id": "R-0057",
    "category": "Reasoning",
    "subtopic": "Clock",
    "difficulty": "easy",
    "question": "What is the angle between the hour hand and minute hand at 5:00?",
    "options": [
      "30\u00b0",
      "150\u00b0",
      "100\u00b0",
      "180\u00b0"
    ],
    "answer": "150\u00b0"
  },
  {
    "id": "R-0058",
    "category": "Reasoning",
    "subtopic": "Clock",
    "difficulty": "easy",
    "question": "What is the angle between the hour hand and minute hand at 1:00?",
    "options": [
      "60\u00b0",
      "30\u00b0",
      "150\u00b0",
      "40\u00b0"
    ],
    "answer": "30\u00b0"
  },
  {
    "id": "R-0059",
    "category": "Reasoning",
    "subtopic": "Clock",
    "difficulty": "easy",
    "question": "What is the angle between the hour hand and minute hand at 4:00?",
    "options": [
      "150\u00b0",
      "70\u00b0",
      "60\u00b0",
      "120\u00b0"
    ],
    "answer": "120\u00b0"
  },
  {
    "id": "R-0060",
    "category": "Reasoning",
    "subtopic": "Clock",
    "difficulty": "easy",
    "question": "What is the angle between the hour hand and minute hand at 2:00?",
    "options": [
      "10\u00b0",
      "120\u00b0",
      "90\u00b0",
      "60\u00b0"
    ],
    "answer": "60\u00b0"
  },
  {
    "id": "R-0061",
    "category": "Reasoning",
    "subtopic": "Clock",
    "difficulty": "hard",
    "question": "How many times do the hour and minute hands of a clock overlap (coincide) in a 24-hour period?",
    "options": [
      "20",
      "24",
      "23",
      "22"
    ],
    "answer": "22"
  },
  {
    "id": "R-0062",
    "category": "Reasoning",
    "subtopic": "Clock",
    "difficulty": "hard",
    "question": "How many times do the hour and minute hands of a clock overlap (coincide) in a 12-hour period?",
    "options": [
      "11",
      "13",
      "10",
      "12"
    ],
    "answer": "11"
  },
  {
    "id": "R-0063",
    "category": "Reasoning",
    "subtopic": "Age Problems",
    "difficulty": "easy",
    "question": "The present age of a father is 4 times the age of his son. If the son is currently 10 years old, what is the father's present age?",
    "options": [
      "47",
      "35",
      "40",
      "30"
    ],
    "answer": "40"
  },
  {
    "id": "R-0064",
    "category": "Reasoning",
    "subtopic": "Age Problems",
    "difficulty": "easy",
    "question": "The present age of a father is 4 times the age of his son. If the son is currently 14 years old, what is the father's present age?",
    "options": [
      "51",
      "46",
      "56",
      "63"
    ],
    "answer": "56"
  },
  {
    "id": "R-0065",
    "category": "Reasoning",
    "subtopic": "Age Problems",
    "difficulty": "easy",
    "question": "The present age of a father is 4 times the age of his son. If the son is currently 16 years old, what is the father's present age?",
    "options": [
      "59",
      "74",
      "64",
      "54"
    ],
    "answer": "64"
  },
  {
    "id": "R-0066",
    "category": "Reasoning",
    "subtopic": "Age Problems",
    "difficulty": "easy",
    "question": "The present age of a father is 3 times the age of his son. If the son is currently 13 years old, what is the father's present age?",
    "options": [
      "29",
      "34",
      "49",
      "39"
    ],
    "answer": "39"
  },
  {
    "id": "R-0067",
    "category": "Reasoning",
    "subtopic": "Age Problems",
    "difficulty": "easy",
    "question": "The present age of a father is 5 times the age of his son. If the son is currently 15 years old, what is the father's present age?",
    "options": [
      "75",
      "70",
      "80",
      "65"
    ],
    "answer": "75"
  },
  {
    "id": "R-0068",
    "category": "Reasoning",
    "subtopic": "Age Problems",
    "difficulty": "easy",
    "question": "The present age of a father is 3 times the age of his son. If the son is currently 16 years old, what is the father's present age?",
    "options": [
      "38",
      "43",
      "48",
      "54"
    ],
    "answer": "48"
  },
  {
    "id": "R-0069",
    "category": "Reasoning",
    "subtopic": "Age Problems",
    "difficulty": "easy",
    "question": "The present age of a father is 4 times the age of his son. If the son is currently 12 years old, what is the father's present age?",
    "options": [
      "43",
      "48",
      "38",
      "53"
    ],
    "answer": "48"
  },
  {
    "id": "R-0070",
    "category": "Reasoning",
    "subtopic": "Age Problems",
    "difficulty": "easy",
    "question": "The present age of a father is 5 times the age of his son. If the son is currently 14 years old, what is the father's present age?",
    "options": [
      "65",
      "79",
      "70",
      "60"
    ],
    "answer": "70"
  },
  {
    "id": "R-0071",
    "category": "Reasoning",
    "subtopic": "Age Problems",
    "difficulty": "hard",
    "question": "A father is 3 times as old as his son, who is now 13 years old. What will be the ratio of father's age to son's age after 6 years (rounded to 2 decimals if not whole)?",
    "options": [
      "2.87",
      "3",
      "1.87",
      "2.37"
    ],
    "answer": "2.37"
  },
  {
    "id": "R-0072",
    "category": "Reasoning",
    "subtopic": "Age Problems",
    "difficulty": "hard",
    "question": "A father is 3 times as old as his son, who is now 14 years old. What will be the ratio of father's age to son's age after 6 years (rounded to 2 decimals if not whole)?",
    "options": [
      "2.90",
      "3",
      "1.90",
      "2.40"
    ],
    "answer": "2.40"
  },
  {
    "id": "R-0073",
    "category": "Reasoning",
    "subtopic": "Age Problems",
    "difficulty": "hard",
    "question": "A father is 3 times as old as his son, who is now 12 years old. What will be the ratio of father's age to son's age after 8 years (rounded to 2 decimals if not whole)?",
    "options": [
      "1.70",
      "3",
      "2.20",
      "2.70"
    ],
    "answer": "2.20"
  },
  {
    "id": "R-0074",
    "category": "Reasoning",
    "subtopic": "Age Problems",
    "difficulty": "hard",
    "question": "A father is 4 times as old as his son, who is now 9 years old. What will be the ratio of father's age to son's age after 4 years (rounded to 2 decimals if not whole)?",
    "options": [
      "3.08",
      "3.58",
      "4",
      "2.58"
    ],
    "answer": "3.08"
  },
  {
    "id": "R-0075",
    "category": "Reasoning",
    "subtopic": "Age Problems",
    "difficulty": "hard",
    "question": "A father is 3 times as old as his son, who is now 12 years old. What will be the ratio of father's age to son's age after 4 years (rounded to 2 decimals if not whole)?",
    "options": [
      "3.50",
      "2",
      "2.50",
      "3"
    ],
    "answer": "2.50"
  },
  {
    "id": "R-0076",
    "category": "Reasoning",
    "subtopic": "Age Problems",
    "difficulty": "hard",
    "question": "A father is 3 times as old as his son, who is now 12 years old. What will be the ratio of father's age to son's age after 5 years (rounded to 2 decimals if not whole)?",
    "options": [
      "2.41",
      "1.91",
      "3",
      "2.91"
    ],
    "answer": "2.41"
  },
  {
    "id": "R-0077",
    "category": "Reasoning",
    "subtopic": "Age Problems",
    "difficulty": "hard",
    "question": "A father is 4 times as old as his son, who is now 11 years old. What will be the ratio of father's age to son's age after 7 years (rounded to 2 decimals if not whole)?",
    "options": [
      "2.83",
      "2.33",
      "4",
      "3.33"
    ],
    "answer": "2.83"
  },
  {
    "id": "R-0078",
    "category": "Reasoning",
    "subtopic": "Direction Sense",
    "difficulty": "medium",
    "question": "Sneha is facing North. Sneha turns left, then turns left. Which direction is Sneha facing now?",
    "options": [
      "North",
      "East",
      "South",
      "West"
    ],
    "answer": "South"
  },
  {
    "id": "R-0079",
    "category": "Reasoning",
    "subtopic": "Direction Sense",
    "difficulty": "medium",
    "question": "Rekha is facing West. Rekha turns right, then turns left. Which direction is Rekha facing now?",
    "options": [
      "West",
      "North",
      "South",
      "East"
    ],
    "answer": "West"
  },
  {
    "id": "R-0080",
    "category": "Reasoning",
    "subtopic": "Direction Sense",
    "difficulty": "medium",
    "question": "Kavita walks 8 km east then walks 4 km south then walks 4 km west from her starting point. In which direction is Kavita now with respect to the starting point?",
    "options": [
      "South-East",
      "North",
      "South-West",
      "North-West"
    ],
    "answer": "South-East"
  },
  {
    "id": "R-0081",
    "category": "Reasoning",
    "subtopic": "Direction Sense",
    "difficulty": "medium",
    "question": "Divya is facing East. Divya turns right, then turns left. Which direction is Divya facing now?",
    "options": [
      "West",
      "East",
      "North",
      "South"
    ],
    "answer": "East"
  },
  {
    "id": "R-0082",
    "category": "Reasoning",
    "subtopic": "Direction Sense",
    "difficulty": "easy",
    "question": "Naveen walks 12 km west then walks 12 km north from her starting point. In which direction is Naveen now with respect to the starting point?",
    "options": [
      "North-West",
      "South-West",
      "South",
      "East"
    ],
    "answer": "North-West"
  },
  {
    "id": "R-0083",
    "category": "Reasoning",
    "subtopic": "Direction Sense",
    "difficulty": "medium",
    "question": "Rohan walks 10 km west then walks 7 km north then walks 3 km west from her starting point. In which direction is Rohan now with respect to the starting point?",
    "options": [
      "North-West",
      "East",
      "South",
      "North"
    ],
    "answer": "North-West"
  },
  {
    "id": "R-0084",
    "category": "Reasoning",
    "subtopic": "Direction Sense",
    "difficulty": "medium",
    "question": "Suresh walks 10 km west then walks 7 km north then walks 12 km west from her starting point. In which direction is Suresh now with respect to the starting point?",
    "options": [
      "North-West",
      "West",
      "North",
      "South"
    ],
    "answer": "North-West"
  },
  {
    "id": "R-0085",
    "category": "Reasoning",
    "subtopic": "Direction Sense",
    "difficulty": "hard",
    "question": "Suresh starts from point P, walks 2 km south then 4 km south then 8 km west. What is the shortest distance between Suresh's final position and point P?",
    "options": [
      "8 km",
      "11 km",
      "10 km",
      "12 km"
    ],
    "answer": "10 km"
  },
  {
    "id": "R-0086",
    "category": "Reasoning",
    "subtopic": "Direction Sense",
    "difficulty": "hard",
    "question": "Anil starts from point P, walks 2 km south then 1 km south then 4 km west. What is the shortest distance between Anil's final position and point P?",
    "options": [
      "6 km",
      "3 km",
      "2 km",
      "5 km"
    ],
    "answer": "5 km"
  },
  {
    "id": "R-0087",
    "category": "Reasoning",
    "subtopic": "Direction Sense",
    "difficulty": "hard",
    "question": "Priya starts from point P, walks 3 km south then 2 km south then 12 km west. What is the shortest distance between Priya's final position and point P?",
    "options": [
      "12 km",
      "14 km",
      "13 km",
      "10 km"
    ],
    "answer": "13 km"
  },
  {
    "id": "R-0088",
    "category": "Reasoning",
    "subtopic": "Direction Sense",
    "difficulty": "hard",
    "question": "Rohan starts from point P, walks 2 km south then 16 km west then 10 km south. What is the shortest distance between Rohan's final position and point P?",
    "options": [
      "18 km",
      "20 km",
      "23 km",
      "22 km"
    ],
    "answer": "20 km"
  },
  {
    "id": "R-0089",
    "category": "Reasoning",
    "subtopic": "Direction Sense",
    "difficulty": "hard",
    "question": "Arjun is facing North. Arjun turns right, then turns left, then turns left. Which direction is Arjun facing now?",
    "options": [
      "East",
      "West",
      "North",
      "South"
    ],
    "answer": "West"
  },
  {
    "id": "R-0090",
    "category": "Reasoning",
    "subtopic": "Direction Sense",
    "difficulty": "hard",
    "question": "Rohan is facing West. Rohan turns left, then turns left, then turns left. Which direction is Rohan facing now?",
    "options": [
      "North",
      "East",
      "South",
      "West"
    ],
    "answer": "North"
  },
  {
    "id": "R-0091",
    "category": "Reasoning",
    "subtopic": "Direction Sense",
    "difficulty": "easy",
    "question": "Sunita is facing West. Sunita turns right. Which direction is Sunita facing now?",
    "options": [
      "North",
      "South",
      "West",
      "East"
    ],
    "answer": "North"
  },
  {
    "id": "R-0092",
    "category": "Reasoning",
    "subtopic": "Direction Sense",
    "difficulty": "medium",
    "question": "Vikram is facing East. Vikram turns left, then turns left. Which direction is Vikram facing now?",
    "options": [
      "East",
      "South",
      "West",
      "North"
    ],
    "answer": "West"
  },
  {
    "id": "R-0093",
    "category": "Reasoning",
    "subtopic": "Blood Relations",
    "difficulty": "easy",
    "question": "Sameer and Meena are the children of Naveen. How is Meena related to Sameer?",
    "options": [
      "Sister",
      "Nephew",
      "Daughter",
      "Brother"
    ],
    "answer": "Sister"
  },
  {
    "id": "R-0094",
    "category": "Reasoning",
    "subtopic": "Blood Relations",
    "difficulty": "easy",
    "question": "Anil is the husband of Asha. Asha is the mother of Lata. How is Anil related to Lata?",
    "options": [
      "Nephew",
      "Father",
      "Brother-in-law",
      "Sister-in-law"
    ],
    "answer": "Father"
  },
  {
    "id": "R-0095",
    "category": "Reasoning",
    "subtopic": "Blood Relations",
    "difficulty": "easy",
    "question": "Priya is the wife of Karan. Karan is the father of Anita. How is Priya related to Anita?",
    "options": [
      "Grandfather",
      "Nephew",
      "Aunt",
      "Mother"
    ],
    "answer": "Mother"
  },
  {
    "id": "R-0096",
    "category": "Reasoning",
    "subtopic": "Blood Relations",
    "difficulty": "medium",
    "question": "Vijay is the father of Sameer. Sameer is the father of Nisha. How is Vijay related to Nisha?",
    "options": [
      "Mother",
      "Mother-in-law",
      "Sister-in-law",
      "Grandfather"
    ],
    "answer": "Grandfather"
  },
  {
    "id": "R-0097",
    "category": "Reasoning",
    "subtopic": "Blood Relations",
    "difficulty": "medium",
    "question": "Meena is the mother of Rekha. Rekha is the mother of Ajay. How is Meena related to Ajay?",
    "options": [
      "Husband",
      "Wife",
      "Grandmother",
      "Aunt"
    ],
    "answer": "Grandmother"
  },
  {
    "id": "R-0098",
    "category": "Reasoning",
    "subtopic": "Blood Relations",
    "difficulty": "medium",
    "question": "Ravi is the father of Mahesh. Rohan is the brother of Ravi. How is Rohan related to Mahesh?",
    "options": [
      "Husband",
      "Grandfather",
      "Mother",
      "Uncle"
    ],
    "answer": "Uncle"
  },
  {
    "id": "R-0099",
    "category": "Reasoning",
    "subtopic": "Blood Relations",
    "difficulty": "medium",
    "question": "Lata is the mother of Geeta. Rekha is the sister of Lata. How is Rekha related to Geeta?",
    "options": [
      "Aunt",
      "Brother",
      "Father-in-law",
      "Nephew"
    ],
    "answer": "Aunt"
  },
  {
    "id": "R-0100",
    "category": "Reasoning",
    "subtopic": "Blood Relations",
    "difficulty": "medium",
    "question": "Lata is the sister of Pooja. Anil is the son of Pooja. How is Anil related to Lata?",
    "options": [
      "Daughter",
      "Brother",
      "Nephew",
      "Aunt"
    ],
    "answer": "Nephew"
  },
  {
    "id": "R-0101",
    "category": "Reasoning",
    "subtopic": "Blood Relations",
    "difficulty": "medium",
    "question": "Rakesh is the brother of Arjun. Rekha is the daughter of Arjun. How is Rekha related to Rakesh?",
    "options": [
      "Cousin",
      "Brother",
      "Niece",
      "Sister"
    ],
    "answer": "Niece"
  },
  {
    "id": "R-0102",
    "category": "Reasoning",
    "subtopic": "Blood Relations",
    "difficulty": "medium",
    "question": "Sunita is the wife of Rakesh. Karan is the father of Rakesh. How is Karan related to Sunita?",
    "options": [
      "Nephew",
      "Sister",
      "Father-in-law",
      "Grandfather"
    ],
    "answer": "Father-in-law"
  },
  {
    "id": "R-0103",
    "category": "Reasoning",
    "subtopic": "Blood Relations",
    "difficulty": "medium",
    "question": "Rakesh is the husband of Anita. Rekha is the mother of Anita. How is Rekha related to Rakesh?",
    "options": [
      "Mother-in-law",
      "Niece",
      "Mother",
      "Cousin"
    ],
    "answer": "Mother-in-law"
  },
  {
    "id": "R-0104",
    "category": "Reasoning",
    "subtopic": "Blood Relations",
    "difficulty": "hard",
    "question": "Ravi and Vikram are brothers. Ravi has a child named Pooja. Vikram has a child named Anita. How is Anita related to Pooja?",
    "options": [
      "Cousin",
      "Nephew",
      "Aunt",
      "Brother"
    ],
    "answer": "Cousin"
  },
  {
    "id": "R-0105",
    "category": "Reasoning",
    "subtopic": "Blood Relations",
    "difficulty": "hard",
    "question": "Anil is the brother of Rekha. Rekha is married to Deepak. How is Anil related to Deepak?",
    "options": [
      "Brother-in-law",
      "Grandfather",
      "Father",
      "Niece"
    ],
    "answer": "Brother-in-law"
  },
  {
    "id": "R-0106",
    "category": "Reasoning",
    "subtopic": "Blood Relations",
    "difficulty": "hard",
    "question": "Vikram is the son of Deepak. Deepak is the brother of Divya. Divya is the mother of Kavita. How is Vikram related to Kavita?",
    "options": [
      "Wife",
      "Father",
      "Cousin",
      "Niece"
    ],
    "answer": "Cousin"
  },
  {
    "id": "R-0107",
    "category": "Reasoning",
    "subtopic": "Blood Relations",
    "difficulty": "hard",
    "question": "Pointing to a man, Lata said, \"His mother is the only daughter of my mother.\" How is Lata related to Manoj?",
    "options": [
      "Son",
      "Uncle",
      "Sister",
      "Mother"
    ],
    "answer": "Mother"
  },
  {
    "id": "R-0108",
    "category": "Reasoning",
    "subtopic": "Analogies",
    "difficulty": "easy",
    "question": "Pen is related to Write in the same way as Knife is related to ?",
    "options": [
      "Cut",
      "Cook",
      "Sharpen",
      "Blade"
    ],
    "answer": "Cut"
  },
  {
    "id": "R-0109",
    "category": "Reasoning",
    "subtopic": "Analogies",
    "difficulty": "easy",
    "question": "Doctor is related to Hospital in the same way as Teacher is related to ?",
    "options": [
      "Education",
      "Books",
      "Class",
      "School"
    ],
    "answer": "School"
  },
  {
    "id": "R-0110",
    "category": "Reasoning",
    "subtopic": "Analogies",
    "difficulty": "easy",
    "question": "Bird is related to Nest in the same way as Bee is related to ?",
    "options": [
      "Hive",
      "Sting",
      "Wings",
      "Honey"
    ],
    "answer": "Hive"
  },
  {
    "id": "R-0111",
    "category": "Reasoning",
    "subtopic": "Analogies",
    "difficulty": "easy",
    "question": "Happy is related to Sad in the same way as Tall is related to ?",
    "options": [
      "High",
      "Wide",
      "Big",
      "Short"
    ],
    "answer": "Short"
  },
  {
    "id": "R-0112",
    "category": "Reasoning",
    "subtopic": "Analogies",
    "difficulty": "medium",
    "question": "Lion is related to Pride in the same way as Wolf is related to ?",
    "options": [
      "Den",
      "Pack",
      "Group",
      "Family"
    ],
    "answer": "Pack"
  },
  {
    "id": "R-0113",
    "category": "Reasoning",
    "subtopic": "Analogies",
    "difficulty": "easy",
    "question": "Cow is related to Calf in the same way as Dog is related to ?",
    "options": [
      "Cub",
      "Kitten",
      "Puppy",
      "Pup"
    ],
    "answer": "Puppy"
  },
  {
    "id": "R-0114",
    "category": "Reasoning",
    "subtopic": "Analogies",
    "difficulty": "medium",
    "question": "Wheel is related to Car in the same way as Page is related to ?",
    "options": [
      "Cover",
      "Book",
      "Chapter",
      "Author"
    ],
    "answer": "Book"
  },
  {
    "id": "R-0115",
    "category": "Reasoning",
    "subtopic": "Analogies",
    "difficulty": "medium",
    "question": "Author is related to Book in the same way as Sculptor is related to ?",
    "options": [
      "Statue",
      "Museum",
      "Chisel",
      "Stone"
    ],
    "answer": "Statue"
  },
  {
    "id": "R-0116",
    "category": "Reasoning",
    "subtopic": "Analogies",
    "difficulty": "medium",
    "question": "Thermometer is related to Temperature in the same way as Speedometer is related to ?",
    "options": [
      "Time",
      "Speed",
      "Distance",
      "Engine"
    ],
    "answer": "Speed"
  },
  {
    "id": "R-0117",
    "category": "Reasoning",
    "subtopic": "Analogies",
    "difficulty": "easy",
    "question": "Paris is related to France in the same way as Tokyo is related to ?",
    "options": [
      "Japan",
      "Asia",
      "Korea",
      "China"
    ],
    "answer": "Japan"
  },
  {
    "id": "R-0118",
    "category": "Reasoning",
    "subtopic": "Analogies",
    "difficulty": "medium",
    "question": "Carpenter is related to Saw in the same way as Painter is related to ?",
    "options": [
      "Brush",
      "Easel",
      "Canvas",
      "Color"
    ],
    "answer": "Brush"
  },
  {
    "id": "R-0119",
    "category": "Reasoning",
    "subtopic": "Analogies",
    "difficulty": "hard",
    "question": "Grain is related to Sand in the same way as Drop is related to ?",
    "options": [
      "Wet",
      "Rain",
      "Water",
      "Ocean"
    ],
    "answer": "Water"
  },
  {
    "id": "R-0120",
    "category": "Reasoning",
    "subtopic": "Analogies",
    "difficulty": "hard",
    "question": "Tributary is related to River in the same way as Branch is related to ?",
    "options": [
      "Tree",
      "Trunk",
      "Root",
      "Leaf"
    ],
    "answer": "Tree"
  },
  {
    "id": "R-0121",
    "category": "Reasoning",
    "subtopic": "Analogies",
    "difficulty": "hard",
    "question": "Antonym is related to Opposite in the same way as Synonym is related to ?",
    "options": [
      "Word",
      "Equal",
      "Different",
      "Similar"
    ],
    "answer": "Similar"
  },
  {
    "id": "R-0122",
    "category": "Reasoning",
    "subtopic": "Analogies",
    "difficulty": "medium",
    "question": "Soldier is related to Army in the same way as Sailor is related to ?",
    "options": [
      "Ship",
      "Fleet",
      "Sea",
      "Navy"
    ],
    "answer": "Navy"
  },
  {
    "id": "R-0123",
    "category": "Reasoning",
    "subtopic": "Symbol Substitution",
    "difficulty": "easy",
    "question": "If '+' means 'minus', '-' means 'plus', '\u00d7' means 'multiplied by', '\u00f7' means 'divided by', then what is the value of: 4 - 11 - 10 ?",
    "options": [
      "28",
      "25",
      "30",
      "24"
    ],
    "answer": "25"
  },
  {
    "id": "R-0124",
    "category": "Reasoning",
    "subtopic": "Symbol Substitution",
    "difficulty": "easy",
    "question": "If '+' means 'plus', '-' means 'multiplied by', '\u00d7' means 'divided by', '\u00f7' means 'minus', then what is the value of: 4 - 9 + 4 ?",
    "options": [
      "43",
      "39",
      "40",
      "37"
    ],
    "answer": "40"
  },
  {
    "id": "R-0125",
    "category": "Reasoning",
    "subtopic": "Symbol Substitution",
    "difficulty": "medium",
    "question": "If '+' means 'multiplied by', '-' means 'minus', '\u00d7' means 'divided by', '\u00f7' means 'plus', then what is the value of: 11 - 6 - 7 + 2 ?",
    "options": [
      "-14",
      "-12",
      "-9",
      "-10"
    ],
    "answer": "-9"
  },
  {
    "id": "R-0126",
    "category": "Reasoning",
    "subtopic": "Symbol Substitution",
    "difficulty": "medium",
    "question": "If '+' means 'plus', '-' means 'divided by', '\u00d7' means 'multiplied by', '\u00f7' means 'minus', then what is the value of: 8 \u00d7 9 \u00f7 7 \u00f7 5 ?",
    "options": [
      "61",
      "59",
      "60",
      "57"
    ],
    "answer": "60"
  },
  {
    "id": "R-0127",
    "category": "Reasoning",
    "subtopic": "Symbol Substitution",
    "difficulty": "medium",
    "question": "If '+' means 'divided by', '-' means 'plus', '\u00d7' means 'minus', '\u00f7' means 'multiplied by', then what is the value of: 9 \u00d7 10 \u00f7 9 - 6 ?",
    "options": [
      "-73",
      "-75",
      "-77",
      "-76"
    ],
    "answer": "-75"
  },
  {
    "id": "R-0128",
    "category": "Reasoning",
    "subtopic": "Symbol Substitution",
    "difficulty": "medium",
    "question": "If '+' means 'divided by', '-' means 'plus', '\u00d7' means 'minus', '\u00f7' means 'multiplied by', then what is the value of: 9 + 9 \u00d7 7 \u00d7 10 ?",
    "options": [
      "-14",
      "-18",
      "-19",
      "-16"
    ],
    "answer": "-16"
  },
  {
    "id": "R-0129",
    "category": "Reasoning",
    "subtopic": "Symbol Substitution",
    "difficulty": "medium",
    "question": "If '+' means 'divided by', '-' means 'plus', '\u00d7' means 'minus', '\u00f7' means 'multiplied by', then what is the value of: 7 - 9 \u00d7 5 \u00f7 8 ?",
    "options": [
      "-23",
      "-27",
      "-21",
      "-24"
    ],
    "answer": "-24"
  },
  {
    "id": "R-0130",
    "category": "Reasoning",
    "subtopic": "Symbol Substitution",
    "difficulty": "hard",
    "question": "If '+' means 'multiplied by', '-' means 'minus', '\u00d7' means 'divided by', '\u00f7' means 'plus', then what is the value of: 8 - 10 - 3 - 9 - 12 ?",
    "options": [
      "-31",
      "-29",
      "-26",
      "-21"
    ],
    "answer": "-26"
  },
  {
    "id": "R-0131",
    "category": "Reasoning",
    "subtopic": "Symbol Substitution",
    "difficulty": "hard",
    "question": "If '+' means 'minus', '-' means 'divided by', '\u00d7' means 'plus', '\u00f7' means 'multiplied by', then what is the value of: 11 \u00d7 10 - 5 \u00f7 9 + 4 ?",
    "options": [
      "25",
      "27",
      "28",
      "30"
    ],
    "answer": "25"
  },
  {
    "id": "R-0132",
    "category": "Reasoning",
    "subtopic": "Symbol Substitution",
    "difficulty": "hard",
    "question": "If '+' means 'multiplied by', '-' means 'minus', '\u00d7' means 'divided by', '\u00f7' means 'plus', then what is the value of: 4 \u00f7 9 - 11 \u00f7 3 + 5 ?",
    "options": [
      "15",
      "19",
      "17",
      "18"
    ],
    "answer": "17"
  },
  {
    "id": "R-0133",
    "category": "Reasoning",
    "subtopic": "Seating Arrangement",
    "difficulty": "hard",
    "question": "In a row of 15 people, there are 3 people between Vijay and Asha. If Vijay is at position 2 from the left and Asha is to the right of Vijay, what is Asha's position from the left?",
    "options": [
      "6",
      "8",
      "5",
      "4"
    ],
    "answer": "6"
  },
  {
    "id": "R-0134",
    "category": "Reasoning",
    "subtopic": "Seating Arrangement",
    "difficulty": "easy",
    "question": "In a row of students, Kavita is 5th from the left end and 25th from the right end. How many students are there in the row?",
    "options": [
      "29",
      "30",
      "27",
      "28"
    ],
    "answer": "29"
  },
  {
    "id": "R-0135",
    "category": "Reasoning",
    "subtopic": "Seating Arrangement",
    "difficulty": "medium",
    "question": "Divya is standing 14th from the left in a row of 35 people. What is Divya's position counted from the right?",
    "options": [
      "24",
      "23",
      "22",
      "25"
    ],
    "answer": "22"
  },
  {
    "id": "R-0136",
    "category": "Reasoning",
    "subtopic": "Seating Arrangement",
    "difficulty": "medium",
    "question": "Naveen is standing 30th from the left in a row of 42 people. What is Naveen's position counted from the right?",
    "options": [
      "16",
      "15",
      "13",
      "11"
    ],
    "answer": "13"
  },
  {
    "id": "R-0137",
    "category": "Reasoning",
    "subtopic": "Seating Arrangement",
    "difficulty": "medium",
    "question": "Meena is standing 22nd from the left in a row of 40 people. What is Meena's position counted from the right?",
    "options": [
      "19",
      "21",
      "17",
      "18"
    ],
    "answer": "19"
  },
  {
    "id": "R-0138",
    "category": "Reasoning",
    "subtopic": "Seating Arrangement",
    "difficulty": "medium",
    "question": "Anil and Kavita are sitting in a circle of 8 people. Anil is 2 seats to the right (clockwise) of Kavita. How many seats apart are they if counted to the left (anticlockwise) from Kavita to Anil?",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "answer": "6"
  },
  {
    "id": "R-0139",
    "category": "Reasoning",
    "subtopic": "Seating Arrangement",
    "difficulty": "medium",
    "question": "Manoj and Lata are sitting in a circle of 8 people. Manoj is 3 seats to the right (clockwise) of Lata. How many seats apart are they if counted to the left (anticlockwise) from Lata to Manoj?",
    "options": [
      "4",
      "5",
      "6",
      "3"
    ],
    "answer": "5"
  },
  {
    "id": "R-0140",
    "category": "Reasoning",
    "subtopic": "Seating Arrangement",
    "difficulty": "hard",
    "question": "In a row of 19 people, there are 4 people between Anil and Kavita. If Anil is at position 17 from the left, what could be Kavita's farthest possible position from the left?",
    "options": [
      "12",
      "10",
      "13",
      "11"
    ],
    "answer": "12"
  },
  {
    "id": "R-0141",
    "category": "Reasoning",
    "subtopic": "Seating Arrangement",
    "difficulty": "hard",
    "question": "In a row of 18 people, there are 2 people between Manoj and Rekha. If Manoj is at position 8 from the left, what could be Rekha's farthest possible position from the left?",
    "options": [
      "11",
      "10",
      "12",
      "9"
    ],
    "answer": "11"
  },
  {
    "id": "R-0142",
    "category": "Reasoning",
    "subtopic": "Seating Arrangement",
    "difficulty": "easy",
    "question": "In a row of students, Sameer is 3rd from the left end and 24th from the right end. How many students are there in the row?",
    "options": [
      "27",
      "24",
      "26",
      "28"
    ],
    "answer": "26"
  },
  {
    "id": "R-0143",
    "category": "Reasoning",
    "subtopic": "Odd One Out",
    "difficulty": "hard",
    "question": "Three of the following four belong to a group in some way. Which one does NOT belong to that group? Microscope, Telescope, Stethoscope, Periscope",
    "options": [
      "Microscope",
      "Telescope",
      "Stethoscope",
      "Periscope"
    ],
    "answer": "Stethoscope"
  },
  {
    "id": "R-0144",
    "category": "Reasoning",
    "subtopic": "Odd One Out",
    "difficulty": "easy",
    "question": "Three of the following four belong to a group in some way. Which one does NOT belong to that group? Triangle, Square, Pentagon, Sphere",
    "options": [
      "Triangle",
      "Square",
      "Pentagon",
      "Sphere"
    ],
    "answer": "Sphere"
  },
  {
    "id": "R-0145",
    "category": "Reasoning",
    "subtopic": "Odd One Out",
    "difficulty": "easy",
    "question": "Three of the following four belong to a group in some way. Which one does NOT belong to that group? Delhi, Mumbai, Chennai, India",
    "options": [
      "Delhi",
      "Mumbai",
      "Chennai",
      "India"
    ],
    "answer": "India"
  },
  {
    "id": "R-0146",
    "category": "Reasoning",
    "subtopic": "Odd One Out",
    "difficulty": "medium",
    "question": "Three of the following four belong to a group in some way. Which one does NOT belong to that group? Dog, Cat, Cow, Lion",
    "options": [
      "Dog",
      "Cat",
      "Cow",
      "Lion"
    ],
    "answer": "Lion"
  },
  {
    "id": "R-0147",
    "category": "Reasoning",
    "subtopic": "Odd One Out",
    "difficulty": "medium",
    "question": "Three of the following four belong to a group in some way. Which one does NOT belong to that group? Guitar, Violin, Sitar, Flute",
    "options": [
      "Guitar",
      "Violin",
      "Sitar",
      "Flute"
    ],
    "answer": "Flute"
  },
  {
    "id": "R-0148",
    "category": "Reasoning",
    "subtopic": "Odd One Out",
    "difficulty": "medium",
    "question": "Three of the following four belong to a group in some way. Which one does NOT belong to that group? Celsius, Fahrenheit, Kelvin, Meter",
    "options": [
      "Celsius",
      "Fahrenheit",
      "Kelvin",
      "Meter"
    ],
    "answer": "Meter"
  },
  {
    "id": "R-0149",
    "category": "Reasoning",
    "subtopic": "Odd One Out",
    "difficulty": "hard",
    "question": "Three of the following four belong to a group in some way. Which one does NOT belong to that group? Author, Painter, Sculptor, Library",
    "options": [
      "Author",
      "Painter",
      "Sculptor",
      "Library"
    ],
    "answer": "Library"
  },
  {
    "id": "R-0150",
    "category": "Reasoning",
    "subtopic": "Odd One Out",
    "difficulty": "hard",
    "question": "Three of the following four belong to a group in some way. Which one does NOT belong to that group? Wheat, Rice, Barley, Cotton",
    "options": [
      "Wheat",
      "Rice",
      "Barley",
      "Cotton"
    ],
    "answer": "Cotton"
  },
  {
    "id": "R-0151",
    "category": "Reasoning",
    "subtopic": "Alphabet Series",
    "difficulty": "medium",
    "question": "If A=1, B=2, C=3, ... Z=26, what is the sum of the position values of the letters in the word 'WATER'?",
    "options": [
      "70",
      "67",
      "68",
      "65"
    ],
    "answer": "67"
  },
  {
    "id": "R-0152",
    "category": "Reasoning",
    "subtopic": "Alphabet Series",
    "difficulty": "medium",
    "question": "If A=1, B=2, C=3, ... Z=26, what is the sum of the position values of the letters in the word 'CLOCK'?",
    "options": [
      "42",
      "44",
      "47",
      "45"
    ],
    "answer": "44"
  },
  {
    "id": "R-0153",
    "category": "Reasoning",
    "subtopic": "Alphabet Series",
    "difficulty": "medium",
    "question": "If A=1, B=2, C=3, ... Z=26, what is the sum of the position values of the letters in the word 'TRAIN'?",
    "options": [
      "65",
      "63",
      "64",
      "62"
    ],
    "answer": "62"
  },
  {
    "id": "R-0154",
    "category": "Reasoning",
    "subtopic": "Alphabet Series",
    "difficulty": "medium",
    "question": "If Z=1, Y=2, X=3, and so on, what is the position value of the letter 'G'?",
    "options": [
      "18",
      "21",
      "19",
      "20"
    ],
    "answer": "20"
  },
  {
    "id": "R-0155",
    "category": "Reasoning",
    "subtopic": "Alphabet Series",
    "difficulty": "medium",
    "question": "If Z=1, Y=2, X=3, and so on, what is the position value of the letter 'H'?",
    "options": [
      "20",
      "17",
      "19",
      "22"
    ],
    "answer": "19"
  },
  {
    "id": "R-0156",
    "category": "Reasoning",
    "subtopic": "Alphabet Series",
    "difficulty": "medium",
    "question": "Which letter lies exactly midway between 'A' and 'K' in the English alphabet?",
    "options": [
      "E",
      "G",
      "F",
      "D"
    ],
    "answer": "F"
  },
  {
    "id": "R-0157",
    "category": "Reasoning",
    "subtopic": "Alphabet Series",
    "difficulty": "medium",
    "question": "Which letter lies exactly midway between 'P' and 'X' in the English alphabet?",
    "options": [
      "S",
      "T",
      "V",
      "U"
    ],
    "answer": "T"
  },
  {
    "id": "R-0158",
    "category": "Reasoning",
    "subtopic": "Alphabet Series",
    "difficulty": "hard",
    "question": "Find the next letter in the series: C, E, H, L, ?",
    "options": [
      "T",
      "R",
      "P",
      "Q"
    ],
    "answer": "Q"
  },
  {
    "id": "R-0159",
    "category": "Reasoning",
    "subtopic": "Alphabet Series",
    "difficulty": "hard",
    "question": "Find the next letter in the series: C, F, J, O, ?",
    "options": [
      "V",
      "U",
      "X",
      "W"
    ],
    "answer": "U"
  },
  {
    "id": "R-0160",
    "category": "Reasoning",
    "subtopic": "Alphabet Series",
    "difficulty": "hard",
    "question": "Find the next letter in the series: E, H, L, Q, ?",
    "options": [
      "Z",
      "W",
      "V",
      "U"
    ],
    "answer": "W"
  },
  {
    "id": "P-0001",
    "category": "Python",
    "subtopic": "Basics & Operators",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\na = 3\nb = 7\nprint(a % b)\n```",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "answer": "3"
  },
  {
    "id": "P-0002",
    "category": "Python",
    "subtopic": "Basics & Operators",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\na = 2\nb = 7\nprint(a - b)\n```",
    "options": [
      "-6",
      "-5",
      "-10",
      "-4"
    ],
    "answer": "-5"
  },
  {
    "id": "P-0003",
    "category": "Python",
    "subtopic": "Basics & Operators",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\na, b = 12, 8\na, b = b, a\nprint(a, b)\n```",
    "options": [
      "12 12",
      "12 8",
      "8 12",
      "8 8"
    ],
    "answer": "8 12"
  },
  {
    "id": "P-0004",
    "category": "Python",
    "subtopic": "Basics & Operators",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\na, b = 17, 11\na, b = b, a\nprint(a, b)\n```",
    "options": [
      "11 11",
      "11 17",
      "17 11",
      "17 17"
    ],
    "answer": "11 17"
  },
  {
    "id": "P-0005",
    "category": "Python",
    "subtopic": "Strings",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\na = \"Sun\"\nb = \"Sky\"\nprint(a + b)\n```",
    "options": [
      "SunSky",
      "SkySun",
      "Sun Sky",
      "SunSun"
    ],
    "answer": "SunSky"
  },
  {
    "id": "P-0006",
    "category": "Python",
    "subtopic": "Strings",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\na = \"Moon\"\nb = \"on\"\nprint(a + b)\n```",
    "options": [
      "onMoon",
      "Moon on",
      "MoonMoon",
      "Moonon"
    ],
    "answer": "Moonon"
  },
  {
    "id": "P-0007",
    "category": "Python",
    "subtopic": "Strings",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\nprint(\"hi\" * 4)\n```",
    "options": [
      "hi hi hi hi ",
      "hihihi",
      "hihihihi",
      "hihihihihi"
    ],
    "answer": "hihihihi"
  },
  {
    "id": "P-0008",
    "category": "Python",
    "subtopic": "Strings",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\nprint(\"xy\" * 4)\n```",
    "options": [
      "xy xy xy xy ",
      "xyxyxy",
      "xyxyxyxy",
      "xyxyxyxyxy"
    ],
    "answer": "xyxyxyxy"
  },
  {
    "id": "P-0009",
    "category": "Python",
    "subtopic": "Lists",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\nlst = [39, 8, 36, 47, 32]\nprint(lst[-2])\n```",
    "options": [
      "47",
      "39",
      "36",
      "32"
    ],
    "answer": "47"
  },
  {
    "id": "P-0010",
    "category": "Python",
    "subtopic": "Lists",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\nlst = [44, 21, 47, 35, 12]\nprint(lst[0])\n```",
    "options": [
      "44",
      "12 ",
      "12",
      "47"
    ],
    "answer": "44"
  },
  {
    "id": "P-0011",
    "category": "Python",
    "subtopic": "Lists",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\nlst = [1, 2, 3, 4, 5, 6, 7, 8]\nprint(lst[2:3])\n```",
    "options": [
      "[1, 2, 3, 4, 5, 6, 7, 8]",
      "[3, 4]",
      "[]",
      "[3]"
    ],
    "answer": "[3]"
  },
  {
    "id": "P-0012",
    "category": "Python",
    "subtopic": "Lists",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\nlst = [1, 2, 3, 4, 5, 6, 7, 8]\nprint(lst[4:5])\n```",
    "options": [
      "[1, 2, 3, 4, 5, 6, 7, 8]",
      "[5]",
      "[5, 6]",
      "[]"
    ],
    "answer": "[5]"
  },
  {
    "id": "P-0013",
    "category": "Python",
    "subtopic": "Loops",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\ntotal = 0\nfor i in range(3):\n    total += i\nprint(total)\n```",
    "options": [
      "6",
      "6 ",
      "3",
      "2"
    ],
    "answer": "3"
  },
  {
    "id": "P-0014",
    "category": "Python",
    "subtopic": "Loops",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\ntotal = 0\nfor i in range(4):\n    total += i\nprint(total)\n```",
    "options": [
      "10",
      "5",
      "4",
      "6"
    ],
    "answer": "6"
  },
  {
    "id": "P-0015",
    "category": "Python",
    "subtopic": "Loops",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\ns = \"\"\nfor i in range(5):\n    s += str(i)\nprint(s)\n```",
    "options": [
      "12345",
      "5",
      "43210",
      "01234"
    ],
    "answer": "01234"
  },
  {
    "id": "P-0016",
    "category": "Python",
    "subtopic": "Loops",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\ns = \"\"\nfor i in range(4):\n    s += str(i)\nprint(s)\n```",
    "options": [
      "4",
      "1234",
      "3210",
      "0123"
    ],
    "answer": "0123"
  },
  {
    "id": "P-0017",
    "category": "Python",
    "subtopic": "Strings",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\ns = \"Open Source\"\nprint(s.upper())\n```",
    "options": [
      "OPEN SOURCE",
      "open source",
      "oPEN sOURCE",
      "Open Source"
    ],
    "answer": "OPEN SOURCE"
  },
  {
    "id": "P-0018",
    "category": "Python",
    "subtopic": "Strings",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\ns = \"Python Code\"\nprint(s.replace('o', '0'))\n```",
    "options": [
      "Pyth0n C0de",
      "pYTHON cODE",
      "PYTHON CODE",
      "Python Code"
    ],
    "answer": "Pyth0n C0de"
  },
  {
    "id": "P-0019",
    "category": "Python",
    "subtopic": "Strings",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\ns = \"Data Science\"\nprint(s.upper())\n```",
    "options": [
      "DATA SCIENCE",
      "data science",
      "Data Science",
      "dATA sCIENCE"
    ],
    "answer": "DATA SCIENCE"
  },
  {
    "id": "P-0020",
    "category": "Python",
    "subtopic": "Strings",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\ns = \"Python Code\"\nprint(s.split())\n```",
    "options": [
      "PYTHON CODE",
      "pYTHON cODE",
      "Python Code",
      "['Python', 'Code']"
    ],
    "answer": "['Python', 'Code']"
  },
  {
    "id": "P-0021",
    "category": "Python",
    "subtopic": "Data Types",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\nx = True\nprint(type(x).__name__)\n```",
    "options": [
      "str",
      "bool",
      "dict",
      "list"
    ],
    "answer": "bool"
  },
  {
    "id": "P-0022",
    "category": "Python",
    "subtopic": "Data Types",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\nx = 5\nprint(type(x).__name__)\n```",
    "options": [
      "int",
      "dict",
      "str",
      "list"
    ],
    "answer": "int"
  },
  {
    "id": "P-0023",
    "category": "Python",
    "subtopic": "Data Types",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\ns = \"3\"\nn = int(s) + 1\nprint(n)\n```",
    "options": [
      "4",
      "3",
      "34",
      "5"
    ],
    "answer": "4"
  },
  {
    "id": "P-0024",
    "category": "Python",
    "subtopic": "Data Types",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\ns = \"7\"\nn = int(s) + 1\nprint(n)\n```",
    "options": [
      "9",
      "8",
      "78",
      "7"
    ],
    "answer": "8"
  },
  {
    "id": "P-0025",
    "category": "Python",
    "subtopic": "Dictionaries",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\nd = {'c': 8, 'a': 10, 'b': 14}\nprint(list(d.keys()))\n```",
    "options": [
      "['c', 'a', 'b']",
      "['a', 'b', 'c']",
      "['b', 'a', 'c']",
      "[8, 10, 14]"
    ],
    "answer": "['c', 'a', 'b']"
  },
  {
    "id": "P-0026",
    "category": "Python",
    "subtopic": "Dictionaries",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\nd = {'c': 13, 'd': 14, 'a': 3}\nprint(d['d'])\n```",
    "options": [
      "13 ",
      "3",
      "14",
      "13"
    ],
    "answer": "14"
  },
  {
    "id": "P-0027",
    "category": "Python",
    "subtopic": "Dictionaries",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\nd = {'d': 14, 'a': 12, 'c': 10}\nprint(d['c'])\n```",
    "options": [
      "10",
      "12 ",
      "12",
      "14"
    ],
    "answer": "10"
  },
  {
    "id": "P-0028",
    "category": "Python",
    "subtopic": "Dictionaries",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\nd = {'a': 15, 'b': 8, 'd': 4}\nprint(d['b'])\n```",
    "options": [
      "15 ",
      "8",
      "15",
      "4"
    ],
    "answer": "8"
  },
  {
    "id": "P-0029",
    "category": "Python",
    "subtopic": "Tuples",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\na, b, c = (6, 12, 1)\nprint(a + b - c)\n```",
    "options": [
      "6",
      "17",
      "19",
      "18"
    ],
    "answer": "17"
  },
  {
    "id": "P-0030",
    "category": "Python",
    "subtopic": "Tuples",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\na, b, c = (26, 15, 6)\nprint(a + b - c)\n```",
    "options": [
      "26",
      "35",
      "36",
      "47"
    ],
    "answer": "35"
  },
  {
    "id": "P-0031",
    "category": "Python",
    "subtopic": "Tuples",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\na, b, c = (27, 25, 26)\nprint(a + b - c)\n```",
    "options": [
      "27",
      "27 ",
      "26",
      "78"
    ],
    "answer": "26"
  },
  {
    "id": "P-0032",
    "category": "Python",
    "subtopic": "Tuples",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\na, b, c = (18, 25, 27)\nprint(a + b - c)\n```",
    "options": [
      "70",
      "18",
      "17",
      "16"
    ],
    "answer": "16"
  },
  {
    "id": "P-0033",
    "category": "Python",
    "subtopic": "Booleans",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\na = 8\nb = 1\nprint(a <= b)\n```",
    "options": [
      "False",
      "True",
      "None",
      "None "
    ],
    "answer": "False"
  },
  {
    "id": "P-0034",
    "category": "Python",
    "subtopic": "Booleans",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\na = 7\nb = 8\nprint(a != b)\n```",
    "options": [
      "None",
      "True",
      "False ",
      "False"
    ],
    "answer": "True"
  },
  {
    "id": "P-0035",
    "category": "Python",
    "subtopic": "Booleans",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\na = 15\nb = 5\nprint(a < b)\n```",
    "options": [
      "None",
      "None ",
      "True",
      "False"
    ],
    "answer": "False"
  },
  {
    "id": "P-0036",
    "category": "Python",
    "subtopic": "Booleans",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\na = 6\nb = 15\nprint(a == b)\n```",
    "options": [
      "None",
      "False",
      "True",
      "None "
    ],
    "answer": "False"
  },
  {
    "id": "P-0037",
    "category": "Python",
    "subtopic": "Lists",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\nlst = [16, 2, 21, 25]\nlst.sort()\nprint(lst)\n```",
    "options": [
      "[25, 21, 2, 16]",
      "[2, 16, 21, 25]",
      "[16, 2, 21, 25]",
      "[25, 21, 16, 2]"
    ],
    "answer": "[2, 16, 21, 25]"
  },
  {
    "id": "P-0038",
    "category": "Python",
    "subtopic": "Lists",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\nlst = [33, 13, 36, 39]\nlst.reverse()\nprint(lst)\n```",
    "options": [
      "[39, 36, 33, 13]",
      "[13, 33, 36, 39]",
      "[39, 36, 13, 33]",
      "[33, 13, 36, 39]"
    ],
    "answer": "[39, 36, 13, 33]"
  },
  {
    "id": "P-0039",
    "category": "Python",
    "subtopic": "Lists",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\nlst = [36, 11, 32, 9]\nlst.pop()\nprint(lst)\n```",
    "options": [
      "[11, 32, 9]",
      "[36, 11, 32, 9]",
      "[36, 11, 32]",
      "[9, 32, 11, 36]"
    ],
    "answer": "[36, 11, 32]"
  },
  {
    "id": "P-0040",
    "category": "Python",
    "subtopic": "Lists",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\nlst = [2, 14, 46, 5]\nlst.reverse()\nprint(lst)\n```",
    "options": [
      "[5, 46, 14, 2]",
      "[2, 14, 46, 5]",
      "[46, 14, 5, 2]",
      "[2, 5, 14, 46]"
    ],
    "answer": "[5, 46, 14, 2]"
  },
  {
    "id": "P-0041",
    "category": "Python",
    "subtopic": "Strings",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\nname = \"Tom\"\nage = 25\nprint(f\"{name} is {age} years old\")\n```",
    "options": [
      "name is 25 years old",
      "Tom is age years old",
      "25 is Tom years old",
      "Tom is 25 years old"
    ],
    "answer": "Tom is 25 years old"
  },
  {
    "id": "P-0042",
    "category": "Python",
    "subtopic": "Strings",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\nname = \"Tom\"\nage = 37\nprint(f\"{name} is {age} years old\")\n```",
    "options": [
      "name is 37 years old",
      "37 is Tom years old",
      "Tom is 37 years old",
      "Tom is age years old"
    ],
    "answer": "Tom is 37 years old"
  },
  {
    "id": "P-0043",
    "category": "Python",
    "subtopic": "Strings",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\nname = \"Alex\"\nage = 37\nprint(f\"{name} is {age} years old\")\n```",
    "options": [
      "Alex is age years old",
      "37 is Alex years old",
      "name is 37 years old",
      "Alex is 37 years old"
    ],
    "answer": "Alex is 37 years old"
  },
  {
    "id": "P-0044",
    "category": "Python",
    "subtopic": "Strings",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\nname = \"Riya\"\nage = 23\nprint(f\"{name} is {age} years old\")\n```",
    "options": [
      "name is 23 years old",
      "Riya is 23 years old",
      "23 is Riya years old",
      "Riya is age years old"
    ],
    "answer": "Riya is 23 years old"
  },
  {
    "id": "P-0045",
    "category": "Python",
    "subtopic": "Control Flow",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\nn = 8\nif n > 0:\n    print('positive')\nelif n < 0:\n    print('negative')\nelse:\n    print('zero')\n```",
    "options": [
      "zero",
      "negative ",
      "positive",
      "negative"
    ],
    "answer": "positive"
  },
  {
    "id": "P-0046",
    "category": "Python",
    "subtopic": "Control Flow",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\nn = 4\nif n > 0:\n    print('positive')\nelif n < 0:\n    print('negative')\nelse:\n    print('zero')\n```",
    "options": [
      "negative",
      "positive",
      "zero",
      "negative "
    ],
    "answer": "positive"
  },
  {
    "id": "P-0047",
    "category": "Python",
    "subtopic": "Control Flow",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\nn = -2\nif n > 0:\n    print('positive')\nelif n < 0:\n    print('negative')\nelse:\n    print('zero')\n```",
    "options": [
      "zero ",
      "negative",
      "zero",
      "positive"
    ],
    "answer": "negative"
  },
  {
    "id": "P-0048",
    "category": "Python",
    "subtopic": "Control Flow",
    "difficulty": "easy",
    "question": "What is the output of the following code?\n\n```python\nn = -9\nif n > 0:\n    print('positive')\nelif n < 0:\n    print('negative')\nelse:\n    print('zero')\n```",
    "options": [
      "positive ",
      "zero",
      "positive",
      "negative"
    ],
    "answer": "negative"
  },
  {
    "id": "P-0049",
    "category": "Python",
    "subtopic": "List Comprehensions",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nprint([x*x for x in range(4)])\n```",
    "options": [
      "[0, 1, 4, 9]",
      "0, 1, 4, 9][",
      "[0, 1, 2, 3]",
      "[0, 1, 4, 9, 16]"
    ],
    "answer": "[0, 1, 4, 9]"
  },
  {
    "id": "P-0050",
    "category": "Python",
    "subtopic": "List Comprehensions",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nprint([x for x in range(4) if x % 2 == 0])\n```",
    "options": [
      "[0, 1, 2, 3]",
      "[0, 2]",
      "0, 2][",
      "[0, 1, 4, 9, 16]"
    ],
    "answer": "[0, 2]"
  },
  {
    "id": "P-0051",
    "category": "Python",
    "subtopic": "List Comprehensions",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nprint([x if x%2==0 else -x for x in range(6)])\n```",
    "options": [
      "[0, -1, 2, -3, 4, -5]",
      "[0, 1, 2, 3, 4, 5]",
      "[0, -1, -2, -3, -4, -5]",
      "[0, 1, 4, 9, 16, 25, 36]"
    ],
    "answer": "[0, -1, 2, -3, 4, -5]"
  },
  {
    "id": "P-0052",
    "category": "Python",
    "subtopic": "List Comprehensions",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nprint([x*x for x in range(6)])\n```",
    "options": [
      "[0, 1, 4, 9, 16, 25, 36]",
      "[0, 1, 4, 9, 16, 25]",
      "[0, 1, 2, 3, 4, 5]",
      "[1, 4, 9, 16, 25, 36]"
    ],
    "answer": "[0, 1, 4, 9, 16, 25]"
  },
  {
    "id": "P-0053",
    "category": "Python",
    "subtopic": "List Comprehensions",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nprint([x**3 for x in range(4)])\n```",
    "options": [
      "[0, 1, 8, 27]",
      "[0, 1, 4, 9]",
      "[1, 8, 27, 64]",
      "[0, 1, 8, 27, 64]"
    ],
    "answer": "[0, 1, 8, 27]"
  },
  {
    "id": "P-0054",
    "category": "Python",
    "subtopic": "Functions & Arguments",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\ndef add_item(item, lst=[]):\n    lst.append(item)\n    return lst\n\nprint(add_item(1))\nprint(add_item(6))\n```",
    "options": [
      "[]\n[]",
      "[1]\n[1, 6]",
      "[1]\n[6]",
      "[6]\n[1, 6]"
    ],
    "answer": "[1]\n[1, 6]"
  },
  {
    "id": "P-0055",
    "category": "Python",
    "subtopic": "Functions & Arguments",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\ndef add_item(item, lst=[]):\n    lst.append(item)\n    return lst\n\nprint(add_item(4))\nprint(add_item(2))\n```",
    "options": [
      "[4]\n[4, 2]",
      "[4]\n[2]",
      "[]\n[]",
      "[2]\n[4, 2]"
    ],
    "answer": "[4]\n[4, 2]"
  },
  {
    "id": "P-0056",
    "category": "Python",
    "subtopic": "Functions & Arguments",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\ndef add_item(item, lst=[]):\n    lst.append(item)\n    return lst\n\nprint(add_item(5))\nprint(add_item(1))\n```",
    "options": [
      "[]\n[]",
      "[1]\n[5, 1]",
      "[5]\n[5, 1]",
      "[5]\n[1]"
    ],
    "answer": "[5]\n[5, 1]"
  },
  {
    "id": "P-0057",
    "category": "Python",
    "subtopic": "Functions & Arguments",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\ndef add_item(item, lst=[]):\n    lst.append(item)\n    return lst\n\nprint(add_item(7))\nprint(add_item(8))\n```",
    "options": [
      "[7]\n[8]",
      "[8]\n[7, 8]",
      "[]\n[]",
      "[7]\n[7, 8]"
    ],
    "answer": "[7]\n[7, 8]"
  },
  {
    "id": "P-0058",
    "category": "Python",
    "subtopic": "Functions & Arguments",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\ndef add_item(item, lst=[]):\n    lst.append(item)\n    return lst\n\nprint(add_item(4))\nprint(add_item(7))\n```",
    "options": [
      "[4]\n[4, 7]",
      "[4]\n[7]",
      "[]\n[]",
      "[7]\n[4, 7]"
    ],
    "answer": "[4]\n[4, 7]"
  },
  {
    "id": "P-0059",
    "category": "Python",
    "subtopic": "Functions & Arguments",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\ndef total(*args, **kwargs):\n    s = sum(args)\n    s += sum(kwargs.values())\n    return s\n\nprint(total(2, 8, x=4))\n```",
    "options": [
      "11",
      "15",
      "14",
      "10"
    ],
    "answer": "14"
  },
  {
    "id": "P-0060",
    "category": "Python",
    "subtopic": "Functions & Arguments",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\ndef total(*args, **kwargs):\n    s = sum(args)\n    s += sum(kwargs.values())\n    return s\n\nprint(total(6, 2, x=8))\n```",
    "options": [
      "8",
      "15",
      "16",
      "17"
    ],
    "answer": "16"
  },
  {
    "id": "P-0061",
    "category": "Python",
    "subtopic": "Functions & Arguments",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\ndef total(*args, **kwargs):\n    s = sum(args)\n    s += sum(kwargs.values())\n    return s\n\nprint(total(4, 3, x=1))\n```",
    "options": [
      "8",
      "7",
      "9",
      "5"
    ],
    "answer": "8"
  },
  {
    "id": "P-0062",
    "category": "Python",
    "subtopic": "Functions & Arguments",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\ndef total(*args, **kwargs):\n    s = sum(args)\n    s += sum(kwargs.values())\n    return s\n\nprint(total(3, 6, x=1))\n```",
    "options": [
      "9",
      "11",
      "20",
      "10"
    ],
    "answer": "10"
  },
  {
    "id": "P-0063",
    "category": "Python",
    "subtopic": "Functions & Arguments",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\ndef total(*args, **kwargs):\n    s = sum(args)\n    s += sum(kwargs.values())\n    return s\n\nprint(total(4, 3, x=9))\n```",
    "options": [
      "7",
      "16",
      "26",
      "17"
    ],
    "answer": "16"
  },
  {
    "id": "P-0064",
    "category": "Python",
    "subtopic": "Lists",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nlst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nprint(lst[-4:-1])\n```",
    "options": [
      "[5, 6, 7, 8, 9]",
      "[7, 8, 9]",
      "[]",
      "[7, 8, 9, 10]"
    ],
    "answer": "[7, 8, 9]"
  },
  {
    "id": "P-0065",
    "category": "Python",
    "subtopic": "Lists",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nlst = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]\nprint(lst[-4:-1])\n```",
    "options": [
      "[35, 40, 45]",
      "[35, 40, 45, 50]",
      "[40, 45]",
      "[5, 10, 15, 20]"
    ],
    "answer": "[35, 40, 45]"
  },
  {
    "id": "P-0066",
    "category": "Python",
    "subtopic": "Lists",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nlst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nprint(lst[::-1])\n```",
    "options": [
      "[2, 3, 4, 5, 6, 7, 8, 9, 10]",
      "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
      "[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]",
      "[1, 2, 3, 4, 5, 6, 7, 8, 9]"
    ],
    "answer": "[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]"
  },
  {
    "id": "P-0067",
    "category": "Python",
    "subtopic": "Lists",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nlst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nprint(lst[::2])\n```",
    "options": [
      "[2, 4, 6, 8, 10]",
      "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
      "[1, 4, 7, 10]",
      "[1, 3, 5, 7, 9]"
    ],
    "answer": "[1, 3, 5, 7, 9]"
  },
  {
    "id": "P-0068",
    "category": "Python",
    "subtopic": "Lists",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nlst = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]\nprint(lst[::2])\n```",
    "options": [
      "[2, 6, 10, 14, 18]",
      "[4, 8, 12, 16, 20]",
      "[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]",
      "[6, 10, 14, 18]"
    ],
    "answer": "[2, 6, 10, 14, 18]"
  },
  {
    "id": "P-0069",
    "category": "Python",
    "subtopic": "Comprehensions",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nd = {'a': 0, 'b': 1, 'c': 2, 'd': 3}\nprint({v: k for k, v in d.items()})\n```",
    "options": [
      "{}",
      "{'a': 0, 'b': 1, 'c': 2, 'd': 3}",
      "{0: 'a', 1: 'b', 2: 'c', 3: 'd'}",
      "0: 'a', 1: 'b', 2: 'c', 3: 'd'}{"
    ],
    "answer": "{0: 'a', 1: 'b', 2: 'c', 3: 'd'}"
  },
  {
    "id": "P-0070",
    "category": "Python",
    "subtopic": "Comprehensions",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nprint({x: x*x for x in range(5)})\n```",
    "options": [
      "{0: 0, 1: 1, 2: 4, 3: 9, 4: 16}",
      "[0, 1, 4, 9, 16]",
      "{0: 0, 1: 1, 2: 2, 3: 3, 4: 4}",
      "{0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}"
    ],
    "answer": "{0: 0, 1: 1, 2: 4, 3: 9, 4: 16}"
  },
  {
    "id": "P-0071",
    "category": "Python",
    "subtopic": "Comprehensions",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nd = {'p': 10, 'q': 20, 'r': 30}\nprint({v: k for k, v in d.items()})\n```",
    "options": [
      "{10: 'p', 20: 'q', 30: 'r'}",
      "{'p': 10, 'q': 20, 'r': 30}",
      "{}",
      "{10: 'q', 20: 'p', 30: 'r'}"
    ],
    "answer": "{10: 'p', 20: 'q', 30: 'r'}"
  },
  {
    "id": "P-0072",
    "category": "Python",
    "subtopic": "Comprehensions",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nd = {'x': 1, 'y': 2}\nprint({v: k for k, v in d.items()})\n```",
    "options": [
      "{1: 'x', 2: 'y'}",
      "{'x': 1, 'y': 2}",
      "{1: 'y', 2: 'x'}",
      "{}"
    ],
    "answer": "{1: 'x', 2: 'y'}"
  },
  {
    "id": "P-0073",
    "category": "Python",
    "subtopic": "Comprehensions",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nprint(sorted({x % 3 for x in range(6)}))\n```",
    "options": [
      "[0, 1]",
      "[0, 1, 2]",
      "[0, 1, 2, 3]",
      "[0, 0, 1, 1, 2, 2]"
    ],
    "answer": "[0, 1, 2]"
  },
  {
    "id": "P-0074",
    "category": "Python",
    "subtopic": "Lambda & Functional",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nlst = [9, 3, -2, 2, 5, -9]\nprint(list(filter(lambda x: x > 0, lst)))\n```",
    "options": [
      "[9, 3, -2, 2, 5]",
      "[-2, -9]",
      "[9, 3, -2, 2, 5, -9]",
      "[9, 3, 2, 5]"
    ],
    "answer": "[9, 3, 2, 5]"
  },
  {
    "id": "P-0075",
    "category": "Python",
    "subtopic": "Lambda & Functional",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nlst = [-8, 4, -10, -3, -7, 0]\nprint(list(filter(lambda x: x > 0, lst)))\n```",
    "options": [
      "[-8, 4, -10, -3, -7, 0]",
      "[-8, -10, -3, -7]",
      "[4, 0]",
      "[4]"
    ],
    "answer": "[4]"
  },
  {
    "id": "P-0076",
    "category": "Python",
    "subtopic": "Lambda & Functional",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nlst = [-10, 8, 2, -3, -2, 5]\nprint(list(filter(lambda x: x > 0, lst)))\n```",
    "options": [
      "[8, 2, 5]",
      "[-10, -3, -2]",
      "8, 2, 5][",
      "[-10, 8, 2, -3, -2, 5]"
    ],
    "answer": "[8, 2, 5]"
  },
  {
    "id": "P-0077",
    "category": "Python",
    "subtopic": "Lambda & Functional",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nlst = [-7, 2, -8, 4, -10, 6]\nprint(list(filter(lambda x: x % 2 == 0, map(lambda x: x + 1, lst))))\n```",
    "options": [
      "[-7, 2, -8, 4, -10, 6]",
      "[2, -8, 4, -10, 6]",
      "[-6]",
      "[-6, 3, -7, 5, -9, 7]"
    ],
    "answer": "[-6]"
  },
  {
    "id": "P-0078",
    "category": "Python",
    "subtopic": "Lambda & Functional",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nlst = [-5, -4, 0, 4, -9, -2]\nprint(list(filter(lambda x: x > 0, lst)))\n```",
    "options": [
      "[0, 4]",
      "[4]",
      "[-5, -4, 0, 4, -9, -2]",
      "[-5, -4, -9, -2]"
    ],
    "answer": "[4]"
  },
  {
    "id": "P-0079",
    "category": "Python",
    "subtopic": "String Formatting",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\np = 0.299\nprint(f\"{p:.1%}\")\n```",
    "options": [
      "0.299",
      "29.9%",
      "0.30",
      "30%"
    ],
    "answer": "29.9%"
  },
  {
    "id": "P-0080",
    "category": "Python",
    "subtopic": "String Formatting",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nx = 721.138173\nprint(f\"{x:.2f}\")\n```",
    "options": [
      "721.1382",
      "721",
      "721.14",
      "721.1"
    ],
    "answer": "721.14"
  },
  {
    "id": "P-0081",
    "category": "Python",
    "subtopic": "String Formatting",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nn = 24\nprint(f\"{n:05d}\")\n```",
    "options": [
      "   24",
      "00024",
      "000024",
      "24"
    ],
    "answer": "00024"
  },
  {
    "id": "P-0082",
    "category": "Python",
    "subtopic": "String Formatting",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nx = 114.091159\nprint(f\"{x:.2f}\")\n```",
    "options": [
      "114.0912",
      "114.09",
      "114",
      "114.1"
    ],
    "answer": "114.09"
  },
  {
    "id": "P-0083",
    "category": "Python",
    "subtopic": "String Formatting",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nn = 44\nprint(f\"{n:05d}\")\n```",
    "options": [
      "44",
      "00044",
      "000044",
      "   44"
    ],
    "answer": "00044"
  },
  {
    "id": "P-0084",
    "category": "Python",
    "subtopic": "Copying & References",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\na = [20, 25, 22]\nb = a\nb.append(31)\nprint(a)\n```",
    "options": [
      "[31]",
      "[20, 25, 22, 31, 31]",
      "[20, 25, 22, 31]",
      "[20, 25, 22]"
    ],
    "answer": "[20, 25, 22, 31]"
  },
  {
    "id": "P-0085",
    "category": "Python",
    "subtopic": "Copying & References",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\na = [11, 19, 12]\nb = a\nb.append(43)\nprint(a)\n```",
    "options": [
      "[43]",
      "[11, 19, 12]",
      "[11, 19, 12, 43, 43]",
      "[11, 19, 12, 43]"
    ],
    "answer": "[11, 19, 12, 43]"
  },
  {
    "id": "P-0086",
    "category": "Python",
    "subtopic": "Copying & References",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\na = [28, 13, 12]\nb = a\nb.append(32)\nprint(a)\n```",
    "options": [
      "[32]",
      "[28, 13, 12, 32]",
      "[28, 13, 12]",
      "[28, 13, 12, 32, 32]"
    ],
    "answer": "[28, 13, 12, 32]"
  },
  {
    "id": "P-0087",
    "category": "Python",
    "subtopic": "Copying & References",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\na = [16, 17, 4]\nb = a\nb.append(50)\nprint(a)\n```",
    "options": [
      "[16, 17, 4, 50, 50]",
      "[50]",
      "[16, 17, 4]",
      "[16, 17, 4, 50]"
    ],
    "answer": "[16, 17, 4, 50]"
  },
  {
    "id": "P-0088",
    "category": "Python",
    "subtopic": "Copying & References",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\na = [11, 10, 17]\nb = a\nb.append(41)\nprint(a)\n```",
    "options": [
      "[41]",
      "[11, 10, 17]",
      "[11, 10, 17, 41, 41]",
      "[11, 10, 17, 41]"
    ],
    "answer": "[11, 10, 17, 41]"
  },
  {
    "id": "P-0089",
    "category": "Python",
    "subtopic": "Exception Handling",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\ntry:\n    print('try')\nfinally:\n    print('finally')\n```",
    "options": [
      "finally\ntry",
      "finally",
      "try\nfinally",
      "try"
    ],
    "answer": "try\nfinally"
  },
  {
    "id": "P-0090",
    "category": "Python",
    "subtopic": "Exception Handling",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\ntry:\n    x = 5\nexcept Exception:\n    print('error')\nelse:\n    print('no error')\nfinally:\n    print('cleanup')\n```",
    "options": [
      "cleanup",
      "no error\ncleanup",
      "error\ncleanup",
      "no error"
    ],
    "answer": "no error\ncleanup"
  },
  {
    "id": "P-0091",
    "category": "Python",
    "subtopic": "Exception Handling",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\ntry:\n    print('start')\nfinally:\n    print('end')\n```",
    "options": [
      "start\nend",
      "start",
      "end",
      "end\nstart"
    ],
    "answer": "start\nend"
  },
  {
    "id": "P-0092",
    "category": "Python",
    "subtopic": "Exception Handling",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\ntry:\n    print('A')\nfinally:\n    print('B')\n```",
    "options": [
      "A\nB",
      "A",
      "B",
      "B\nA"
    ],
    "answer": "A\nB"
  },
  {
    "id": "P-0093",
    "category": "Python",
    "subtopic": "Exception Handling",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\ntry:\n    print(2 / 0)\nexcept ZeroDivisionError:\n    print('caught')\nfinally:\n    print('done')\n```",
    "options": [
      "caught",
      "done",
      "aught\ndonec",
      "caught\ndone"
    ],
    "answer": "caught\ndone"
  },
  {
    "id": "P-0094",
    "category": "Python",
    "subtopic": "OOP Basics",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nclass C:\n    total = 0\n    def __init__(self):\n        C.total += 1\n\nobjs = [C() for _ in range(2)]\nprint(C.total)\n```",
    "options": [
      "3",
      "1",
      "2",
      "0"
    ],
    "answer": "2"
  },
  {
    "id": "P-0095",
    "category": "Python",
    "subtopic": "OOP Basics",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nclass Dog:\n    species = 'Canine'\n\na = Dog()\nb = Dog()\nprint(a.species, b.species)\n```",
    "options": [
      "None Canine",
      "Canine Canine",
      "Canine None",
      "Canine Canine Canine"
    ],
    "answer": "Canine Canine"
  },
  {
    "id": "P-0096",
    "category": "Python",
    "subtopic": "OOP Basics",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nclass Cat:\n    species = 'Feline'\n\na = Cat()\nb = Cat()\nprint(a.species, b.species)\n```",
    "options": [
      "Feline Feline",
      "Feline None",
      "None Feline",
      "Feline Feline Feline"
    ],
    "answer": "Feline Feline"
  },
  {
    "id": "P-0097",
    "category": "Python",
    "subtopic": "OOP Basics",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nclass Counter:\n    count = 0\n\nc1 = Counter()\nc2 = Counter()\nc1.count = 5\nprint(c1.count, c2.count)\n```",
    "options": [
      "0 0",
      "5 0",
      "5 5",
      "0 5"
    ],
    "answer": "5 0"
  },
  {
    "id": "P-0098",
    "category": "Python",
    "subtopic": "OOP Basics",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nclass Counter:\n    count = 0\n\nc1 = Counter()\nc2 = Counter()\nc1.count = 9\nprint(c1.count, c2.count)\n```",
    "options": [
      "9 0",
      "9 9",
      "0 0",
      "0 9"
    ],
    "answer": "9 0"
  },
  {
    "id": "P-0099",
    "category": "Python",
    "subtopic": "Operator Precedence",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nprint(-6 ** 2)\n```",
    "options": [
      "-35",
      "36",
      "-26",
      "-36"
    ],
    "answer": "-36"
  },
  {
    "id": "P-0100",
    "category": "Python",
    "subtopic": "Operator Precedence",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nprint(2 + 2 * 3 % 2)\n```",
    "options": [
      "2",
      "0",
      "3",
      "8"
    ],
    "answer": "2"
  },
  {
    "id": "P-0101",
    "category": "Python",
    "subtopic": "Operator Precedence",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nprint(4 > 9 and 9 > 4 or True)\n```",
    "options": [
      "None",
      "False",
      "True",
      "4"
    ],
    "answer": "True"
  },
  {
    "id": "P-0102",
    "category": "Python",
    "subtopic": "Operator Precedence",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nprint(2 + 5 * 4 % 2)\n```",
    "options": [
      "3",
      "2",
      "0",
      "22"
    ],
    "answer": "2"
  },
  {
    "id": "P-0103",
    "category": "Python",
    "subtopic": "Operator Precedence",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nprint(8 + 8 * 2 % 8)\n```",
    "options": [
      "8",
      "24",
      "9",
      "0"
    ],
    "answer": "8"
  },
  {
    "id": "P-0104",
    "category": "Python",
    "subtopic": "Scope",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nx = 13\ndef show():\n    print(x)\nshow()\n```",
    "options": [
      "0",
      "14",
      "None",
      "13"
    ],
    "answer": "13"
  },
  {
    "id": "P-0105",
    "category": "Python",
    "subtopic": "Scope",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nx = 17\ndef modify():\n    global x\n    x = 67\nmodify()\nprint(x)\n```",
    "options": [
      "67",
      "17",
      "None",
      "18"
    ],
    "answer": "67"
  },
  {
    "id": "P-0106",
    "category": "Python",
    "subtopic": "Scope",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nx = 17\ndef show():\n    print(x)\nshow()\n```",
    "options": [
      "None",
      "17",
      "18",
      "0"
    ],
    "answer": "17"
  },
  {
    "id": "P-0107",
    "category": "Python",
    "subtopic": "Scope",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nx = 16\ndef show():\n    x = 116\n    print(x)\nshow()\nprint(x)\n```",
    "options": [
      "116\n116",
      "116\n16",
      "16",
      "16\n16"
    ],
    "answer": "116\n16"
  },
  {
    "id": "P-0108",
    "category": "Python",
    "subtopic": "Scope",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nx = 5\ndef show():\n    x = 105\n    print(x)\nshow()\nprint(x)\n```",
    "options": [
      "5\n5",
      "105\n5",
      "105\n105",
      "5"
    ],
    "answer": "105\n5"
  },
  {
    "id": "P-0109",
    "category": "Python",
    "subtopic": "Iteration Tools",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nitems = ['red', 'pink', 'blue']\nnums = [3, 7, 1]\nfor a, b in zip(items, nums):\n    print(a, b)\n```",
    "options": [
      "3 red\n7 pink\n1 blue",
      "red\npink\nblue",
      "red 3\npink 7\nblue 1",
      "3\n7\n1"
    ],
    "answer": "red 3\npink 7\nblue 1"
  },
  {
    "id": "P-0110",
    "category": "Python",
    "subtopic": "Iteration Tools",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nitems = ['red', 'blue', 'pink']\nfor i, v in enumerate(items):\n    print(i, v)\n```",
    "options": [
      "red\nblue\npink",
      "red 0\nblue 1\npink 2",
      "0 red",
      "0 red\n1 blue\n2 pink"
    ],
    "answer": "0 red\n1 blue\n2 pink"
  },
  {
    "id": "P-0111",
    "category": "Python",
    "subtopic": "Iteration Tools",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nitems = ['red', 'pink', 'blue']\nfor i, v in enumerate(items):\n    print(i, v)\n```",
    "options": [
      "0 red",
      "red 0\npink 1\nblue 2",
      "0 red\n1 pink\n2 blue",
      "red\npink\nblue"
    ],
    "answer": "0 red\n1 pink\n2 blue"
  },
  {
    "id": "P-0112",
    "category": "Python",
    "subtopic": "Iteration Tools",
    "difficulty": "medium",
    "question": "What is the output of the following code?\n\n```python\nitems = ['pink', 'red', 'yellow']\nnums = [5, 3, 6]\nfor a, b in zip(items, nums):\n    print(a, b)\n```",
    "options": [
      "5 pink\n3 red\n6 yellow",
      "pink\nred\nyellow",
      "5\n3\n6",
      "pink 5\nred 3\nyellow 6"
    ],
    "answer": "pink 5\nred 3\nyellow 6"
  },
  {
    "id": "P-0113",
    "category": "Python",
    "subtopic": "Closures",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\nfuncs = []\nfor i in range(3):\n    funcs.append(lambda: i)\nprint([f() for f in funcs])\n```",
    "options": [
      "[0, 0, 0]",
      "[0, 1, 2]",
      "[1, 2, 3]",
      "[2, 2, 2]"
    ],
    "answer": "[2, 2, 2]"
  },
  {
    "id": "P-0114",
    "category": "Python",
    "subtopic": "Closures",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\nfuncs = []\nfor i in range(5):\n    funcs.append(lambda: i)\nprint([f() for f in funcs])\n```",
    "options": [
      "[4, 4, 4, 4, 4]",
      "[0, 1, 2, 3, 4]",
      "[0, 0, 0, 0, 0]",
      "[1, 2, 3, 4, 5]"
    ],
    "answer": "[4, 4, 4, 4, 4]"
  },
  {
    "id": "P-0115",
    "category": "Python",
    "subtopic": "Closures",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\nfuncs = []\nfor i in range(4):\n    funcs.append(lambda i=i: i)\nprint([f() for f in funcs])\n```",
    "options": [
      "[0, 1, 2, 3]",
      "[1, 2, 3, 4]",
      "[0, 0, 0, 0]",
      "[3, 3, 3, 3]"
    ],
    "answer": "[0, 1, 2, 3]"
  },
  {
    "id": "P-0116",
    "category": "Python",
    "subtopic": "Closures",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\nfuncs = []\nfor i in range(5):\n    funcs.append(lambda i=i: i)\nprint([f() for f in funcs])\n```",
    "options": [
      "[0, 1, 2, 3, 4]",
      "[1, 2, 3, 4, 5]",
      "[0, 0, 0, 0, 0]",
      "[4, 4, 4, 4, 4]"
    ],
    "answer": "[0, 1, 2, 3, 4]"
  },
  {
    "id": "P-0117",
    "category": "Python",
    "subtopic": "Closures",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\ndef make_counter():\n    count = 5\n    def increment():\n        nonlocal count\n        count += 1\n        return count\n    return increment\n\nc = make_counter()\nprint(c(), c(), c())\n```",
    "options": [
      "6 6 6",
      "5 6 7",
      "6 7 8",
      "5 5 5"
    ],
    "answer": "6 7 8"
  },
  {
    "id": "P-0118",
    "category": "Python",
    "subtopic": "Decorators",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\ndef double(func):\n    def wrapper(*args):\n        return func(*args) * 2\n    return wrapper\n\n@double\ndef add_one(x):\n    return x + 1\n\nprint(add_one(5))\n```",
    "options": [
      "12",
      "6",
      "14",
      "13"
    ],
    "answer": "12"
  },
  {
    "id": "P-0119",
    "category": "Python",
    "subtopic": "Decorators",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\ndef double(func):\n    def wrapper(*args):\n        return func(*args) * 2\n    return wrapper\n\n@double\ndef add_one(x):\n    return x + 1\n\nprint(add_one(8))\n```",
    "options": [
      "20",
      "19",
      "18",
      "9"
    ],
    "answer": "18"
  },
  {
    "id": "P-0120",
    "category": "Python",
    "subtopic": "Decorators",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\ndef counter_dec(func):\n    def wrapper(*args):\n        wrapper.calls += 1\n        return func(*args)\n    wrapper.calls = 0\n    return wrapper\n\n@counter_dec\ndef greet(name):\n    return f'Hi {name}'\n\nfor _ in range(3):\n    greet('A')\nprint(greet.calls)\n```",
    "options": [
      "2",
      "4",
      "0",
      "3"
    ],
    "answer": "3"
  },
  {
    "id": "P-0121",
    "category": "Python",
    "subtopic": "Decorators",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\ndef counter_dec(func):\n    def wrapper(*args):\n        wrapper.calls += 1\n        return func(*args)\n    wrapper.calls = 0\n    return wrapper\n\n@counter_dec\ndef greet(name):\n    return f'Hi {name}'\n\nfor _ in range(4):\n    greet('A')\nprint(greet.calls)\n```",
    "options": [
      "4",
      "3",
      "5",
      "0"
    ],
    "answer": "4"
  },
  {
    "id": "P-0122",
    "category": "Python",
    "subtopic": "Decorators",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\ndef upper_dec(func):\n    def wrapper():\n        return func().upper()\n    return wrapper\n\ndef exclaim_dec(func):\n    def wrapper():\n        return func() + '!'\n    return wrapper\n\n@upper_dec\n@exclaim_dec\ndef greet():\n    return 'hello'\n\nprint(greet())\n```",
    "options": [
      "HELLO!",
      "hello!",
      "Hello!",
      "HELLO!_v2"
    ],
    "answer": "HELLO!"
  },
  {
    "id": "P-0123",
    "category": "Python",
    "subtopic": "Generators",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\ndef gen():\n    for i in range(4):\n        yield i * i\n\ng = gen()\nprint(list(g))\n```",
    "options": [
      "[0, 1, 4, 9, 16]",
      "[0, 0, 0, 0]",
      "[0, 1, 4, 9]",
      "[0, 1, 2, 3]"
    ],
    "answer": "[0, 1, 4, 9]"
  },
  {
    "id": "P-0124",
    "category": "Python",
    "subtopic": "Generators",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\ndef gen():\n    for i in range(5):\n        yield i * i\n\ng = gen()\nprint(list(g))\n```",
    "options": [
      "[0, 1, 4, 9, 16]",
      "[0, 0, 0, 0, 0]",
      "[0, 1, 2, 3, 4]",
      "[0, 1, 4, 9, 16, 25]"
    ],
    "answer": "[0, 1, 4, 9, 16]"
  },
  {
    "id": "P-0125",
    "category": "Python",
    "subtopic": "Generators",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\ndef gen():\n    for i in range(4):\n        yield i\n\ng = gen()\nprint(list(g))\nprint(list(g))\n```",
    "options": [
      "[0, 1, 2, 3]\n[0, 1, 2, 3]",
      "[0, 1, 2, 3]\n[]",
      "[0, 1, 2, 3]",
      "[]\n[0, 1, 2, 3]"
    ],
    "answer": "[0, 1, 2, 3]\n[]"
  },
  {
    "id": "P-0126",
    "category": "Python",
    "subtopic": "Generators",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\ndef gen():\n    for i in range(3):\n        yield i\n\ng = gen()\nprint(list(g))\nprint(list(g))\n```",
    "options": [
      "[]\n[0, 1, 2]",
      "[0, 1, 2]\n[0, 1, 2]",
      "[0, 1, 2]\n[]",
      "[0, 1, 2]"
    ],
    "answer": "[0, 1, 2]\n[]"
  },
  {
    "id": "P-0127",
    "category": "Python",
    "subtopic": "Generators",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\ndef countdown(n):\n    while n > 0:\n        yield n\n        n -= 1\n\ng = countdown(4)\nprint(next(g))\nprint(next(g))\n```",
    "options": [
      "4\n3",
      "3\n2",
      "4\n2",
      "4\n4"
    ],
    "answer": "4\n3"
  },
  {
    "id": "P-0128",
    "category": "Python",
    "subtopic": "Copying & References",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\nimport copy\norig = [[1, 2], [3, 4]]\nshallow = copy.copy(orig)\nshallow[0].append(98)\nprint(orig)\n```",
    "options": [
      "[]",
      "[[1, 2], [3, 4]]",
      "[[1, 2, 98]]",
      "[[1, 2, 98], [3, 4]]"
    ],
    "answer": "[[1, 2, 98], [3, 4]]"
  },
  {
    "id": "P-0129",
    "category": "Python",
    "subtopic": "Copying & References",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\nimport copy\norig = [[1, 2], [3, 4]]\nshallow = copy.copy(orig)\nshallow[0].append(77)\nprint(orig)\n```",
    "options": [
      "[[1, 2, 77], [3, 4]]",
      "[[1, 2], [3, 4]]",
      "[[1, 2, 77]]",
      "[]"
    ],
    "answer": "[[1, 2, 77], [3, 4]]"
  },
  {
    "id": "P-0130",
    "category": "Python",
    "subtopic": "Copying & References",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\nimport copy\norig = [[1, 2], [3, 4]]\ndeep = copy.deepcopy(orig)\ndeep[0].append(91)\nprint(orig)\n```",
    "options": [
      "[[1, 2, 91], [3, 4]]",
      "[]",
      "[[1, 2], [3, 4]]",
      "[[1, 2, 91]]"
    ],
    "answer": "[[1, 2], [3, 4]]"
  },
  {
    "id": "P-0131",
    "category": "Python",
    "subtopic": "Copying & References",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\nimport copy\norig = [[1, 2], [3, 4]]\ndeep = copy.deepcopy(orig)\ndeep[0].append(90)\nprint(orig)\n```",
    "options": [
      "[[1, 2], [3, 4]]",
      "[[1, 2, 90]]",
      "[[1, 2, 90], [3, 4]]",
      "[]"
    ],
    "answer": "[[1, 2], [3, 4]]"
  },
  {
    "id": "P-0132",
    "category": "Python",
    "subtopic": "Copying & References",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\nrows = [[0] * 3] * 2\nrows[0][0] = 85\nprint(rows)\n```",
    "options": [
      "[[85, 0, 0], [0, 0, 0]]",
      "[]",
      "[[85, 0, 0], [85, 0, 0]]",
      "[[0, 0, 0], [0, 0, 0]]"
    ],
    "answer": "[[85, 0, 0], [85, 0, 0]]"
  },
  {
    "id": "P-0133",
    "category": "Python",
    "subtopic": "Inheritance & MRO",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\nclass A:\n    def greet(self):\n        return 'A'\n\nclass B(A):\n    def greet(self):\n        return 'B'\n\nclass C(A):\n    def greet(self):\n        return 'C'\n\nclass D(B, C):\n    pass\n\nprint(D().greet())\n```",
    "options": [
      "None",
      "A",
      "B",
      "C"
    ],
    "answer": "B"
  },
  {
    "id": "P-0134",
    "category": "Python",
    "subtopic": "Inheritance & MRO",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\nclass Animal:\n    def speak(self):\n        return 'Animal sound'\n\nclass Dog(Animal):\n    def speak(self):\n        return super().speak() + ' -> Woof'\n\nprint(Dog().speak())\n```",
    "options": [
      "Animal sound -> Woof -> Woof",
      "Animal sound",
      "Woof",
      "Animal sound -> Woof"
    ],
    "answer": "Animal sound -> Woof"
  },
  {
    "id": "P-0135",
    "category": "Python",
    "subtopic": "Inheritance & MRO",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\nclass Shape:\n    pass\n\nclass Circle(Shape):\n    pass\n\nc = Circle()\nprint(isinstance(c, Shape), isinstance(c, Circle), issubclass(Circle, Shape))\n```",
    "options": [
      "True True True",
      "True False True",
      "False True False",
      "False False False"
    ],
    "answer": "True True True"
  },
  {
    "id": "P-0136",
    "category": "Python",
    "subtopic": "Inheritance & MRO",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\nclass Base:\n    def __init__(self):\n        self.value = 'base'\n\nclass Derived(Base):\n    def __init__(self):\n        super().__init__()\n        self.value = 'derived'\n\nprint(Derived().value)\n```",
    "options": [
      "derivedbase",
      "None",
      "derived",
      "base"
    ],
    "answer": "derived"
  },
  {
    "id": "P-0137",
    "category": "Python",
    "subtopic": "Static & Class Methods",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\nclass Date:\n    def __init__(self, y, m, d):\n        self.y, self.m, self.d = y, m, d\n    @classmethod\n    def from_string(cls, s):\n        y, m, d = map(int, s.split('-'))\n        return cls(y, m, d)\n    def __repr__(self):\n        return f'{self.y}-{self.m}-{self.d}'\n\ndt = Date.from_string('2024-2-10')\nprint(dt)\n```",
    "options": [
      "None",
      "2024-2-10",
      "2024-2-11",
      "2025-2-10"
    ],
    "answer": "2024-2-10"
  },
  {
    "id": "P-0138",
    "category": "Python",
    "subtopic": "Static & Class Methods",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\nclass MathUtils:\n    @staticmethod\n    def add(x, y):\n        return x + y\n\nprint(MathUtils.add(9, 1))\n```",
    "options": [
      "11",
      "10",
      "0",
      "9"
    ],
    "answer": "10"
  },
  {
    "id": "P-0139",
    "category": "Python",
    "subtopic": "Static & Class Methods",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\nclass Employee:\n    raise_pct = 1.05\n    @classmethod\n    def set_raise(cls, pct):\n        cls.raise_pct = pct\n\nEmployee.set_raise(1.10)\ne1 = Employee()\ne2 = Employee()\nprint(e1.raise_pct, e2.raise_pct)\n```",
    "options": [
      "1.05 1.05",
      "1.1 1.1",
      "1.1 1.05",
      "1.05 1.1"
    ],
    "answer": "1.1 1.1"
  },
  {
    "id": "P-0140",
    "category": "Python",
    "subtopic": "Static & Class Methods",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\nclass Util:\n    @staticmethod\n    def is_even(n):\n        return n % 2 == 0\n\nu = Util()\nprint(u.is_even(4), Util.is_even(7))\n```",
    "options": [
      "False False",
      "True False",
      "False True",
      "True True"
    ],
    "answer": "True False"
  },
  {
    "id": "P-0141",
    "category": "Python",
    "subtopic": "Closures",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\ndef outer():\n    x = 2\n    def inner():\n        nonlocal x\n        x += 10\n    inner()\n    return x\n\nprint(outer())\n```",
    "options": [
      "2",
      "22",
      "11",
      "12"
    ],
    "answer": "12"
  },
  {
    "id": "P-0142",
    "category": "Python",
    "subtopic": "Closures",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\ndef outer():\n    x = 7\n    def inner():\n        nonlocal x\n        x += 10\n    inner()\n    return x\n\nprint(outer())\n```",
    "options": [
      "17",
      "7",
      "10",
      "27"
    ],
    "answer": "17"
  },
  {
    "id": "P-0143",
    "category": "Python",
    "subtopic": "Closures",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\ndef outer():\n    x = 2\n    def inner():\n        y = x + 1\n        return y\n    return inner()\n\nprint(outer())\n```",
    "options": [
      "3",
      "4",
      "0",
      "2"
    ],
    "answer": "3"
  },
  {
    "id": "P-0144",
    "category": "Python",
    "subtopic": "Closures",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\ndef level1():\n    x = 3\n    def level2():\n        def level3():\n            nonlocal x\n            x *= 2\n        level3()\n    level2()\n    return x\n\nprint(level1())\n```",
    "options": [
      "5",
      "3",
      "6",
      "7"
    ],
    "answer": "6"
  },
  {
    "id": "P-0145",
    "category": "Python",
    "subtopic": "Recursion",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\ndef fact(n):\n    if n <= 1:\n        return 1\n    return n * fact(n - 1)\n\nprint(fact(4))\n```",
    "options": [
      "24",
      "16",
      "28",
      "6"
    ],
    "answer": "24"
  },
  {
    "id": "P-0146",
    "category": "Python",
    "subtopic": "Recursion",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\ndef fib(n):\n    if n <= 1:\n        return n\n    return fib(n-1) + fib(n-2)\n\nprint(fib(9))\n```",
    "options": [
      "33",
      "9",
      "34",
      "35"
    ],
    "answer": "34"
  },
  {
    "id": "P-0147",
    "category": "Python",
    "subtopic": "Recursion",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\ndef fib_memo(n, memo={}):\n    if n in memo:\n        return memo[n]\n    if n <= 1:\n        return n\n    memo[n] = fib_memo(n-1, memo) + fib_memo(n-2, memo)\n    return memo[n]\n\nprint(fib_memo(11))\n```",
    "options": [
      "90",
      "11",
      "88",
      "89"
    ],
    "answer": "89"
  },
  {
    "id": "P-0148",
    "category": "Python",
    "subtopic": "Recursion",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\ndef rec_sum(lst):\n    if not lst:\n        return 0\n    return lst[0] + rec_sum(lst[1:])\n\nprint(rec_sum([1, 3, 6, 4]))\n```",
    "options": [
      "13",
      "4",
      "15",
      "14"
    ],
    "answer": "14"
  },
  {
    "id": "P-0149",
    "category": "Python",
    "subtopic": "Exception Handling",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\ndef func():\n    try:\n        return 7\n    finally:\n        print('cleanup')\n\nprint(func())\n```",
    "options": [
      "7",
      "7\n7",
      "cleanup\n7",
      "cleanup"
    ],
    "answer": "cleanup\n7"
  },
  {
    "id": "P-0150",
    "category": "Python",
    "subtopic": "Exception Handling",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\nclass InsufficientFundsError(Exception):\n    pass\n\ndef withdraw(balance, amount):\n    if amount > balance:\n        raise InsufficientFundsError('Not enough funds')\n    return balance - amount\n\ntry:\n    withdraw(100, 150)\nexcept InsufficientFundsError as e:\n    print(f'Error: {e}')\n```",
    "options": [
      "Not enough funds",
      "-50",
      "Error: Not enough funds",
      "Error: Not enough funds!"
    ],
    "answer": "Error: Not enough funds"
  },
  {
    "id": "P-0151",
    "category": "Python",
    "subtopic": "Exception Handling",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\ntry:\n    raise ValueError('bad value')\nexcept Exception as e:\n    print(type(e).__name__, '-', e)\n```",
    "options": [
      "Exception - bad value",
      "bad value",
      "ValueError",
      "ValueError - bad value"
    ],
    "answer": "ValueError - bad value"
  },
  {
    "id": "P-0152",
    "category": "Python",
    "subtopic": "Exception Handling",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\ntry:\n    try:\n        1 / 0\n    except ZeroDivisionError:\n        raise ValueError('converted')\nexcept ValueError as e:\n    print(f'Caught: {e}')\n```",
    "options": [
      "ZeroDivisionError",
      "Caught: converted",
      "Caught: division by zero",
      "converted"
    ],
    "answer": "Caught: converted"
  },
  {
    "id": "P-0153",
    "category": "Python",
    "subtopic": "Sorting",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\nwords = ['apple', 'date', 'grapefruit', 'kiwi']\nprint(sorted(words, key=len))\n```",
    "options": [
      "['date', 'kiwi', 'apple', 'grapefruit']_v2",
      "['date', 'kiwi', 'apple', 'grapefruit']",
      "['apple', 'date', 'grapefruit', 'kiwi']",
      "['grapefruit', 'apple', 'date', 'kiwi']"
    ],
    "answer": "['date', 'kiwi', 'apple', 'grapefruit']"
  },
  {
    "id": "P-0154",
    "category": "Python",
    "subtopic": "Sorting",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\ndata = [('Ann', 36), ('Tom', 34), ('Tom', 26), ('Sam', 27)]\nprint(sorted(data, key=lambda x: x[1]))\n```",
    "options": [
      "[('Ann', 36), ('Tom', 34), ('Sam', 27), ('Tom', 26)]",
      "[('Tom', 26), ('Sam', 27), ('Tom', 34), ('Ann', 36)]",
      "[('Ann', 36), ('Sam', 27), ('Tom', 34), ('Tom', 26)]",
      "[('Ann', 36), ('Tom', 34), ('Tom', 26), ('Sam', 27)]"
    ],
    "answer": "[('Tom', 26), ('Sam', 27), ('Tom', 34), ('Ann', 36)]"
  },
  {
    "id": "P-0155",
    "category": "Python",
    "subtopic": "Sorting",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\ndata = [('A', 5), ('A', 9), ('A', 1), ('A', 9)]\nprint(sorted(data, key=lambda x: (x[0], -x[1])))\n```",
    "options": [
      "[('A', 9), ('A', 9), ('A', 5), ('A', 1)]_x",
      "[('A', 9), ('A', 9), ('A', 5), ('A', 1)]",
      "[('A', 5), ('A', 9), ('A', 1), ('A', 9)]",
      "[('A', 1), ('A', 5), ('A', 9), ('A', 9)]"
    ],
    "answer": "[('A', 9), ('A', 9), ('A', 5), ('A', 1)]"
  },
  {
    "id": "P-0156",
    "category": "Python",
    "subtopic": "Sorting",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\ndata = [('a', 2), ('b', 1), ('c', 2), ('d', 1)]\nprint(sorted(data, key=lambda x: x[1]))\n```",
    "options": [
      "[('b', 1), ('d', 1), ('a', 2), ('c', 2)]_x",
      "[('a', 2), ('b', 1), ('c', 2), ('d', 1)]",
      "[('b', 1), ('d', 1), ('a', 2), ('c', 2)]",
      "[('d', 1), ('b', 1), ('c', 2), ('a', 2)]"
    ],
    "answer": "[('b', 1), ('d', 1), ('a', 2), ('c', 2)]"
  },
  {
    "id": "P-0157",
    "category": "Python",
    "subtopic": "Decorators",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\ndef repeat(n):\n    def decorator(func):\n        def wrapper(*args):\n            results = []\n            for _ in range(n):\n                results.append(func(*args))\n            return results\n        return wrapper\n    return decorator\n\n@repeat(3)\ndef shout(word):\n    return word.upper()\n\nprint(shout('hi'))\n```",
    "options": [
      "['HI', 'HI']",
      "['HI']",
      "['HI', 'HI', 'HI']",
      "['hi', 'hi', 'hi']"
    ],
    "answer": "['HI', 'HI', 'HI']"
  },
  {
    "id": "P-0158",
    "category": "Python",
    "subtopic": "Generators",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\nprint(sum(x*x for x in range(6) if x % 2 == 1))\n```",
    "options": [
      "35",
      "33",
      "36",
      "55"
    ],
    "answer": "35"
  },
  {
    "id": "P-0159",
    "category": "Python",
    "subtopic": "Static & Class Methods",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\nclass Circle:\n    def __init__(self, radius):\n        self._radius = radius\n    @property\n    def area(self):\n        return round(3.14159 * self._radius ** 2, 2)\n\nc = Circle(92)\nprint(c.area)\n```",
    "options": [
      "26591.42",
      "8464",
      "13295.21",
      "26590.42"
    ],
    "answer": "26590.42"
  },
  {
    "id": "P-0160",
    "category": "Python",
    "subtopic": "Decorators",
    "difficulty": "hard",
    "question": "What is the output of the following code?\n\n```python\ndef memoize(func):\n    cache = {}\n    def wrapper(n):\n        if n not in cache:\n            cache[n] = func(n)\n        return cache[n]\n    return wrapper\n\ncalls = []\n@memoize\ndef square(n):\n    calls.append(n)\n    return n * n\n\nsquare(4)\nsquare(4)\nsquare(5)\nprint(calls)\n```",
    "options": [
      "[4, 5]_v2",
      "[4, 4, 5]",
      "[4, 5, 5]",
      "[4, 5]"
    ],
    "answer": "[4, 5]"
  },
  {
    "id": "C-0001",
    "category": "C Programming",
    "subtopic": "Basics & Operators",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int a = 13, b = 3;\n    printf(\"%d\", a - b);\n    return 0;\n}\n```",
    "options": [
      "9",
      "10",
      "11",
      "16"
    ],
    "answer": "10"
  },
  {
    "id": "C-0002",
    "category": "C Programming",
    "subtopic": "Basics & Operators",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int a = 14, b = 7;\n    printf(\"%d\", a % b);\n    return 0;\n}\n```",
    "options": [
      "1",
      "-1",
      "0",
      "21"
    ],
    "answer": "0"
  },
  {
    "id": "C-0003",
    "category": "C Programming",
    "subtopic": "Basics & Operators",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int a = 13, b = 2;\n    printf(\"%d\", a + b);\n    return 0;\n}\n```",
    "options": [
      "14",
      "13",
      "15",
      "16"
    ],
    "answer": "15"
  },
  {
    "id": "C-0004",
    "category": "C Programming",
    "subtopic": "Basics & Operators",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int a = 10, b = 9;\n    printf(\"%d\", a % b);\n    return 0;\n}\n```",
    "options": [
      "19",
      "1",
      "2",
      "0"
    ],
    "answer": "1"
  },
  {
    "id": "C-0005",
    "category": "C Programming",
    "subtopic": "Data Types",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    printf(\"%lu\", sizeof(char));\n    return 0;\n}\n```",
    "options": [
      "8",
      "4",
      "1",
      "2"
    ],
    "answer": "1"
  },
  {
    "id": "C-0006",
    "category": "C Programming",
    "subtopic": "Data Types",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    printf(\"%lu\", sizeof(float));\n    return 0;\n}\n```",
    "options": [
      "2",
      "1",
      "8",
      "4"
    ],
    "answer": "4"
  },
  {
    "id": "C-0007",
    "category": "C Programming",
    "subtopic": "Data Types",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    printf(\"%lu\", sizeof(int));\n    return 0;\n}\n```",
    "options": [
      "8",
      "1",
      "2",
      "4"
    ],
    "answer": "4"
  },
  {
    "id": "C-0008",
    "category": "C Programming",
    "subtopic": "Data Types",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    printf(\"%lu\", sizeof(double));\n    return 0;\n}\n```",
    "options": [
      "4",
      "1",
      "8",
      "2"
    ],
    "answer": "8"
  },
  {
    "id": "C-0009",
    "category": "C Programming",
    "subtopic": "Control Flow",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int n = -1;\n    if (n > 0) printf(\"positive\");\n    else if (n < 0) printf(\"negative\");\n    else printf(\"zero\");\n    return 0;\n}\n```",
    "options": [
      "negative",
      "negativeX",
      "positive",
      "zero"
    ],
    "answer": "negative"
  },
  {
    "id": "C-0010",
    "category": "C Programming",
    "subtopic": "Control Flow",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int n = 7;\n    if (n > 0) printf(\"positive\");\n    else if (n < 0) printf(\"negative\");\n    else printf(\"zero\");\n    return 0;\n}\n```",
    "options": [
      "positive",
      "zero",
      "positiveY",
      "negative"
    ],
    "answer": "positive"
  },
  {
    "id": "C-0011",
    "category": "C Programming",
    "subtopic": "Control Flow",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int n = -9;\n    if (n > 0) printf(\"positive\");\n    else if (n < 0) printf(\"negative\");\n    else printf(\"zero\");\n    return 0;\n}\n```",
    "options": [
      "negative",
      "positive",
      "zero",
      "negativeY"
    ],
    "answer": "negative"
  },
  {
    "id": "C-0012",
    "category": "C Programming",
    "subtopic": "Control Flow",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int n = -8;\n    if (n > 0) printf(\"positive\");\n    else if (n < 0) printf(\"negative\");\n    else printf(\"zero\");\n    return 0;\n}\n```",
    "options": [
      "negative",
      "zero",
      "negativeZ",
      "positive"
    ],
    "answer": "negative"
  },
  {
    "id": "C-0013",
    "category": "C Programming",
    "subtopic": "Loops",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int total = 0;\n    for (int i = 1; i <= 4; i++) {\n        total += i;\n    }\n    printf(\"%d\", total);\n    return 0;\n}\n```",
    "options": [
      "6",
      "11",
      "10",
      "4"
    ],
    "answer": "10"
  },
  {
    "id": "C-0014",
    "category": "C Programming",
    "subtopic": "Loops",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int total = 0;\n    for (int i = 1; i <= 6; i++) {\n        total += i;\n    }\n    printf(\"%d\", total);\n    return 0;\n}\n```",
    "options": [
      "21",
      "15",
      "28",
      "6"
    ],
    "answer": "21"
  },
  {
    "id": "C-0015",
    "category": "C Programming",
    "subtopic": "Loops",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int total = 0;\n    for (int i = 1; i <= 7; i++) {\n        total += i;\n    }\n    printf(\"%d\", total);\n    return 0;\n}\n```",
    "options": [
      "7",
      "29",
      "21",
      "28"
    ],
    "answer": "28"
  },
  {
    "id": "C-0016",
    "category": "C Programming",
    "subtopic": "Loops",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int total = 0;\n    for (int i = 1; i <= 8; i++) {\n        total += i;\n    }\n    printf(\"%d\", total);\n    return 0;\n}\n```",
    "options": [
      "28",
      "37",
      "36",
      "8"
    ],
    "answer": "36"
  },
  {
    "id": "C-0017",
    "category": "C Programming",
    "subtopic": "Arrays",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int arr[] = {42, 5, 4, 38, 43};\n    printf(\"%d\", arr[4]);\n    return 0;\n}\n```",
    "options": [
      "42",
      "43",
      "4",
      "40"
    ],
    "answer": "43"
  },
  {
    "id": "C-0018",
    "category": "C Programming",
    "subtopic": "Arrays",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int arr[] = {20, 19, 18, 14, 1};\n    printf(\"%d\", arr[0]);\n    return 0;\n}\n```",
    "options": [
      "20",
      "1",
      "18",
      "17"
    ],
    "answer": "20"
  },
  {
    "id": "C-0019",
    "category": "C Programming",
    "subtopic": "Arrays",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int arr[] = {6, 41, 23, 11, 25};\n    printf(\"%d\", arr[4]);\n    return 0;\n}\n```",
    "options": [
      "23",
      "25",
      "28",
      "6"
    ],
    "answer": "25"
  },
  {
    "id": "C-0020",
    "category": "C Programming",
    "subtopic": "Arrays",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int arr[] = {12, 36, 30, 3, 22};\n    printf(\"%d\", arr[3]);\n    return 0;\n}\n```",
    "options": [
      "3",
      "30",
      "22",
      "12"
    ],
    "answer": "3"
  },
  {
    "id": "C-0021",
    "category": "C Programming",
    "subtopic": "Strings",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    char str[] = \"Embedded\";\n    printf(\"%s\", str);\n    return 0;\n}\n```",
    "options": [
      "EMBEDDED",
      "embedded",
      "deddebmE",
      "Embedded"
    ],
    "answer": "Embedded"
  },
  {
    "id": "C-0022",
    "category": "C Programming",
    "subtopic": "Strings",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    char str[] = \"CIM\";\n    printf(\"%s\", str);\n    return 0;\n}\n```",
    "options": [
      "MIC",
      "cim",
      "CIMY",
      "CIM"
    ],
    "answer": "CIM"
  },
  {
    "id": "C-0023",
    "category": "C Programming",
    "subtopic": "Strings",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    char str[] = \"Sensor\";\n    printf(\"%s\", str);\n    return 0;\n}\n```",
    "options": [
      "Sensor",
      "SENSOR",
      "sensor",
      "rosneS"
    ],
    "answer": "Sensor"
  },
  {
    "id": "C-0024",
    "category": "C Programming",
    "subtopic": "Strings",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    char str[] = \"Compile\";\n    printf(\"%s\", str);\n    return 0;\n}\n```",
    "options": [
      "Compile",
      "COMPILE",
      "compile",
      "elipmoC"
    ],
    "answer": "Compile"
  },
  {
    "id": "C-0025",
    "category": "C Programming",
    "subtopic": "Operators",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int a = 19;\n    int b = a++;\n    printf(\"%d %d\", a, b);\n    return 0;\n}\n```",
    "options": [
      "20 20",
      "19 19",
      "20 19",
      "19 20"
    ],
    "answer": "20 19"
  },
  {
    "id": "C-0026",
    "category": "C Programming",
    "subtopic": "Operators",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int a = 5;\n    int b = ++a;\n    printf(\"%d %d\", a, b);\n    return 0;\n}\n```",
    "options": [
      "6 5",
      "5 5",
      "7 7",
      "6 6"
    ],
    "answer": "6 6"
  },
  {
    "id": "C-0027",
    "category": "C Programming",
    "subtopic": "Operators",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int a = 18;\n    int b = a++;\n    printf(\"%d %d\", a, b);\n    return 0;\n}\n```",
    "options": [
      "19 19",
      "19 18",
      "18 19",
      "18 18"
    ],
    "answer": "19 18"
  },
  {
    "id": "C-0028",
    "category": "C Programming",
    "subtopic": "Operators",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int a = 15;\n    int b = ++a;\n    printf(\"%d %d\", a, b);\n    return 0;\n}\n```",
    "options": [
      "17 17",
      "16 16",
      "15 15",
      "16 15"
    ],
    "answer": "16 16"
  },
  {
    "id": "C-0029",
    "category": "C Programming",
    "subtopic": "Control Flow",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int n = 2;\n    switch (n) {\n        case 1: printf(\"one\"); break;\n        case 2: printf(\"two\"); break;\n        case 3: printf(\"three\"); break;\n        default: printf(\"other\");\n    }\n    return 0;\n}\n```",
    "options": [
      "two",
      "one",
      "three",
      "other"
    ],
    "answer": "two"
  },
  {
    "id": "C-0030",
    "category": "C Programming",
    "subtopic": "Control Flow",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int n = 3;\n    switch (n) {\n        case 1: printf(\"one\"); break;\n        case 2: printf(\"two\"); break;\n        case 3: printf(\"three\"); break;\n        default: printf(\"other\");\n    }\n    return 0;\n}\n```",
    "options": [
      "one",
      "other",
      "two",
      "three"
    ],
    "answer": "three"
  },
  {
    "id": "C-0031",
    "category": "C Programming",
    "subtopic": "Control Flow",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int n = 1;\n    switch (n) {\n        case 1: printf(\"one\"); break;\n        case 2: printf(\"two\"); break;\n        case 3: printf(\"three\"); break;\n        default: printf(\"other\");\n    }\n    return 0;\n}\n```",
    "options": [
      "one",
      "two",
      "three",
      "other"
    ],
    "answer": "one"
  },
  {
    "id": "C-0032",
    "category": "C Programming",
    "subtopic": "Control Flow",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int n = 9;\n    switch (n) {\n        case 1: printf(\"one\"); break;\n        case 2: printf(\"two\"); break;\n        case 3: printf(\"three\"); break;\n        default: printf(\"other\");\n    }\n    return 0;\n}\n```",
    "options": [
      "other",
      "one",
      "two",
      "three"
    ],
    "answer": "other"
  },
  {
    "id": "C-0033",
    "category": "C Programming",
    "subtopic": "Operators",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int a = 31, b = 49;\n    printf(\"%d\", a > b ? a : b);\n    return 0;\n}\n```",
    "options": [
      "80",
      "49",
      "31",
      "59"
    ],
    "answer": "49"
  },
  {
    "id": "C-0034",
    "category": "C Programming",
    "subtopic": "Operators",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int a = 48, b = 49;\n    printf(\"%d\", a > b ? a : b);\n    return 0;\n}\n```",
    "options": [
      "49",
      "48",
      "51",
      "97"
    ],
    "answer": "49"
  },
  {
    "id": "C-0035",
    "category": "C Programming",
    "subtopic": "Operators",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int a = 1, b = 42;\n    printf(\"%d\", a > b ? a : b);\n    return 0;\n}\n```",
    "options": [
      "42",
      "43",
      "41",
      "1"
    ],
    "answer": "42"
  },
  {
    "id": "C-0036",
    "category": "C Programming",
    "subtopic": "Operators",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int a = 3, b = 19;\n    printf(\"%d\", a > b ? a : b);\n    return 0;\n}\n```",
    "options": [
      "22",
      "19",
      "3",
      "20"
    ],
    "answer": "19"
  },
  {
    "id": "C-0037",
    "category": "C Programming",
    "subtopic": "Functions",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint add(int x, int y) {\n    return x + y;\n}\n\nint main() {\n    printf(\"%d\", add(23, 28));\n    return 0;\n}\n```",
    "options": [
      "23",
      "52",
      "644",
      "51"
    ],
    "answer": "51"
  },
  {
    "id": "C-0038",
    "category": "C Programming",
    "subtopic": "Functions",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint add(int x, int y) {\n    return x + y;\n}\n\nint main() {\n    printf(\"%d\", add(19, 19));\n    return 0;\n}\n```",
    "options": [
      "38",
      "19",
      "361",
      "39"
    ],
    "answer": "38"
  },
  {
    "id": "C-0039",
    "category": "C Programming",
    "subtopic": "Functions",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint add(int x, int y) {\n    return x + y;\n}\n\nint main() {\n    printf(\"%d\", add(4, 1));\n    return 0;\n}\n```",
    "options": [
      "6",
      "7",
      "5",
      "4"
    ],
    "answer": "5"
  },
  {
    "id": "C-0040",
    "category": "C Programming",
    "subtopic": "Functions",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint add(int x, int y) {\n    return x + y;\n}\n\nint main() {\n    printf(\"%d\", add(12, 29));\n    return 0;\n}\n```",
    "options": [
      "42",
      "12",
      "41",
      "348"
    ],
    "answer": "41"
  },
  {
    "id": "C-0041",
    "category": "C Programming",
    "subtopic": "Data Types",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    char c = 'K';\n    printf(\"%d\", c);\n    return 0;\n}\n```",
    "options": [
      "75",
      "107",
      "76",
      "74"
    ],
    "answer": "75"
  },
  {
    "id": "C-0042",
    "category": "C Programming",
    "subtopic": "Data Types",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    char c = 'G';\n    printf(\"%d\", c);\n    return 0;\n}\n```",
    "options": [
      "71",
      "70",
      "103",
      "72"
    ],
    "answer": "71"
  },
  {
    "id": "C-0043",
    "category": "C Programming",
    "subtopic": "Data Types",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    char c = 'j';\n    printf(\"%d\", c);\n    return 0;\n}\n```",
    "options": [
      "74",
      "106",
      "105",
      "107"
    ],
    "answer": "106"
  },
  {
    "id": "C-0044",
    "category": "C Programming",
    "subtopic": "Data Types",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    char c = 'l';\n    printf(\"%d\", c);\n    return 0;\n}\n```",
    "options": [
      "108",
      "76",
      "107",
      "109"
    ],
    "answer": "108"
  },
  {
    "id": "C-0045",
    "category": "C Programming",
    "subtopic": "Operators",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int a = 12, b = 10;\n    printf(\"%d\", (a < 5) || (b > 5));\n    return 0;\n}\n```",
    "options": [
      "-1",
      "1",
      "2",
      "0"
    ],
    "answer": "1"
  },
  {
    "id": "C-0046",
    "category": "C Programming",
    "subtopic": "Operators",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int a = 15, b = 13;\n    printf(\"%d\", (a < 5) || (b < 5));\n    return 0;\n}\n```",
    "options": [
      "1",
      "0",
      "-1",
      "2"
    ],
    "answer": "0"
  },
  {
    "id": "C-0047",
    "category": "C Programming",
    "subtopic": "Operators",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int a = 9, b = 15;\n    printf(\"%d\", (a < 5) && (b > 5));\n    return 0;\n}\n```",
    "options": [
      "0",
      "2",
      "1",
      "-1"
    ],
    "answer": "0"
  },
  {
    "id": "C-0048",
    "category": "C Programming",
    "subtopic": "Operators",
    "difficulty": "easy",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int a = 12, b = 5;\n    printf(\"%d\", (a < 5) || (b > 5));\n    return 0;\n}\n```",
    "options": [
      "1",
      "0",
      "2",
      "-1"
    ],
    "answer": "0"
  },
  {
    "id": "C-0049",
    "category": "C Programming",
    "subtopic": "Pointers",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int x = 15;\n    int *p = &x;\n    printf(\"%d\", *p);\n    return 0;\n}\n```",
    "options": [
      "15",
      "0",
      "16",
      "14"
    ],
    "answer": "15"
  },
  {
    "id": "C-0050",
    "category": "C Programming",
    "subtopic": "Pointers",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int x = 20;\n    int *p = &x;\n    *p = *p + 19;\n    printf(\"%d\", x);\n    return 0;\n}\n```",
    "options": [
      "39",
      "40",
      "20",
      "19"
    ],
    "answer": "39"
  },
  {
    "id": "C-0051",
    "category": "C Programming",
    "subtopic": "Pointers",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int x = 83;\n    int *p = &x;\n    printf(\"%d\", *p);\n    return 0;\n}\n```",
    "options": [
      "82",
      "84",
      "0",
      "83"
    ],
    "answer": "83"
  },
  {
    "id": "C-0052",
    "category": "C Programming",
    "subtopic": "Pointers",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int x = 75;\n    int *p = &x;\n    *p = *p + 18;\n    printf(\"%d\", x);\n    return 0;\n}\n```",
    "options": [
      "75",
      "94",
      "93",
      "18"
    ],
    "answer": "93"
  },
  {
    "id": "C-0053",
    "category": "C Programming",
    "subtopic": "Pointers",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int x = 47;\n    int *p = &x;\n    printf(\"%d\", *p);\n    return 0;\n}\n```",
    "options": [
      "46",
      "47",
      "48",
      "0"
    ],
    "answer": "47"
  },
  {
    "id": "C-0054",
    "category": "C Programming",
    "subtopic": "Pointers",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int arr[] = {48, 44, 12, 6, 5};\n    int *p = arr;\n    printf(\"%d\", *(p + 3));\n    return 0;\n}\n```",
    "options": [
      "5",
      "12",
      "48",
      "6"
    ],
    "answer": "6"
  },
  {
    "id": "C-0055",
    "category": "C Programming",
    "subtopic": "Pointers",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int arr[] = {33, 38, 32, 37, 13};\n    int *p = arr + 3;\n    printf(\"%d\", *p);\n    return 0;\n}\n```",
    "options": [
      "32",
      "13",
      "37",
      "33"
    ],
    "answer": "37"
  },
  {
    "id": "C-0056",
    "category": "C Programming",
    "subtopic": "Pointers",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int arr[] = {12, 25, 34, 24, 44};\n    int *p = arr + 3;\n    printf(\"%d\", *p);\n    return 0;\n}\n```",
    "options": [
      "44",
      "24",
      "34",
      "12"
    ],
    "answer": "24"
  },
  {
    "id": "C-0057",
    "category": "C Programming",
    "subtopic": "Pointers",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int arr[] = {8, 37, 6, 11, 57};\n    int *p = arr;\n    printf(\"%d\", *(p + 1));\n    return 0;\n}\n```",
    "options": [
      "40",
      "8",
      "37",
      "57"
    ],
    "answer": "37"
  },
  {
    "id": "C-0058",
    "category": "C Programming",
    "subtopic": "Pointers",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int arr[] = {31, 52, 39, 55, 24};\n    int *p = arr;\n    printf(\"%d\", *(p + 2));\n    return 0;\n}\n```",
    "options": [
      "24",
      "52",
      "31",
      "39"
    ],
    "answer": "39"
  },
  {
    "id": "C-0059",
    "category": "C Programming",
    "subtopic": "Structures",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    struct Point { int x; int y; };\n    struct Point p1 = {35, 15};\n    printf(\"%d %d\", p1.x, p1.y);\n    return 0;\n}\n```",
    "options": [
      "35 15",
      "15 35",
      "35 35",
      "15 15"
    ],
    "answer": "35 15"
  },
  {
    "id": "C-0060",
    "category": "C Programming",
    "subtopic": "Structures",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    struct Point { int x; int y; };\n    struct Point p1 = {30, 42};\n    printf(\"%d %d\", p1.x, p1.y);\n    return 0;\n}\n```",
    "options": [
      "42 30",
      "42 42",
      "30 30",
      "30 42"
    ],
    "answer": "30 42"
  },
  {
    "id": "C-0061",
    "category": "C Programming",
    "subtopic": "Structures",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    struct Point { int x; int y; };\n    struct Point p1 = {12, 23};\n    printf(\"%d %d\", p1.x, p1.y);\n    return 0;\n}\n```",
    "options": [
      "12 23",
      "23 12",
      "12 12",
      "23 23"
    ],
    "answer": "12 23"
  },
  {
    "id": "C-0062",
    "category": "C Programming",
    "subtopic": "Structures",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    struct Point { int x; int y; };\n    struct Point p1 = {9, 31};\n    printf(\"%d %d\", p1.x, p1.y);\n    return 0;\n}\n```",
    "options": [
      "31 9",
      "9 31",
      "31 31",
      "9 9"
    ],
    "answer": "9 31"
  },
  {
    "id": "C-0063",
    "category": "C Programming",
    "subtopic": "Structures",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    struct Point { int x; int y; };\n    struct Point p1 = {45, 24};\n    printf(\"%d %d\", p1.x, p1.y);\n    return 0;\n}\n```",
    "options": [
      "45 45",
      "24 24",
      "24 45",
      "45 24"
    ],
    "answer": "45 24"
  },
  {
    "id": "C-0064",
    "category": "C Programming",
    "subtopic": "Structures",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n#include <string.h>\n\ntypedef struct {\n    char name[20];\n    int age;\n} Person;\n\nint main() {\n    Person p;\n    strcpy(p.name, \"Sam\");\n    p.age = 39;\n    printf(\"%s is %d\", p.name, p.age);\n    return 0;\n}\n```",
    "options": [
      "Sam is 40",
      "Sam is 39",
      "is 39",
      "Sam is 0"
    ],
    "answer": "Sam is 39"
  },
  {
    "id": "C-0065",
    "category": "C Programming",
    "subtopic": "Structures",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n#include <string.h>\n\ntypedef struct {\n    char name[20];\n    int age;\n} Person;\n\nint main() {\n    Person p;\n    strcpy(p.name, \"Alex\");\n    p.age = 40;\n    printf(\"%s is %d\", p.name, p.age);\n    return 0;\n}\n```",
    "options": [
      "is 40",
      "Alex is 40",
      "Alex is 0",
      "Alex is 41"
    ],
    "answer": "Alex is 40"
  },
  {
    "id": "C-0066",
    "category": "C Programming",
    "subtopic": "Structures",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n#include <string.h>\n\ntypedef struct {\n    char name[20];\n    int age;\n} Person;\n\nint main() {\n    Person p;\n    strcpy(p.name, \"Riya\");\n    p.age = 25;\n    printf(\"%s is %d\", p.name, p.age);\n    return 0;\n}\n```",
    "options": [
      "Riya is 25",
      "is 25",
      "Riya is 0",
      "Riya is 26"
    ],
    "answer": "Riya is 25"
  },
  {
    "id": "C-0067",
    "category": "C Programming",
    "subtopic": "Structures",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n#include <string.h>\n\ntypedef struct {\n    char name[20];\n    int age;\n} Person;\n\nint main() {\n    Person p;\n    strcpy(p.name, \"Alex\");\n    p.age = 39;\n    printf(\"%s is %d\", p.name, p.age);\n    return 0;\n}\n```",
    "options": [
      "Alex is 40",
      "Alex is 39",
      "Alex is 0",
      "is 39"
    ],
    "answer": "Alex is 39"
  },
  {
    "id": "C-0068",
    "category": "C Programming",
    "subtopic": "Structures",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n#include <string.h>\n\ntypedef struct {\n    char name[20];\n    int age;\n} Person;\n\nint main() {\n    Person p;\n    strcpy(p.name, \"Sam\");\n    p.age = 31;\n    printf(\"%s is %d\", p.name, p.age);\n    return 0;\n}\n```",
    "options": [
      "Sam is 31",
      "is 31",
      "Sam is 0",
      "Sam is 32"
    ],
    "answer": "Sam is 31"
  },
  {
    "id": "C-0069",
    "category": "C Programming",
    "subtopic": "Arrays",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int arr[2][3] = {{12, 18, 15}, {6, 19, 4}};\n    printf(\"%d\", arr[0][2]);\n    return 0;\n}\n```",
    "options": [
      "16",
      "12",
      "15",
      "4"
    ],
    "answer": "15"
  },
  {
    "id": "C-0070",
    "category": "C Programming",
    "subtopic": "Arrays",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int arr[2][3] = {{17, 9, 9}, {8, 1, 8}};\n    printf(\"%d\", arr[1][1]);\n    return 0;\n}\n```",
    "options": [
      "2",
      "1",
      "17",
      "8"
    ],
    "answer": "1"
  },
  {
    "id": "C-0071",
    "category": "C Programming",
    "subtopic": "Arrays",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int arr[2][3] = {{2, 14, 14}, {15, 10, 12}};\n    printf(\"%d\", arr[0][2]);\n    return 0;\n}\n```",
    "options": [
      "12",
      "15",
      "2",
      "14"
    ],
    "answer": "14"
  },
  {
    "id": "C-0072",
    "category": "C Programming",
    "subtopic": "Arrays",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int arr[2][3] = {{15, 9, 11}, {9, 11, 14}};\n    printf(\"%d\", arr[1][2]);\n    return 0;\n}\n```",
    "options": [
      "17",
      "14",
      "15",
      "16"
    ],
    "answer": "14"
  },
  {
    "id": "C-0073",
    "category": "C Programming",
    "subtopic": "Arrays",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int arr[2][3] = {{12, 3, 17}, {7, 9, 14}};\n    printf(\"%d\", arr[1][2]);\n    return 0;\n}\n```",
    "options": [
      "16",
      "12",
      "14",
      "15"
    ],
    "answer": "14"
  },
  {
    "id": "C-0074",
    "category": "C Programming",
    "subtopic": "Strings",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char s1[20] = \"Code\";\n    char s2[] = \"Base\";\n    strcat(s1, s2);\n    printf(\"%s\", s1);\n    return 0;\n}\n```",
    "options": [
      "Code",
      "BaseCode",
      "Base",
      "CodeBase"
    ],
    "answer": "CodeBase"
  },
  {
    "id": "C-0075",
    "category": "C Programming",
    "subtopic": "Strings",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char s[] = \"TestWorld\";\n    printf(\"%lu\", strlen(s));\n    return 0;\n}\n```",
    "options": [
      "8",
      "9",
      "10",
      "4"
    ],
    "answer": "9"
  },
  {
    "id": "C-0076",
    "category": "C Programming",
    "subtopic": "Strings",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char s1[20] = \"Hello\";\n    char s2[] = \"Base\";\n    strcat(s1, s2);\n    printf(\"%s\", s1);\n    return 0;\n}\n```",
    "options": [
      "BaseHello",
      "Base",
      "Hello",
      "HelloBase"
    ],
    "answer": "HelloBase"
  },
  {
    "id": "C-0077",
    "category": "C Programming",
    "subtopic": "Strings",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char s[] = \"CodeRun\";\n    printf(\"%lu\", strlen(s));\n    return 0;\n}\n```",
    "options": [
      "4",
      "8",
      "6",
      "7"
    ],
    "answer": "7"
  },
  {
    "id": "C-0078",
    "category": "C Programming",
    "subtopic": "Strings",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char s[] = \"HelloRun\";\n    printf(\"%lu\", strlen(s));\n    return 0;\n}\n```",
    "options": [
      "5",
      "8",
      "7",
      "9"
    ],
    "answer": "8"
  },
  {
    "id": "C-0079",
    "category": "C Programming",
    "subtopic": "Bitwise Operators",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int a = 1, b = 5;\n    printf(\"%d\", a & b);\n    return 0;\n}\n```",
    "options": [
      "0",
      "2",
      "1",
      "6"
    ],
    "answer": "1"
  },
  {
    "id": "C-0080",
    "category": "C Programming",
    "subtopic": "Bitwise Operators",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int a = 9;\n    printf(\"%d\", a >> 1);\n    return 0;\n}\n```",
    "options": [
      "9",
      "2",
      "5",
      "4"
    ],
    "answer": "4"
  },
  {
    "id": "C-0081",
    "category": "C Programming",
    "subtopic": "Bitwise Operators",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int a = 7;\n    printf(\"%d\", a >> 3);\n    return 0;\n}\n```",
    "options": [
      "0",
      "1",
      "3",
      "7"
    ],
    "answer": "0"
  },
  {
    "id": "C-0082",
    "category": "C Programming",
    "subtopic": "Bitwise Operators",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int a = 5, b = 5;\n    printf(\"%d\", a & b);\n    return 0;\n}\n```",
    "options": [
      "4",
      "6",
      "5",
      "10"
    ],
    "answer": "5"
  },
  {
    "id": "C-0083",
    "category": "C Programming",
    "subtopic": "Bitwise Operators",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int a = 7, b = 11;\n    printf(\"%d\", a & b);\n    return 0;\n}\n```",
    "options": [
      "18",
      "4",
      "7",
      "3"
    ],
    "answer": "3"
  },
  {
    "id": "C-0084",
    "category": "C Programming",
    "subtopic": "Operator Precedence",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int a = 4, b = 4, c = 5;\n    printf(\"%d\", a + b * c - a / b);\n    return 0;\n}\n```",
    "options": [
      "22",
      "39",
      "23",
      "24"
    ],
    "answer": "23"
  },
  {
    "id": "C-0085",
    "category": "C Programming",
    "subtopic": "Operator Precedence",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int a = 6, b = 5, c = 3;\n    printf(\"%d\", a + b * c - a / b);\n    return 0;\n}\n```",
    "options": [
      "20",
      "23",
      "32",
      "21"
    ],
    "answer": "20"
  },
  {
    "id": "C-0086",
    "category": "C Programming",
    "subtopic": "Operator Precedence",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int a = 3, b = 8, c = 7;\n    printf(\"%d\", a + b * c - a / b);\n    return 0;\n}\n```",
    "options": [
      "61",
      "59",
      "77",
      "60"
    ],
    "answer": "59"
  },
  {
    "id": "C-0087",
    "category": "C Programming",
    "subtopic": "Operator Precedence",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int a = 6, b = 7, c = 4;\n    printf(\"%d\", a + b * c - a / b);\n    return 0;\n}\n```",
    "options": [
      "34",
      "32",
      "35",
      "52"
    ],
    "answer": "34"
  },
  {
    "id": "C-0088",
    "category": "C Programming",
    "subtopic": "Operator Precedence",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int a = 8, b = 4, c = 3;\n    printf(\"%d\", a + b * c - a / b);\n    return 0;\n}\n```",
    "options": [
      "19",
      "20",
      "34",
      "18"
    ],
    "answer": "18"
  },
  {
    "id": "C-0089",
    "category": "C Programming",
    "subtopic": "Storage Classes",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint counter() {\n    static int count = 2;\n    count++;\n    return count;\n}\n\nint main() {\n    for (int i = 0; i < 2; i++) {\n        printf(\"%d \", counter());\n    }\n    return 0;\n}\n```",
    "options": [
      "3 3",
      "0 1",
      "2 2",
      "3 4 "
    ],
    "answer": "3 4 "
  },
  {
    "id": "C-0090",
    "category": "C Programming",
    "subtopic": "Storage Classes",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint counter() {\n    static int count = 0;\n    count++;\n    return count;\n}\n\nint main() {\n    for (int i = 0; i < 3; i++) {\n        printf(\"%d \", counter());\n    }\n    return 0;\n}\n```",
    "options": [
      "1 2 3 ",
      "1 1 1 ",
      "0 1 2 ",
      "3 3 3 "
    ],
    "answer": "1 2 3 "
  },
  {
    "id": "C-0091",
    "category": "C Programming",
    "subtopic": "Storage Classes",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint counter() {\n    static int count = 1;\n    count++;\n    return count;\n}\n\nint main() {\n    for (int i = 0; i < 2; i++) {\n        printf(\"%d \", counter());\n    }\n    return 0;\n}\n```",
    "options": [
      "0 1",
      "1 1",
      "2 2",
      "2 3 "
    ],
    "answer": "2 3 "
  },
  {
    "id": "C-0092",
    "category": "C Programming",
    "subtopic": "Storage Classes",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint counter() {\n    static int count = 5;\n    count++;\n    return count;\n}\n\nint main() {\n    for (int i = 0; i < 4; i++) {\n        printf(\"%d \", counter());\n    }\n    return 0;\n}\n```",
    "options": [
      "6 7 8 9 ",
      "6 6 6 6 ",
      "5 5 5 5 ",
      "6 7 8 "
    ],
    "answer": "6 7 8 9 "
  },
  {
    "id": "C-0093",
    "category": "C Programming",
    "subtopic": "Storage Classes",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint counter() {\n    static int count = 1;\n    count++;\n    return count;\n}\n\nint main() {\n    for (int i = 0; i < 4; i++) {\n        printf(\"%d \", counter());\n    }\n    return 0;\n}\n```",
    "options": [
      "0 1 2 3",
      "2 3 4 5 ",
      "2 2 2 2",
      "1 1 1 1"
    ],
    "answer": "2 3 4 5 "
  },
  {
    "id": "C-0094",
    "category": "C Programming",
    "subtopic": "Functions",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint sumArr(int a[], int n) {\n    int s = 0;\n    for (int i = 0; i < n; i++) s += a[i];\n    return s;\n}\n\nint main() {\n    int arr[] = {27, 46, 19, 12};\n    printf(\"%d\", sumArr(arr, 4));\n    return 0;\n}\n```",
    "options": [
      "77",
      "104",
      "27",
      "105"
    ],
    "answer": "104"
  },
  {
    "id": "C-0095",
    "category": "C Programming",
    "subtopic": "Functions",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint sumArr(int a[], int n) {\n    int s = 0;\n    for (int i = 0; i < n; i++) s += a[i];\n    return s;\n}\n\nint main() {\n    int arr[] = {18, 14, 17, 46};\n    printf(\"%d\", sumArr(arr, 4));\n    return 0;\n}\n```",
    "options": [
      "95",
      "96",
      "18",
      "77"
    ],
    "answer": "95"
  },
  {
    "id": "C-0096",
    "category": "C Programming",
    "subtopic": "Functions",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint sumArr(int a[], int n) {\n    int s = 0;\n    for (int i = 0; i < n; i++) s += a[i];\n    return s;\n}\n\nint main() {\n    int arr[] = {39, 13, 10, 33};\n    printf(\"%d\", sumArr(arr, 4));\n    return 0;\n}\n```",
    "options": [
      "96",
      "95",
      "39",
      "56"
    ],
    "answer": "95"
  },
  {
    "id": "C-0097",
    "category": "C Programming",
    "subtopic": "Functions",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint sumArr(int a[], int n) {\n    int s = 0;\n    for (int i = 0; i < n; i++) s += a[i];\n    return s;\n}\n\nint main() {\n    int arr[] = {24, 49, 2, 6};\n    printf(\"%d\", sumArr(arr, 4));\n    return 0;\n}\n```",
    "options": [
      "82",
      "24",
      "81",
      "57"
    ],
    "answer": "81"
  },
  {
    "id": "C-0098",
    "category": "C Programming",
    "subtopic": "Functions",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint sumArr(int a[], int n) {\n    int s = 0;\n    for (int i = 0; i < n; i++) s += a[i];\n    return s;\n}\n\nint main() {\n    int arr[] = {13, 31, 41, 39};\n    printf(\"%d\", sumArr(arr, 4));\n    return 0;\n}\n```",
    "options": [
      "124",
      "13",
      "125",
      "111"
    ],
    "answer": "124"
  },
  {
    "id": "C-0099",
    "category": "C Programming",
    "subtopic": "Dynamic Memory",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *arr = (int *)malloc(5 * sizeof(int));\n    arr[0] = 13;\n    arr[1] = 12;\n    arr[2] = 11;\n    arr[3] = 6;\n    arr[4] = 9;\n    int sum = 0;\n    for (int i = 0; i < 5; i++) sum += arr[i];\n    printf(\"%d\", sum);\n    free(arr);\n    return 0;\n}\n```",
    "options": [
      "52",
      "13",
      "38",
      "51"
    ],
    "answer": "51"
  },
  {
    "id": "C-0100",
    "category": "C Programming",
    "subtopic": "Dynamic Memory",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *arr = (int *)malloc(4 * sizeof(int));\n    arr[0] = 26;\n    arr[1] = 25;\n    arr[2] = 8;\n    arr[3] = 14;\n    int sum = 0;\n    for (int i = 0; i < 4; i++) sum += arr[i];\n    printf(\"%d\", sum);\n    free(arr);\n    return 0;\n}\n```",
    "options": [
      "73",
      "74",
      "47",
      "26"
    ],
    "answer": "73"
  },
  {
    "id": "C-0101",
    "category": "C Programming",
    "subtopic": "Dynamic Memory",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *arr = (int *)malloc(3 * sizeof(int));\n    arr[0] = 9;\n    arr[1] = 27;\n    arr[2] = 19;\n    int sum = 0;\n    for (int i = 0; i < 3; i++) sum += arr[i];\n    printf(\"%d\", sum);\n    free(arr);\n    return 0;\n}\n```",
    "options": [
      "9",
      "56",
      "55",
      "46"
    ],
    "answer": "55"
  },
  {
    "id": "C-0102",
    "category": "C Programming",
    "subtopic": "Dynamic Memory",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *arr = (int *)malloc(3 * sizeof(int));\n    arr[0] = 19;\n    arr[1] = 28;\n    arr[2] = 8;\n    int sum = 0;\n    for (int i = 0; i < 3; i++) sum += arr[i];\n    printf(\"%d\", sum);\n    free(arr);\n    return 0;\n}\n```",
    "options": [
      "56",
      "36",
      "55",
      "19"
    ],
    "answer": "55"
  },
  {
    "id": "C-0103",
    "category": "C Programming",
    "subtopic": "Dynamic Memory",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *arr = (int *)malloc(3 * sizeof(int));\n    arr[0] = 15;\n    arr[1] = 5;\n    arr[2] = 3;\n    int sum = 0;\n    for (int i = 0; i < 3; i++) sum += arr[i];\n    printf(\"%d\", sum);\n    free(arr);\n    return 0;\n}\n```",
    "options": [
      "8",
      "15",
      "24",
      "23"
    ],
    "answer": "23"
  },
  {
    "id": "C-0104",
    "category": "C Programming",
    "subtopic": "Control Flow",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int n = 1;\n    switch (n) {\n        case 1: printf(\"one \");\n        case 2: printf(\"two \");\n        case 3: printf(\"three\");\n        break;\n        default: printf(\"other\");\n    }\n    return 0;\n}\n```",
    "options": [
      "one two threeY",
      "one",
      "two three",
      "one two three"
    ],
    "answer": "one two three"
  },
  {
    "id": "C-0105",
    "category": "C Programming",
    "subtopic": "Control Flow",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int n = 9;\n    switch (n) {\n        case 1: printf(\"one \");\n        case 2: printf(\"two \");\n        case 3: printf(\"three\");\n        break;\n        default: printf(\"other\");\n    }\n    return 0;\n}\n```",
    "options": [
      "other",
      "one two three",
      "two three",
      "three"
    ],
    "answer": "other"
  },
  {
    "id": "C-0106",
    "category": "C Programming",
    "subtopic": "Control Flow",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int n = 3;\n    switch (n) {\n        case 1: printf(\"one \");\n        case 2: printf(\"two \");\n        case 3: printf(\"three\");\n        break;\n        default: printf(\"other\");\n    }\n    return 0;\n}\n```",
    "options": [
      "three",
      "one two three",
      "two three",
      "other"
    ],
    "answer": "three"
  },
  {
    "id": "C-0107",
    "category": "C Programming",
    "subtopic": "Control Flow",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int n = 2;\n    switch (n) {\n        case 1: printf(\"one \");\n        case 2: printf(\"two \");\n        case 3: printf(\"three\");\n        break;\n        default: printf(\"other\");\n    }\n    return 0;\n}\n```",
    "options": [
      "one",
      "one two three",
      "two threeY",
      "two three"
    ],
    "answer": "two three"
  },
  {
    "id": "C-0108",
    "category": "C Programming",
    "subtopic": "Operators",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int a, x;\n    x = (a = 7, a + 5);\n    printf(\"%d\", x);\n    return 0;\n}\n```",
    "options": [
      "7",
      "11",
      "12",
      "13"
    ],
    "answer": "12"
  },
  {
    "id": "C-0109",
    "category": "C Programming",
    "subtopic": "Operators",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int a, x;\n    x = (a = 11, a + 5);\n    printf(\"%d\", x);\n    return 0;\n}\n```",
    "options": [
      "15",
      "17",
      "16",
      "11"
    ],
    "answer": "16"
  },
  {
    "id": "C-0110",
    "category": "C Programming",
    "subtopic": "Operators",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int a, x;\n    x = (a = 12, a + 5);\n    printf(\"%d\", x);\n    return 0;\n}\n```",
    "options": [
      "16",
      "18",
      "17",
      "12"
    ],
    "answer": "17"
  },
  {
    "id": "C-0111",
    "category": "C Programming",
    "subtopic": "Operators",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int a, x;\n    x = (a = 15, a + 5);\n    printf(\"%d\", x);\n    return 0;\n}\n```",
    "options": [
      "21",
      "19",
      "20",
      "15"
    ],
    "answer": "20"
  },
  {
    "id": "C-0112",
    "category": "C Programming",
    "subtopic": "Structures",
    "difficulty": "medium",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    struct Point { int x; int y; };\n    struct Point p1 = {19, 48};\n    struct Point *ptr = &p1;\n    printf(\"%d %d\", ptr->x, ptr->y);\n    return 0;\n}\n```",
    "options": [
      "48 48",
      "19 48",
      "19 19",
      "48 19"
    ],
    "answer": "19 48"
  },
  {
    "id": "C-0113",
    "category": "C Programming",
    "subtopic": "Pointers",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int x = 38;\n    int *p = &x;\n    int **pp = &p;\n    **pp = **pp + 1;\n    printf(\"%d\", x);\n    return 0;\n}\n```",
    "options": [
      "38",
      "39",
      "1",
      "40"
    ],
    "answer": "39"
  },
  {
    "id": "C-0114",
    "category": "C Programming",
    "subtopic": "Pointers",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int x = 79;\n    int *p = &x;\n    int **pp = &p;\n    **pp = **pp + 4;\n    printf(\"%d\", x);\n    return 0;\n}\n```",
    "options": [
      "4",
      "83",
      "79",
      "84"
    ],
    "answer": "83"
  },
  {
    "id": "C-0115",
    "category": "C Programming",
    "subtopic": "Pointers",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int x = 85;\n    int *p = &x;\n    int **pp = &p;\n    **pp = **pp + 17;\n    printf(\"%d\", x);\n    return 0;\n}\n```",
    "options": [
      "103",
      "85",
      "102",
      "17"
    ],
    "answer": "102"
  },
  {
    "id": "C-0116",
    "category": "C Programming",
    "subtopic": "Pointers",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int x = 48;\n    int *p = &x;\n    int **pp = &p;\n    **pp = **pp + 10;\n    printf(\"%d\", x);\n    return 0;\n}\n```",
    "options": [
      "59",
      "10",
      "48",
      "58"
    ],
    "answer": "58"
  },
  {
    "id": "C-0117",
    "category": "C Programming",
    "subtopic": "Pointers",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int x = 34;\n    int *p = &x;\n    int **pp = &p;\n    **pp = **pp + 20;\n    printf(\"%d\", x);\n    return 0;\n}\n```",
    "options": [
      "20",
      "55",
      "34",
      "54"
    ],
    "answer": "54"
  },
  {
    "id": "C-0118",
    "category": "C Programming",
    "subtopic": "Function Pointers",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint mul(int x, int y) {\n    return x * y;\n}\n\nint main() {\n    int (*fp)(int, int) = mul;\n    printf(\"%d\", fp(17, 8));\n    return 0;\n}\n```",
    "options": [
      "137",
      "136",
      "8",
      "17"
    ],
    "answer": "136"
  },
  {
    "id": "C-0119",
    "category": "C Programming",
    "subtopic": "Function Pointers",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint add(int x, int y) {\n    return x + y;\n}\n\nint main() {\n    int (*fp)(int, int) = add;\n    printf(\"%d\", fp(29, 10));\n    return 0;\n}\n```",
    "options": [
      "39",
      "40",
      "10",
      "29"
    ],
    "answer": "39"
  },
  {
    "id": "C-0120",
    "category": "C Programming",
    "subtopic": "Function Pointers",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint add(int x, int y) {\n    return x + y;\n}\n\nint main() {\n    int (*fp)(int, int) = add;\n    printf(\"%d\", fp(27, 9));\n    return 0;\n}\n```",
    "options": [
      "27",
      "37",
      "9",
      "36"
    ],
    "answer": "36"
  },
  {
    "id": "C-0121",
    "category": "C Programming",
    "subtopic": "Function Pointers",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint add(int x, int y) {\n    return x + y;\n}\n\nint main() {\n    int (*fp)(int, int) = add;\n    printf(\"%d\", fp(15, 2));\n    return 0;\n}\n```",
    "options": [
      "18",
      "2",
      "15",
      "17"
    ],
    "answer": "17"
  },
  {
    "id": "C-0122",
    "category": "C Programming",
    "subtopic": "Function Pointers",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint sub(int x, int y) {\n    return x - y;\n}\n\nint main() {\n    int (*fp)(int, int) = sub;\n    printf(\"%d\", fp(15, 4));\n    return 0;\n}\n```",
    "options": [
      "12",
      "4",
      "15",
      "11"
    ],
    "answer": "11"
  },
  {
    "id": "C-0123",
    "category": "C Programming",
    "subtopic": "Unions",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    union Data { int i; char c[4]; };\n    union Data d;\n    d.i = 65;\n    printf(\"%d %c\", d.i, d.c[0]);\n    return 0;\n}\n```",
    "options": [
      "A A",
      "65 A",
      "65 65",
      "65 B"
    ],
    "answer": "65 A"
  },
  {
    "id": "C-0124",
    "category": "C Programming",
    "subtopic": "Unions",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    union Data { int i; double d; char c; };\n    printf(\"%lu\", sizeof(union Data));\n    return 0;\n}\n```",
    "options": [
      "1",
      "8",
      "4",
      "13"
    ],
    "answer": "8"
  },
  {
    "id": "C-0125",
    "category": "C Programming",
    "subtopic": "Unions",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    union Data { int i; short s; };\n    union Data d;\n    d.i = 1000;\n    d.s = 5;\n    printf(\"%d %d\", d.i, d.s);\n    return 0;\n}\n```",
    "options": [
      "5 5",
      "5 1000",
      "1000 1000",
      "1000 5"
    ],
    "answer": "5 5"
  },
  {
    "id": "C-0126",
    "category": "C Programming",
    "subtopic": "Unions",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    union U { int x; int y; };\n    union U u;\n    u.x = 42;\n    printf(\"%d\", u.y);\n    return 0;\n}\n```",
    "options": [
      "42",
      "0",
      "21",
      "84"
    ],
    "answer": "42"
  },
  {
    "id": "C-0127",
    "category": "C Programming",
    "subtopic": "Const & Pointers",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int x = 35;\n    const int *p = &x;\n    printf(\"%d\", *p);\n    return 0;\n}\n```",
    "options": [
      "0",
      "35",
      "34",
      "36"
    ],
    "answer": "35"
  },
  {
    "id": "C-0128",
    "category": "C Programming",
    "subtopic": "Const & Pointers",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int x = 32, y = 63;\n    const int *p = &x;\n    p = &y;\n    printf(\"%d\", *p);\n    return 0;\n}\n```",
    "options": [
      "95",
      "63",
      "32",
      "0"
    ],
    "answer": "63"
  },
  {
    "id": "C-0129",
    "category": "C Programming",
    "subtopic": "Const & Pointers",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int x = 3;\n    int * const p = &x;\n    *p = *p + 6;\n    printf(\"%d\", x);\n    return 0;\n}\n```",
    "options": [
      "10",
      "9",
      "6",
      "3"
    ],
    "answer": "9"
  },
  {
    "id": "C-0130",
    "category": "C Programming",
    "subtopic": "Const & Pointers",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint sumConst(const int a[], int n) {\n    int s = 0;\n    for (int i = 0; i < n; i++) s += a[i];\n    return s;\n}\n\nint main() {\n    int arr[] = {10, 22, 32, 16};\n    printf(\"%d\", sumConst(arr, 4));\n    return 0;\n}\n```",
    "options": [
      "81",
      "70",
      "80",
      "10"
    ],
    "answer": "80"
  },
  {
    "id": "C-0131",
    "category": "C Programming",
    "subtopic": "Operators",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int a = 7;\n    int b = a++;\n    int c = ++a;\n    printf(\"%d %d %d\", a, b, c);\n    return 0;\n}\n```",
    "options": [
      "9 7 8",
      "9 7 9",
      "8 7 8",
      "7 7 7"
    ],
    "answer": "9 7 9"
  },
  {
    "id": "C-0132",
    "category": "C Programming",
    "subtopic": "Operators",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int a = 7;\n    a--;\n    int b = --a;\n    int c = a--;\n    printf(\"%d %d %d\", a, b, c);\n    return 0;\n}\n```",
    "options": [
      "4 5 5",
      "7 7 7",
      "6 6 6",
      "5 4 5"
    ],
    "answer": "4 5 5"
  },
  {
    "id": "C-0133",
    "category": "C Programming",
    "subtopic": "Operators",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int arr[] = {40, 31, 22, 43};\n    int i = 0;\n    int v1 = arr[i++];\n    int v2 = arr[i++];\n    printf(\"%d %d %d\", v1, v2, i);\n    return 0;\n}\n```",
    "options": [
      "31 40 2",
      "40 31 1",
      "40 31 2",
      "40 40 0"
    ],
    "answer": "40 31 2"
  },
  {
    "id": "C-0134",
    "category": "C Programming",
    "subtopic": "Operators",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int x = 19;\n    x += x++;\n    printf(\"%d\", x);\n    return 0;\n}\n```",
    "options": [
      "38",
      "19",
      "39",
      "40"
    ],
    "answer": "39"
  },
  {
    "id": "C-0135",
    "category": "C Programming",
    "subtopic": "Recursion",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint fact(int n) {\n    if (n <= 1) return 1;\n    return n * fact(n - 1);\n}\n\nint main() {\n    printf(\"%d\", fact(8));\n    return 0;\n}\n```",
    "options": [
      "40328",
      "40320",
      "5040",
      "64"
    ],
    "answer": "40320"
  },
  {
    "id": "C-0136",
    "category": "C Programming",
    "subtopic": "Recursion",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint fib(int n) {\n    if (n <= 1) return n;\n    return fib(n-1) + fib(n-2);\n}\n\nint main() {\n    printf(\"%d\", fib(8));\n    return 0;\n}\n```",
    "options": [
      "20",
      "22",
      "8",
      "21"
    ],
    "answer": "21"
  },
  {
    "id": "C-0137",
    "category": "C Programming",
    "subtopic": "Recursion",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint sumDigits(int n) {\n    if (n == 0) return 0;\n    return n % 10 + sumDigits(n / 10);\n}\n\nint main() {\n    printf(\"%d\", sumDigits(700));\n    return 0;\n}\n```",
    "options": [
      "7",
      "700",
      "6",
      "8"
    ],
    "answer": "7"
  },
  {
    "id": "C-0138",
    "category": "C Programming",
    "subtopic": "Recursion",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint power(int b, int e) {\n    if (e == 0) return 1;\n    return b * power(b, e - 1);\n}\n\nint main() {\n    printf(\"%d\", power(2, 3));\n    return 0;\n}\n```",
    "options": [
      "9",
      "8",
      "6",
      "4"
    ],
    "answer": "8"
  },
  {
    "id": "C-0139",
    "category": "C Programming",
    "subtopic": "Recursion",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint gcd(int a, int b) {\n    if (b == 0) return a;\n    return gcd(b, a % b);\n}\n\nint main() {\n    printf(\"%d\", gcd(71, 3));\n    return 0;\n}\n```",
    "options": [
      "1",
      "71",
      "2",
      "3"
    ],
    "answer": "1"
  },
  {
    "id": "C-0140",
    "category": "C Programming",
    "subtopic": "Sizeof",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int arr[6];\n    int *p = arr;\n    printf(\"%lu %lu\", sizeof(arr), sizeof(p));\n    return 0;\n}\n```",
    "options": [
      "24 8",
      "8 8",
      "24 24",
      "6 6"
    ],
    "answer": "24 8"
  },
  {
    "id": "C-0141",
    "category": "C Programming",
    "subtopic": "Sizeof",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    char arr[] = \"Hello\";\n    char *p = arr;\n    printf(\"%lu %lu\", sizeof(arr), sizeof(p));\n    return 0;\n}\n```",
    "options": [
      "6 8",
      "6 6",
      "8 8",
      "5 5"
    ],
    "answer": "6 8"
  },
  {
    "id": "C-0142",
    "category": "C Programming",
    "subtopic": "Sizeof",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int arr[2][3];\n    printf(\"%lu\", sizeof(arr));\n    return 0;\n}\n```",
    "options": [
      "24",
      "48",
      "6",
      "12"
    ],
    "answer": "24"
  },
  {
    "id": "C-0143",
    "category": "C Programming",
    "subtopic": "Sizeof",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    struct S { char c; int i; };\n    printf(\"%d\", sizeof(struct S) >= 5);\n    return 0;\n}\n```",
    "options": [
      "5",
      "0",
      "1",
      "2"
    ],
    "answer": "1"
  },
  {
    "id": "C-0144",
    "category": "C Programming",
    "subtopic": "Pointers",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    char *arr[] = {\"dog\", \"sun\", \"red\"};\n    printf(\"%s\", arr[2]);\n    return 0;\n}\n```",
    "options": [
      "dog",
      "sun",
      "red",
      "dogx"
    ],
    "answer": "red"
  },
  {
    "id": "C-0145",
    "category": "C Programming",
    "subtopic": "Structures",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    struct Point { int x; int y; };\n    struct Point arr[] = {{25, 18}, {25, 3}, {24, 4}};\n    struct Point *p = arr;\n    printf(\"%d %d\", (p + 1)->x, (p + 1)->y);\n    return 0;\n}\n```",
    "options": [
      "24 4",
      "25 3",
      "3 25",
      "0 0"
    ],
    "answer": "25 3"
  },
  {
    "id": "C-0146",
    "category": "C Programming",
    "subtopic": "Pointers",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    int arr[] = {19, 17, 24, 1};\n    int *p = arr;\n    int sum = 0;\n    for (int i = 0; i < 4; i++) {\n        sum += *(p + i);\n    }\n    printf(\"%d\", sum);\n    return 0;\n}\n```",
    "options": [
      "19",
      "42",
      "62",
      "61"
    ],
    "answer": "61"
  },
  {
    "id": "C-0147",
    "category": "C Programming",
    "subtopic": "Structures",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    struct Point { int x; int y; };\n    struct Point a = {20, 15};\n    struct Point b = {1, 5};\n    struct Point *arr[] = {&a, &b};\n    printf(\"%d %d\", arr[0]->x, arr[1]->y);\n    return 0;\n}\n```",
    "options": [
      "1 15",
      "0 0",
      "15 1",
      "20 5"
    ],
    "answer": "20 5"
  },
  {
    "id": "C-0148",
    "category": "C Programming",
    "subtopic": "Preprocessor Macros",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n#define SQUARE(x) x*x\n\nint main() {\n    int result = SQUARE(4 + 4);\n    printf(\"%d\", result);\n    return 0;\n}\n```",
    "options": [
      "24",
      "64",
      "25",
      "8"
    ],
    "answer": "24"
  },
  {
    "id": "C-0149",
    "category": "C Programming",
    "subtopic": "Preprocessor Macros",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n#define SQUARE(x) ((x)*(x))\n\nint main() {\n    int result = SQUARE(9 + 2);\n    printf(\"%d\", result);\n    return 0;\n}\n```",
    "options": [
      "29",
      "122",
      "121",
      "11"
    ],
    "answer": "121"
  },
  {
    "id": "C-0150",
    "category": "C Programming",
    "subtopic": "Preprocessor Macros",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n#define MIN(a, b) ((a) < (b) ? (a) : (b))\n\nint main() {\n    printf(\"%d\", MIN(21, 14));\n    return 0;\n}\n```",
    "options": [
      "0",
      "21",
      "35",
      "14"
    ],
    "answer": "14"
  },
  {
    "id": "C-0151",
    "category": "C Programming",
    "subtopic": "Preprocessor Macros",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n#define PI 3\n#define AREA(r) (PI * r * r)\n\nint main() {\n    printf(\"%d\", AREA(5));\n    return 0;\n}\n```",
    "options": [
      "74",
      "76",
      "25",
      "75"
    ],
    "answer": "75"
  },
  {
    "id": "C-0152",
    "category": "C Programming",
    "subtopic": "Preprocessor Macros",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n#define SQUARE(x) x*x\n\nint main() {\n    int result = 100 / SQUARE(2);\n    printf(\"%d\", result);\n    return 0;\n}\n```",
    "options": [
      "25",
      "4",
      "100",
      "101"
    ],
    "answer": "100"
  },
  {
    "id": "C-0153",
    "category": "C Programming",
    "subtopic": "Storage Classes",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nstatic int helper(int x) {\n    return x * 2;\n}\n\nint main() {\n    printf(\"%d\", helper(20));\n    return 0;\n}\n```",
    "options": [
      "41",
      "20",
      "40",
      "400"
    ],
    "answer": "40"
  },
  {
    "id": "C-0154",
    "category": "C Programming",
    "subtopic": "Storage Classes",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nstatic int total = 0;\n\nvoid addTo(int x) {\n    total += x;\n}\n\nint main() {\n    addTo(5);\n    addTo(10);\n    printf(\"%d\", total);\n    return 0;\n}\n```",
    "options": [
      "5",
      "0",
      "15",
      "10"
    ],
    "answer": "15"
  },
  {
    "id": "C-0155",
    "category": "C Programming",
    "subtopic": "Storage Classes",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint global = 11;\n\nvoid modify() {\n    global += 100;\n}\n\nint main() {\n    modify();\n    printf(\"%d\", global);\n    return 0;\n}\n```",
    "options": [
      "100",
      "110",
      "11",
      "111"
    ],
    "answer": "111"
  },
  {
    "id": "C-0156",
    "category": "C Programming",
    "subtopic": "Storage Classes",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint counter = 0;\n\nvoid increment() {\n    static int calls = 0;\n    calls++;\n    counter += calls;\n}\n\nint main() {\n    increment();\n    increment();\n    increment();\n    printf(\"%d\", counter);\n    return 0;\n}\n```",
    "options": [
      "3",
      "0",
      "9",
      "6"
    ],
    "answer": "6"
  },
  {
    "id": "C-0157",
    "category": "C Programming",
    "subtopic": "Strings",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    char *s = \"pointer\";\n    int len = 0;\n    while (*s != '\\0') {\n        len++;\n        s++;\n    }\n    printf(\"%d\", len);\n    return 0;\n}\n```",
    "options": [
      "7",
      "8",
      "6",
      "0"
    ],
    "answer": "7"
  },
  {
    "id": "C-0158",
    "category": "C Programming",
    "subtopic": "Strings",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    char *s = \"programming\";\n    int count = 0;\n    while (*s) {\n        if (*s=='a'||*s=='e'||*s=='i'||*s=='o'||*s=='u') count++;\n        s++;\n    }\n    printf(\"%d\", count);\n    return 0;\n}\n```",
    "options": [
      "4",
      "2",
      "3",
      "11"
    ],
    "answer": "3"
  },
  {
    "id": "C-0159",
    "category": "C Programming",
    "subtopic": "Strings",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char s[] = \"code\";\n    char *p = s + strlen(s) - 1;\n    while (p >= s) {\n        printf(\"%c\", *p);\n        p--;\n    }\n    return 0;\n}\n```",
    "options": [
      "edoc",
      "CODE",
      "code",
      "EDOC"
    ],
    "answer": "edoc"
  },
  {
    "id": "C-0160",
    "category": "C Programming",
    "subtopic": "Strings",
    "difficulty": "hard",
    "question": "What is the output of the following C program?\n\n```c\n#include <stdio.h>\n\nint main() {\n    char *s = \"mississippi\";\n    char target = 'm';\n    int count = 0;\n    while (*s) {\n        if (*s == target) count++;\n        s++;\n    }\n    printf(\"%d\", count);\n    return 0;\n}\n```",
    "options": [
      "11",
      "1",
      "2",
      "0"
    ],
    "answer": "1"
  },
  {
    "id": "A-0001",
    "category": "ARM",
    "subtopic": "Registers",
    "difficulty": "easy",
    "question": "In the ARM register set, which register is conventionally used as the Stack Pointer (SP)?",
    "options": [
      "R13",
      "R14",
      "R15",
      "R12"
    ],
    "answer": "R13"
  },
  {
    "id": "A-0002",
    "category": "ARM",
    "subtopic": "Registers",
    "difficulty": "easy",
    "question": "In the ARM register set, which register is conventionally used as the Link Register (LR), holding the return address after a BL instruction?",
    "options": [
      "R14",
      "R13",
      "R15",
      "R11"
    ],
    "answer": "R14"
  },
  {
    "id": "A-0003",
    "category": "ARM",
    "subtopic": "Registers",
    "difficulty": "easy",
    "question": "In the ARM register set, which register is the Program Counter (PC)?",
    "options": [
      "R15",
      "R14",
      "R13",
      "R0"
    ],
    "answer": "R15"
  },
  {
    "id": "A-0004",
    "category": "ARM",
    "subtopic": "Registers",
    "difficulty": "easy",
    "question": "How many general-purpose registers (R0-R12) does the classic 32-bit ARM register set provide before the special-purpose SP, LR, and PC?",
    "options": [
      "13",
      "12",
      "16",
      "8"
    ],
    "answer": "13"
  },
  {
    "id": "A-0005",
    "category": "ARM",
    "subtopic": "Registers",
    "difficulty": "easy",
    "question": "What is the bit width of each general-purpose register in the classic 32-bit ARM architecture?",
    "options": [
      "32 bits",
      "16 bits",
      "64 bits",
      "8 bits"
    ],
    "answer": "32 bits"
  },
  {
    "id": "A-0006",
    "category": "ARM",
    "subtopic": "Registers",
    "difficulty": "easy",
    "question": "Which register is typically used to hold the return value of a function under the ARM calling convention (AAPCS)?",
    "options": [
      "R0",
      "R12",
      "R14",
      "SP"
    ],
    "answer": "R0"
  },
  {
    "id": "A-0007",
    "category": "ARM",
    "subtopic": "CPSR & Flags",
    "difficulty": "easy",
    "question": "In the ARM CPSR (Current Program Status Register), what does the 'Z' flag indicate?",
    "options": [
      "The result of the last operation was zero",
      "The result was negative",
      "A carry/borrow occurred",
      "A signed overflow occurred"
    ],
    "answer": "The result of the last operation was zero"
  },
  {
    "id": "A-0008",
    "category": "ARM",
    "subtopic": "CPSR & Flags",
    "difficulty": "easy",
    "question": "In the ARM CPSR, what does the 'N' flag indicate?",
    "options": [
      "The result of the last operation was negative (bit 31 set)",
      "The result was zero",
      "A carry occurred",
      "An overflow occurred"
    ],
    "answer": "The result of the last operation was negative (bit 31 set)"
  },
  {
    "id": "A-0009",
    "category": "ARM",
    "subtopic": "CPSR & Flags",
    "difficulty": "easy",
    "question": "In the ARM CPSR, which flag indicates that a signed arithmetic overflow occurred?",
    "options": [
      "V",
      "C",
      "Z",
      "N"
    ],
    "answer": "V"
  },
  {
    "id": "A-0010",
    "category": "ARM",
    "subtopic": "CPSR & Flags",
    "difficulty": "easy",
    "question": "In the ARM CPSR, which flag is typically used to indicate carry-out from an addition or 'no borrow' from a subtraction?",
    "options": [
      "C",
      "V",
      "N",
      "Z"
    ],
    "answer": "C"
  },
  {
    "id": "A-0011",
    "category": "ARM",
    "subtopic": "Basic Instructions",
    "difficulty": "easy",
    "question": "What value ends up in R2 after the following instructions execute?\n\n```asm\nMOV r0, #26\nMOV r1, #25\nADD r2, r0, r1\n```",
    "options": [
      "26",
      "52",
      "51",
      "25"
    ],
    "answer": "51"
  },
  {
    "id": "A-0012",
    "category": "ARM",
    "subtopic": "Basic Instructions",
    "difficulty": "easy",
    "question": "What value ends up in R2 after the following instructions execute?\n\n```asm\nMOV r0, #11\nMOV r1, #14\nADD r2, r0, r1\n```",
    "options": [
      "14",
      "11",
      "26",
      "25"
    ],
    "answer": "25"
  },
  {
    "id": "A-0013",
    "category": "ARM",
    "subtopic": "Basic Instructions",
    "difficulty": "easy",
    "question": "What value ends up in R2 after the following instructions execute?\n\n```asm\nMOV r0, #32\nMOV r1, #18\nSUB r2, r0, r1\n```",
    "options": [
      "32",
      "18",
      "14",
      "50"
    ],
    "answer": "14"
  },
  {
    "id": "A-0014",
    "category": "ARM",
    "subtopic": "Basic Instructions",
    "difficulty": "easy",
    "question": "What value ends up in R2 after the following instructions execute?\n\n```asm\nMOV r0, #30\nMOV r1, #1\nSUB r2, r0, r1\n```",
    "options": [
      "31",
      "30",
      "1",
      "29"
    ],
    "answer": "29"
  },
  {
    "id": "A-0015",
    "category": "ARM",
    "subtopic": "Basic Instructions",
    "difficulty": "easy",
    "question": "What value ends up in R2 after the following instructions execute?\n\n```asm\nMOV r0, #34\nMOV r1, #17\nSUB r2, r0, r1\n```",
    "options": [
      "34",
      "17",
      "51",
      "15"
    ],
    "answer": "17"
  },
  {
    "id": "A-0016",
    "category": "ARM",
    "subtopic": "Basic Instructions",
    "difficulty": "easy",
    "question": "What value ends up in R2 after the following instructions execute?\n\n```asm\nMOV r0, #2\nMOV r1, #8\nMUL r2, r0, r1\n```",
    "options": [
      "16",
      "2",
      "10",
      "17"
    ],
    "answer": "16"
  },
  {
    "id": "A-0017",
    "category": "ARM",
    "subtopic": "Basic Instructions",
    "difficulty": "easy",
    "question": "MVN performs a bitwise NOT (one's complement) of its operand. What value ends up in R1?\n\n```asm\nMOV r0, #0\nMVN r1, r0\n```",
    "options": [
      "-11",
      "0",
      "-1",
      "1"
    ],
    "answer": "-1"
  },
  {
    "id": "A-0018",
    "category": "ARM",
    "subtopic": "Basic Instructions",
    "difficulty": "easy",
    "question": "MVN performs a bitwise NOT (one's complement) of its operand. What value ends up in R1?\n\n```asm\nMOV r0, #2\nMVN r1, r0\n```",
    "options": [
      "-2",
      "3",
      "2",
      "-3"
    ],
    "answer": "-3"
  },
  {
    "id": "A-0019",
    "category": "ARM",
    "subtopic": "Branches & Conditions",
    "difficulty": "easy",
    "question": "Which ARM branch condition suffix executes the branch only if the Zero flag (Z) is set (i.e. the previous comparison found the values equal)?",
    "options": [
      "EQ",
      "NE",
      "GT",
      "LT"
    ],
    "answer": "EQ"
  },
  {
    "id": "A-0020",
    "category": "ARM",
    "subtopic": "Branches & Conditions",
    "difficulty": "easy",
    "question": "Which ARM branch condition suffix executes the branch only if the Zero flag (Z) is clear (the previous comparison found the values not equal)?",
    "options": [
      "NE",
      "EQ",
      "CS",
      "VS"
    ],
    "answer": "NE"
  },
  {
    "id": "A-0021",
    "category": "ARM",
    "subtopic": "Branches & Conditions",
    "difficulty": "easy",
    "question": "Which instruction is used in ARM assembly to perform an unconditional jump to a label?",
    "options": [
      "B",
      "BL",
      "BX",
      "CMP"
    ],
    "answer": "B"
  },
  {
    "id": "A-0022",
    "category": "ARM",
    "subtopic": "Branches & Conditions",
    "difficulty": "easy",
    "question": "Which ARM instruction branches to a subroutine AND saves the return address into the Link Register (LR)?",
    "options": [
      "BL",
      "B",
      "BX",
      "MOV"
    ],
    "answer": "BL"
  },
  {
    "id": "A-0023",
    "category": "ARM",
    "subtopic": "Basic Instructions",
    "difficulty": "easy",
    "question": "What does the CMP instruction do in ARM assembly?",
    "options": [
      "It subtracts one operand from another and updates the condition flags, without storing the result",
      "It stores one operand into another",
      "It always branches",
      "It compares and immediately stores a Boolean result in a register"
    ],
    "answer": "It subtracts one operand from another and updates the condition flags, without storing the result"
  },
  {
    "id": "A-0024",
    "category": "ARM",
    "subtopic": "Branches & Conditions",
    "difficulty": "easy",
    "question": "Which condition code suffix means 'always execute' and is the default if no suffix is given?",
    "options": [
      "AL",
      "EQ",
      "NE",
      "NV"
    ],
    "answer": "AL"
  },
  {
    "id": "A-0025",
    "category": "ARM",
    "subtopic": "Load & Store",
    "difficulty": "easy",
    "question": "Which ARM instruction loads a 32-bit word from memory into a register?",
    "options": [
      "LDR",
      "STR",
      "LDRB",
      "MOV"
    ],
    "answer": "LDR"
  },
  {
    "id": "A-0026",
    "category": "ARM",
    "subtopic": "Load & Store",
    "difficulty": "easy",
    "question": "Which ARM instruction stores a 32-bit word from a register into memory?",
    "options": [
      "STR",
      "LDR",
      "STRB",
      "PUSH"
    ],
    "answer": "STR"
  },
  {
    "id": "A-0027",
    "category": "ARM",
    "subtopic": "Load & Store",
    "difficulty": "easy",
    "question": "Which ARM instruction loads a single byte from memory into a register (zero-extending it)?",
    "options": [
      "LDRB",
      "LDR",
      "LDRH",
      "STRB"
    ],
    "answer": "LDRB"
  },
  {
    "id": "A-0028",
    "category": "ARM",
    "subtopic": "Load & Store",
    "difficulty": "easy",
    "question": "Which ARM instruction is used to store only the lowest byte of a register into memory?",
    "options": [
      "STRB",
      "STR",
      "STRH",
      "LDRB"
    ],
    "answer": "STRB"
  },
  {
    "id": "A-0029",
    "category": "ARM",
    "subtopic": "ARM vs Thumb",
    "difficulty": "easy",
    "question": "What is the fixed instruction length of classic 32-bit ARM (A32) instructions?",
    "options": [
      "32 bits",
      "16 bits",
      "8 bits",
      "Variable length"
    ],
    "answer": "32 bits"
  },
  {
    "id": "A-0030",
    "category": "ARM",
    "subtopic": "ARM vs Thumb",
    "difficulty": "easy",
    "question": "What is the instruction length of the original Thumb (Thumb-1) instruction set?",
    "options": [
      "16 bits",
      "32 bits",
      "8 bits",
      "64 bits"
    ],
    "answer": "16 bits"
  },
  {
    "id": "A-0031",
    "category": "ARM",
    "subtopic": "ARM vs Thumb",
    "difficulty": "easy",
    "question": "What is the main advantage of using the Thumb instruction set over standard ARM (A32) instructions?",
    "options": [
      "Improved code density (smaller binary size) due to narrower 16-bit instructions",
      "Faster floating point math",
      "Access to more general-purpose registers",
      "Ability to run at a higher clock speed"
    ],
    "answer": "Improved code density (smaller binary size) due to narrower 16-bit instructions"
  },
  {
    "id": "A-0032",
    "category": "ARM",
    "subtopic": "ARM vs Thumb",
    "difficulty": "easy",
    "question": "Which bit in the CPSR indicates whether the processor is currently executing in Thumb state?",
    "options": [
      "T bit",
      "Z bit",
      "N bit",
      "C bit"
    ],
    "answer": "T bit"
  },
  {
    "id": "A-0033",
    "category": "ARM",
    "subtopic": "Processor Modes",
    "difficulty": "easy",
    "question": "Which ARM processor mode is the normal, unprivileged mode used for running regular application code?",
    "options": [
      "User (USR) mode",
      "Supervisor (SVC) mode",
      "IRQ mode",
      "Abort mode"
    ],
    "answer": "User (USR) mode"
  },
  {
    "id": "A-0034",
    "category": "ARM",
    "subtopic": "Processor Modes",
    "difficulty": "easy",
    "question": "Which classic ARM processor mode is entered when a Supervisor Call (SVC/SWI) instruction is executed?",
    "options": [
      "Supervisor (SVC) mode",
      "User mode",
      "FIQ mode",
      "Undefined mode"
    ],
    "answer": "Supervisor (SVC) mode"
  },
  {
    "id": "A-0035",
    "category": "ARM",
    "subtopic": "Processor Modes",
    "difficulty": "easy",
    "question": "Which ARM processor mode is entered to handle a Fast Interrupt Request, designed for very low-latency interrupt handling?",
    "options": [
      "FIQ mode",
      "IRQ mode",
      "User mode",
      "Abort mode"
    ],
    "answer": "FIQ mode"
  },
  {
    "id": "A-0036",
    "category": "ARM",
    "subtopic": "Processor Modes",
    "difficulty": "easy",
    "question": "Which ARM processor mode is entered when the CPU encounters an instruction it does not recognize?",
    "options": [
      "Undefined mode",
      "Abort mode",
      "User mode",
      "System mode"
    ],
    "answer": "Undefined mode"
  },
  {
    "id": "A-0037",
    "category": "ARM",
    "subtopic": "Stack Operations",
    "difficulty": "easy",
    "question": "PUSH places a register's value onto the stack, and POP retrieves it back. What value ends up in R1?\n\n```asm\nMOV sp, r6\nMOV r0, #51\nPUSH {r0}\nMOV r0, #0\nPOP {r1}\n```",
    "options": [
      "0",
      "50",
      "51",
      "52"
    ],
    "answer": "51"
  },
  {
    "id": "A-0038",
    "category": "ARM",
    "subtopic": "Stack Operations",
    "difficulty": "easy",
    "question": "PUSH places a register's value onto the stack, and POP retrieves it back. What value ends up in R1?\n\n```asm\nMOV sp, r6\nMOV r0, #93\nPUSH {r0}\nMOV r0, #0\nPOP {r1}\n```",
    "options": [
      "93",
      "0",
      "94",
      "92"
    ],
    "answer": "93"
  },
  {
    "id": "A-0039",
    "category": "ARM",
    "subtopic": "Stack Operations",
    "difficulty": "easy",
    "question": "In ARM, PUSH {Rn} is commonly implemented as an alias for which underlying store-multiple instruction (full-descending stack convention)?",
    "options": [
      "STMFD (Store Multiple, Full Descending)",
      "LDMFD (Load Multiple, Full Descending)",
      "STR with post-increment",
      "SWI"
    ],
    "answer": "STMFD (Store Multiple, Full Descending)"
  },
  {
    "id": "A-0040",
    "category": "ARM",
    "subtopic": "Stack Operations",
    "difficulty": "easy",
    "question": "What does the AAPCS (ARM calling convention) say about the stack direction used by PUSH/POP in ARM?",
    "options": [
      "The stack grows downward (descending), with SP decremented before a push",
      "The stack grows upward (ascending)",
      "The stack direction is undefined",
      "The stack is circular"
    ],
    "answer": "The stack grows downward (descending), with SP decremented before a push"
  },
  {
    "id": "A-0041",
    "category": "ARM",
    "subtopic": "Endianness",
    "difficulty": "easy",
    "question": "ARM processors are described as 'bi-endian'. What does this mean?",
    "options": [
      "They can be configured to operate in either little-endian or big-endian byte order",
      "They always store data in big-endian order",
      "They use a different byte order for instructions versus data, fixed at all times",
      "They cannot access memory directly"
    ],
    "answer": "They can be configured to operate in either little-endian or big-endian byte order"
  },
  {
    "id": "A-0042",
    "category": "ARM",
    "subtopic": "Endianness",
    "difficulty": "easy",
    "question": "What is the default / most common endianness configuration used by mainstream ARM Linux systems (such as the armhf target)?",
    "options": [
      "Little-endian",
      "Big-endian",
      "Mixed-endian",
      "Endianness does not apply to ARM"
    ],
    "answer": "Little-endian"
  },
  {
    "id": "A-0043",
    "category": "ARM",
    "subtopic": "Endianness",
    "difficulty": "easy",
    "question": "In a little-endian system, when a 32-bit word is stored in memory, which byte is stored at the lowest memory address?",
    "options": [
      "The least significant byte",
      "The most significant byte",
      "The middle byte",
      "All bytes at once"
    ],
    "answer": "The least significant byte"
  },
  {
    "id": "A-0044",
    "category": "ARM",
    "subtopic": "Endianness",
    "difficulty": "easy",
    "question": "Which of these is the primary reason endianness matters to embedded ARM programmers?",
    "options": [
      "It affects how multi-byte values are interpreted when accessed byte-by-byte (e.g. over a network or via memory-mapped I/O)",
      "It changes how many registers are available",
      "It changes the clock speed of the CPU",
      "It only matters for floating point operations"
    ],
    "answer": "It affects how multi-byte values are interpreted when accessed byte-by-byte (e.g. over a network or via memory-mapped I/O)"
  },
  {
    "id": "A-0045",
    "category": "ARM",
    "subtopic": "Addressing Modes",
    "difficulty": "easy",
    "question": "In the instruction `MOV R0, #5`, what kind of addressing/operand mode is being used for the value 5?",
    "options": [
      "Immediate addressing",
      "Register addressing",
      "Register-indirect addressing",
      "PC-relative addressing"
    ],
    "answer": "Immediate addressing"
  },
  {
    "id": "A-0046",
    "category": "ARM",
    "subtopic": "Addressing Modes",
    "difficulty": "easy",
    "question": "In the instruction `MOV R0, R1`, what kind of addressing mode is being used?",
    "options": [
      "Register addressing",
      "Immediate addressing",
      "Indexed addressing",
      "Indirect addressing"
    ],
    "answer": "Register addressing"
  },
  {
    "id": "A-0047",
    "category": "ARM",
    "subtopic": "Addressing Modes",
    "difficulty": "easy",
    "question": "In the instruction `LDR R0, [R1]`, what kind of addressing mode is being used to fetch the value from memory?",
    "options": [
      "Register-indirect addressing (the address is held in a register)",
      "Immediate addressing",
      "Register addressing",
      "Stack addressing"
    ],
    "answer": "Register-indirect addressing (the address is held in a register)"
  },
  {
    "id": "A-0048",
    "category": "ARM",
    "subtopic": "Addressing Modes",
    "difficulty": "easy",
    "question": "In the instruction `LDR R0, [R1, #4]`, what does the #4 represent?",
    "options": [
      "A fixed offset added to the base address held in R1",
      "An immediate value to load directly into R0",
      "The number of bytes to load",
      "A register number"
    ],
    "answer": "A fixed offset added to the base address held in R1"
  },
  {
    "id": "A-0049",
    "category": "ARM",
    "subtopic": "Bitwise Operators",
    "difficulty": "medium",
    "question": "The AND instruction performs a bitwise AND. What value ends up in R2?\n\n```asm\nMOV r0, #22\nMOV r1, #13\nAND r2, r0, r1\n```",
    "options": [
      "35",
      "22",
      "4",
      "13"
    ],
    "answer": "4"
  },
  {
    "id": "A-0050",
    "category": "ARM",
    "subtopic": "Bitwise Operators",
    "difficulty": "medium",
    "question": "The AND instruction performs a bitwise AND. What value ends up in R2?\n\n```asm\nMOV r0, #12\nMOV r1, #20\nAND r2, r0, r1\n```",
    "options": [
      "20",
      "4",
      "32",
      "12"
    ],
    "answer": "4"
  },
  {
    "id": "A-0051",
    "category": "ARM",
    "subtopic": "Bitwise Operators",
    "difficulty": "medium",
    "question": "The ORR instruction performs a bitwise OR. What value ends up in R2?\n\n```asm\nMOV r0, #19\nMOV r1, #7\nORR r2, r0, r1\n```",
    "options": [
      "19",
      "23",
      "26",
      "7"
    ],
    "answer": "23"
  },
  {
    "id": "A-0052",
    "category": "ARM",
    "subtopic": "Bitwise Operators",
    "difficulty": "medium",
    "question": "The AND instruction performs a bitwise AND. What value ends up in R2?\n\n```asm\nMOV r0, #24\nMOV r1, #29\nAND r2, r0, r1\n```",
    "options": [
      "29",
      "24",
      "53",
      "19"
    ],
    "answer": "24"
  },
  {
    "id": "A-0053",
    "category": "ARM",
    "subtopic": "Bitwise Operators",
    "difficulty": "medium",
    "question": "The BIC instruction performs a bit clear (AND with the complement of the second operand). What value ends up in R2?\n\n```asm\nMOV r0, #8\nMOV r1, #12\nBIC r2, r0, r1\n```",
    "options": [
      "20",
      "8",
      "12",
      "0"
    ],
    "answer": "0"
  },
  {
    "id": "A-0054",
    "category": "ARM",
    "subtopic": "Bitwise Operators",
    "difficulty": "medium",
    "question": "The BIC instruction performs a bit clear (AND with the complement of the second operand). What value ends up in R2?\n\n```asm\nMOV r0, #24\nMOV r1, #27\nBIC r2, r0, r1\n```",
    "options": [
      "0",
      "51",
      "24",
      "27"
    ],
    "answer": "0"
  },
  {
    "id": "A-0055",
    "category": "ARM",
    "subtopic": "Bitwise Operators",
    "difficulty": "medium",
    "question": "The AND instruction performs a bitwise AND. What value ends up in R2?\n\n```asm\nMOV r0, #1\nMOV r1, #6\nAND r2, r0, r1\n```",
    "options": [
      "6",
      "1",
      "7",
      "0"
    ],
    "answer": "0"
  },
  {
    "id": "A-0056",
    "category": "ARM",
    "subtopic": "Bitwise Operators",
    "difficulty": "medium",
    "question": "The AND instruction performs a bitwise AND. What value ends up in R2?\n\n```asm\nMOV r0, #23\nMOV r1, #5\nAND r2, r0, r1\n```",
    "options": [
      "28",
      "2",
      "5",
      "23"
    ],
    "answer": "5"
  },
  {
    "id": "A-0057",
    "category": "ARM",
    "subtopic": "Barrel Shifter",
    "difficulty": "medium",
    "question": "The ASR instruction performs a arithmetic shift right by 2 bit(s). What value ends up in R1?\n\n```asm\nMOV r0, #26\nASR r1, r0, #2\n```",
    "options": [
      "52",
      "26",
      "28",
      "6"
    ],
    "answer": "6"
  },
  {
    "id": "A-0058",
    "category": "ARM",
    "subtopic": "Barrel Shifter",
    "difficulty": "medium",
    "question": "The LSL instruction performs a logical shift left by 2 bit(s). What value ends up in R1?\n\n```asm\nMOV r0, #17\nLSL r1, r0, #2\n```",
    "options": [
      "68",
      "34",
      "17",
      "19"
    ],
    "answer": "68"
  },
  {
    "id": "A-0059",
    "category": "ARM",
    "subtopic": "Barrel Shifter",
    "difficulty": "medium",
    "question": "The ROR instruction performs a rotate right by 2 bit(s). What value ends up in R1?\n\n```asm\nMOV r0, #20\nROR r1, r0, #2\n```",
    "options": [
      "22",
      "20",
      "40",
      "5"
    ],
    "answer": "5"
  },
  {
    "id": "A-0060",
    "category": "ARM",
    "subtopic": "Barrel Shifter",
    "difficulty": "medium",
    "question": "The LSL instruction performs a logical shift left by 1 bit(s). What value ends up in R1?\n\n```asm\nMOV r0, #26\nLSL r1, r0, #1\n```",
    "options": [
      "26",
      "27",
      "52",
      "42"
    ],
    "answer": "52"
  },
  {
    "id": "A-0061",
    "category": "ARM",
    "subtopic": "Barrel Shifter",
    "difficulty": "medium",
    "question": "The ASR instruction performs a arithmetic shift right by 1 bit(s). What value ends up in R1?\n\n```asm\nMOV r0, #17\nASR r1, r0, #1\n```",
    "options": [
      "8",
      "17",
      "18",
      "34"
    ],
    "answer": "8"
  },
  {
    "id": "A-0062",
    "category": "ARM",
    "subtopic": "Barrel Shifter",
    "difficulty": "medium",
    "question": "The LSR instruction performs a logical shift right by 4 bit(s). What value ends up in R1?\n\n```asm\nMOV r0, #29\nLSR r1, r0, #4\n```",
    "options": [
      "29",
      "58",
      "1",
      "33"
    ],
    "answer": "1"
  },
  {
    "id": "A-0063",
    "category": "ARM",
    "subtopic": "Barrel Shifter",
    "difficulty": "medium",
    "question": "The LSR instruction performs a logical shift right by 3 bit(s). What value ends up in R1?\n\n```asm\nMOV r0, #10\nLSR r1, r0, #3\n```",
    "options": [
      "1",
      "20",
      "10",
      "13"
    ],
    "answer": "1"
  },
  {
    "id": "A-0064",
    "category": "ARM",
    "subtopic": "Barrel Shifter",
    "difficulty": "medium",
    "question": "The LSR instruction performs a logical shift right by 3 bit(s). What value ends up in R1?\n\n```asm\nMOV r0, #29\nLSR r1, r0, #3\n```",
    "options": [
      "29",
      "58",
      "32",
      "3"
    ],
    "answer": "3"
  },
  {
    "id": "A-0065",
    "category": "ARM",
    "subtopic": "Branches & Conditions",
    "difficulty": "medium",
    "question": "R2 is conditionally set to 1 only if the LE condition holds after the CMP. Given R0=16 and R1=6, what value ends up in R2?\n\n```asm\nMOV r0, #16\nMOV r1, #6\nCMP r0, r1\nMOV r2, #0\nMOVLE r2, #1\n```",
    "options": [
      "16",
      "2",
      "1",
      "0"
    ],
    "answer": "0"
  },
  {
    "id": "A-0066",
    "category": "ARM",
    "subtopic": "Branches & Conditions",
    "difficulty": "medium",
    "question": "R2 is conditionally set to 1 only if the GT condition holds after the CMP. Given R0=15 and R1=5, what value ends up in R2?\n\n```asm\nMOV r0, #15\nMOV r1, #5\nCMP r0, r1\nMOV r2, #0\nMOVGT r2, #1\n```",
    "options": [
      "1",
      "15",
      "2",
      "0"
    ],
    "answer": "1"
  },
  {
    "id": "A-0067",
    "category": "ARM",
    "subtopic": "Branches & Conditions",
    "difficulty": "medium",
    "question": "R2 is conditionally set to 1 only if the GE condition holds after the CMP. Given R0=17 and R1=18, what value ends up in R2?\n\n```asm\nMOV r0, #17\nMOV r1, #18\nCMP r0, r1\nMOV r2, #0\nMOVGE r2, #1\n```",
    "options": [
      "2",
      "1",
      "0",
      "17"
    ],
    "answer": "0"
  },
  {
    "id": "A-0068",
    "category": "ARM",
    "subtopic": "Branches & Conditions",
    "difficulty": "medium",
    "question": "R2 is conditionally set to 1 only if the LT condition holds after the CMP. Given R0=15 and R1=4, what value ends up in R2?\n\n```asm\nMOV r0, #15\nMOV r1, #4\nCMP r0, r1\nMOV r2, #0\nMOVLT r2, #1\n```",
    "options": [
      "15",
      "2",
      "1",
      "0"
    ],
    "answer": "0"
  },
  {
    "id": "A-0069",
    "category": "ARM",
    "subtopic": "Branches & Conditions",
    "difficulty": "medium",
    "question": "R2 is conditionally set to 1 only if the GE condition holds after the CMP. Given R0=1 and R1=18, what value ends up in R2?\n\n```asm\nMOV r0, #1\nMOV r1, #18\nCMP r0, r1\nMOV r2, #0\nMOVGE r2, #1\n```",
    "options": [
      "1",
      "0",
      "-5",
      "2"
    ],
    "answer": "0"
  },
  {
    "id": "A-0070",
    "category": "ARM",
    "subtopic": "Branches & Conditions",
    "difficulty": "medium",
    "question": "R2 is conditionally set to 1 only if the GT condition holds after the CMP. Given R0=3 and R1=17, what value ends up in R2?\n\n```asm\nMOV r0, #3\nMOV r1, #17\nCMP r0, r1\nMOV r2, #0\nMOVGT r2, #1\n```",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "answer": "0"
  },
  {
    "id": "A-0071",
    "category": "ARM",
    "subtopic": "Addressing Modes",
    "difficulty": "medium",
    "question": "Given a buffer `int buf[4] = {41, 74, 24, 14}` with R5 pointing at buf[0]: `LDR R0, [R5], #4` loads the word at the ORIGINAL address in R5, THEN increments R5 by 4 (post-indexed addressing). What value ends up in R0?\n\n```asm\nLDR r0, [r5], #4\nMOV r1, r5\n```",
    "options": [
      "24",
      "41",
      "14",
      "74"
    ],
    "answer": "41"
  },
  {
    "id": "A-0072",
    "category": "ARM",
    "subtopic": "Addressing Modes",
    "difficulty": "medium",
    "question": "Given a buffer `int buf[4] = {84, 40, 93, 66}` with R5 pointing at buf[0]: `LDR R0, [R5, #8]!` first adds 8 to R5 (pre-indexed with writeback), THEN loads the word from that new address into R0. What value ends up in R0?\n\n```asm\nLDR r0, [r5, #8]!\nMOV r1, r5\n```",
    "options": [
      "93",
      "66",
      "40",
      "84"
    ],
    "answer": "93"
  },
  {
    "id": "A-0073",
    "category": "ARM",
    "subtopic": "Addressing Modes",
    "difficulty": "medium",
    "question": "Given a buffer `int buf[4] = {4, 51, 42, 91}` with R5 pointing at buf[0]: `LDR R0, [R5, #8]!` first adds 8 to R5 (pre-indexed with writeback), THEN loads the word from that new address into R0. What value ends up in R0?\n\n```asm\nLDR r0, [r5, #8]!\nMOV r1, r5\n```",
    "options": [
      "4",
      "91",
      "42",
      "51"
    ],
    "answer": "42"
  },
  {
    "id": "A-0074",
    "category": "ARM",
    "subtopic": "Addressing Modes",
    "difficulty": "medium",
    "question": "Given a buffer `int buf[4] = {87, 90, 18, 5}` with R5 pointing at buf[0]: `LDR R0, [R5], #4` loads the word at the ORIGINAL address in R5, THEN increments R5 by 4 (post-indexed addressing). What value ends up in R0?\n\n```asm\nLDR r0, [r5], #4\nMOV r1, r5\n```",
    "options": [
      "90",
      "5",
      "18",
      "87"
    ],
    "answer": "87"
  },
  {
    "id": "A-0075",
    "category": "ARM",
    "subtopic": "Addressing Modes",
    "difficulty": "medium",
    "question": "Given a buffer `int buf[4] = {39, 78, 36, 86}` with R5 pointing at buf[0]: `LDR R0, [R5, #4]` loads the word at address (R5 + 4) without modifying R5 (offset addressing, no writeback). What value ends up in R0?\n\n```asm\nLDR r0, [r5, #4]\nMOV r1, r5\n```",
    "options": [
      "36",
      "39",
      "78",
      "86"
    ],
    "answer": "78"
  },
  {
    "id": "A-0076",
    "category": "ARM",
    "subtopic": "Addressing Modes",
    "difficulty": "medium",
    "question": "Given a buffer `int buf[4] = {44, 71, 72, 60}` with R5 pointing at buf[0]: `LDR R0, [R5, #8]!` first adds 8 to R5 (pre-indexed with writeback), THEN loads the word from that new address into R0. What value ends up in R0?\n\n```asm\nLDR r0, [r5, #8]!\nMOV r1, r5\n```",
    "options": [
      "44",
      "72",
      "60",
      "71"
    ],
    "answer": "72"
  },
  {
    "id": "A-0077",
    "category": "ARM",
    "subtopic": "CPSR & Flags",
    "difficulty": "medium",
    "question": "After a CMP instruction where the two operands are EQUAL, which flag(s) get set?",
    "options": [
      "Z=1 (and N=0, V=0, C=1)",
      "N=1 only",
      "V=1 only",
      "C=0 only"
    ],
    "answer": "Z=1 (and N=0, V=0, C=1)"
  },
  {
    "id": "A-0078",
    "category": "ARM",
    "subtopic": "CPSR & Flags",
    "difficulty": "medium",
    "question": "After `CMP R0, R1` where R0 (unsigned) is LESS than R1, what happens to the Carry flag (C)?",
    "options": [
      "C is cleared to 0 (indicating a borrow occurred)",
      "C is set to 1",
      "C is unaffected",
      "C always equals Z"
    ],
    "answer": "C is cleared to 0 (indicating a borrow occurred)"
  },
  {
    "id": "A-0079",
    "category": "ARM",
    "subtopic": "Branches & Conditions",
    "difficulty": "medium",
    "question": "Which condition code suffix corresponds to 'signed greater than or equal' and is TRUE when N==V (both flags equal)?",
    "options": [
      "GE",
      "LT",
      "HI",
      "LS"
    ],
    "answer": "GE"
  },
  {
    "id": "A-0080",
    "category": "ARM",
    "subtopic": "Branches & Conditions",
    "difficulty": "medium",
    "question": "Which condition code suffix corresponds to 'unsigned higher' (greater than, unsigned) and requires C=1 AND Z=0?",
    "options": [
      "HI",
      "GE",
      "LO",
      "LE"
    ],
    "answer": "HI"
  },
  {
    "id": "A-0081",
    "category": "ARM",
    "subtopic": "CPSR & Flags",
    "difficulty": "medium",
    "question": "If an ADDS instruction causes a signed overflow (e.g. adding two large positive numbers and getting a negative result), which flag is set to indicate this?",
    "options": [
      "V (overflow flag)",
      "C (carry flag)",
      "Z (zero flag)",
      "N (negative flag) only, with V unaffected"
    ],
    "answer": "V (overflow flag)"
  },
  {
    "id": "A-0082",
    "category": "ARM",
    "subtopic": "CPSR & Flags",
    "difficulty": "medium",
    "question": "Why does the plain `ADD` instruction (without an S suffix) NOT update the CPSR flags, while `ADDS` does?",
    "options": [
      "Because the S suffix explicitly tells the instruction to update the condition flags as a side effect; without it, the flags are left untouched",
      "ADD and ADDS are functionally identical in every way",
      "ADD only works on immediate values",
      "ADDS is only valid in Thumb mode"
    ],
    "answer": "Because the S suffix explicitly tells the instruction to update the condition flags as a side effect; without it, the flags are left untouched"
  },
  {
    "id": "A-0083",
    "category": "ARM",
    "subtopic": "Calling Convention (AAPCS)",
    "difficulty": "medium",
    "question": "Under the ARM AAPCS calling convention, which registers are used to pass the first four integer/pointer arguments to a function?",
    "options": [
      "R0, R1, R2, R3",
      "R4, R5, R6, R7",
      "SP, LR, PC, R0",
      "R12, R11, R10, R9"
    ],
    "answer": "R0, R1, R2, R3"
  },
  {
    "id": "A-0084",
    "category": "ARM",
    "subtopic": "Calling Convention (AAPCS)",
    "difficulty": "medium",
    "question": "Under AAPCS, if a function has more than 4 integer arguments, where are the remaining arguments passed?",
    "options": [
      "On the stack",
      "In R4-R7",
      "In the Link Register",
      "They are not supported"
    ],
    "answer": "On the stack"
  },
  {
    "id": "A-0085",
    "category": "ARM",
    "subtopic": "Calling Convention (AAPCS)",
    "difficulty": "medium",
    "question": "Under AAPCS, which registers are designated as 'callee-saved', meaning a called function must preserve their values if it uses them?",
    "options": [
      "R4-R11",
      "R0-R3",
      "SP and PC only",
      "All registers are caller-saved"
    ],
    "answer": "R4-R11"
  },
  {
    "id": "A-0086",
    "category": "ARM",
    "subtopic": "Calling Convention (AAPCS)",
    "difficulty": "medium",
    "question": "Under AAPCS, what is register R12 (sometimes called IP) typically used for?",
    "options": [
      "A scratch/intra-procedure-call temporary register",
      "Holding the stack pointer",
      "Holding the return address",
      "Holding floating point results"
    ],
    "answer": "A scratch/intra-procedure-call temporary register"
  },
  {
    "id": "A-0087",
    "category": "ARM",
    "subtopic": "Cortex-M/A/R",
    "difficulty": "medium",
    "question": "Which ARM Cortex processor profile is designed specifically for low-cost, low-power microcontroller applications and typically only supports the Thumb/Thumb-2 instruction set (not classic 32-bit ARM)?",
    "options": [
      "Cortex-M",
      "Cortex-A",
      "Cortex-R",
      "Cortex-X"
    ],
    "answer": "Cortex-M"
  },
  {
    "id": "A-0088",
    "category": "ARM",
    "subtopic": "Cortex-M/A/R",
    "difficulty": "medium",
    "question": "Which ARM Cortex processor profile is designed for high-performance applications that run full operating systems (like Linux or Android) and typically includes an MMU?",
    "options": [
      "Cortex-A",
      "Cortex-M",
      "Cortex-R",
      "Cortex-T"
    ],
    "answer": "Cortex-A"
  },
  {
    "id": "A-0089",
    "category": "ARM",
    "subtopic": "Cortex-M/A/R",
    "difficulty": "medium",
    "question": "Which ARM Cortex processor profile targets hard real-time embedded systems (e.g. automotive, industrial control) and prioritizes deterministic, low-latency interrupt response?",
    "options": [
      "Cortex-R",
      "Cortex-A",
      "Cortex-M0",
      "Cortex-X"
    ],
    "answer": "Cortex-R"
  },
  {
    "id": "A-0090",
    "category": "ARM",
    "subtopic": "Cortex-M/A/R",
    "difficulty": "medium",
    "question": "Which interrupt controller is standard on ARM Cortex-M devices, providing prioritized, nested interrupt handling?",
    "options": [
      "NVIC (Nested Vectored Interrupt Controller)",
      "GIC (Generic Interrupt Controller) only",
      "PIC (legacy x86-style controller)",
      "There is no interrupt controller on Cortex-M"
    ],
    "answer": "NVIC (Nested Vectored Interrupt Controller)"
  },
  {
    "id": "A-0091",
    "category": "ARM",
    "subtopic": "Interrupts & Exceptions",
    "difficulty": "medium",
    "question": "On a classic ARM (e.g. ARM7/ARM9) system using low vectors, at what memory address does the exception vector table normally begin?",
    "options": [
      "0x00000000",
      "0xFFFFFFFF",
      "0x10000000",
      "0x08000000"
    ],
    "answer": "0x00000000"
  },
  {
    "id": "A-0092",
    "category": "ARM",
    "subtopic": "Interrupts & Exceptions",
    "difficulty": "medium",
    "question": "On an ARM Cortex-M device, what does address 0x00000004 in the vector table typically hold?",
    "options": [
      "The Reset handler address",
      "The initial Stack Pointer value",
      "The NMI handler address",
      "The HardFault handler address"
    ],
    "answer": "The Reset handler address"
  },
  {
    "id": "A-0093",
    "category": "ARM",
    "subtopic": "Interrupts & Exceptions",
    "difficulty": "medium",
    "question": "On an ARM Cortex-M device, what is stored at the very first vector table entry, address 0x00000000?",
    "options": [
      "The initial value to load into the Main Stack Pointer (MSP)",
      "The Reset handler address",
      "The address of main()",
      "The NVIC base address"
    ],
    "answer": "The initial value to load into the Main Stack Pointer (MSP)"
  },
  {
    "id": "A-0094",
    "category": "ARM",
    "subtopic": "Interrupts & Exceptions",
    "difficulty": "medium",
    "question": "In classic ARM exception handling, which exception is triggered by executing an SVC (SWI) instruction, commonly used for OS system calls?",
    "options": [
      "Supervisor Call exception",
      "IRQ exception",
      "FIQ exception",
      "Data Abort exception"
    ],
    "answer": "Supervisor Call exception"
  },
  {
    "id": "A-0095",
    "category": "ARM",
    "subtopic": "Memory-Mapped I/O",
    "difficulty": "medium",
    "question": "In an ARM-based embedded system, how does the CPU typically communicate with a peripheral such as a UART or GPIO controller?",
    "options": [
      "By reading and writing to specific memory addresses assigned to the peripheral's registers (memory-mapped I/O)",
      "Only through dedicated I/O instructions like IN/OUT (as on x86)",
      "Only via DMA, never directly",
      "Peripherals cannot be accessed by the CPU directly"
    ],
    "answer": "By reading and writing to specific memory addresses assigned to the peripheral's registers (memory-mapped I/O)"
  },
  {
    "id": "A-0096",
    "category": "ARM",
    "subtopic": "Memory-Mapped I/O",
    "difficulty": "medium",
    "question": "Why are memory-mapped peripheral registers often marked as 'volatile' when accessed from C on an ARM microcontroller?",
    "options": [
      "To prevent the compiler from optimizing away or reordering reads/writes, since the hardware can change the value independently of the program",
      "To make the access faster",
      "Because volatile registers use less power",
      "It has no real effect on ARM systems"
    ],
    "answer": "To prevent the compiler from optimizing away or reordering reads/writes, since the hardware can change the value independently of the program"
  },
  {
    "id": "A-0097",
    "category": "ARM",
    "subtopic": "Memory-Mapped I/O",
    "difficulty": "medium",
    "question": "Which ARM load/store instruction would commonly be used to read a single 8-bit memory-mapped status register, such as a UART status flag byte?",
    "options": [
      "LDRB",
      "LDR",
      "LDRH",
      "PUSH"
    ],
    "answer": "LDRB"
  },
  {
    "id": "A-0098",
    "category": "ARM",
    "subtopic": "Memory-Mapped I/O",
    "difficulty": "medium",
    "question": "On a typical Cortex-M microcontroller memory map, peripheral registers are usually located in which broad address region relative to internal Flash/RAM?",
    "options": [
      "A separate, dedicated peripheral address region (e.g. starting around 0x40000000)",
      "Always at address 0x00000000",
      "Inside the same physical Flash memory as the program code",
      "There is no fixed address region; it varies randomly each boot"
    ],
    "answer": "A separate, dedicated peripheral address region (e.g. starting around 0x40000000)"
  },
  {
    "id": "A-0099",
    "category": "ARM",
    "subtopic": "Multiply-Accumulate (MAC)",
    "difficulty": "medium",
    "question": "The MLA instruction computes Rd = (Rm * Rs) + Rn. What value ends up in R3?\n\n```asm\nMOV r0, #2\nMOV r1, #8\nMOV r2, #13\nMLA r3, r0, r1, r2\n```",
    "options": [
      "23",
      "16",
      "13",
      "29"
    ],
    "answer": "29"
  },
  {
    "id": "A-0100",
    "category": "ARM",
    "subtopic": "Multiply-Accumulate (MAC)",
    "difficulty": "medium",
    "question": "The MLA instruction computes Rd = (Rm * Rs) + Rn. What value ends up in R3?\n\n```asm\nMOV r0, #2\nMOV r1, #3\nMOV r2, #2\nMLA r3, r0, r1, r2\n```",
    "options": [
      "8",
      "2",
      "7",
      "6"
    ],
    "answer": "8"
  },
  {
    "id": "A-0101",
    "category": "ARM",
    "subtopic": "Multiply-Accumulate (MAC)",
    "difficulty": "medium",
    "question": "The MLA instruction computes Rd = (Rm * Rs) + Rn. What value ends up in R3?\n\n```asm\nMOV r0, #9\nMOV r1, #8\nMOV r2, #16\nMLA r3, r0, r1, r2\n```",
    "options": [
      "88",
      "72",
      "33",
      "16"
    ],
    "answer": "88"
  },
  {
    "id": "A-0102",
    "category": "ARM",
    "subtopic": "Multiply-Accumulate (MAC)",
    "difficulty": "medium",
    "question": "The MLA instruction computes Rd = (Rm * Rs) + Rn. What value ends up in R3?\n\n```asm\nMOV r0, #4\nMOV r1, #3\nMOV r2, #12\nMLA r3, r0, r1, r2\n```",
    "options": [
      "12",
      "22",
      "19",
      "24"
    ],
    "answer": "24"
  },
  {
    "id": "A-0103",
    "category": "ARM",
    "subtopic": "Pipeline",
    "difficulty": "medium",
    "question": "In the simplest classic ARM (e.g. ARM7TDMI) 3-stage pipeline, what are the three stages, in order?",
    "options": [
      "Fetch, Decode, Execute",
      "Fetch, Execute, Writeback",
      "Decode, Fetch, Execute",
      "Fetch, Memory, Execute"
    ],
    "answer": "Fetch, Decode, Execute"
  },
  {
    "id": "A-0104",
    "category": "ARM",
    "subtopic": "Pipeline",
    "difficulty": "medium",
    "question": "What is a 'branch hazard' (control hazard) in a pipelined processor like ARM?",
    "options": [
      "A delay or wasted cycles caused by not knowing which instruction to fetch next until a branch is resolved",
      "A hazard caused by two instructions writing to the same register",
      "A hazard caused by running out of registers",
      "A hazard that only occurs in Thumb mode"
    ],
    "answer": "A delay or wasted cycles caused by not knowing which instruction to fetch next until a branch is resolved"
  },
  {
    "id": "A-0105",
    "category": "ARM",
    "subtopic": "Basic Instructions",
    "difficulty": "medium",
    "question": "The RSB (Reverse Subtract) instruction computes Rd = Operand2 - Rn (the operands are reversed compared to SUB). What value ends up in R2?\n\n```asm\nMOV r0, #12\nMOV r1, #21\nRSB r2, r0, r1\n```",
    "options": [
      "-9",
      "12",
      "21",
      "9"
    ],
    "answer": "9"
  },
  {
    "id": "A-0106",
    "category": "ARM",
    "subtopic": "Basic Instructions",
    "difficulty": "medium",
    "question": "The RSB (Reverse Subtract) instruction computes Rd = Operand2 - Rn (the operands are reversed compared to SUB). What value ends up in R2?\n\n```asm\nMOV r0, #9\nMOV r1, #25\nRSB r2, r0, r1\n```",
    "options": [
      "16",
      "9",
      "-16",
      "25"
    ],
    "answer": "16"
  },
  {
    "id": "A-0107",
    "category": "ARM",
    "subtopic": "Addressing Modes",
    "difficulty": "medium",
    "question": "Given `int buf[4] = {26, 51, 29, 82}` with R5 pointing at buf[0], and R6 = 4 (a byte offset): `LDR R0, [R5, R6]` uses register-offset addressing, loading the word at address (R5 + R6). What value ends up in R0?\n\n```asm\nLDR r0, [r5, r6]\n```",
    "options": [
      "82",
      "26",
      "29",
      "51"
    ],
    "answer": "51"
  },
  {
    "id": "A-0108",
    "category": "ARM",
    "subtopic": "Addressing Modes",
    "difficulty": "medium",
    "question": "Given `int buf[4] = {91, 37, 75, 94}` with R5 pointing at buf[0], and R6 = 4 (a byte offset): `LDR R0, [R5, R6]` uses register-offset addressing, loading the word at address (R5 + R6). What value ends up in R0?\n\n```asm\nLDR r0, [r5, r6]\n```",
    "options": [
      "91",
      "75",
      "37",
      "94"
    ],
    "answer": "37"
  },
  {
    "id": "A-0109",
    "category": "ARM",
    "subtopic": "CPSR & Flags",
    "difficulty": "medium",
    "question": "TST performs a bitwise AND between the operands (without storing the result) and sets the Z flag if the AND result is zero. Given R0=15 and R1=0, what value does the Z flag end up holding after `TST R0, R1`?\n\n```asm\nMOV r0, #15\nMOV r1, #0\nTST r0, r1\n```",
    "options": [
      "0",
      "2",
      "-1",
      "1"
    ],
    "answer": "1"
  },
  {
    "id": "A-0110",
    "category": "ARM",
    "subtopic": "CPSR & Flags",
    "difficulty": "medium",
    "question": "TEQ performs a bitwise XOR between the operands (without storing the result) and sets the Z flag if the XOR result is zero (i.e. the operands are equal). Given R0=26 and R1=24, what value does the Z flag end up holding after `TEQ R0, R1`?\n\n```asm\nMOV r0, #26\nMOV r1, #24\nTEQ r0, r1\n```",
    "options": [
      "1",
      "2",
      "0",
      "-1"
    ],
    "answer": "0"
  },
  {
    "id": "A-0111",
    "category": "ARM",
    "subtopic": "CPSR & Flags",
    "difficulty": "medium",
    "question": "CMN computes Rn + Operand2 (without storing the result) and updates the flags, setting Z=1 if the sum is zero. Given R0=7 and R1 set such that R0 + R1 = 0, what value does the Z flag hold after `CMN R0, R1`?\n\n```asm\nMOV r0, #7\nMVN r1, #6\nCMN r0, r1\n```",
    "options": [
      "2",
      "-1",
      "0",
      "1"
    ],
    "answer": "1"
  },
  {
    "id": "A-0112",
    "category": "ARM",
    "subtopic": "CPSR & Flags",
    "difficulty": "medium",
    "question": "CMN computes Rn + Operand2 (without storing the result) and updates the flags, setting Z=1 if the sum is zero. Given R0=15 and R1 set such that R0 + R1 = 0, what value does the Z flag hold after `CMN R0, R1`?\n\n```asm\nMOV r0, #15\nMVN r1, #14\nCMN r0, r1\n```",
    "options": [
      "2",
      "0",
      "1",
      "-1"
    ],
    "answer": "1"
  },
  {
    "id": "A-0113",
    "category": "ARM",
    "subtopic": "Register Tracing",
    "difficulty": "hard",
    "question": "Trace through the following instructions step by step. What value ends up in R3?\n\n```asm\nMOV r0, #6\nMOV r1, #8\nADD r2, r0, r1\nMUL r3, r2, r0\nSUB r3, r3, #6\n```",
    "options": [
      "78",
      "14",
      "84",
      "76"
    ],
    "answer": "78"
  },
  {
    "id": "A-0114",
    "category": "ARM",
    "subtopic": "Register Tracing",
    "difficulty": "hard",
    "question": "Trace through the following instructions step by step. What value ends up in R3?\n\n```asm\nMOV r0, #8\nMOV r1, #9\nADD r2, r0, r1\nMUL r3, r2, r0\nSUB r3, r3, #3\n```",
    "options": [
      "138",
      "133",
      "136",
      "17"
    ],
    "answer": "133"
  },
  {
    "id": "A-0115",
    "category": "ARM",
    "subtopic": "Register Tracing",
    "difficulty": "hard",
    "question": "This snippet adds R0 to R1 inside a loop that runs while R2 (a counter) is nonzero, decrementing R2 each time. What value ends up in R1 after the loop finishes?\n\n```asm\nMOV r0, #4\nMOV r1, #0\nMOV r2, #4\nloop1:\n    ADD r1, r1, r0\n    SUBS r2, r2, #1\n    BNE loop1\n```",
    "options": [
      "4",
      "17",
      "16",
      "8"
    ],
    "answer": "16"
  },
  {
    "id": "A-0116",
    "category": "ARM",
    "subtopic": "Register Tracing",
    "difficulty": "hard",
    "question": "This snippet adds R0 to R1 inside a loop that runs while R2 (a counter) is nonzero, decrementing R2 each time. What value ends up in R1 after the loop finishes?\n\n```asm\nMOV r0, #8\nMOV r1, #0\nMOV r2, #5\nloop1:\n    ADD r1, r1, r0\n    SUBS r2, r2, #1\n    BNE loop1\n```",
    "options": [
      "40",
      "41",
      "13",
      "8"
    ],
    "answer": "40"
  },
  {
    "id": "A-0117",
    "category": "ARM",
    "subtopic": "Register Tracing",
    "difficulty": "hard",
    "question": "Trace through the following instructions. What value ends up in R6?\n\n```asm\nMOV r0, #6\nMOV r1, #7\nMOV r2, #8\nMOV r3, #2\nADD r4, r0, r1\nADD r5, r2, r3\nSUB r6, r4, r5\n```",
    "options": [
      "3",
      "10",
      "23",
      "13"
    ],
    "answer": "3"
  },
  {
    "id": "A-0118",
    "category": "ARM",
    "subtopic": "Register Tracing",
    "difficulty": "hard",
    "question": "Trace through the following instructions. What value ends up in R6?\n\n```asm\nMOV r0, #10\nMOV r1, #14\nMOV r2, #18\nMOV r3, #4\nADD r4, r0, r1\nADD r5, r2, r3\nSUB r6, r4, r5\n```",
    "options": [
      "2",
      "24",
      "22",
      "46"
    ],
    "answer": "2"
  },
  {
    "id": "A-0119",
    "category": "ARM",
    "subtopic": "Register Tracing",
    "difficulty": "hard",
    "question": "Trace through the following instructions combining a shift, an add, then another shift. What value ends up in R3?\n\n```asm\nMOV r0, #5\nLSL r1, r0, #3\nADD r2, r1, r0\nASR r3, r2, #2\n```",
    "options": [
      "11",
      "40",
      "45",
      "5"
    ],
    "answer": "11"
  },
  {
    "id": "A-0120",
    "category": "ARM",
    "subtopic": "Register Tracing",
    "difficulty": "hard",
    "question": "Trace through the following instructions combining a shift, an add, then another shift. What value ends up in R3?\n\n```asm\nMOV r0, #14\nLSL r1, r0, #1\nADD r2, r1, r0\nASR r3, r2, #1\n```",
    "options": [
      "21",
      "28",
      "42",
      "14"
    ],
    "answer": "21"
  },
  {
    "id": "A-0121",
    "category": "ARM",
    "subtopic": "CPSR & Flags",
    "difficulty": "hard",
    "question": "After executing `CMP R0, R1` with R0=0 and R1=4 (signed values), what are the resulting N, Z, C, V flags?\n\n```asm\nMOV r0, #0\nMOV r1, #4\nCMP r0, r1\n```",
    "options": [
      "N=0 Z=0 C=0 V=0",
      "N=1 Z=0 C=1 V=0",
      "N=1 Z=0 C=0 V=0",
      "N=1 Z=1 C=0 V=0"
    ],
    "answer": "N=1 Z=0 C=0 V=0"
  },
  {
    "id": "A-0122",
    "category": "ARM",
    "subtopic": "CPSR & Flags",
    "difficulty": "hard",
    "question": "After executing `CMP R0, R1` with R0=12 and R1=-5 (signed values), what are the resulting N, Z, C, V flags?\n\n```asm\nMOV r0, #12\nMOV r1, #-5\nCMP r0, r1\n```",
    "options": [
      "N=0 Z=0 C=1 V=0",
      "N=1 Z=0 C=0 V=0",
      "N=0 Z=1 C=0 V=0",
      "N=0 Z=0 C=0 V=0"
    ],
    "answer": "N=0 Z=0 C=0 V=0"
  },
  {
    "id": "A-0123",
    "category": "ARM",
    "subtopic": "CPSR & Flags",
    "difficulty": "hard",
    "question": "After executing `CMP R0, R1` with R0=6 and R1=-15 (signed values), what are the resulting N, Z, C, V flags?\n\n```asm\nMOV r0, #6\nMOV r1, #-15\nCMP r0, r1\n```",
    "options": [
      "N=1 Z=0 C=0 V=0",
      "N=0 Z=0 C=1 V=0",
      "N=0 Z=1 C=0 V=0",
      "N=0 Z=0 C=0 V=0"
    ],
    "answer": "N=0 Z=0 C=0 V=0"
  },
  {
    "id": "A-0124",
    "category": "ARM",
    "subtopic": "CPSR & Flags",
    "difficulty": "hard",
    "question": "After executing `CMP R0, R1` with R0=10 and R1=11 (signed values), what are the resulting N, Z, C, V flags?\n\n```asm\nMOV r0, #10\nMOV r1, #11\nCMP r0, r1\n```",
    "options": [
      "N=0 Z=0 C=0 V=0",
      "N=1 Z=0 C=1 V=0",
      "N=1 Z=1 C=0 V=0",
      "N=1 Z=0 C=0 V=0"
    ],
    "answer": "N=1 Z=0 C=0 V=0"
  },
  {
    "id": "A-0125",
    "category": "ARM",
    "subtopic": "CPSR & Flags",
    "difficulty": "hard",
    "question": "After executing `CMP R0, R1` with R0=-12 and R1=-15 (signed values), what are the resulting N, Z, C, V flags?\n\n```asm\nMOV r0, #-12\nMOV r1, #-15\nCMP r0, r1\n```",
    "options": [
      "N=1 Z=0 C=1 V=0",
      "N=0 Z=1 C=1 V=0",
      "N=0 Z=0 C=1 V=0",
      "N=0 Z=0 C=0 V=0"
    ],
    "answer": "N=0 Z=0 C=1 V=0"
  },
  {
    "id": "A-0126",
    "category": "ARM",
    "subtopic": "CPSR & Flags",
    "difficulty": "hard",
    "question": "After executing `CMP R0, R1` with R0=-3 and R1=-14 (signed values), what are the resulting N, Z, C, V flags?\n\n```asm\nMOV r0, #-3\nMOV r1, #-14\nCMP r0, r1\n```",
    "options": [
      "N=1 Z=0 C=1 V=0",
      "N=0 Z=0 C=0 V=0",
      "N=0 Z=0 C=1 V=0",
      "N=0 Z=1 C=1 V=0"
    ],
    "answer": "N=0 Z=0 C=1 V=0"
  },
  {
    "id": "A-0127",
    "category": "ARM",
    "subtopic": "Thumb-2 & IT Blocks",
    "difficulty": "hard",
    "question": "This Thumb-2 code uses an IT (If-Then) block: the MOVGT instruction only executes if the GT condition (based on the preceding CMP) holds true; otherwise it is skipped, with no branch needed. Given R0=4 and R1=10, what value ends up in R2?\n\n```asm\nMOV r0, #4\nMOV r1, #10\nMOV r2, #0\nCMP r0, r1\nIT GT\nMOVGT r2, #1\n```",
    "options": [
      "0",
      "2",
      "-1",
      "1"
    ],
    "answer": "0"
  },
  {
    "id": "A-0128",
    "category": "ARM",
    "subtopic": "Thumb-2 & IT Blocks",
    "difficulty": "hard",
    "question": "This Thumb-2 code uses an IT (If-Then) block: the MOVLT instruction only executes if the LT condition (based on the preceding CMP) holds true; otherwise it is skipped, with no branch needed. Given R0=2 and R1=10, what value ends up in R2?\n\n```asm\nMOV r0, #2\nMOV r1, #10\nMOV r2, #0\nCMP r0, r1\nIT LT\nMOVLT r2, #1\n```",
    "options": [
      "0",
      "-1",
      "1",
      "2"
    ],
    "answer": "1"
  },
  {
    "id": "A-0129",
    "category": "ARM",
    "subtopic": "Thumb-2 & IT Blocks",
    "difficulty": "hard",
    "question": "This Thumb-2 ITE (If-Then-Else) block conditionally executes MOVGT (the 'then' part) if GT holds, otherwise MOVLE executes (the 'else' part). Given R0=19 and R1=1, what are the final values of R2 and R3?\n\n```asm\nMOV r0, #19\nMOV r1, #1\nMOV r2, #0\nMOV r3, #0\nCMP r0, r1\nITE GT\nMOVGT r2, #1\nMOVLE r3, #1\n```",
    "options": [
      "R2=0 R3=1",
      "R2=1 R3=1",
      "R2=1 R3=0",
      "R2=0 R3=0"
    ],
    "answer": "R2=1 R3=0"
  },
  {
    "id": "A-0130",
    "category": "ARM",
    "subtopic": "Thumb-2 & IT Blocks",
    "difficulty": "hard",
    "question": "This Thumb-2 ITE (If-Then-Else) block conditionally executes MOVGT (the 'then' part) if GT holds, otherwise MOVLE executes (the 'else' part). Given R0=15 and R1=20, what are the final values of R2 and R3?\n\n```asm\nMOV r0, #15\nMOV r1, #20\nMOV r2, #0\nMOV r3, #0\nCMP r0, r1\nITE GT\nMOVGT r2, #1\nMOVLE r3, #1\n```",
    "options": [
      "R2=0 R3=1_alt",
      "R2=1 R3=0",
      "R2=0 R3=1",
      "R2=0 R3=0"
    ],
    "answer": "R2=0 R3=1"
  },
  {
    "id": "A-0131",
    "category": "ARM",
    "subtopic": "Bit Manipulation",
    "difficulty": "hard",
    "question": "CLZ (Count Leading Zeros) counts how many leading zero bits precede the first set bit in a 32-bit value. What value ends up in R1?\n\n```asm\nMOV r0, #8\nCLZ r1, r0\n```",
    "options": [
      "27",
      "28",
      "4",
      "31"
    ],
    "answer": "28"
  },
  {
    "id": "A-0132",
    "category": "ARM",
    "subtopic": "Bit Manipulation",
    "difficulty": "hard",
    "question": "CLZ (Count Leading Zeros) counts how many leading zero bits precede the first set bit in a 32-bit value. What value ends up in R1?\n\n```asm\nMOV r0, #32\nCLZ r1, r0\n```",
    "options": [
      "6",
      "36",
      "26",
      "31"
    ],
    "answer": "26"
  },
  {
    "id": "A-0133",
    "category": "ARM",
    "subtopic": "Bit Manipulation",
    "difficulty": "hard",
    "question": "UBFX (Unsigned Bit Field Extract) extracts 4 bits starting at bit position 4 from R0 and zero-extends the result into R1. What value ends up in R1?\n\n```asm\nMOV r0, #170\nUBFX r1, r0, #4, #4\n```",
    "options": [
      "10",
      "13",
      "5",
      "170"
    ],
    "answer": "10"
  },
  {
    "id": "A-0134",
    "category": "ARM",
    "subtopic": "Bit Manipulation",
    "difficulty": "hard",
    "question": "UBFX (Unsigned Bit Field Extract) extracts 4 bits starting at bit position 0 from R0 and zero-extends the result into R1. What value ends up in R1?\n\n```asm\nMOV r0, #247\nUBFX r1, r0, #0, #4\n```",
    "options": [
      "247",
      "10",
      "7",
      "8"
    ],
    "answer": "7"
  },
  {
    "id": "A-0135",
    "category": "ARM",
    "subtopic": "Bit Manipulation",
    "difficulty": "hard",
    "question": "BFI (Bit Field Insert) inserts the low 4 bits of R1 into R0 starting at bit position 4 (a 4-bit-wide field), leaving the other bits of R0 unchanged. What value ends up in R0?\n\n```asm\nMOV r0, #0\nMOV r1, #12\nBFI r0, r1, #4, #4\n```",
    "options": [
      "12",
      "192",
      "240",
      "0"
    ],
    "answer": "192"
  },
  {
    "id": "A-0136",
    "category": "ARM",
    "subtopic": "Bit Manipulation",
    "difficulty": "hard",
    "question": "BFI (Bit Field Insert) inserts the low 4 bits of R1 into R0 starting at bit position 4 (a 4-bit-wide field), leaving the other bits of R0 unchanged. What value ends up in R0?\n\n```asm\nMOV r0, #0\nMOV r1, #14\nBFI r0, r1, #4, #4\n```",
    "options": [
      "272",
      "14",
      "0",
      "224"
    ],
    "answer": "224"
  },
  {
    "id": "A-0137",
    "category": "ARM",
    "subtopic": "Bit Manipulation",
    "difficulty": "hard",
    "question": "REV reverses the byte order of a 32-bit register (byte-swap), commonly used for endianness conversion. Given R0 = 0x12345678, what value (as a signed 32-bit decimal) ends up in R1 after `REV R1, R0`?\n\n```asm\nLDR r0, =0x12345678\nREV r1, r0\n```",
    "options": [
      "-2018915346",
      "305419896",
      "0",
      "2018915346"
    ],
    "answer": "2018915346"
  },
  {
    "id": "A-0138",
    "category": "ARM",
    "subtopic": "Bit Manipulation",
    "difficulty": "hard",
    "question": "REV reverses the byte order of a 32-bit register (byte-swap), commonly used for endianness conversion. Given R0 = 0xabcdef01, what value (as a signed 32-bit decimal) ends up in R1 after `REV R1, R0`?\n\n```asm\nLDR r0, =0xabcdef01\nREV r1, r0\n```",
    "options": [
      "32492971",
      "-32492971",
      "-1412567295",
      "0"
    ],
    "answer": "32492971"
  },
  {
    "id": "A-0139",
    "category": "ARM",
    "subtopic": "Pipeline",
    "difficulty": "hard",
    "question": "What is a 'data hazard' in a pipelined CPU such as ARM, where an instruction needs a value that the previous instruction hasn't finished computing yet?",
    "options": [
      "A hazard where an instruction depends on the result of a preceding instruction still in the pipeline, requiring a stall or forwarding to resolve",
      "A hazard caused by running out of available opcodes",
      "A hazard that only happens when using floating point instructions",
      "A hazard caused by incorrect endianness configuration"
    ],
    "answer": "A hazard where an instruction depends on the result of a preceding instruction still in the pipeline, requiring a stall or forwarding to resolve"
  },
  {
    "id": "A-0140",
    "category": "ARM",
    "subtopic": "Pipeline",
    "difficulty": "hard",
    "question": "What technique do modern pipelined processors commonly use to resolve a data hazard WITHOUT stalling, by routing a result directly from one pipeline stage to an earlier stage that needs it?",
    "options": [
      "Forwarding (bypassing)",
      "Branch prediction",
      "Out-of-order completion only",
      "Cache flushing"
    ],
    "answer": "Forwarding (bypassing)"
  },
  {
    "id": "A-0141",
    "category": "ARM",
    "subtopic": "Pipeline",
    "difficulty": "hard",
    "question": "Why does writing to the Program Counter (R15) directly in classic ARM code typically cause a pipeline flush?",
    "options": [
      "Because the pipeline had already fetched and possibly decoded instructions sequentially following the old PC value, which are now invalid and must be discarded",
      "Because R15 is read-only on most ARM cores",
      "Because writing PC always triggers a hardware interrupt",
      "It does not cause any pipeline disruption"
    ],
    "answer": "Because the pipeline had already fetched and possibly decoded instructions sequentially following the old PC value, which are now invalid and must be discarded"
  },
  {
    "id": "A-0142",
    "category": "ARM",
    "subtopic": "Pipeline",
    "difficulty": "hard",
    "question": "What is 'branch prediction' used for in higher-end ARM Cortex-A pipelines?",
    "options": [
      "Guessing the outcome of a branch instruction in advance so the pipeline can keep fetching along the predicted path, avoiding stalls if the guess is correct",
      "Predicting which peripheral will raise the next interrupt",
      "Predicting register allocation at compile time",
      "Predicting memory addresses for the stack only"
    ],
    "answer": "Guessing the outcome of a branch instruction in advance so the pipeline can keep fetching along the predicted path, avoiding stalls if the guess is correct"
  },
  {
    "id": "A-0143",
    "category": "ARM",
    "subtopic": "Calling Convention (AAPCS)",
    "difficulty": "hard",
    "question": "Under AAPCS, what happens to the stack pointer's alignment requirement at a public function call boundary?",
    "options": [
      "SP must be 8-byte aligned at every public interface (function call boundary)",
      "SP has no alignment requirement",
      "SP must be 16-byte aligned",
      "SP must always equal a multiple of 4096"
    ],
    "answer": "SP must be 8-byte aligned at every public interface (function call boundary)"
  },
  {
    "id": "A-0144",
    "category": "ARM",
    "subtopic": "Calling Convention (AAPCS)",
    "difficulty": "hard",
    "question": "Under AAPCS, if a function returns a 64-bit integer (e.g. `long long`), in which register pair is the result returned?",
    "options": [
      "R0 (low 32 bits) and R1 (high 32 bits)",
      "R0 and R12",
      "Only R0, truncating the value",
      "SP and LR"
    ],
    "answer": "R0 (low 32 bits) and R1 (high 32 bits)"
  },
  {
    "id": "A-0145",
    "category": "ARM",
    "subtopic": "Calling Convention (AAPCS)",
    "difficulty": "hard",
    "question": "Under AAPCS, when a leaf function (one that calls no other functions) does not modify R4-R11, LR, or SP, is it required to save/restore them on the stack?",
    "options": [
      "No - it only needs to preserve registers it actually modifies; untouched callee-saved registers don't need saving",
      "Yes, it must always push all callee-saved registers regardless",
      "It must save all 16 registers unconditionally",
      "Only floating point registers need saving"
    ],
    "answer": "No - it only needs to preserve registers it actually modifies; untouched callee-saved registers don't need saving"
  },
  {
    "id": "A-0146",
    "category": "ARM",
    "subtopic": "Calling Convention (AAPCS)",
    "difficulty": "hard",
    "question": "Under AAPCS, which register holds the address of the caller's instruction to return to immediately after a `BL` instruction executes (before any further pushes)?",
    "options": [
      "LR (R14)",
      "SP (R13)",
      "PC (R15)",
      "R0"
    ],
    "answer": "LR (R14)"
  },
  {
    "id": "A-0147",
    "category": "ARM",
    "subtopic": "Addressing Modes",
    "difficulty": "hard",
    "question": "Given `int buf[4] = {22, 83, 2, 36}` with R5 initially pointing at buf[0]: each `LDR Rx, [r5], #4` loads from the CURRENT address then advances R5 by 4 bytes (post-indexed). What value ends up in R2?\n\n```asm\nLDR r0, [r5], #4\nLDR r1, [r5], #4\nADD r2, r0, r1\n```",
    "options": [
      "22",
      "24",
      "105",
      "38"
    ],
    "answer": "105"
  },
  {
    "id": "A-0148",
    "category": "ARM",
    "subtopic": "Addressing Modes",
    "difficulty": "hard",
    "question": "Given `int buf[4] = {21, 84, 27, 1}` with R5 initially pointing at buf[0]: each `LDR Rx, [r5], #4` loads from the CURRENT address then advances R5 by 4 bytes (post-indexed). What value ends up in R2?\n\n```asm\nLDR r0, [r5], #4\nLDR r1, [r5], #4\nADD r2, r0, r1\n```",
    "options": [
      "105",
      "48",
      "28",
      "21"
    ],
    "answer": "105"
  },
  {
    "id": "A-0149",
    "category": "ARM",
    "subtopic": "Addressing Modes",
    "difficulty": "hard",
    "question": "Given `int buf[4] = {93, 96, 24, 19}` with R5 initially pointing at buf[0]: each `LDR Rx, [r5], #4` loads from the CURRENT address then advances R5 by 4 bytes (post-indexed). What value ends up in R2?\n\n```asm\nLDR r0, [r5], #4\nLDR r1, [r5], #4\nADD r2, r0, r1\n```",
    "options": [
      "93",
      "117",
      "189",
      "43"
    ],
    "answer": "189"
  },
  {
    "id": "A-0150",
    "category": "ARM",
    "subtopic": "Addressing Modes",
    "difficulty": "hard",
    "question": "Given `int buf[4] = {57, 33, 88, 72}` with R5 initially pointing at buf[0]: each `LDR Rx, [r5], #4` loads from the CURRENT address then advances R5 by 4 bytes (post-indexed). What value ends up in R2?\n\n```asm\nLDR r0, [r5], #4\nLDR r1, [r5], #4\nADD r2, r0, r1\n```",
    "options": [
      "90",
      "160",
      "145",
      "57"
    ],
    "answer": "90"
  },
  {
    "id": "A-0151",
    "category": "ARM",
    "subtopic": "Multiply-Accumulate (MAC)",
    "difficulty": "hard",
    "question": "This snippet chains two multiply-accumulate operations: first R2 = (R0*R1)+R2, then R2 = (R0*R3)+R2. What value ends up in R2?\n\n```asm\nMOV r0, #6\nMOV r1, #2\nMOV r2, #6\nMLA r2, r0, r1, r2\nMOV r3, #4\nMLA r2, r0, r3, r2\n```",
    "options": [
      "42",
      "36",
      "30",
      "18"
    ],
    "answer": "42"
  },
  {
    "id": "A-0152",
    "category": "ARM",
    "subtopic": "Multiply-Accumulate (MAC)",
    "difficulty": "hard",
    "question": "This snippet chains two multiply-accumulate operations: first R2 = (R0*R1)+R2, then R2 = (R0*R3)+R2. What value ends up in R2?\n\n```asm\nMOV r0, #2\nMOV r1, #5\nMOV r2, #1\nMLA r2, r0, r1, r2\nMOV r3, #5\nMLA r2, r0, r3, r2\n```",
    "options": [
      "24",
      "11",
      "20",
      "21"
    ],
    "answer": "21"
  },
  {
    "id": "A-0153",
    "category": "ARM",
    "subtopic": "Multiply-Accumulate (MAC)",
    "difficulty": "hard",
    "question": "This snippet chains two multiply-accumulate operations: first R2 = (R0*R1)+R2, then R2 = (R0*R3)+R2. What value ends up in R2?\n\n```asm\nMOV r0, #6\nMOV r1, #4\nMOV r2, #8\nMLA r2, r0, r1, r2\nMOV r3, #2\nMLA r2, r0, r3, r2\n```",
    "options": [
      "20",
      "36",
      "44",
      "32"
    ],
    "answer": "44"
  },
  {
    "id": "A-0154",
    "category": "ARM",
    "subtopic": "Interrupts & Exceptions",
    "difficulty": "hard",
    "question": "On a Cortex-M device, which vector table entry (by offset) corresponds to the HardFault handler?",
    "options": [
      "Offset 0x0C",
      "Offset 0x00",
      "Offset 0x04",
      "Offset 0x08"
    ],
    "answer": "Offset 0x0C"
  },
  {
    "id": "A-0155",
    "category": "ARM",
    "subtopic": "Interrupts & Exceptions",
    "difficulty": "hard",
    "question": "On a Cortex-M device, which vector table entry (by offset) corresponds to the NMI (Non-Maskable Interrupt) handler?",
    "options": [
      "Offset 0x08",
      "Offset 0x00",
      "Offset 0x04",
      "Offset 0x0C"
    ],
    "answer": "Offset 0x08"
  },
  {
    "id": "A-0156",
    "category": "ARM",
    "subtopic": "Interrupts & Exceptions",
    "difficulty": "hard",
    "question": "On a Cortex-M device, IRQ (peripheral interrupt) vector entries typically begin at which vector table offset, after the fixed system exceptions?",
    "options": [
      "Offset 0x40",
      "Offset 0x00",
      "Offset 0x04",
      "Offset 0xFF"
    ],
    "answer": "Offset 0x40"
  },
  {
    "id": "A-0157",
    "category": "ARM",
    "subtopic": "Multiply-Accumulate (MAC)",
    "difficulty": "hard",
    "question": "This snippet chains two multiply-accumulate operations: first R2 = (R0*R1)+R2, then R2 = (R0*R3)+R2. What value ends up in R2?\n\n```asm\nMOV r0, #4\nMOV r1, #6\nMOV r2, #2\nMLA r2, r0, r1, r2\nMOV r3, #3\nMLA r2, r0, r3, r2\n```",
    "options": [
      "36",
      "14",
      "26",
      "38"
    ],
    "answer": "38"
  },
  {
    "id": "A-0158",
    "category": "ARM",
    "subtopic": "CPSR & Flags",
    "difficulty": "hard",
    "question": "ADDS sets the Carry flag if the addition overflows 32 bits. ADC then adds its operands PLUS the current Carry flag value. What value ends up in R3?\n\n```asm\nMOV r0, #225\nMOV r1, #13\nADDS r2, r0, r1\nADC r3, r2, #0\n```",
    "options": [
      "241",
      "240",
      "239",
      "238"
    ],
    "answer": "238"
  },
  {
    "id": "A-0159",
    "category": "ARM",
    "subtopic": "Bit Manipulation",
    "difficulty": "hard",
    "question": "SBFX (Signed Bit Field Extract) extracts 4 bits starting at bit position 0 from R0 and SIGN-extends the result into R1 (unlike UBFX, which zero-extends). What value ends up in R1?\n\n```asm\nMOV r0, #11\nSBFX r1, r0, #0, #4\n```",
    "options": [
      "11",
      "-2",
      "-5",
      "-11"
    ],
    "answer": "-5"
  },
  {
    "id": "A-0160",
    "category": "ARM",
    "subtopic": "Bit Manipulation",
    "difficulty": "hard",
    "question": "SBFX (Signed Bit Field Extract) extracts 4 bits starting at bit position 0 from R0 and SIGN-extends the result into R1 (unlike UBFX, which zero-extends). What value ends up in R1?\n\n```asm\nMOV r0, #3\nSBFX r1, r0, #0, #4\n```",
    "options": [
      "5",
      "-3",
      "6",
      "3"
    ],
    "answer": "3"
  }
];
