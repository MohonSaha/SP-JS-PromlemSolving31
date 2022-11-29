// কোন একটা sentence এ কোন একটা word প্রথম কোন পজিশনে আছে ? 
const sentence = "Javascript is a functional language. javaScript is not a opject oriented language like java. And javascript also a synchronous language";
let position = sentence.search(/functional/i);
position = position > 0 ? position : "Not Found";
console.log(position);