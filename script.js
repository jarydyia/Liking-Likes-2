var count1=0;
var count2=0;
var count3=0;

var countElement1 = document.querySelector(".likes1");
var countElement2 = document.querySelector(".likes2");
var countElement3 = document.querySelector(".likes3");

function addLike1(){
    count1++
    countElement1.innerText = count1

}

function addLike2(){
    count2++
    countElement2.innerText = count2

}

function addLike3(){
    count3++
    countElement3.innerText = count3

}