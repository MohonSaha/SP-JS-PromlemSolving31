// Find out the vowels of a sentence 

const vowels = ["a", "e", "i", "o", "u", "A", "E","I", "O", "U"];
function countVowels (sentence){
    let count = 0;
    const letters = Array.from(sentence);
    letters.forEach( function(value) {
        if(vowels.includes(value)){
            count++;
        }       
    });
    return count;
}

const result = countVowels("I Love Bangladesh");
console.log(result);