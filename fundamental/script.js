// 1. String
let hewan = "Kucing"; 
console.log(hewan);

// 2. Boolean
let isWhite = true; 
let isBlack = false;

let colorOfWhity = isWhite || isBlack;
console.log("Apakah Whity berwarna putih? ", colorOfWhity);

// 3. Numbers
let totalCats = 6; 
console.log(totalCats);

// 4. Array
let catNames = ["Jono", "Joni", "Jena", "Jeni", "Whity", "Anta"]; 
alert(catNames[3]); // Jeni
alert(catNames.length); //6
console.log(catNames);

// 5. BigInt
let bigCatID = 212n; 
console.log(bigCatID);

// 6. Undefined
let catAge; 
console.log(catAge);

// 7. Null
let lostCat = null; 
console.log(lostCat);

// 8. Object
let catDetails = [
    {name: "Anta", age: 8, color: "black and white"}, // Kucing Anta
    {name: "Jono", age: 2, color: "black and white"}, // Kucing Jono
    {name: "Jeni", age: 1, color: "brown and white"} // Kucing Jeni
    ]; 

console.log("Siapa nama kucing ketiga? ", catDetails[2].name);
console.log(catDetails);

// 9. Symbol
let uniqueID = Symbol("uniqueID"); 
console.log(uniqueID);

// 10. Type of Operator
console.log(typeof hewan); // String
console.log(typeof isWhite); // Boolean
console.log(typeof isBlack); // Boolean
console.log(typeof colorOfWhity); // Boolean
console.log(typeof totalCats); // "number"
console.log(typeof catNames); // "object" 
console.log(typeof bigCatID); // "bigint"
console.log(typeof catAge); // "undefined"
console.log(typeof lostCat); // "object" (null dianggap objek di JS)
console.log(typeof catDetails); // "object"
console.log(typeof uniqueID); // "symbol"
