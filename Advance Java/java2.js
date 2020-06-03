// var element;
// element= document.all;
// element= document.head;
// element= document.body;
// element= document.links;
// element= document.links[0];
// element= document.URL;
// element= document.domain;
// element= document.getElementsByTagName('ul');
// element= document.getElementById('wrapper').innerText;
// element= document.getElementById('contentsssss').innerText;
// element= document.getElementById('content').innerHTML;
// element= document.getElementById('wrapper').getAttribute("class");
// element= document.getElementById('wrapper').getAttribute("id");
// element=document.getElementById('header').attributes[2].value;
// element=document.getElementById('header').attributes[1].name;
// document.getElementById('header').innerHTML= "<h1> wow </h1>"; 
// element=document.getElementById('header').innerHTML;
// document.getElementById('header').setAttribute("class", "xyz");

// document.getElementById("header").removeAttribute("style");
// document.getElementById("header").removeAttribute("class");
// document.querySelector('#header').innerHTML= "<h1> wow </h1>"
// element= document.querySelector('.list');
// element= document.querySelectorAll('.list')[1].innerHTML;
// element= document.querySelectorAll('ul')[0];
// element= document.querySelectorAll('#header');
// element= document.querySelectorAll('#header h1');

// console.log(element);



// ==========multi line asighnment class========


// var a= `this is a girl
// // i am saqib al
// // i am from karachi there is a one god`;
// console.log(a);

// ===============assighnment end=========

// function firstName(){
//     console.log("000000");
//     debugger;
// }
// firstName();

// possibility1
// var ele= document.querySelectorAll('h1');
// possibilty2
// var ele= document.querySelectorAll('h1')[2];


// var ele= document.querySelectorAll('.dom');





// jab java script phle load ho tou means k script head me ho tou======


// function init(){
//     var ele= document.querySelector('.dom');
//     console.log(ele);
// }
// document.addEventListener('DOMContentLoaded', init);



//  yeh wala null milega kyuke bahar hai phle load ho chuka upar wala correct hai
// var ele= document.querySelectorAll('.dom');
// console.log(ele);



// var ele= document.querySelector('.dom');
// console.log(ele);

//  yeh text chnage krd3egaaa=====
// ele.textContent= "saqib ali";



// var ele= document.querySelector('.dom');
// ele.classList.add('dynamic');
// ele.classList.remove('dynamic');
// // is se sare option khul jayge===
// console.dir(ele);

// var hit= document.querySelectorAll('.hit');
// console.dir(hit);

// function hitme(){
//     console.log("Hello world");
// }
// // === yeh hai ak button k lie====
// hit.addEventListener('click', hitme);


// ======yeh all butto k lie=====
// hit.forEach((result) => {
//     result.addEventListener('click',hitme);
// })


// var name1= "saqib";
// var name2= "saqib";
// var person1= {
//     age: 23
// }
// var person2 = {
//     age: 23
// }
// ===== agr yeh nai dege nche wali twcondition nai chalegi
// person1= person2
// if (person1 == person2){
//     console.log("welcome obj");
// }
// var objLength= {
//     age: 25,
//     name: "saqib",
//     employee: 20
// }

// console.log(Object.keys(objLength));
// console.log(Object.keys(objLength).length);
// console.log(Object.values(objLength));


// var ele=document.querySelector('h3');
// console.log(ele);
// var ele=document.querySelector('.name2');
// console.log(ele);
// ele.textContent= "ali saqib";
// ele.classList.add('new');



var hit= document.querySelectorAll('.hit');
console.dir(hit);

function hitMe(){
    console.log("Hello");
}
// hit.addEventListener('click', hitMe);
hit.forEach((result) => {
    result.addEventListener('click',hitMe);
})


























 