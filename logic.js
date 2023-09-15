
//web projects

var web=document.querySelector(".webcontent");
var btn1=document.getElementById("one");
btn1.addEventListener("click",function(){
    console.log("btn1 clicked");
    btn1.remove();
    web.innerHTML="Portfolio Website<br/>Snake Game";
})

//android projects

var and=document.querySelector(".androidcontent");
var btn2=document.getElementById("two");
btn2.addEventListener("click",function(){
    console.log("btn2 clicked");
    btn2.remove();
    and.innerHTML="Women Safety SOS App<br/>Ecommerce App<br/>Music Player app</br>calculator App";
})

//graphics designing

var grap=document.querySelector(".graphicscontent");
var btn3=document.getElementById("three");
btn3.addEventListener("click",function(){
    console.log("btn3 clicked");
    btn3.remove();
    grap.innerHTML="Youtube Thumbnail<br/>Advertising Poster<br/>Promotional Posters</br>cinamatic posters<br/>Editing Photos";
})

//video editing

var vid=document.querySelector(".videocontent");
var btn4=document.getElementById("four");
btn4.addEventListener("click",function(){
    console.log("btn4 clicked");
    btn4.remove();
    vid.innerHTML="Dance Videos Editing<br/>Promotional videos Creation<br/>Educational Videos</br>Advertising video creation<br/>Reels editing";
})

//email

var em=document.querySelectorAll("#email");
var btn5=document.getElementById("mail");
btn5.addEventListener("click",function(){
    console.log("btn5 clicked");
})