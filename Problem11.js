// কোন একটা থেকে কীভাবে সবথেকে বড় বের করব এবং তার নাম্বার দেখব ?

function longestString (names){
    let longestWord = '';
    for (name of names){
        if(name.length > longestWord.length){
            longestWord = name;
        }
    }
    return [longestWord, names.indexOf(longestWord)]
}

const result = longestString(["Bangladesh", "Japan", "Long Live Bangladesh","Nepal"]);
console.log(result);