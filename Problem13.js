// How to find falsy value from an array and delete it

const mixedArr = [
    "Mohon Saha",
    undefined,
    "japan",
    false,
    "Bangladesh",
    " ",
    40,
    true,
    NaN,
];

const trueArray = mixedArr.filter(
    function(element){
        if(element){
            return true;
        }
        else{
            return false;
        }
    }
);
console.log(trueArray);

