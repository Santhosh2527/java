string

//-------------------------1st----------------------------

// let a=prompt("Enter a value");

// let b=a.trim();

// let c=Number(b);

// if(b.length==0)
// {
//     alert("invalid input");
// }

// else if(c)
// {
//     alert("its not a string");
// }

// else
// {
//     alert("it is a string");
// }
//----------------------2nd---------------------------

// let a=prompt("Enter a value")
// console.log(a)

// let b = a.split(' ');
// console.log(b)

//---------------------3rd--------------------------------------------

// let x=prompt("Enter a value");
// console.log("before slice: " +x);

// let y=parseInt(prompt("Enter a start index value"));
// let z=parseInt(prompt("Enter a end index value"));

// console.log("after slice: " +x.slice(y,z));

//----------------------4th----------------------------------

// let s=prompt("Enter the value");
// s=s.trim();
// if(s.length==0)  
// {
//     console.log("true");
// }
// else
// {
//     console.log("false");
// }

// -------------------5th------------------------

// let email=prompt("Enter your email");
// let a=email.search(/@/);
// let b=email.slice(4,a);
// let c=email.replace(b,"....");

// console.log(c);

//--------------------6th-----------------------

// console.log("Before........" );
// let x=prompt("Enter a value");
// console.log(x);

// oldvalue=" ";
// newvalue="-";

// console.log("After........");
// let y=x.trim().replaceAll(oldvalue,newvalue);
// let z=y.toLowerCase();
// console.log(z);

//----------------7th----------------------------

// let word=captilizeWord(prompt("Enter a sentence "))
// console.log(word)
// function captilizeWord(sent)
// {
//     let a=sent.split(" ");
//     console.log(a)
//       for (var i = 0; i < a.length; i++){
        
//          a[i] = a[i][0].toUpperCase()+a[i].slice(1);
        
//     }
//     return a.join(" ")
  
   
// }

//------------------------8th---------------------------------


// let num = parseInt(prompt("Enter a number"));

// let onesValue = num%10;
// let tensValue = num%100;

// if((onesValue==1) && (tensValue!=11))
// {
//     console.log(num+"st")
// }

// else if((onesValue==2) && (tensValue!=12))
// {
//     console.log(num+"nd")
// }

// else if((onesValue==3) && (tensValue!=13))
// {
//     console.log(num+"rd")
// }

// else
// {
//     console.log(num+"th")
// }


//----------------------9th-------------------------

let a=prompt(" Enter a sentence ");
console.log("sentence: "+a)

let b=a.split(" ");
let count=prompt("Enter a number to truncate : ");
let value=b.slice(0,count);
console.log("truncate count: "+count);

let c=value.join(" ");
console.log("After truncate the string: "+c);

//------------------------10th-------------------------------

// let x=prompt("Enter a sentence");
// console.log("sentence: "+x);

// let y=prompt("Find pick out the word");
// console.log("pickout word: "+y);

// let z=x.replace(y,'');
// let a=z.replace("  "," ")
// console.log("Result: "+a);

//---------------------------11th-------------------------------

// let x=prompt("Enter a value");
// console.log("sentence: "+x);

// let y=prompt("Matching words");
// console.log("Matching word: "+y);

// x=x.toLowerCase();
// y=y.toLowerCase();

// console.log(x.match(y));
// if(x.match(y)==null)
// {
//     console.log("Not matched");
// }
// else
// {
//     console.log("Matched");
// }

//-------------------------------12th-------------------------------------

// let a=prompt("Enter a value");
// console.log("sentence: "+a);

// let b=prompt("Matching words");
// console.log("Matching word: "+b);

// a=a.toUpperCase();
// b=b.toUpperCase();

// if(a.match(b)==null)
// {
//     console.log("false")
// }
// else
// {
//     console.log("true");
// }

//------------------------------13th------------------------------------

// let x = prompt('Enter a string to change')
// let y = ''

// for(i=0;i<x.length;i++)
// {
//     if(x[i].match(/[a-z]/))
//     {
//         y += x[i].toUpperCase();
//     }
//     else 
//     {
//         y += x[i].toLowerCase();
//     }
    
// }
// console.log(y)
// let sentence = prompt('Enter a string to change')
// let char = ''
// for(i=0;i<sentence.length;i++)
// {
//     if(sentence[i] >= 'a' && sentence[i] <= 'z')
//     {
//         char += sentence[i].toUpperCase();
//     }
//     else 
//     {
//         char += sentence[i].toLowerCase();
//     }

// }
// console.log(char)


//--------------------------------arrays----------------------------

// let x=prompt("enter a value");
// console.log(x)

// let y=x.split(" ");
// console.log(y);

// let a=y.shift();
// console.log(a);

//---------------array-------1st----------------------------

// console.log(["1","2","3"]);
// let x=getFirstValue(["1","2","3"]);
// console.log("First value: "+x);

// function getFirstValue(a)
// {
//     return a[0];
// }

//--------------------------2nd--------------------------


// let a=check([1,2,1,4,5],5);
// console.log("input value: [1,2,1,4,5],5");
// console.log("check number is 5")
// console.log(a);

// function check(x,y)
// {
//     return x.includes(y);
// }

//--------------------------3rd--------------------------------

// let x=reverseValue([1,2,3,4]);
// console.log("[1,2,3,4]")
// console.log(x);

// function reverseValue(x)
// {
//     return x.reverse();
// }

//----------------------------4th-------------------------------

// console.log("Given input: (1,2)")
// let x=makePair(1,2);
// console.log(x);

// function makePair(a,b)
// {
//        let arr = [];
//        arr[0]=a;
//        arr[1]=b
//     return arr;
// }

//------------------------5th-----------------------------

// console.log("input: (a,g,y,d),d")
// let x=findIndex(["a","g","y","d"],"d");
// console.log("search value is: d")
// console.log("index of d is: "+x)

// function findIndex(a,b)
// {
//     return a.indexOf(b);
// }

// //------------------------6th-----------------------------

// console.log("input: cat,dog,duck");
// let a=getLastElement(["cat","dog","duck"]);
// console.log("pop element: "+a);

// function getLastElement(x)
// {
//     return ;
// }

//----------------------------7th--------------------------------

// console.log("input value: [1,2,3,4,5,6]")
// let a=arrayToString([1,2,3,4,5,6])
// console.log("convert array to string: "+a)

// function arrayToString(x)
// {
//     return x.join("");
// }

//-----------------------------8th-----------------------------------

// let x=findLength("wash your hands!");
// console.log(x);

// function findLength(a) {
//     let b = a.slice(-1);
//     let c = a.lastIndexOf(b);
//     c = c + 1;
//     return(c);
// }

//---------------------------------------------------------------------
