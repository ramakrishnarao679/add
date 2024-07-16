let number = [1, 2, 3, 4, 5];

// let sum=0;
// for(let i=0; i<number.length; i++){
//     sum =sum + number[i];
// }
// console.log(sum);

// let sum=0; 
// for(let i of number){
//     sum = sum+i;
// }
// console.log(sum);

// let sum=0;
// for(var i in number){
//     sum = sum + number[i];
// }
// console.log(sum);

// let sum=0;
// number.forEach(function(number){
//     sum = sum +number;
// })
// console.log(sum);

function sumOfnum(sum, number){
    return sum+number;
}
function add(){
    console.log(number.reduce(sumOfnum));
}
add();