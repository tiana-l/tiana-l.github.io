$(document).ready(function(){
    $("body").hide();
    $("body").fadeIn(2000);
})
//screen sizes
window.addEventListener("resize",screenSize);
screenSize();

function screenSize(){
    if(window.innerWidth<=479){
        // document.querySelector("nav").classList.remove("medNav");
        // document.querySelector("nav").classList.remove("largeNav");
        $("nav").hide();
        $(".closebtn").hide();
        $(".openbtn").show();
        document.querySelector("nav").className="smallNav";
        document.getElementById("container").className="small";
        document.querySelector("h1").style.fontSize="20vw";
        document.getElementsByClassName("card")[0].style.right="3vw";
    }
    if(window.innerWidth>479 && window.innerWidth<=768){
        // document.querySelector("nav").classList.remove("smallNav");
        // document.querySelector("nav").classList.remove("largeNav");
        document.querySelector("nav").className="medNav";
        document.getElementsByClassName('openbtn')[0].style.display="none";
        document.getElementsByClassName('closebtn')[0].style.display="none";
        document.querySelector("nav").style.display="block";
        $("nav").children().show();
        document.getElementById("container").className="med";
        document.querySelector("h1").style.fontSize="20vw";
        document.getElementsByClassName("card")[0].style.right="5vw";
    }
    if(window.innerWidth>768){
        // document.querySelector("nav").classList.remove("smallNav");
        // document.querySelector("nav").classList.remove("medNav");
        document.querySelector("nav").className="largeNav";
        document.getElementsByClassName('openbtn')[0].style.display="none";
        document.getElementsByClassName('closebtn')[0].style.display="none";
        document.querySelector("nav").style.display="block";
        $("nav").children().show();
        document.querySelector("h1").style.fontSize="150px";
        document.getElementById("container").className="large";
        document.getElementsByClassName("card")[0].style.right="10vw";
    }
}
function openNav(){
    $(".openbtn").fadeOut(200);
    $("nav").fadeIn(200);
    $("#home").fadeIn(200);
    $("#projects").fadeIn(600);
    $("#github").fadeIn(1000);
    $(".closebtn").fadeIn(200);
}
function closeNav(){
    $(".closebtn").fadeOut(200);
    //document.getElementsByClassName('closebtn')[0].style.display="none";
    $(".openbtn").fadeIn(200);
    $("#github").fadeOut(200);
    $("#projects").fadeOut(300);
    $("#home").fadeOut(400);
    $("nav").fadeOut(400);
}

function flip(){
    $(".card").toggleClass("flip");
}

