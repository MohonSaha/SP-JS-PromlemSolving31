// Show Error for others thing except number

let age = 18;
age = Number(age);
if(isNaN(age)){
    console.log("Please enter a number");
}
else{
    console.log(age<18 ? "Too Young": "old");
}