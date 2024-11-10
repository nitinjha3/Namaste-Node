
// modules protects their variable and function from leaking
function calculateSum(a,b){
    console.log(a+b);
    
}

var x="hi"
module.exports = {
    a:calculateSum,
    b:x
}