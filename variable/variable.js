var user =`mahi`;
var age = 10;
var status = true;
var money = 20.5;
var a ='100';
let x,y,z;
x=4;
y=3;
z=null;

let food =`burger`;
let price =`220`;


const storage = 6;
//storage=200;
/*const storage1;
storage1 = 6;*/ //const cant be declared

console.log(user);
console.log(user,age,status,money);
console.log(user+age+status+money); //concat
console.log(`${user} name is Mahi and he is ${age} years old now`);
console.log(typeof user,typeof age,typeof money,typeof status,typeof z);
console.log(age+10);
console.log(age+`10`);
console.log(age-`10`);
let result = parseInt(a);
result += x;
console.log(result);
console.log(storage);

let check = Number(price);
let check2 = Number(food);
console.log(check, typeof check);
console.log(typeof check2,check2);

y += x+x;
//y = x+x;
//y++;
//y+=2;
//y--;
//y*=2;
console.log(y);