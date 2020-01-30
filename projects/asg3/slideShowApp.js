let imgs=["404error.jpeg","googleDinosaur.jpg","loading.gif"];
let pos=0;
let slide;

function slideshow(){
    if(pos>=imgs.length-1){
        pos=0;
        document.getElementsByTagName("img")[1].src="media/"+imgs[pos];
    }
    else{
        pos++;
        document.getElementsByTagName("img")[1].src="media/"+imgs[pos];
    }
    slide=setTimeout(slideshow,1000);
}
slideshow();

function forward(){
    clearTimeout(slide);
    if (pos<imgs.length-1){
        pos++;
        document.getElementsByTagName("img")[1].src="media/"+imgs[pos];
    }
    else{
        pos=0;
        document.getElementsByTagName("img")[1].src="media/"+imgs[pos];
    }
}
function back(){
    clearTimeout(slide);
    if (pos>0){
        pos--;
        document.getElementsByTagName("img")[1].src="media/"+imgs[pos];
    }
    else{
        pos=imgs.length-1;
        document.getElementsByTagName("img")[1].src="media/"+imgs[pos];
    }
}
function start(){
    clearTimeout(slide);
    slide=setTimeout(slideshow,1000);
}
function stop(){
    clearTimeout(slide);
}