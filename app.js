var namesBySquad = {
    Squad43: [
        "Aarya D",
        "Aditya Bachepallikar",
        "Kavya",
        "Arya Anand",
        "Arav Tikkoo",
        "Nenika",
        "Mayank Agarwal",
        "Atharv Bhagat",
        "Shrreya",
        "Tanve",
        "Hiranmayi",
        "Vaishnav",
    ],
    Squad44: [
        "Nidhi",
        "Anvi Gupta",
        "Rudra Kumar",
        "Shoban",
        "Eshwar",
        "Mahima Sree",
        "Poorvika Sree",
        "Sukirtha",
        "Eshan venkatesh",
        "Mahetha",
        "Skandakumar Karttikeyan",
    ],
    Squad45: [
        "Anshul baddi",
        "Kavinisha",
        "Ananya Y Deshmane",
        "Ayden",
        "Anderson",
        "Shreya Sreenivasa",
        "Veditraghav Sairi",
        "Akhilan Ashok",
        "Anirudh Ganesan",
        "Abhinav Ganesan",
    ],
    Squad46: [
        "Umang Mathur",
        "Nivedita Hanil",
        "Lewin Anthony",
        "Vihaan Agrawal",
        "Meghnaa",
        "Akshika",
        "Prince Puthuran",
        "Advait Sumesh",
    ],
    Squad47: [
        "Mihika kumar",
        "Nihar",
        "Maitri Chakraborty",
        "Saikrishna",
        "Aadi vaishnav",
        "Dhruv Vinod",
        "Rittvik Arrvind",
    ],
    Squad48: [
        "Eshaan Ali Mashrook",
        "Saamir",
        "Thanikan",
        "Aman Bafna",
        "Akankshya",
        "Leena Abigail Dany",
    ],
    Squad49: [
        "Fathima Zahra",
        "Siddharth",
        "Vijay Sathappan Narayanan",
        "Ashwin",
        "Ashutosh Patnaik",
        "Tuvijeet Sharma",
        "Miruthula Devi",
        "Shlok",
        "Shashvati Mahesh Kumar",
        "Sharvari Mahesh Kumar",
        "Dhanush S S",
        "Himansh Ahuja",
    ],
    Squad50: [
        "Atmikha",
        "Luis Gael Rojo Trejo",
        "Avigat Gupta",
        "Amresh Patnaik",
        "Anagha N",
        "Sidharth Sudheer",
        "Veer Banerjee",
        "Pinnenti Sreepooja",
        "Ishaan Kurian",
        "Aditya Singh",
        "Sanskriti Amidesh",
    ],
    Squad51: ["Mahika", "Pranshu", "Vaidehi", "Isha"],
    Squad52: [
        "Neev",
        "Aanya M Bafna",
        "Ajay Prasanth",
        "Sanchan",
        "Hriya",
        "Advik H",
        "Sharique",
        "Vani Jain",
        "Kamlesh Narayanan",
        "Sakthivelu",
    ],
};

var red = [
    "Shoban",
    "Anirudh Ganesan",
    "Akhilan Ashok",
    "Prince Puthuran",
    "Arav",
    "Anvi Gupta",
    "Poorvika Sree",
    "Kavinisha",
    "Hiranmayi",
    "Aditya",
    "Atharv",
    "Rittvik Arrvind",
    "Ayden",
    "Nihar",
    "Vijay Sathappan Narayanan",
    "Ashwin",
    "Shashvati Mahesh Kumar",
    "Himansh Ahuja",
    "Neev",
    "Sanchan",
    "Hriya",
    "Nivedita Hanil",
    "Akshika",
    "Saamir",
    "Pranshu",
    "Aditya Singh",
    "Atmikha",
    "Jenika Ann Mathew",
    "Sanskriti Amidesh",
];
var blue = [
    "Eshwar",
    "Abhinav Ganesan",
    "Rudra Kumar",
    "Skandakumar Karttikeyan",
    "Ananya Y Deshmane",
    "Advait Sumesh",
    "Aarya D",
    "Shreya Sreenivasa",
    "Maitri Chakraborty",
    "Tanve",
    "Mayank",
    "Eshan venkatesh",
    "Vihaan Agrawal",
    "Anderson",
    "Arya Anand",
    "Mihika kumar",
    "Fathima Zahra",
    "Ashutosh Patnaik",
    "Miruthula Devi",
    "Shlok",
    "Ajay Prasanth",
    "Advik H",
    "Sharique",
    "Vani Jain",
    "Leena Abigail Dany",
    "Akankshya",
    "Meghnaa",
    "Mahika",
    "Vaidehi",
    "Avigat Gupta",
    "Ishaan Kurian",
    "Sidharth Sudheer",
    "Anagha N",
];
var green = [
    "Mahima Sree",
    "Sukirtha",
    "Lewin Anthony",
    "Veditraghav Sairi",
    "Umang Mathur",
    "Anshul baddi",
    "Nenika Majeethia",
    "Nidhi",
    "Mahetha",
    "Kavya Diwan",
    "Shrreya",
    "Eshaan Ali Mashrook",
    "Vaishnav",
    "Saikrishna",
    "Siddharth",
    "Tuvijeet Sharma",
    "Sharvari Mahesh Kumar",
    "Dhanush S S",
    "Aanya M Bafna",
    "Kamlesh Narayanan",
    "Sakthivelu",
    "Aman Bafna",
    "Thanikan",
    "Dhruv Vinod",
    "Isha",
    "Amresh Patnaik",
    "Luis Gael Rojo Trejo",
    "Veer Banerjee",
    "Pinnenti Sreepooja",
];

function makeSubmenu(value) {
    if (value.length == 0)
        document.getElementById("name").innerHTML = "<option></option>";
    else {
        var squadOptions = "";
        for (squadId in namesBySquad[value]) {
            squadOptions += "<option>" + namesBySquad[value][squadId] + "</option>";
        }
        document.getElementById("name").innerHTML = squadOptions;
    }
}

function displaySelected() {
    var Squad = document.getElementById("squad").value;
    var Student = document.getElementById("name").value;

    if (red.indexOf(Student) != -1) {
        location.href = "./red.html";
        //Remove the alert and give location.href = "./house1.html"
    } else if (blue.indexOf(Student) != -1) {
        //alert(Squad + "\n" + Student + " " + "blue");
        location.href = "./blue.html";
    } else {
        //alert(Squad + "\n" + Student + " " + "green");
        location.href = "./green.html";
    }
}

function resetSelection() {
    document.getElementById("squad").selectedIndex = 0;
    document.getElementById("name").selectedIndex = 0;
}

function displayBlueTeam() {
    location.href = "./blueTeam.html"
}

function displayRedTeam() {
    location.href = "./redTeam.html"
}

function displayGreenTeam() {
    location.href = "./greenTeam.html"
}