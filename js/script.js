document.addEventListener('wheel', function(e) {
  const scrollDirection = e.deltaY;
  const sections = document.querySelectorAll('.section');
  let currentSection = 0;

  sections.forEach((section, index) => {
    if (window.scrollY >= section.offsetTop) {
      currentSection = index;
    }
  });

  if (scrollDirection > 0) {
    if (currentSection < sections.length - 1) {
      sections[currentSection + 1].scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    if (currentSection > 0) {
      sections[currentSection - 1].scrollIntoView({ behavior: 'smooth' });
    }
  }
});



let menuLinks = document.querySelector("#menuLinks");
let menuStatus = 0;


const menu = () => {
    menuStatus = !menuStatus;

    if(menuStatus === true) {
        menuLinks.style.display = 'flex';
        
        setTimeout(() => {
            menuLinks.style.transform = 'translateX(0%)';
        }, 50);


        let links = document.querySelectorAll("#menuLinks li a");

        // ABOUT ME
        links[0].addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "#secondPage";
            menuLinks.style.transform = 'translateX(100%)';
            setTimeout(() => {
                menuLinks.style.display = 'none';
            }, 500);
        });

        // SKILLS
        links[1].addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "#thirdPage";
            menuLinks.style.transform = 'translateX(100%)';
            setTimeout(() => {
                menuLinks.style.display = 'none';
            }, 500);
        });

        // GITHUB ACCOUNT
        links[2].addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "#fourthPage";
            menuLinks.style.transform = 'translateX(100%)';
            setTimeout(() => {
                menuLinks.style.display = 'none';
            }, 500);
        });

        // COURSES
        links[3].addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "#fifthPage";
            menuLinks.style.transform = 'translateX(100%)';
            setTimeout(() => {
                menuLinks.style.display = 'none';
            }, 500);
        });

    } else {
        menuLinks.style.transform = 'translateX(100%)';
        setTimeout(() => {
            menuLinks.style.display = 'none';
        }, 500);
    }
}




let agesSpan = document.querySelector("#ages");
let birthDate = new Date(2003, 8, 22);
let currentDate = new Date();

let ages = currentDate.getFullYear() - birthDate.getFullYear();

agesSpan.innerText = ages;
agesSpan.style.color = "#FF000D";




let animWords = document.querySelector(".animWords").innerText;

let wordsArray = animWords.split("");
let singleSpan = "";

wordsArray.forEach((word, index) => {
    let span = document.createElement("span");
    span.textContent = word;
    span.style.animationDelay = `${index * 0.2}s`;
    singleSpan += span.outerHTML;
});

document.querySelector(".animWords").innerHTML = singleSpan;


let animationWidth = 0;

window.onscroll = () => {
    let sectionForAnimation = document.querySelector("#secondPage div");
    let sectionPosition = sectionForAnimation.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;

    let leftDiv = document.querySelector(".about-me");
    let rightDiv = document.querySelector(".about-me-r");
    let leftAnim = document.querySelector("#moonImg");
    let rightAnim = document.querySelector("#animGif");


    if(sectionPosition < screenPosition) {
        leftDiv.classList.add("slide");
        rightDiv.classList.add("slide");
        leftAnim.style.opacity = "0.33";
        rightAnim.style.opacity = "0.33";
    }
}