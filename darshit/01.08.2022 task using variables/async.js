let firstFunction = function run() {
    console.log("function run executed..");
    f1=1;
};
let secondFunction = function sing() {
    console.log("function sing executed..");
    f2=1;
};
async.waterfall([
    firstFunction,
    secondFunction
], function () {
    console.log("function eat executed..");
});