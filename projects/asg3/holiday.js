//September 1,2019 to August 31, 2020

function holiday(){
    let input=document.getElementById("dateInput").value;
    let inputArray=input.split("-",3);
    console.log(inputArray);
    //when you set a Date object using arguements, january is 0, so must -1
    let date=new Date(inputArray[0],inputArray[1]-1,inputArray[2]);
    console.log(date);
    //must +1 to account for weird month index system
    let dateInput={day:date.getDate(), month:date.getMonth()+1, year:date.getFullYear()};
    console.log(dateInput);
    //let dayHolidays=[[9,2,2019],[10,14,2019],[2,17,2020],[5,25,2020]];
    //test within year range
    if(dateInput.year==2019){
        if(dateInput.month>=9){
            //9.2.19 labor day
            if(dateInput.month==9){
                if(dateInput.day==2){
                    document.getElementById("output").innerText=input+" is Labor Day. This is an NYU holiday.";
                    document.getElementsByTagName("img")[4].src="media/laborDay.jpg";
                }
                else{
                    document.getElementById("output").innerText=input+" is not an NYU holiday.";
                    document.getElementsByTagName("img")[4].src="";
                }
            }
            //10.14.19 fall recess
            else if(dateInput.month==10){
                if(dateInput.day==14){
                    document.getElementById("output").innerText=input+" is Fall Recess. This is an NYU holiday.";
                    document.getElementsByTagName("img")[4].src="media/fall.jpg";
                }
                else{
                    document.getElementById("output").innerText=input+" is not an NYU holiday.";
                    document.getElementsByTagName("img")[4].src="";
                }
            }
            //11.27-11.29 thanksgiving
            else if(dateInput.month==11){
                if(dateInput.day>=27&&dateInput.day<=29){
                    document.getElementById("output").innerText=input+ " is Thanksgiving. This is an NYU holiday.";
                    //webp not supported in safari
                    //but checking browser for safari not reliable
                    //https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
                    document.getElementsByTagName("img")[4].src="media/thanksgiving.jpg";
                }
                else{
                    document.getElementById("output").innerText=input+" is not an NYU holiday.";
                    document.getElementsByTagName("img")[4].src="";
                }
            }
            //12.21.19-1.5.2020 winter recess
            else if(dateInput.month==12){
                if(dateInput.day>=21){
                    document.getElementById("output").innerText=input+ " is Winter Recess. This is an NYU holiday.";
                    document.getElementsByTagName("img")[4].src="media/winter.jpg";
                }
                else{
                    document.getElementById("output").innerText=input+" is not an NYU holiday.";
                    document.getElementsByTagName("img")[4].src="";
                }
            }
        }
        else{
            document.getElementById("output").innerText=input+" is out of the available range of dates";
        }
    }
    else if(dateInput.year==2020){
        if(dateInput.month>=1&&dateInput.month<=8){
            //12.21.19-1.5.2020 winter recess
            if(dateInput.month==1){
                if(dateInput.day<=5){
                    document.getElementById("output").innerText=input+" is Winter Recess. This is an NYU holiday.";
                    document.getElementsByTagName("img")[4].src="media/winter.jpg";
                }
                else{
                    document.getElementById("output").innerText=input+" is not an NYU holiday.";
                    document.getElementsByTagName("img")[4].src="";
                }
            }
            //2.17.2020 presidents' day
            else if(dateInput.month==2){
                if(dateInput.day==17){
                    document.getElementById("output").innerText=input+" is Presidents' Day. This is an NYU holiday.";
                    document.getElementsByTagName("img")[4].src="media/presidents.jpg";
                }
                else{
                    document.getElementById("output").innerText=input+" is not an NYU holiday.";
                    document.getElementsByTagName("img")[4].src="";
                }
            }
            //3.16.2020-3.22.2020 spring recess
            else if(dateInput.month==3){
                if(dateInput.day>=16&&dateInput.day<=22){
                    document.getElementById("output").innerText=input+" is Spring Recess. This is an NYU holiday.";
                    document.getElementsByTagName("img")[4].src="media/spring.jpeg";
                }
                else{
                    document.getElementById("output").innerText=input+" is not an NYU holiday.";
                    document.getElementsByTagName("img")[4].src="";
                }
            }
            //5.25.2020 memorial day
            else if(dateInput.month==5){
                if(dateInput.day==25){
                    document.getElementById("output").innerText=input+" is Memorial Day. This is an NYU holiday.";
                    document.getElementsByTagName("img")[4].src="media/memorial.jpg";
                }
                else{
                    document.getElementById("output").innerText=input+" is not an NYU holiday.";
                    document.getElementsByTagName("img")[4].src="";
                }
            }
            //7.3.2020-7.4.2020 independence day
            else if(dateInput.month==7){
                if(dateInput.day==3||dateInput.day==4){
                    document.getElementById("output").innerText=input+" is Independence Day. This is an NYU holiday.";
                    document.getElementsByTagName("img")[4].src="media/independence.jpg";
                }
                else{
                    document.getElementById("output").innerText=input+" is not an NYU holiday.";
                    document.getElementsByTagName("img")[4].src="";
                }
            }
            else{
                document.getElementById("output").innerText=input+" is not an NYU holiday.";
                document.getElementsByTagName("img")[4].src="";
            }
            
        }
        else{
            document.getElementById("output").innerText=input+" is out of the available range of dates";
        }
    }
    else{
        document.getElementById("output").innerText=input+" is out of the available range of dates";
    }
    
    //test for multiday holidays
    //test for dayHolidays
}


//your date object may be a day off depending on the timezone you are in
//since i do not care about timezone right now, I decided to get my string value from the input
//then split it using the hyphens 
//then write in the exact date that i wanted into the Date object
//https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/
//https://stackoverflow.com/questions/33659508/javascript-get-a-date-from-an-html-input
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_find
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find




