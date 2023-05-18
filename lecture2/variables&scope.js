/*console.log('variables');

let a=10;
var b=20;
const c= 30;
console.log (a,b,c);*/

// global scope variables can accessible from anywhere or any file
var a = 10;

console.log(a);

{
    var b=20;// variables declared with var keyword are not block scope
    let c= 30;// variables declared with let/const keyword are  block scope
}

console.log ('b',b);

//console.log ('c',c); //error c is not defined
// use let instead of var since someone can change the value of i hrom outside of for loop
//if we use var.
for (var i=0 ; i<5;i++)

{
    console.log(i);
}

function fun1(){

    var result = 10+20;
  
}
fun1();
  //console.log(result); here function is not defined

  // always create variable using constant keyword first 
  // if you yhink the value i

  const a=10;
  // a= 20;

  /* 
  long code
  */

  console.log(a);

  let b =20;
  console.log(b);

  const b=30;
  console.log(b);

  var c=10;
  c=20;
  var c=30;
   console.log(c);


   let d=10;
   d =20;
   // let d =20; cannot be re declared

   const e=10;
   // e=20;
   // const e =30;

   //template Strings

 const   username="pradeep";
 
 const str3 =`
 <div>
 hello ${username}
 ${4+6}
 ${Math.random()}
 `  
  


