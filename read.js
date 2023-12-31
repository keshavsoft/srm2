const fs = require("fs");

let LocalFileData = fs.readFileSync("users.json");
let LocalJsonData = JSON.parse(LocalFileData);

console.log("LocalJsonData : ", LocalJsonData);
let LocalArray = Object.values(LocalJsonData);
console.log("LocalArray : ", LocalArray);
