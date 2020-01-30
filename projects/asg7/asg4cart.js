//database of products
let products=[{name:"cat1",inventory:5,unitPrice:10},
{name:"cat2",inventory:5,unitPrice:77},
{name:"cat3",inventory:5,unitPrice:5}];
let grandTotal=document.getElementById("grandTotal");
populateStates();
cardExpirationMinVal();
flexSize();
//onresize, change class to change css width of flexbox
//https://www.w3schools.com/jsref/event_onresize.asp
//https://stackoverflow.com/questions/8575772/how-to-detect-in-jquery-if-screen-resolution-changes
window.addEventListener("resize",flexSize);
let qtyInput=document.forms[2];
qtyInput.addEventListener("change",total);

//prevent form from submitting to new page
// document.getElementById("submit").addEventListener("click",function(){
//     event.preventDefault();
// });

//this stops form from submitting entirely
// document.getElementById("signup").addEventListener("click",function(event){
//     event.preventDefault();
// });
// document.getElementById("login").addEventListener("click",function(event){
//     event.preventDefault();
// });

function flexSize(){
    if(window.innerWidth>330){
        document.forms[2].className="small";
        document.getElementById("sc").className="shoppingTotalSmall";
        document.getElementById("registration").className="registrationSmall";
    }
    if(window.innerWidth>700){
        document.forms[2].className="medium";
        document.getElementById("sc").className="shoppingTotalMed";
        document.getElementById("registration").className="registrationMed";
    }
    if(window.innerWidth>1000){
        document.forms[2].className="large";
        document.getElementById("sc").className="shoppingTotalMed";
        document.getElementById("registration").className="registrationMed";
    }
};

//populate state select input with option values
function populateStates(){
    let states=["AL","AK","AZ","AR","CA",
    "CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN",
    "MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC",
    "SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];

    for (let i=0;i<states.length;i++){
        let node=document.createElement("option");
        node.value=states[i];
        node.innerText=states[i];
        document.querySelector("select").appendChild(node);
    }
};

//set expiration date's min value as today
function cardExpirationMinVal(){
    let today=new Date();
    var dd=today.getDate();
    var mm=today.getMonth()+1;
    var yyyy=today.getFullYear();
    if(dd<10){
        dd="0"+dd;  
    }
    if(mm<10){
        mm="0"+mm;
    }
    today=yyyy+"-"+mm+"-"+dd;
    document.forms[2].elements[22].setAttribute("min",today);
};

function total(){
    let subtotal1=qtyInput.elements[0].value*products[0].unitPrice;
    qtyInput.elements[1].value=subtotal1;
    let subtotal2=qtyInput.elements[2].value*products[1].unitPrice;
    qtyInput.elements[3].value=subtotal2;
    let subtotal3=qtyInput.elements[4].value*products[2].unitPrice;
    qtyInput.elements[5].value=subtotal3;
    if(document.forms[2].elements[2].checked){
        grandTotal.value=subtotal1+subtotal2+subtotal3+4.99;
    }
    else{
        grandTotal.value=subtotal1+subtotal2+subtotal3;
    }
};

function receipt(){
    let d=document.forms[2];
    // for(let j=0;j<document.forms[2].elements.length;j++){
    //     console.log(j);
    //     console.log(document.forms[2].elements[j]);
    // }

    for(let i=0;i<document.forms[2].elements.length;i++){
        if((d.elements[7].checked==false&&d.elements[8].checked==false)||(d.elements[1].checked==true&&d.elements[2].checked==true)){
            alert("Choose one shipping method.");
            d.elements[7].focus();
            event.preventDefault();
            return;
        }
        if(d.elements[11].value==null||d.elements[11].value==undefined||d.elements[11].value==""){
            alert("Enter first name.");
            d.elements[11].select();
            event.preventDefault();
            return;
        }
        if(d.elements[12].value==null||d.elements[12].value==undefined||d.elements[12].value==""){
            alert("Enter last name.");
            d.elements[12].select();
            event.preventDefault();
            return;
        }
        if(d.elements[13].value==null||d.elements[13].value==undefined||d.elements[13].value==""){
            alert("Enter email.");
            d.elements[13].select();
            event.preventDefault();
            return;
        }
        else{
            if(d.elements[13].value.indexOf("@")==-1||d.elements[13].value.indexOf(".")==-1){
                alert("Email must have an @ symbol and a .");
                event.preventDefault();
                return;
            }
        }
        if(d.elements[14].value==null||d.elements[14].value==undefined||d.elements[14].value==""){
            alert("Enter street address.");
            d.elements[14].select();
            event.preventDefault();
            return;
        }
        if(d.elements[15].value==null||d.elements[15].value==undefined||d.elements[15].value==""){
            alert("Enter city.");
            d.elements[15].select();
            event.preventDefault();
            return;
        }
        if(d.elements[16].value==""){
            alert("Select state.");
            d.elements[16].focus();
            event.preventDefault();
            return;
        }
        if(d.elements[17].value==null||d.elements[17].value==undefined||d.elements[17].value==""){
            alert("Enter 5 digit zipcode.");
            d.elements[17].select();
            event.preventDefault();
            return;
        }
        else{
            if(d.elements[17].value.length!=5){
                alert("Zipcode must be 5 digits.");
                d.elements[17].select();
                event.preventDefault();
                return;
            }
        }
        if(d.elements[19].checked==false&&d.elements[20].checked==false){
            alert("Choose credit card type.");
            event.preventDefault();
            return;
        }
        if(d.elements[21].value==null||d.elements[21].value==undefined||d.elements[21].value==""){
            alert("Enter credit card number.");
            d.elements[20].select();
            event.preventDefault();
            return;
        }
        if(d.elements[22].value==null||d.elements[22].value==undefined||d.elements[22].value==""){
            alert("Enter credit card expiration date.");
            d.elements[22].select();
            event.preventDefault();
            return;
        }
    }
    finalReceipt();
}

function validate(){
    let d=document.forms[0];
    for(let i=0;i<2;i++){
        if(d.elements[0].value==""||d.elements[0].value==null||d.elements[0].value==undefined){
            alert("Enter username!");
            d.elements[0].select();
            event.preventDefault();
            return false;
        }
        if(d.elements[1].value==""||d.elements[1].value==null||d.elements[1].value==undefined){
            alert("Enter password!");
            d.elements[1].select();
            event.preventDefault();
            return false;
        }
    }
}

function finalReceipt(){
    let str="Your receipt <br/>";
    for(let i=0;i<qtyInput.elements.length;i+=2){
        // console.log(i);
        // console.log(qtyInput.elements[i]);
        if(qtyInput.elements[i].value>0){
            str+=qtyInput.elements[i].value+" "+products[i/2].name+"<br/>";
        }
    }
    str+="total: $"+grandTotal.value;
    document.getElementsByClassName("receipt")[0].innerHTML=str;
    //document.getElementsByClassName("receipt")[0].className="receipt";
}
/*
17 submit
18 reset
*/





