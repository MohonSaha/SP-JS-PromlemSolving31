// কোন একটা sentence এ কোন একটা word কত বার ব্যবহার করা হয়েছে ? 
const sentence = "Javascript is a functional language. javaScript is not a opject oriented language like java. And javascript also a synchronous language";

const matches = sentence.match(/Javascript/gi);
const number = matches ? matches.length : 0;
console.log(number);