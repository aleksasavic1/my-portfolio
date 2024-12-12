let menuLinks = document.querySelector("#menuLinks");
let menuStatus = 0;


function menu() {
    menuStatus = !menuStatus;

    if(menuStatus === true) {
        menuLinks.style.display = 'flex';
        
        setTimeout(() => {
            menuLinks.style.transform = 'translateX(0%)';
        }, 50);

    } else {
        menuLinks.style.transform = 'translateX(100%)';
        setTimeout(() => {
            menuLinks.style.display = 'none';
        }, 500);
    }
}


let header = document.querySelector("header");