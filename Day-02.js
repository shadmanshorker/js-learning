let number =1;
function greet(name, lastname){
console.log('Hello ' +name+ ' ' + lastname)

}
greet('shadman', 'shorker');

function sayhello(){

    console.log("Hello");

}
sayhello();
sayhello();
sayhello();

function add(a,b){
    return a + b;
}

let result = add(5,3);
console.log(result);
 console.log(add(10,20));

function multiply(a,b){
return a * b;


} 
console.log(multiply(4,5));

 const multiplay = (a,b) => a * b;
 console.log(multiplay(5,6));

 function greting(){

console.log("Good morning ");

 } 
greting();

function welcomeuser(a){

    console.log("Welcome " + a + "!");

}
welcomeuser("Shadman");
 
function squre(a){
console.log("square(" +(a)+ ") = " + a*a);

}

squre(7);
 

const square = (a) => a*a;
console.log(square(7));


function getMax(a,b){

    if(a<b){
        console.log(b);

    }
    else{
        console.log(a);
        }

}
getMax(50,25);

function isEven(a){
    if (a % 2 == 0) { 

        console.log(true);}

      else { 


            console.log(false);
        } 
    }

  isEven(5);


