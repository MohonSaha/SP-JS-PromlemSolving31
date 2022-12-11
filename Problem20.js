// Find if a number is odd or even

// vhecking using if else

function checkNumber (num) {
    if(num % 2 === 0){
        console.log(`${num} is an enev number`);
    }
    else{
        console.log(`${num} is a odd number`);
    }
}
checkNumber(3)


//Checking using turnary operator
function checkNumber (num) {
    var check = num % 2 === 0 ? "even" : "odd";
    console.log(`${num} is an ${check} number`);
}
checkNumber(8)
