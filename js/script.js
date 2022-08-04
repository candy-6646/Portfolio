//typewitter

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    strings: ['Software Engineer', 'Web Developer', 'Problem Solver'],
    autoStart: true,
    loop:true
});


let allSkillCards = document.querySelectorAll(".skill-card");
for(let i = 0; i < allSkillCards.length; i++) {
    let skillName = allSkillCards[i].classList[1];
    allSkillCards[i].style.background = `url('./img/${skillName}.png')`;
}

let allSkillFilterBtn = document.querySelectorAll(".skill-filter-item");
let currentFilter = 'all';
for(let i = 0; i < allSkillFilterBtn.length; i++) {
    allSkillFilterBtn[i].addEventListener("click", function(e) {
        document.getElementById(currentFilter).classList.remove('active-skill');
        e.currentTarget.classList.add('active-skill');
        currentFilter = e.currentTarget.id;
        applyFilter(currentFilter);
    })
}


function applyFilter(currentFilterName) {
    for(let i = 0; i < allSkillCards.length; i++) {
        if(allSkillCards[i].classList[3] == 's-hide') {
            allSkillCards[i].classList.remove('s-hide');
        }
    }

    if(currentFilterName == 'front') {
        showcard('f');
    }else if(currentFilterName == 'back') {
        showcard('b');
    }else if(currentFilterName == 'course') {
        showcard('c');
    }
}

function showcard(cardName) {
    for(let i = 0; i < allSkillCards.length; i++) {
        if(allSkillCards[i].classList[2] != cardName) {
            allSkillCards[i].classList.add('s-hide');
        }
    }
}




//Get the Nav:
let myNav = document.querySelector("nav");

// When the user scrolls down 400px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    myNav.style.visibility = "visible";
  } else {
    myNav.style.visibility = "hidden";
  }
}





//setting projects
let projects = [
    {
        "id" : 0,
        "name": "Excel Clone",
        "icon": "fa-file",
        "description": "In my excel clone, I have implemented just some of the functions of real excel. Used Graph data structure.",
        "github": "https://github.com/candy-6646/Google-Sheets-Clone",
        "link": "https://candy-6646.github.io/excel-clone",
        "tech": ["Created a <b>cross platform</b> spreadsheet application.", "<b>Graph</b> Data Structure to implement excel formula.", "<b>JavaScript</b> is used for adding functionalities to app.", "Using <b>Chrome local-storage</b> to store data of sheet."]
    },
    {
        "id" : 1,
        "name": "Camera App",
        "icon": "fa-camera",
        "description": "This project is a browser object model (BOM) having following features: Apply filters, Zoom in and Zoom out, etc.",
        "github": "",
        "link": "",
        "tech": ["Creted UI using <b>HTML</b>, <b>CSS</b> and <b>Bootstrap</b>.", "Provided functionality to app using <b>JavaScript</b>.", "To store images and videos, I have used <b>IndexedDB</b>.", " Images have been captured with the help of <b>Canvas</b>."]
    },
    {
        "id" : 2,
        "name": "Simon Game",
        "icon": "fa-gamepad",
        "description": "Simon game is a game of memory skill. Used JavaScript to add functionalities and animations in my game",
        "github": "",
        "link": "",
        "tech": ["Built a web-based game using <b>JavaScript</b>.", "Used <b>CSS</b> and <b>JS</b> to add gaming animations.", "UI is created using <b>HTML</b> and <b>CSS</b>."]
    },
    {
        "id" : 3,
        "name": "Forms App",
        "icon": "fa-server",
        "description": "In this project, I have tried to clone Google Forms. Basically, it is used to collect data, create surveys, etc.",
        "github": "",
        "link": "",
        "tech": ["Developed a clone of <b>Google Forms</b>.", "Backend is developed in <b>Nodejs</b>.", "To create user sessions <b>Expressjs</b> is used.", "<b>MongoDB</b> is used to store forms related data."]
    },
    {
        "id" : 4,
        "name": "Notes App",
        "icon": "fa-edit",
        "description": "Notes App is generally used to create notes, added some more functionalities like, sharing and collaboration.",
        "github": "",
        "link": "",
        "tech": ["Tried to clone <b>Google Keep</b> app.", " Used <b>Nodejs</b> to develop backend of website.", "<b>Expressjs</b> used to create dynamic routes for users.", "Provided logins using <b>OAuth</b> as well as credentials."]
    },
    {
        "id" : 5,
        "name": "Covid Tracker",
        "icon": "fa-medkit",
        "description": "Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore eirmod erat clita.",
        "github": "",
        "link": "",
        "tech": ["Used <b>HTML</b>, CSS and BOOTSTRAP to develop UI.", " Used NODEJS to develop backend of website.", "Used express library to create dynamic routes for users."]
    }
]

let projectContainer = document.querySelector("#projects .container");
let projectCount = 0;
for(let i = 1; i <= 2; i++) {
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    projectContainer.appendChild(rowDiv);

    for(let j = 1; j <= 3; j++) {
        let projectCard = document.createElement('div');
        projectCard.classList.add('col-lg-4');
        projectCard.classList.add('col-sm-12');

        projectCard.innerHTML = `<div class="project-card">
        <div class="project-title">
          <div class="project-img">
            <i class="fa ${projects[projectCount].icon}"></i>
          </div>
          <div class="project-name">${projects[projectCount].name}</div>
        </div>
        <div class="project-desc">${projects[projectCount].description}</div>
        <div class="project-links">
          <a href="" data-bs-toggle="modal" data-bs-target="#projectModal" id=${projectCount}>Read More</a>
        </div>
      </div>`

      rowDiv.appendChild(projectCard);
      applyModalListener(projectCard);
      projectCount++;
    }
}

function applyModalListener(pCard) {
    let projectReadMoreBtn = pCard.querySelector('.project-links > a');
    let techDetailContainer = document.querySelector('.delete-note-text > ul');
    let modalIcon = document.querySelector(".delete-modal-icon > i");
    let gitLinkbtn = document.querySelector(".git-link");
    let proLinkbtn = document.querySelector(".pro-link");
    let modalTitle = document.querySelector(".delete-modal-title");

    projectReadMoreBtn.addEventListener('click', function(e) {
        let projectId = e.currentTarget.id;
        let currProjectTech = projects.find((p) => p.id==projectId);

        techDetailContainer.innerHTML = '';

        modalIcon.classList.remove(modalIcon.classList[1]);
        modalIcon.classList.add(currProjectTech.icon);

        gitLinkbtn.href = currProjectTech.github;
        proLinkbtn.href = currProjectTech.link;

        modalTitle.innerText = currProjectTech.name;

        for(let j= 0; j < currProjectTech.tech.length; j++) {
            let li = document.createElement('li');
            li.innerHTML = currProjectTech.tech[j];
            techDetailContainer.appendChild(li);
        }
    });
}