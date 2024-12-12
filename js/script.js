let menuLinks = document.querySelector("#menuLinks");
let menuStatus = 0;


function menu() {
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