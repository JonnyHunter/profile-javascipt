var counter = 1;
function changeTextLeft(){
  counter-=1;
  alert(counter);
  if(counter===1) {
    alert("left counter 1 function");
    document.querySelector(".profile--1").style.display = "block";
    document.querySelector(".profile--2").style.display = "none";
    document.querySelector(".profile--3").style.display = "none";
    //styling circles
    document.getElementById("0").style.background="black";
    document.getElementById("1").style.background="gold";
    document.getElementById("2").style.background="black";
  }
   if(counter===0) {
    alert("left counter 0 function");
    document.querySelector(".profile--1").style.display = "none";
    document.querySelector(".profile--2").style.display = "none";
    document.querySelector(".profile--3").style.display = "block";
    document.getElementById("0").style.background="gold";
    document.getElementById("1").style.background="black";
    document.getElementById("2").style.background="black";
    counter=3;
  } 
  if(counter===2) { 
    alert("left counter 2 function");
    document.querySelector(".profile--1").style.display = "none";
    document.querySelector(".profile--2").style.display = "block";
    document.querySelector(".profile--3").style.display = "none"; 
    //styling circles
    document.getElementById("0").style.background="black";
    document.getElementById("1").style.background="black";
    document.getElementById("2").style.background="gold";
  } 
  return counter;
}

function changeTextRight() {
  counter+=1;
  alert(counter);
  if(counter===1) {
    alert(" counter 1 function");
    document.querySelector(".profile--1").style.display = "block";
    document.querySelector(".profile--2").style.display = "none";
    document.querySelector(".profile--3").style.display = "none";
    //styling circles
    document.getElementById("0").style.background="black";
    document.getElementById("1").style.background="gold";
    document.getElementById("2").style.background="black";
  }
   if(counter===0) {
    alert("right counter 0 function");
    document.querySelector(".profile--1").style.display = "none";
    document.querySelector(".profile--2").style.display = "none";
    document.querySelector(".profile--3").style.display = "block";
    document.getElementById("0").style.background="gold";
    document.getElementById("1").style.background="black";
    document.getElementById("2").style.background="black";
    
  } 
  if(counter===2) { 
    alert("right counter 2 function");
    document.querySelector(".profile--1").style.display = "none";
    document.querySelector(".profile--2").style.display = "block";
    document.querySelector(".profile--3").style.display = "none"; 
    //styling circles
    document.getElementById("0").style.background="black";
    document.getElementById("1").style.background="black";
    document.getElementById("2").style.background="gold";
    counter=-1;
  } 
  return counter;
}
  