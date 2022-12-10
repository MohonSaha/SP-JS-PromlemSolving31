// Find the area of a triangle by heigth and base  

function area (base, heigth){
    const result = (base * heigth) / 2;
    return result;
}

console.log(area(4, 6));



// Find the area of a triangle given 3 sides 

function triArea(side1, side2, side3) {
    const s = (side1 + side2 + side3) / 2;
    const area = Math.sqrt(s * ((s - side1)* (s - side2) * (s - side3)));
    return area;
}

console.log(triArea(5, 3, 4));