
var counter = 1;
function changeTextLeft(){
  counter-=1;
  if(counter==-2){
      counter=1;
  }
  
  if(counter===1) {
    //alert("left counter 1 function");
    document.querySelector(".profile--1").style.display = "block";
    document.querySelector(".profile--2").style.display = "none";
    document.querySelector(".profile--3").style.display = "none";
    //styling circles
    document.getElementById("0").style.background="black";
    document.getElementById("1").style.background="#aa8f6f";
    document.getElementById("2").style.background="black";
  }
   if(counter===0) {
    //alert("left counter 0 function");
    document.querySelector(".profile--1").style.display = "none";
    document.querySelector(".profile--2").style.display = "none";
    document.querySelector(".profile--3").style.display = "block";
    document.getElementById("0").style.background="#aa8f6f";
    document.getElementById("1").style.background="black";
    document.getElementById("2").style.background="black";
    counter=3;
    
  } 
  if(counter===2) { 
    //alert("left counter 2 function");
    document.querySelector(".profile--1").style.display = "none";
    document.querySelector(".profile--2").style.display = "block";
    document.querySelector(".profile--3").style.display = "none"; 
    //styling circles
    document.getElementById("0").style.background="black";
    document.getElementById("1").style.background="black";
    document.getElementById("2").style.background="#aa8f6f";
  } 

}

function changeTextRight() {
  counter+=1;
  if(counter==4) {
      counter=1;
  }
  if(counter===1) {
    
    document.querySelector(".profile--1").style.display = "block";
    document.querySelector(".profile--2").style.display = "none";
    document.querySelector(".profile--3").style.display = "none";
    //styling circles
    document.getElementById("0").style.background="black";
    document.getElementById("1").style.background="#aa8f6f";
    document.getElementById("2").style.background="black";
  }
   if(counter===0) {
    
    document.querySelector(".profile--1").style.display = "none";
    document.querySelector(".profile--2").style.display = "none";
    document.querySelector(".profile--3").style.display = "block";
    document.getElementById("0").style.background="#aa8f6f";
    document.getElementById("1").style.background="black";
    document.getElementById("2").style.background="black";
    
  } 
  if(counter===2) { 
   
    document.querySelector(".profile--1").style.display = "none";
    document.querySelector(".profile--2").style.display = "block";
    document.querySelector(".profile--3").style.display = "none"; 
    //styling circles
    document.getElementById("0").style.background="black";
    document.getElementById("1").style.background="black";
    document.getElementById("2").style.background="#aa8f6f";
    counter=-1;
  } 

}
  