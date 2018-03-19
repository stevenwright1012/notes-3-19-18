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