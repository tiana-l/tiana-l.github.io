let images=["404error.jpeg","googleDinosaur.jpg","loading.gif"];
let randInt;
window.addEventListener('load',randomImg());
function randomImg(){
    randInt=Math.floor(Math.random()*images.length);
    document.getElementsByTagName("img")[0].src="media/"+images[randInt];
}
