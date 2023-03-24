// Aos fade effects
// Init AOS
function aos_init() {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out-back",
      once: true
    });
  }


//typewitter
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    strings: ['Software Engineer', 'Web Developer', 'Problem Solver'],
    autoStart: true,
    loop:true
});

let scrollTopBtn = document.querySelector(".scroll-to-top-btn");
function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
  


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
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    myNav.style.visibility = "visible";
    scrollTopBtn.style.visibility = 'visible';
  } else {
    myNav.style.visibility = "hidden";
    scrollTopBtn.style.visibility = 'hidden';
  }


}

// Get all sections that have an ID defined
const sections = document.querySelectorAll("section");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
  
   
    const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;
    let sectionId = current.getAttribute("id");
    
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector("." + sectionId + "-nav").classList.add("active");
    } else {
      document.querySelector("." + sectionId + "-nav").classList.remove("active");
    }
  });
}




//setting projects
let projects = [
    {
        "id" : 0,
        "name": " Spreadsheets",
        "icon": "fa-file",
        "description": "In my  Spreadsheets, I have implemented just some of the functions of real excel. Used Graph data structure.",
        "github": "https://github.com/kundan-6646/Spreadsheets",
        "link": "https://kundan-6646.github.io/Spreadsheets/",
        "tech": ["Created a <b>cross platform</b> spreadsheet application.", "<b>Graph</b> Data Structure to implement excel formula.", "Using <b>Chrome local-storage</b> to store data of sheet."]
    },
    {
        "id" : 1,
        "name": "Camera App",
        "icon": "fa-camera",
        "description": "This project is a browser object model (BOM) having following features: Apply filters, Zoom in and Zoom out, etc.",
        "github": "https://github.com/kundan-6646/Camera/",
        "link": "https://kundan-6646.github.io/Camera/",
        "tech": ["Images have been captured with the help of <b>Canvas</b>.", "Added basic features of camera like- Zoom-in, Zoom-out, Filters, Timer, etc.", "To store images and videos, used <b>IndexedDB</b>."]
    },
    {
        "id" : 2,
        "name": "Simon Game",
        "icon": "fa-gamepad",
        "description": "Simon game is a game of memory skill. Used JavaScript to add functionalities and animations in my game.",
        "github": "https://github.com/kundan-6646/Simon_Game",
        "link": "https://kundan-6646.github.io/Simon_Game/",
        "tech": ["Built a web-based game using <b>JavaScript</b>.", "UI is created using <b>HTML</b> and <b>CSS</b>.", "Maked game interactive by adding animations using <b>Jquery</b>."]
    },
    {
        "id" : 3,
        "name": "Data Collector",
        "icon": "fa-server",
        "description": "In this project, I have tried to clone Google Forms. Basically, it is used to collect data, create surveys, etc.",
        "github": "https://github.com/kundan-6646/Forms-App",
        "link": "https://forms-app-candy.herokuapp.com/",
        "tech": ["Developed a clone of <b>Google Forms</b>.", "<b>Realtime data collection</b> can be done.", "User can login either by <b>Oauth</b> or <b>credentials<b/>.", "Created <b>schemas</b> for objects using <b>MongoDB</b>."]
    },
    {
        "id" : 4,
        "name": "Notes App",
        "icon": "fa-edit",
        "description": "Notes App is generally used to create notes, added some more functionalities like, sharing and collaboration.",
        "github": "https://github.com/candy-6646/Notes-App",
        "link": "https://notes-app-candy.herokuapp.com/",
        "tech": ["Tried to clone <b>Google Keep</b> app.", " Used <b>Nodejs</b> to develop backend of website.", "<b>Expressjs</b> used to create dynamic routes for users.", "Provided logins using <b>OAuth</b> as well as credentials."]
    },
    {
        "id" : 5,
        "name": "Musica",
        "icon": "fa-music",
        "description": "Musica is an online tool that helps to extract different muical componets like- Base, BGM, Guitar, voice etc.",
        "github": "https://github.com/candy-6646/Musica",
        "link": "https://github.com/candy-6646/Musica",
        "tech": ["Musica is a online music extractor app.", " Making use of <b>Deezer/Spleeter</b> library.", "Model provides three diffrent types of music extraction options."]
    },
    {
      "id" : 6,
      "name": "Show Maker",
      "icon": "fa-ticket",
      "description": "Spring boot backend application where you can book tickets, find shows, search movies/theatres.",
      "github": "https://github.com/kundan-6646/Show-Maker",
      "link": "https://github.com/kundan-6646/Show-Maker",
      "tech": ["<b>Spring boot</b> backend application where you can book tickets.", "find shows, search movies/theatres.", "Developed different <b>API</b> from scratch, using MVC design pattern in Java."]
   },
   {
    "id" : 7,
    "name": "Snake Game",
    "icon": "fa-gamepad",
    "description": "Created popular snake game using Java, added different funtionalities in game live-score, play/pause, levels.",
    "github": "https://github.com/kundan-6646/Snake-Game",
    "link": "https://github.com/kundan-6646/Snake-Game",
    "tech": ["Developed popular snake game with <b>Java</b>, using action listeners to detect different key strokes.", "It has 3 levels from easy to hard with play/pause functionality.", "You can also view your score while playing the game."]
  },
  {
    "id" : 8,
    "name": "Search-Engine",
    "icon": "fa-search",
    "description": "It is a Java-based web application, takes a keyword as input from user and finds the related results.",
    "github": "https://github.com/kundan-6646/Search-Engine",
    "link": "https://github.com/kundan-6646/Search-Engine",
    "tech": ["Created a separate <b>web-crawler</b> which collects data from different websites and stores in DB.", "Rendering user search history by sorting them based on Date/Time.", "<b>MySQL</b> DB is used as database."]
  }
]

let projectContainer = document.querySelector("#projects .container");
for(let i = 0; i < projects.length; i++) {
    let projectCard = document.createElement('div');
    projectCard.classList.add('col-lg-4');
    projectCard.classList.add('col-sm-12');

    projectCard.innerHTML = `<div class="project-card" data-aos="fade-up">
    <div class="project-title">
      <div class="project-img">
        <i class="fa ${projects[i].icon}"></i>
      </div>
      <div class="project-name">${projects[i].name}</div>
    </div>
    <div class="project-desc">${projects[i].description}</div>
    <div class="project-links">
      <a href="" data-bs-toggle="modal" data-bs-target="#projectModal" id=${i}>Read More</a>
    </div>
  </div>`

  projectContainer.appendChild(projectCard);
  applyModalListener(projectCard);
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