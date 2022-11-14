// লুডু খেলায় ১-৬ সংখ্যা রেন্ডমলি দেখাতে হবে ঃ 

function getRandomNumber (min, man){
    return Math.floor(Math.random() * (man-min+1)) + min; 
}

console.log(getRandomNumber(1,4));