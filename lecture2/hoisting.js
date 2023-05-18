var a;
console.log(a);
var a =10;
console.log(a);

//let b; //variables with let are hoisted  but they atre not yet defined(temporal deadzone)
 console.log(b);
 //let b=10;
 console.lob(b);


 //let b;// variable b is in temporal deadzone (memory is not allocated yet)
 //console.log(b);// b is still in temporal zone

 let b=10; //its temporal deadzone is completed.
 console.log(b);

 var a =undefined ; //hoisted-- a is in temporal zone(memory is allocated & deadzone ) 
 console.log(a);// a is not in temporal dead zone
 var a=10;
 console.log(a);

 