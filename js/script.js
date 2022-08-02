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