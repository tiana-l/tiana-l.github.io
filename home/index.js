//screen sizes
window.addEventListener("resize",screenSize);
screenSize();
function screenSize(){
    if(window.innerWidth<=479){
        // document.querySelector("nav").classList.remove("medNav");
        // document.querySelector("nav").classList.remove("largeNav");
        closeNav();
        document.querySelector("nav").className="smallNav";
    }
    if(window.innerWidth>479 && window.innerWidth<=767){
        // document.querySelector("nav").classList.remove("smallNav");
        // document.querySelector("nav").classList.remove("largeNav");
        document.querySelector("nav").className="medNav";
        document.getElementsByClassName('openbtn')[0].style.display="none";
        document.getElementsByClassName('closebtn')[0].style.display="none";
        document.querySelector("nav").style.display="block";
    }
    if(window.innerWidth>767){
        // document.querySelector("nav").classList.remove("smallNav");
        // document.querySelector("nav").classList.remove("medNav");
        document.querySelector("nav").className="largeNav";
        document.getElementsByClassName('openbtn')[0].style.display="none";
        document.getElementsByClassName('closebtn')[0].style.display="none";
        document.querySelector("nav").style.display="block";
    }
}
function openNav(){
    document.getElementsByClassName('openbtn')[0].style.display="none";
    document.getElementsByClassName('closebtn')[0].style.display="block";
    document.querySelector('nav').style.display="block";
}
function closeNav(){
    document.getElementsByClassName('closebtn')[0].style.display="none";
    document.getElementsByClassName('openbtn')[0].style.display="block";
    document.querySelector('nav').style.display="none";
}
