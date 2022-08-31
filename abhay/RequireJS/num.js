function num1(num){
var combination = 5;

var limit = 999;
var i, j, lastDigit, copyNum, flag, count;

//Iterate from 1 to limit
for(i = 100; i <= limit; i++)
{
 copyNum = i;
 count = 0;
 flag = 0;
 //Check each digit starting from last digit
 while(copyNum != 0)
 {
  count++;
  lastDigit = copyNum % 10;
  for(j = 0; j < combination; j++)
  {
   if(num[j] == lastDigit)
   flag++;
  }
  copyNum = Math.floor(copyNum / 10);
 }
 // result
 if(count == flag)
 var val =document.write(i +", ");
 return val;
}
};
var num = [0,5,4,8,9];
export default num1;