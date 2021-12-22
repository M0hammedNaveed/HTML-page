var myLearning=["Hello", 5, "Everyone"]; //An example for array.
var firstStringOfMyLearning= myLearning[0]; //Command to Select first string/element of variable/array (0 indicates the first positon, likewise 1 indicates second element and so on).
var pushFunction=mylearning.push([2,"Hi"]); //Command to add a string/element at the end of the array.
myLearning.unshift("Yahoo"); //Command to add an element at the beginning of the array.
myLearning.shift(); //Command to remove an element at the beginning of the array.
mylearning.pop(); //Command to remove an element at the end of the array.

function testFunction() {console.log("Hello")}; //A way to define a function.(Whenever the function is called the content inside curly brackets is printed)
testFunction();
function sumFunction(param1, param2) {console.log(param1+param2)}; //A way to define a SUM function. param are arguments to be defined.
sumFunction(7,8); //The both number will sum up in console as defined in the function.

//variables(var) can be defined either inside function or outside function block.
//variables defined without using var are visible globally.
function interest(){
    var myLearning = "Goodbye";
    return myLearning} // The var can have the same name as outside variable. It will be limited to be used within the function.
//We can also assign function to perform maths
function square(num){
    return num*num;}  // if square function is called with a number, it will return us a square value of the number. 
//Just to recall, everything to the right of the '=' equal sign is resolved first.
    
// Booleans

function trueOrFalse (myBoolean){
    if (myBoolean){
        return "The value is True";
    }
    return "The value is false";                      
}                                   //If the myBoolean value is True, the first statement will be returned and if it is false the second statement will be returned.
trueOrFalse(true)

// "==" equality operator
// Equality operator compares two value and returns 'true' if they are equal else 'false'.
function equality(val) {
    if (val==6){
        return "The value is Equal"
    }
    return "The value is not Equal"
}   // In the above function if the val is equal to 6 or '6', it will reutrn the first statement("The value is Equal") else second.
// We have similar operater strict equality i.e., '===' this returns true value only if the value is of same value and type that is if 3 is equal to only 3.

//Similarly we have "!=" inequality operator which acts opposite to "==" equaliy operator. Also, "!==" strick inequality operator.
//The next function is '>' for greater than operator. It will return true if the value at the right is greater than the specified value.
function greaterthan(val) {
    if (val>100){
        return "The value is greater than 100"
    }
     return "The value is below 100"

} // Hopefully, this will explain the function and operation.
// Similary, we have greater than or equal to operatoer ">=", this will check if the value is greater than or equal to the specified number.
//Likewise, we have lesser than "<" and lesser than or equal to operater "<="