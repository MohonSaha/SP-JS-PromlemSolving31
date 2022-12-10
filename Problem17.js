// convert kilometer to miles 

function KilometerToMiles (km){
    const factor = 0.621371;
    const convert = km * factor;
    return convert;
}

// console.log(KilometerToMiles(4));


// convert celsius to fahrenheit

function celsiusToFahrenheit (cel){
    const convert = (cel * 1.8) + 32;
    return convert
}

console.log(celsiusToFahrenheit(34));