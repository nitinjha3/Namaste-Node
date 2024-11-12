// require("./xyz.js")
// var obj=require("./calculateSum.js")
// // import {calculateSum} from "./calculateSum.js"

var data=require("./data.json")

var {sum,multiply} =require("./calculate")

var a=10
var b=24

sum(a,b)

multiply(a,b)

console.log(data);
console.log(JSON.stringify(data));

// calculateSum(a,b)
// obj.a(a,b)
// console.log(obj.b);

//  console.log(a+b);
 
//  console.log(global);
// console.log(globalThis);

 