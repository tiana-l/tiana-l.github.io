let die1;
let die2;
let dice=["d1.png","d2.png","d3.png","d4.png","d5.png","d6.png"];
let i=0;
let flag;
let bet;
//roll result, win/lose, win/loss amount
let betHistory=[];
function roll(){
    bet=document.getElementsByTagName("input")[0].value;
    if (isNaN(bet)||bet==""||bet==undefined||bet<1.00){
        alert("Enter a numeric value greater than or equal to 1.00");
    }
    else{
        if(i<6){
            document.getElementById("d1Result").innerText="";
            document.getElementById("d2Result").innerText="";
            die1=Math.floor(Math.random()*6);
            document.getElementById("die1").src="media/"+dice[die1];
            die2=Math.floor(Math.random()*6);
            document.getElementById("die2").src="media/"+dice[die2];
            i++;
            flag=setTimeout(roll,200);
        }
        else{
            clearTimeout(flag);
            i=0;
            document.getElementById("d1Result").innerText=die1+1;
            document.getElementById("d2Result").innerText=die2+1;
            betHistory.push(die1+1+die2+1);
            let str1="<p>die1+die2 = "+(die1+1+die2+1)+"</p>";
            let str2="<p>YOU WIN</p>";
            let str3="<p>YOU LOSE</p>";
            let str4="<p>+$"+bet+"</p>";
            let str5="<p>-$"+bet+"</p>";
            if((die1+1+die2+1)==7||(die1+1+die2+1)==11){
                document.getElementById("result").innerHTML=str1+str2+str4;
                betHistory.push("WIN");
                betHistory.push("+$"+bet);
                console.log(betHistory);
                updateHistoryChart();
            }
            else{
                document.getElementById("result").innerHTML=str1+str3+str5;
                betHistory.push("LOSE");
                betHistory.push("-$"+bet);
                console.log(betHistory);
                updateHistoryChart();
            }
        }
    }
    
}
function updateHistoryChart(){
    if(betHistory.length>0){
        let table=document.getElementById("chart");
        let roll=table.insertRow(betHistory.length/3);
        let cell1=roll.insertCell(0);
        let cell2=roll.insertCell(1);
        let cell3=roll.insertCell(2);
        cell1.innerText=betHistory[betHistory.length-3];
        cell2.innerText=betHistory[betHistory.length-2];
        cell3.innerText=betHistory[betHistory.length-1];
        // let winLose="<th>"+betHistory[i+1]+"</th>";
        // let amt="<th>"+betHistory[i+2]+"</th>";
        // let row="<tr>"+roll+winLose+amt+"</tr>";
    }
}
function showHistory(){
    if(document.getElementById("history").style.display=="block"){
        document.getElementById("history").style.display="none";
    }
    else{
        document.getElementById("history").style.display="block";
    }
}
function resetD(){
    document.getElementById("d1Result").innerText="";
    document.getElementById("d2Result").innerText="";
    document.getElementById("result").innerHTML="";
}
function clearHistory(){
    let betHistoryBlank=[];
    betHistory=betHistoryBlank;
    document.getElementById("chart").innerHTML="";
    let table=document.getElementById("chart");
    // let row=table.insertRow(0);
    let row=table.insertRow(0);
    let cell1=row.insertCell(0);
    let cell2=row.insertCell(1);
    let cell3=row.insertCell(2);
    cell1.innerText="Roll Result";
    cell2.innerText="Win/Lose";
    cell3.innerText="Amt Won/Lost";
}




//this is not suitable for this function bc you want to print innerText in a non-form elements
//document.forms[0].elements[2].innerText='test';
//when you want to use tags for innerhtml, you write it in a string variable then set the innerhtml equal to those string variables
//it seems you cant use getElementsByTagName('table')
//you have to do this
//const table=document.getElementById("tableId");
//const cells=table.getElementsByTagName('td');
//https://www.w3schools.com/jsref/met_table_insertrow.asp
//https://www.w3schools.com/jsref/met_node_appendchild.asp