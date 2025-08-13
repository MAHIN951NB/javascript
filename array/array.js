let cars = [`bmw`,'ferrari','lamborghini'];
console.log(cars);
console.log(cars.length);
cars[0]='aston martin';
cars.push('toyota');
cars.pop();
cars.unshift('porche');
cars.shift();
cars.sort();
cars.reverse();
console.log(cars);

for(let i=0; i<cars.length; i++){
    console.log(cars[i]);

}
let array2  =[1,2,3,4,5];
let del = array2.indexOf(2);
//let del = array2.indexOf('2');
if(del !=-1){
    array2.splice(del,1);
}
console.log(array2);
