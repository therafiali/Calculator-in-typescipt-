// Calculator 
function calC(a:number,b:string,c:number) {
if (b==="+") {
  return a + c
} else if (b==="-") {
  return a - c
} else if (b==="*") {
  return a * c
} else if (b==="/") {
  return a / c
} else {
  console.log("wrong statement")  
}
}
console.log(calC(5,"+",5))//10
console.log(calC(10,"-",5))//5
console.log(calC(5,"*",2))//10
console.log(calC(10,"/",2))//10
console.log(calC(10,"z",2))//wrong answer

