var a = 20;
let b = 25;

a += b;
console.log(a);

let remainder = 11 + 3;
console.log(remainder);

let firstName = "Nattz";
var myStr = 'my first name is ' 
+ firstName + " and I'm fifteen years old";
console.log(myStr);

let animal = 'hippopotanamus';
let myNum = "35";
let unknown = 0;
unknown = animal.length;
console.log(unknown);
unknown = myNum.length;
console.log(unknown);
console.log(unknown);

let my = 35;
let we = 35;
if (my == 40) { 
  console.log('my is same as 40');
}
else if (my == 20) {
  console.log('my is same as 20');
}
else if (my == 30) {
  console.log('my is same as 30');
}
else if (my == we) {
  console.log('my is same as we');
} 

// get the firrt letter in the word
// bracket notation to find first letter  in a string.
let myName = 'Nattz Williams';
let firstLetterOfMyName ='0';
firstLetterOfMyName = myName[6];
console.log(firstLetterOfMyName);

let myArray = ['James', 'Nattz', 356, 'Sobe'];
let mii ='0';
mii = myArray[myArray.length - 1];
console.log(mii); 
let tray = ['David', 'Benjamin', 140603, 'Vanessa'];
let me = tray[0][0];
console.log(me);
// wordblanks
function wordBlanks(myNoun,myPronoun,myVerb) {
  let sentence = '';
  sentence += 'The ' + myPronoun + myNoun + myVerb + ' towards an uncompleted building'
  return sentence;
}
console.log(wordBlanks(' dog',' male',' ran'));
let ourArray = [['Nanza', 18], ['Prevalia', 18], ['Eedee', 16], 'Praise', 20];
let single = ourArray[1];
console.log(single);
// the code below i used data indexes to access the first array and change the first array in ourArray
ourArray[0] =['Sobe', 16];
console.log(ourArray);

// adding elements to an array via the .push function

ourArray.push(['Faith', 23]);
console.log(ourArray);
// using the .pop function to remove array last elements 

var removedArray = ourArray.pop();
console.log(ourArray);
console.log(removedArray)

// the .shift function is similar to the .pop function but in its case it removes the first element of an Array.

var arrayArr = ourArray.shift();
console.log(arrayArr);