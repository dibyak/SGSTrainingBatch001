console.log("promise function in javascript");

function f1(something,str) {
    console.log(something,str);
}

let myPromise = new Promise(function(myResolve,myReject) {
    let x= 2;

    if(x == 0) {
        myResolve("Ok");
    } else {
        myReject("Error");
    }
});

myPromise.then(
    function(value) {
        f1(value,"True");
    },
    function(error) {
        f1(error,"Not True");
    }
);