let user = 'md eftikhar';

let result1 = user.charAt(0).toUpperCase() + 
user.slice(1,user.indexOf(" "));
let result2 = user.charAt(user.indexOf(" ")+1).toUpperCase() + 
user.slice(user.indexOf(" ")+2);
let final = result1+" "+result2;
console.log(final);