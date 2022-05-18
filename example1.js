
//This program sets the value of count = 100. It then gives a promise that should only eb reslved if the value of count = 100.
const count = 100;

let countValue = new Promise(function(resolve, reject) {
    if (count == 100){
        resolve("Correct count value");
    } else{
        reject("Wrong count value");
    }
});

console.log(countValue)