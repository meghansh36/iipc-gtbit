console.log("Hello World!");

var a = "1";
// a = "1"
// a = 1.2;
// a = true;

if (a === 1) {
    console.log("inside if")
    // do something
} else {
    console.log("inside else")
    // do something
}

console.log("hello" - 1)

var varFunc = function() {
    console.log("inside function")
}

var array = [1, "hello", true, 1.2, varFunc]

array[4]();

var myFuncNew = function(i) {
    console.log(i)

    return "executed"
}

for(var i=0; i<array.length; i++) {
    output = myFuncNew(array[i])
    console.log(output)
}

// function myFunci(i) {
//     console.log(i)

//     return "executed"
// }

var obj = {


    "key1": "hello",
    "key2": 1,
    "key3": [1,2,3,4],
    "key4": {
        "nestedKey" : "nested key"
    },

    "functionKey": function() {
        console.log("inside obj function")

        return "return value"
    }
    
}

console.log(obj.key1);
console.log(obj.key2);
console.log(obj.key3[1]);
console.log(obj.key4.nestedKey);
console.log(obj.functionKey())

console.log(1)
// function arg() {
//     console.log(2)
// }
setTimeout(function() {
    console.log(2)
}, 2000);
// console.log(2)
console.log(3)

function argument() {
    console.log("inside argument")
}

function test(argumentFunction) {
    argumentFunction()
}

test(argument);

var a = "";
let a = ""
const a = ""









