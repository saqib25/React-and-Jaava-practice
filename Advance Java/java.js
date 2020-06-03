// var ele= document.querySelector('.dom');
// var ele= document.querySelector('h1');
// var ele= document.querySelectorAll('h1');
// ele.classList.add('dynamic');
// ele.classList.remove('dynamic');
// console.log(ele);
// ele.textContent= "saqib ali";


// var hit=document.querySelector('.hit');
// function hitme(){
//     console.log('helloworld');
// }
// hit.addEventListener('click', hitme);

// hit.forEach((results)=>{
    // hit.addEventListener('click', hitme); error

// })
// ==========multi line asighnment class========


/* var one= document.querySelector(".one");
var two= document.querySelector(".two");

one.addEventListener('click', callThis); 
two.addEventListener('click', callThis);

function callThis(){
    console.log('inside',this);
}
console.log('outside', this);
*/

/* var one= document.querySelector(".one");
var two= document.querySelector(".two");

one.addEventListener('click', callThis); 
two.addEventListener('click', callThis);

function callThis(){
    console.dir('inside', this);

    setTimeout(function(){
        this.innerText = "saqib";
    },2000);
}
console.log('outside', this);
*/

/* var one= document.querySelector(".one");
var two= document.querySelector(".two");

one.addEventListener('click', callThis); 
two.addEventListener('click', callThis);

function callThis(){
    console.log('inside', this);
    this.innerText= "saqib";
}
*/

/* var one= document.querySelector(".one");
var two= document.querySelector(".two");

one.addEventListener('click', callThis); 
two.addEventListener('click', callThis);

function callThis(){
    // console.log( this);
    setTimeout(() =>{
     console.log(this);
     this.innerText= "saqib";
    }, 2000);
    
}
*/

//=========prototype==========

/* function User(){
    this.age= 24;
}
User.prototype.name= "saqib";
var user1= new User();
var user2= new User();
console.log(user1.name);
console.log(user2.name);

*/

/* function User(){
    this.age= 24;
}

var user1= new User();
var user2= new User();
console.log(user1);
console.log(user2);

 function cal(){

}
cal.prototype.addition= function (a,b){
    return a+b;  //smjh nai aya
}
cal.prototype.subtraction= function (a,b){
    return a-b;  smjh nai aaya
}
var calc= new cal();

*/

//super class

/* function Company(){
    this.companyName= "panacloud";
}
function User(){
    Company.call(this);
    this.userName= "saqib";
}
//sub class

var company= new Company();
var user= new User();
console.log(company);
console.log(user);

*/

//super

/* function Company(){
    this.companyName= "panacloud";
}
Company.prototype.country= "pakistan";
Company.prototype.city= "karachi";

function User(){
    Company.call(this);
    this.userName= "saqib";
}
User.prototype= Object.create(Company.prototype);
User.constructor= User;

//sub class

var company= new Company();
var user= new User();
console.log(company);
console.log(user);

*/

/*console.log("starting");
setTimeout(() =>{
    console.log("running");
}, 3000);

console.log("ending");
*/

