//style application
var bgcolorInput=document.getElementById("bgColor");
var colorInput=document.getElementById("textColor");
var fontInput=document.getElementById("fontFamily");
var fontWeightInput=document.getElementById("fontWeight");

//media queries
var small=window.matchMedia("(max-width:735px)");
var medium=window.matchMedia("(min-width:736px)");
var large=window.matchMedia("(min-width:1069px)");

//event listeners for client styling
bgcolorInput.addEventListener("input",function(){
    document.getElementsByTagName("body")[0].style.backgroundColor=bgcolorInput.value;
})
fontInput.addEventListener("input",function(){
    document.getElementsByTagName("body")[0].style.fontFamily=fontInput.value;
})
fontWeightInput.addEventListener("input",function(){
    document.getElementsByTagName("body")[0].style.fontWeight=fontWeightInput.value;
})
colorInput.addEventListener("input",function(){
    document.getElementsByTagName("body")[0].style.color=colorInput.value;
})

//alignment buttons
function left(){
    document.getElementsByTagName("body")[0].style.textAlign="left";
    document.getElementsByClassName("alignmentControls")[0].style.justifyContent="flex-start";
    document.getElementById("imgFrame1").style.marginLeft="0";
    document.getElementById("imgFrame2").style.marginLeft="0";
    document.getElementById("newDocFrame").style.marginLeft="0";
    document.getElementById("imgFrame1").style.marginRight="auto";
    document.getElementById("imgFrame2").style.marginRight="auto";
    document.getElementById("newDocFrame").style.marginRight="auto";
}
function center(){
    document.getElementsByTagName("body")[0].style.textAlign="center";
    document.getElementsByClassName("alignmentControls")[0].style.justifyContent="center";
    document.getElementById("imgFrame1").style.marginLeft="auto";
    document.getElementById("imgFrame1").style.marginRight="auto";
    document.getElementById("imgFrame2").style.marginLeft="auto";
    document.getElementById("imgFrame2").style.marginRight="auto";
    document.getElementById("newDocFrame").style.marginLeft="auto";
    document.getElementById("newDocFrame").style.marginRight="auto";
    document.getElementById("img1").style.left="-50px";
}
function right(){
    document.getElementsByTagName("body")[0].style.textAlign="right";
    document.getElementsByClassName("alignmentControls")[0].style.justifyContent="flex-end";
    document.getElementById("imgFrame1").style.marginRight="0";
    document.getElementById("imgFrame2").style.marginRight="0";
    document.getElementById("newDocFrame").style.marginRight="0";
    document.getElementById("imgFrame1").style.marginLeft="auto";
    document.getElementById("imgFrame2").style.marginLeft="auto";
    document.getElementById("newDocFrame").style.marginLeft="auto";
    document.getElementById("img1").style.left="-50px";
}

//recommended style
function apple(){
    document.getElementsByTagName("body")[0].style.fontFamily="SF Pro Text,SF Pro Icons, Helvetica, Arial, sans-serif"; 
    document.getElementsByTagName("body")[0].style.backgroundColor="#fafafa";
    document.getElementById("fontFamily").style.backgroundColor="transparent";
    document.getElementById("fontFamily").style.width="150px";
    document.getElementById("fontFamily").style.height="20px";
    document.getElementById("fontFamily").style.borderRadius="10px";
    document.getElementById("fontFamily").style.borderColor="#0070c9";
    document.getElementById("fontFamily").style.textAlign="center";
    document.getElementById("feet").style.backgroundColor="transparent";
    document.getElementById("feet").style.width="150px";
    document.getElementById("feet").style.height="20px";
    document.getElementById("feet").style.borderRadius="10px";
    document.getElementById("feet").style.borderColor="#0070c9";
    document.getElementById("feet").style.textAlign="center";
    document.getElementById("convertResult").style.backgroundColor="transparent";
    document.getElementById("convertResult").style.width="150px";
    document.getElementById("convertResult").style.height="20px";
    document.getElementById("convertResult").style.borderRadius="10px";
    document.getElementById("convertResult").style.borderColor="#0070c9";
    document.getElementById("convertResult").style.textAlign="center";
    document.getElementById("convertResult").style.color="red";
    document.getElementById("convertResult").style.fontSize="14px";
    document.getElementById("bgColor").style.width="40px";
    document.getElementById("bgColor").style.height="40px";
    document.getElementById("bgColor").style.borderRadius="10%";
    document.getElementById("bgColor").style.borderColor="#0070c9";
    document.getElementById("textColor").style.width="40px";
    document.getElementById("textColor").style.height="40px";
    document.getElementById("textColor").style.borderRadius="10%";
    document.getElementById("textColor").style.borderColor="#0070c9";
    
    if(small.matches){
        console.log("small!");
        document.getElementsByTagName("body")[0].style.textAlign="center";
        document.getElementsByTagName("body")[0].style.color="black";
        document.getElementById("imgFrame1").style.marginLeft="auto";
        document.getElementById("imgFrame1").style.marginRight="auto";
        document.getElementById("imgFrame1").style.width="300px";
        document.getElementById("imgFrame1").style.height="300px";
        document.getElementById("imgFrame2").style.marginLeft="auto";
        document.getElementById("imgFrame2").style.marginRight="auto";
        document.getElementById("imgFrame2").style.width="300px";
        document.getElementById("imgFrame2").style.height="300px";
        document.getElementById("img1").style.left="-60px";
        document.getElementById("newDocFrame").style.marginLeft="auto";
        document.getElementById("newDocFrame").style.marginRight="auto";
        //need to display:flex and justify-content:center bc inline-block is bad with :hover
        document.getElementsByClassName("alignmentControls")[0].style.justifyContent="center";
        for(let i=0;i<document.getElementsByTagName("h2").length;i++){
            document.getElementsByTagName("h2")[i].style.fontSize="32px";
            document.getElementsByTagName("h2")[i].style.fontWeight="600";
            document.getElementsByTagName("h2")[i].style.lineHeight="1.125";
            document.getElementsByTagName("h2")[i].style.letterSpacing=".004em";
        }
        for(let i=0;i<document.getElementsByTagName("h3").length;i++){
            document.getElementsByTagName("h3")[i].style.marginTop="2px";
            document.getElementsByTagName("h3")[i].style.fontSize="19px";
            document.getElementsByTagName("h3")[i].style.fontWeight="400";
            document.getElementsByTagName("h3")[i].style.lineHeight="1.42115";
            document.getElementsByTagName("h3")[i].style.letterSpacing=".012em";
        }
        for(let i=0;i<document.getElementsByTagName("p").length;i++){
            document.getElementsByTagName("p")[i].style.marginTop="0.4em";
            document.getElementsByTagName("p")[i].style.color="#888";
            document.getElementsByTagName("p")[i].style.fontSize="14px";
            document.getElementsByTagName("p")[i].style.fontWeight="400";
            document.getElementsByTagName("p")[i].style.lineHeight="1.42861";
            document.getElementsByTagName("p")[i].style.letterSpacing="-.016em";
        }
        for(let i=0;i<document.getElementsByTagName("button").length;i++){
            document.getElementsByTagName("button")[i].style.border="none";
            document.getElementsByTagName("button")[i].style.color="#0070c9";
            document.getElementsByTagName("button")[i].style.backgroundColor="#fafafa";
            document.getElementsByTagName("button")[i].style.fontSize="19px";
            document.getElementsByTagName("button")[i].style.fontWeight="400";
            document.getElementsByTagName("button")[i].style.lineHeight="1.42115";
            document.getElementsByTagName("button")[i].style.letterSpacing=".012em";
        }
    }
    if(medium.matches){
        console.log("medium");
        document.getElementsByTagName("body")[0].style.textAlign="center";
        document.getElementsByTagName("body")[0].style.color="black";
        document.getElementsByClassName("alignmentControls")[0].style.justifyContent="center";
        document.getElementById("imgFrame1").style.marginLeft="auto";
        document.getElementById("imgFrame1").style.marginRight="auto";
        document.getElementById("imgFrame1").style.width="400px";
        document.getElementById("imgFrame1").style.height="400px";
        document.getElementById("imgFrame2").style.marginLeft="auto";
        document.getElementById("imgFrame2").style.marginRight="auto";
        document.getElementById("imgFrame2").style.width="400px";
        document.getElementById("imgFrame2").style.height="400px";
        document.getElementById("img1").style.left="-50px";
        document.getElementById("newDocFrame").style.marginLeft="auto";
        document.getElementById("newDocFrame").style.marginRight="auto";
        for(let i=0;i<document.getElementsByTagName("h2").length;i++){
            document.getElementsByTagName("h2")[i].style.fontSize="44px";
            document.getElementsByTagName("h2")[i].style.fontWeight="600";
            document.getElementsByTagName("h2")[i].style.lineHeight="1.09091";
            document.getElementsByTagName("h2")[i].style.letterSpacing="-.002em";
        }
        for(let i=0;i<document.getElementsByTagName("h3").length;i++){
            document.getElementsByTagName("h3")[i].style.marginTop="5px";
            document.getElementsByTagName("h3")[i].style.fontSize="24px";
            document.getElementsByTagName("h3")[i].style.fontWeight="400";
            document.getElementsByTagName("h3")[i].style.lineHeight="1.16667";
            document.getElementsByTagName("h3")[i].style.letterSpacing=".009em";
        }
        for(let i=0;i<document.getElementsByTagName("p").length;i++){
            document.getElementsByTagName("p")[i].style.marginTop="0.4em";
            document.getElementsByTagName("p")[i].style.color="#888";
            document.getElementsByTagName("p")[i].style.fontSize="17px";
            document.getElementsByTagName("p")[i].style.fontWeight="400";
            document.getElementsByTagName("p")[i].style.lineHeight="1.47059";
            document.getElementsByTagName("p")[i].style.letterSpacing="-.022em";
        }
        for(let i=0;i<document.getElementsByTagName("button").length;i++){
            document.getElementsByTagName("button")[i].style.border="none";
            document.getElementsByTagName("button")[i].style.color="#0070c9";
            document.getElementsByTagName("button")[i].style.backgroundColor="#fafafa";
            document.getElementsByTagName("button")[i].style.fontSize="24px";
            document.getElementsByTagName("button")[i].style.fontWeight="400";
            document.getElementsByTagName("button")[i].style.lineHeight="1.16667";
            document.getElementsByTagName("button")[i].style.letterSpacing=".009em";
        }
    }
    if(large.matches){
        console.log("large");
        document.getElementsByTagName("body")[0].style.textAlign="center";
        document.getElementsByTagName("body")[0].style.color="black";
        document.getElementsByClassName("alignmentControls")[0].style.justifyContent="center";
        document.getElementById("imgFrame1").style.marginLeft="auto";
        document.getElementById("imgFrame1").style.marginRight="auto";
        document.getElementById("imgFrame1").style.width="400px";
        document.getElementById("imgFrame1").style.height="400px";
        document.getElementById("imgFrame2").style.marginLeft="auto";
        document.getElementById("imgFrame2").style.marginRight="auto";
        document.getElementById("imgFrame2").style.width="400px";
        document.getElementById("imgFrame2").style.height="400px";
        document.getElementById("img1").style.left="-50px";
        document.getElementById("newDocFrame").style.marginLeft="auto";
        document.getElementById("newDocFrame").style.marginRight="auto";
        for(let i=0;i<document.getElementsByTagName("h2").length;i++){
            document.getElementsByTagName("h2")[i].style.fontSize="56px";
            document.getElementsByTagName("h2")[i].style.fontWeight="600";
            document.getElementsByTagName("h2")[i].style.lineHeight="1.07143";
            document.getElementsByTagName("h2")[i].style.letterSpacing="-.005em";
        }
        for(let i=0;i<document.getElementsByTagName("h3").length;i++){
            document.getElementsByTagName("h3")[i].style.marginTop="5px";
            document.getElementsByTagName("h3")[i].style.fontSize="27px";
            document.getElementsByTagName("h3")[i].style.fontWeight="400";
            document.getElementsByTagName("h3")[i].style.lineHeight="1.14815";
            document.getElementsByTagName("h3")[i].style.letterSpacing=".008em";
        }
        for(let i=0;i<document.getElementsByTagName("p").length;i++){
            document.getElementsByTagName("p")[i].style.marginTop="0.4em";
            document.getElementsByTagName("p")[i].style.color="#888";
            document.getElementsByTagName("p")[i].style.fontSize="20px";
            document.getElementsByTagName("p")[i].style.fontWeight="400";
            document.getElementsByTagName("p")[i].style.lineHeight="1.45";
            document.getElementsByTagName("p")[i].style.letterSpacing="-.021em";
        }
        for(let i=0;i<document.getElementsByTagName("button").length;i++){
            document.getElementsByTagName("button")[i].style.border="none";
            document.getElementsByTagName("button")[i].style.color="#0070c9";
            document.getElementsByTagName("button")[i].style.backgroundColor="#fafafa";
            document.getElementsByTagName("button")[i].style.fontSize="27px";
            document.getElementsByTagName("button")[i].style.fontWeight="400";
            document.getElementsByTagName("button")[i].style.lineHeight="1.14815";
            document.getElementsByTagName("button")[i].style.letterSpacing=".008em";
        }
    }

}
//-----------------------------------------------------------------------------
//prize application
//prizeIndex must be before you can the randArray function
var prizeIndex=0;
//call once first to execute first time without 1 sec delay
randArray();
function randArray(){
    //make prizes a global variable so getPrize() can access it
    window.prizes=["gigantic teddy bear","rose","child","penny","used sock"];
    document.getElementById("listPrizes").innerText=prizes[prizeIndex];
    prizeIndex++;
    if(prizeIndex>prizes.length-1){
        prizeIndex=0;
    }
    setTimeout(randArray,1000);
}
function getPrize(){
    let prizeNum=Math.floor((Math.random()*window.prizes.length));
    console.log("random prize num: "+prizeNum);
    document.getElementById("prizeResult").innerText="Congrats, you won a "+window.prizes[prizeNum]+".";
}
//-----------------------------------------------------------------------------
//swap text application
printText();
function printText(){
    window.eng=["To be, or not to be, that is the question:", 
        "Whether 'tis nobler in the mind to suffer", 
        "The slings and arrows of outrageous fortune,",
        "Or to take arms against a sea of troubles",
        "And by opposing end them."]
    window.chinese=["生存還是毀滅，","這是一個值得考慮的問題；",
        "默然忍受命運的暴虐的毒箭，",
        "或是挺身反抗人世的無涯的苦難，",
        "通過鬥爭把它們掃清，",
        "這兩種行為，哪一種更高貴？"]
    window.p1=document.getElementById("p1");
    window.p2=document.getElementById("p2");
    for(let i=0;i<eng.length;i++){
        p1.innerText+=eng[i]+"\n";

    }
    for(let i=0;i<chinese.length;i++){
        p2.innerText+=chinese[i]+"\n";
    }
}
function swapT(){
    let placeholder=p1.innerText;
    p1.innerText=p2.innerText;
    p2.innerText=placeholder;
}
//------------------------------------------------------------------------------
//swap image application
var img1Pos=1;
var img2Pos=2;
function swapI(){
    var placeholderSrc=document.getElementById("img1").src;
    var img1=document.getElementById("img1");
    var img2=document.getElementById("img2");
    console.log(img1Pos+" "+img2Pos);
    img1.src=img2.src;
    img2.src=placeholderSrc;
    if(img1Pos==1){
        img1Pos=2;
        img2Pos=1;
    }
    else{
        img1Pos=1;
        img2Pos=2;
    }
    console.log(img1Pos+" "+img2Pos);
    if(small.matches){
        if(img1Pos==1){
            img1.style.top="-230px";
            img1.style.left="-90px";
            img1.style.right="0";
            img1.style.width="auto";

            img2.style.top="-14px";
            img2.style.left="0";
            img2.style.right="-70px";
            img2.style.width="450px";
        }
        else{
            img1.style.top="-14px";
            img1.style.left="0";
            img1.style.right="-70px";
            img1.style.width="450px";

            img2.style.top="-230px";
            img2.style.left="-90px";
            img2.style.right="0";
            img2.style.width="auto";
        }
    }
    else{
        if(img1Pos==1){
            img1.style.top="-150px";
            img1.style.left="0";
            img1.style.right="0";
            img1.style.width="500px";

            img2.style.top="-14px";
            img2.style.left="0";
            img2.style.right="-50px";
            img2.style.width="500px";
        }
        else{
            img1.style.top="-14px";
            img1.style.left="0";
            img1.style.right="-50px";
            img1.style.width="500px";

            img2.style.top="-150px";
            img2.style.left="0";
            img2.style.right="0";
            img2.style.width="500px";
        }
    }
    
}
//------------------------------------------------------------------------------
//generate new document application
function newDoc(){
    document.open();
    document.write("<h1>Relativity</h1>");
    document.write("<i>M.C. Escher</i>");
    document.write("<p><i>Relativity </i>is a lithograph print by Dutch artist M.C. Escher. It depicts people going up impossible sets of never winding stairs.</p>");
    document.write("<img id='relativity' src='media/relativity.jpg'></img><br/>");
    var img=document.getElementById("relativity");
    document.write("Original image size: "+img.clientWidth+"x"+img.clientHeight+"<br/><br/>");
    var date=new Date();
    var day=date.getDay();
    var daysOfWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var day=daysOfWeek[day];
    var dd=String(date.getDate()).padStart(2,"0");
    var mm=String(date.getMonth()+1).padStart(2,"0");
    var yyyy=date.getFullYear();
    date="Today is "+day+", "+mm+"/"+dd+"/"+yyyy;
    document.write(date);
    document.write("<div><button onclick='apple()'>Recommended Style</button></div>");
    document.close();
    var styles="newDocStyles";
    if(!document.getElementById(styles)){
        var head=document.getElementsByTagName("head")[0];
        var meta=document.createElement("meta");
        var link=document.createElement("link");
        meta.name="viewport";
        meta.content="width=device-width, initial-scale=1.0";
        link.id=styles;
        link.rel="stylesheet";
        link.type="text/css";
        link.href="newDocStyles.css";
        link.media="all";
        head.appendChild(meta);
        head.appendChild(link);
    }
}
//------------------------------------------------------------------------------
//simple converter application
document.getElementById("feet").addEventListener("input",function(){
    var feet=document.getElementById("feet");
    document.getElementById("convertResult").innerText=feet.value*(1/5280);
});





//ignore these notes

//I don't quite get this but seems useful for future
//doesn't work for apple() perhaps bc apple() doesn't have its own stylesheet
//https://stackoverflow.com/questions/11371550/change-hover-css-properties-with-javascript
//display inline-block makes :hover property disfunctional. (hovers over multiple items)
//since button is automatically inline-block... the hover was hovering over 2 buttons at once

//when using setTimeout!
//https://stackoverflow.com/questions/8731840/maximum-call-stack-size-exceeded-during-a-settimeout-call

//inspiration for the randArray() slideshow display
//https://www.w3schools.com/howto/howto_js_slideshow.asp

//to make a variable within a function global, you can use the window object
//https://www.javatpoint.com/javascript-global-variable

//I added attribute charset="utf-8" in my script tag for the file to read Chinese characters
//https://stackoverflow.com/questions/19827321/how-to-inject-chinese-characters-using-javascript

//I had a hard time positioning the image
//had to manually adjust for each image and media query
//basically, div should be position relative, img should be position absolute
//within img you adjust position of img using top, right, left, bottom
//i found negative values worked better when adjusting top, right, left, bottom
//https://stackoverflow.com/questions/8820161/positioning-things-inside-a-div-css-related

//swapI() does not work with getComputedStyle bc the computed style is different for small and med/large screen sizes
    // var top1=window.getComputedStyle(document.getElementById("img1")).getPropertyValue("top");
    // var left1=window.getComputedStyle(document.getElementById("img1")).getPropertyValue("left");
    // var right1=window.getComputedStyle(document.getElementById("img1")).getPropertyValue("right");
    // var width1=window.getComputedStyle(document.getElementById("img1")).getPropertyValue("width");
    // var top2=window.getComputedStyle(document.getElementById("img2")).getPropertyValue("top");
    // var left2=window.getComputedStyle(document.getElementById("img2")).getPropertyValue("left");
    // var right2=window.getComputedStyle(document.getElementById("img2")).getPropertyValue("right");
    // var width2=window.getComputedStyle(document.getElementById("img2")).getPropertyValue("width");
//get image width and height using js
//https://stackoverflow.com/questions/623172/how-to-get-image-size-height-width-using-javascript
//load css or js files through js
//https://stackoverflow.com/questions/574944/how-to-load-up-css-files-using-javascript