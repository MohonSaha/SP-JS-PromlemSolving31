// Check if a number is a prime number 

function checkNumber (num){
    if(num === 1){
        console.log(`${num} is not a prime number nor a composit number`);
    }
    else if(num < 1){
        console.log(`${num} is not a prime number`);
    }
    else{
        for (var i = 2; i < num; i++ ){
            if(num%i === 0){
                var result = `${num} is not a prime number`;
                break;
            }
            else{
                var result = `${num} is a prime number`;
            }
        }
        console.log(result);
    }
}

checkNumber(1)