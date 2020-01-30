let current;
let audio=[document.getElementById("do"), document.getElementById("re"), document.getElementById("mi"), document.getElementById("fa"), document.getElementById("sol"), document.getElementById("la"), document.getElementById("ti"), document.getElementById("do2"),];
let j=0;
let flag;
function playAudio(){
    let i;
    switch(current){
        case document.forms[0].elements[0]:i=0; break;
        case document.forms[0].elements[1]:i=1; break;
        case document.forms[0].elements[2]:i=2; break;
        case document.forms[0].elements[3]:i=3; break;
        case document.forms[0].elements[4]:i=4; break;
        case document.forms[0].elements[5]:i=5; break;
        case document.forms[0].elements[6]:i=6; break;
        case document.forms[0].elements[7]:i=7; break;
    }
    audio[i].play();
}

$(document).ready(function(){
    $('body').hide().delay(200).fadeIn("fast");
    $("input").on('blur',function(){
        current=this;
        if($(this).val()!="" && $(this).val()!="null"&& $(this).val()!="undefined"){
            playAudio();
        }
    })
    $(".submit").click(function cycle(){
            if(j<audio.length){
                audio[j].play();
                j++;
            }
            flag=setTimeout(cycle,100);
            if(j>=audio.length){
                clearTimeout(flag);
                j=0;
            }
    });
});
