// Find out the duplicate number of an array 

const number = [1, 4, 4, 7, 5, 5, 6, 8, 9, 6];
const duplicates = number.filter(function(value, index, array){
    findOut = array.indexOf(value) !== index
    return findOut;
});
console.log(duplicates);
