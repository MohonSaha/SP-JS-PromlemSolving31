// Check if a number is positive negative or zero by built-in sign() method

function checkNumber (num){
    const check = Math.sign(num)
    return check;
}

console.log(checkNumber(-5));





// Check if a number is positive negative or zero by manual function

function checkNumber (num){
    if(num > 0){
        console.log("This number is positive.");
    }
    else if(num === 0){
        console.log("This is Zero");
    }
    else{
        console.log("Negative");
    }
 
}

console.log(checkNumber(9));