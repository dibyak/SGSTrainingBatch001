console.log("async in Javascript");


//setTimeout()
// const settimeout = setTimeout(f1,3000);

// function f1() {
//     console.log("Hello!");
// }
// function f3() {
// clearInterval(settimeout);
// }

//setInterval()
const setint = setInterval(f2,1000);

    function f2(){
        console.log("hi!");  
    }

function f3() {
clearInterval(setint);
}
