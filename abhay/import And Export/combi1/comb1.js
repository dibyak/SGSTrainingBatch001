
       
       // 3 digit number that can be formed
       // from the given digits
       function find3DigitNumbers(
           digits) {
           // Generating frequency map
           // of the given digits
           let count = new Array(10).fill(0);
           for (let d of digits){
               count[d]++;
           }
           let res = [];
 
           for (let num = 100; num < 999; num++) {
 
               // Generating frequency map
               // of the current number
               let currCount = new Array(10).fill(0);
               let temp = num;
 
               while (temp) {
                   currCount[temp % 10]++;
                   temp = Math.floor(temp / 10);
               }
 
               // Checking if the number
               // can be generated or not
               let flag = true;
 
               for (let i = 0; i < 10; i++) {
                   if (currCount[i] > count[i]) {
                       flag = false;
                       break;
                   }
               }
 
               if (flag) {
                   res.push(num);
               }
           }
           return res;
       }
 
       // Function to print answer
       function printAnswer(v1) {
           for (let i = 0; i < v1.length; i++) {
               document.write(v1[i] + " ");
           }
           document.write('<br>')
       }
 
       // Driver code
 
       let v1 = [2, 0, 4, 8];
 
       // Function Call
       let ans = find3DigitNumbers(v1);
 
       // Printing answer
       document.getElementById("demo").innerHTML = ans;
 
       export default find3DigitNumbers;
 
      