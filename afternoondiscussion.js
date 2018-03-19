//falsey values: null, NaN, undefined, 0, '', false,

//function declaration
function test(){
    return 'hi';
}

var result = test();
console.log(result); //logs result which invokes test which returns hi. result = 'hi'.

var test = () => {
    return 'hi';
}// this is the same thing as function test;

var test = () => 'hi'; //this is also the same;

// NESTED FUNCTIONS

function outer(){
    console.log("pears");
    
    return function inner(){
        console.log("icecream");

    }
}
var result1 = outer();
result1();

// In regards to scope, a function can look up to find a variable but never look down or to a sibling

//CALLBACKS

function crazyCode(param1){
    console.log(param1);
}

crazyCode('steven'); // function crazyCode(var param1 = 'steven')

function crazyCode1(param1){
    param1("you mean sexy code!");
}

crazyCode1(function(words){
    console.log(words); 
});

// function below is the same as above, line 44 === 58

function crazyCode2(param1){
    param1("you mean sexier code!");
}

function cb(words){
    console.log(words); 
}

crazyCode2(cb); 

// FOR LOOPS

var colors = ["red", "yellow", "blue"]

for(var i = 0; i < colors.length; i++){ // 
    if(colors[i] === "red"){
        console.log("found 'red' at position " + i);       
    }
}

// PROTOTYPE METHODS

colors.splice(0,1);
console.log(colors);
