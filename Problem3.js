// Oueue the roll number of all student of a class 

const roll_number = [1,3,5,7,9,13,15,12,10,2,4,6,8,60,65,43,75,24,64,35];
const result = roll_number.sort(function(a, b){
    return a-b;
})
console.log(result);