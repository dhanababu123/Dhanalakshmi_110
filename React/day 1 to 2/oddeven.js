function evenAndOdd(a)
{
  var a=[11,23,12,24,56,3,4,78,55];
  var evenNumbers=a.filter(number=>number%2==0);
var oddNumbers=a.filter(number=>number%2!==0);
  return{evenNumbers,oddNumbers}
  
}
console.log(evenAndOdd());