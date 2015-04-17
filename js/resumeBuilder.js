var bio = {
    "name": "Si Joon Lee",
    "role" : "Front End Developer & Multimedia Producer",
    "contacts" : {
    "email" : "sijoon@netscape.net",
    "github" : "sioppa",
    "mobile" : "213.446.7722",
    "twitter": "@sioppa",
    "location": "Redwood City, California",
     },
    "skills" : ["HTML, CSS, Javascript","Video Production, Editing and Color Correction", "Audio Editing & Restoration"],
    "picture" : "images/fry.jpg",
    "welcomeMsg" : "I code = therefore (I am)"
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var contactsMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var contactsEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var contactsGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var contactsLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var contactsTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var displayWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
    var displayImage = HTMLbioPic.replace("%data%",bio.picture);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#header").append(displayImage);
        $("#header").append(displayWelcomeMsg);
        $("#topContacts").append(contactsEmail);
        $("#topContacts").append(contactsGithub);
        $("#topContacts").append(contactsTwitter);
        $("#topContacts").prepend(contactsMobile);
        $("#topContacts").append(contactsLocation);
        $("#footerContacts").append(contactsEmail);
        $("#footerContacts").append(contactsTwitter);
        $("#footerContacts").append(contactsGithub);
        $("#footerContacts").append(contactsMobile);
        $("#footerContacts").append(contactsLocation);
        

    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
      $("#skills").append(formattedSkill);
    }
};

bio.display();

var education = {
    "schools": [
        {
        "name": "University of Califonia, Los Angeles",
        "location": "Los Angeles, California",
        "degree": "Bachelor of Arts",
        "website" : "http://www.sociology.ucla.edu/",
        "dates" : "1995-1999",
        "majors" : ["Sociology"," East Asian Studies/ Japan Concentration"]
        },
        {
        "name": "College of San Mateo",
        "location": "San Mateo, California",
        "city": "San Mateo, California",
        "degree": "Certificate of Achievement, Certificate of Completion",
        "website": "http://collegeofsanmateo.edu/broadcast/",
        "dates" : "2004-2006",
        "majors": ["Broadcast and Media Arts/ Television Production Editing & Lighting", " Multimedia/ Digital Video"]
        }
    ],
    "onlineCourses" : [
        {
        "title" : "In progress, Juris Doctor",
        "school" : "Concord Law School",
        "dates" : "2012-2014",
        "website" : "http://www.concordlawschool.edu"
        },
        {
        "title" : "Front-End Web Developer Nanodegree",
        "school" : "Udacity",
        "dates" : "2015",
        "website" : "https://www.udacity.com/course/nd001"
        }
        
  ]
};

education.display = function() {
    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
        formattedSchoolName = formattedSchoolName.replace("#",education.schools[school].website);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
        $(".education-entry:last").append(formattedSchoolNameDegree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
        $(".education-entry:last").append(formattedSchoolMajor); 
    }

    if (education.onlineCourses.length > 0) {  
        $("#education").append(HTMLonlineClasses); 

        for (var course in education.onlineCourses) {
            $("#education").append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
            formattedOnlineTitle = formattedOnlineTitle.replace("#",education.onlineCourses[course].website);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
            var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
            $(".education-entry:last").append(formattedOnlineTitleSchool);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
            $(".education-entry:last").append(formattedOnlineDates);
       }
    }
};
education.display();

var work = {
    "jobs" : [
        {
        "employer" : "Freelance",
        "title" : "Video Editor",
        "location" : "Los Angeles & Redwood City, California",
        "dates" : "2009 - Now",
        "website" : "http://vimeo.com/silee/demoreel/",
        "description" : "Write and Produced promo videos for clients and small businesses."
    },
    {
        "employer" : "LA CITYVIEW 35 (City of Los Angeles)",
        "title" : "Contract Video Editor",
        "location" : "Los Angeles, California",
        "dates" : "2008",
        "website" : "http://www.lacityview.org/",
        "description" : "Edited segments for a television weekly magazine show, LA This Week."
    },
    {
        "employer" : "Red Hering",
        "title" : "Video Editor & Audio Engineer",
        "location" : "Belmont, California",
        "dates" : "2007-2008",
        "website" : "http://www.redherring.com/",
        "description" : "Conducted multi-camera interview shootings in location and in RH green screen studio. Restored, edited and compressed audio sources for video."
    },
    {
        "employer" : "Grace Ministries International",
        "title" : "Video Editor",
        "location" : "Fullerton, California",
        "dates" : " 2003-2004",
        "website" : "http://www.gracemi.com/",
        "description" : "Edited video, and recorded and mixed audio for Sunday paid sermon program and documentaries."
    },
    {
        "employer" : "Gospel Broadcasting Company (AM 1190)",
        "title" : "Audio Engineer",
        "location" : "Los Angeles, California",
        "dates" : " 2003-2004",
        "website" : "http://www.igbc.net/",
        "description" : "Controlled mixing console and audio processor for live show."
    },
    {
        "employer" : "MBC America",
        "title" : "Freelance Promo Editor",
        "location" : "Los Angeles, California",
        "dates" : "2002",
        "website" : "http://www.mbc-america.com/",
        "description" : "Produced and edited MBC America promo for cable networks."
    }
  ]
};
work.display = function() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedEmployer = formattedEmployer.replace("#", work.jobs[job].website);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title)
    var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
    var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedLocation;
    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedDates);

    $(".work-entry:last").append(formattedDescription);
  }
}

work.display();

