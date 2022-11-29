// কোন সংখ্যা ৩, ৫ এবং ৩ ও ৫ উভয় সংখ্যা দ্বারা বিভাজ্য  কিনা তা নির্ণয়? 

// Divisible by 3 : Fizz
// Divisible by 5 : Buzz
// Divisible by both : FizzBuzz

function fizzBuzz (number){
    for (let i = 1; i <= number; i++){

        if(i % 15 === 0){
            console.log(`${i} is FizzBuzz`);
        }
        else if(i % 3 === 0){
            console.log(`${i} is Fizz`);
        }
        else if (i % 5 === 0){
            console.log(`${i} is Buzz`);
        }
        else{
            console.log(i);
        }
    }
}
fizzBuzz(10)