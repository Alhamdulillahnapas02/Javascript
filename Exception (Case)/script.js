// callback
function myFirst(callback){
    myDisplayer("Hello!");
    callback();
}
function mySecond(){
    myDisplayer("Goodbye")
}
function myDisplayer(message){
    console.log(message);
}
myFirst(mySecond);

// set timeout
console.log("I print first!");
setTimeout(() => {
    console.log("I print after 3 seconds");
}, 3000);
console.log("I print second!");

// set Interval
function setTime() {
    const header = document.getElementById("header");
    header.textContent = new Date().toString();
  }
  setInterval(setTime, 1000);
  console.log("Program Finish");

// try, catch, throw new
function divideNumbers(num1, num2) {
    try {
        // mengecek apakah kedua input adalah angka
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error("Input harus berupa angka.");
        }

        // mengecek apakah pembagian dengan nol
        if (num2 === 0) {
            throw new Error("Tidak dapat membagi dengan nol");
        }

        // melakukan pembagian
        return num1 / num2;
    } catch (error) {
        // menampilkan pesan kesalahan
        console.error(error.message);
        return null; 
    }
}

// Contoh penggunaan
console.log(divideNumbers(10, 2)); // Output: 5
console.log(divideNumbers(10, 0)); // Output: "Pembagian dengan nol tidak diizinkan."
console.log(divideNumbers(10, 'a')); // Output: "Input harus berupa angka."
