// setTimeout(() => {
//     console.log('After 2 seconds');
// }, 0);

// /* function fun1() {
//     console.log('fun1');
// }
// fun1(); */

// console.log('Done!');

//console.time('timer1');
//setTimeout(() => {
  //  console.log('After 2 seconds');
//}, 500);

// DO NOT ever write such blocking codes in main thread
//for (let i = 0; i < 1e9; i++) {}


//console.log('Done!');
//console.timeEnd('timer1');

/*const Timerid= setTimeout(()=>{
console.log('hello');

},2000);
clearTimeout(Timerid);*/

const user= Object();
user.name='pradeep';
console.log(user); 

const mystery ="answer";
const user2={
name:'ajay',
0:2,
"name one":history,
let:109,
[mystery+"gift"]:20

}

console.log(user2.name);
console.log(user2[0]);
console.log(user2["name one"]);
console.log(user2.let);
console.log(user2[mystery]);

 function makeuser(name,age){

    return{
        name,age
    };
 }
const user3=makeuser('pradeep',23);
console.log('user3',user);

for(let i in user2){

    console.log(i,user2[i]);
}
