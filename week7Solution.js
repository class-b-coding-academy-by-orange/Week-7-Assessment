console.log('GOOD LUCK 👩‍💻 👨‍💻')
// Please focus

/* Q1:
Usind Map
Create a function called MultiByNum1OrNum2
that takes an array of numbers and two numbers as a parameter
and return a new array after mutiple each elemnt to the num1
if the module of this elemnt to num1 is 0
otherwise multiple the elemt to num2

var arrOfNum1 = [1,5,2]
Example: 
MultiByNum1OrNum2(arrOfNum1,2,6)
Output => 
[6,30,4]

var arrOfNum2 = [7,2,50]
Example: 
MultiByNum1OrNum2(arrOfNum2,7,10)
Output => 
[49, 20, 500]

*/

function MultiByNum1OrNum2(array, num1, num2) {
  // WRITE YOUR CODE UNDER THIS LINE         
  var result = array.map(function (element) {
    if (element % num1 === 0) {
      return element * num1
    } else {
      return element * num2
    }
  });
  return result
}

/* Criteria Q1
Out of 5:
1: Use map and Return the variable that saved inside what map return (result in this case). 
1: Use if statment and write the condition correctly (no matter if it is the oppiste and the output correct).
1: Pass element to the callback function or any name as the first parameter (element in this case).
1: Return element * first element (num1 in this case) ELSE element * second element (num2 in this case) 
1: Final answer 100% correct logically and step by step.
*/


/* Q2:
Using Filter
Create a function called longerAndYounger
that takes an array of objects and 2 numbers as a parameter
and return a new array with the object has 
a name longer than the second parameter
and in the same time the age less than the third parameter

var arrOfObj1 = [
  { name: "alex" ,age:22},
  { name: "mercer",age:26},
  { name: "alice" ,age:33},
  { name: "zaheer",age:35},
  { name: "elizabeth",age:45}
]
Example: 
longerAndYounger(arrOfObj1,4,30)
Output => 
[ 
  { name: "mercer",age:26},
]

Example: 
longerAndYounger(arrOfObj1,3,30)
Output =>
[ 
  { name: "alex" ,age:22},
  { name: "mercer",age:26}
]
*/

function longerAndYounger(array, long, age) {
  // WRITE YOUR CODE UNDER THIS LINE         
  var result = array.filter(function (element) {
    return element.name.length > long && element.age < age
  });
  return result
}

/* Criteria Q2
Out of 5:
1: Use filter.
1: Return the variable that saved inside what filter return (result in this case).
1: Pass element to the callback function or any name as the first parameter (element in this case).
1: Write the condition and return it
 (the first parameter in filter(element in this case).name.length
 > the second parameter in the main function(long in this case)
 &&
 (the first parameter in filter(element in this case).age
< the third parameter in the main function(age in this case)   ).
1: Final answer 100% correct logically and step by step.
*/



/* Q3:
Using Reduce
Create a function called nameAndAllFoods
that takes an array of objects of strings and a number
and return a string have the name of object that 
equal to the index that passesd in the parameter 
and with all the food from other objects

var arrOfObj2 = [
  { name: "alex", food: "fried chiken" },
  { name: "mercer", food: "pizaa" },
  { name: "alice", food: "burger" },
  { name: "zaheer", food: "hot dog" },
  { name: "elizabeth", food: "eggs" }
]

Example:  
nameAndAllFoods(arrOfObj2,0)
Output =>
"alex, fried chiken, pizaa, burger, hot dog, eggs"

Example:
nameAndAllFoods(arrOfObj2,2)
Output =>
"alice, fried chiken, pizaa, burger, hot dog, eggs"
  
*/
function nameAndAllFoods(array, index) {
  // WRITE YOUR CODE UNDER THIS LINE         
  var result = array.reduce(function (acc, element) {
    return acc + ', ' + element.food
  }, array[index].name)
  return result
}

/* Criteria Q3
Out of 5:
1: Use reduce + return the variable that saved inside what reduce return and divides it by array length (result in this case).
1: Pass element to the callback (acc, element in this case).
1: Retrun the first parameter in callback (acc in this case) + ', ' + the second  parameter in callback (elemnt in this case).food .
1: Pass the first parameter in main fucntion (array in this case)[the second parameter in main fucntion(index int his case)].name to the reduce fucntion as second parameter (array[index].name in this case)  .
1: Final answer 100% correct logically and step by step.
*/



/*
Q4
You need to write the solution in the q4.html
1. Add to q4.html file:
  a. div:with text 'Main div is here' with class => "main"
  b. button: with text 'Red'    with id => "no"
  c. button: with text 'Green'  with id => "yes"
  d. change the title to Q4

2. Add these style int he same file q4.html:
  a. id => "no"     the color of the background  =>   Red
  b. id => "yes"    the color of the background  =>   Green

3. Using jQuery add these logic to q4.html in the same file:
  a. when click on the button with id "no"  => cahnge the color of the div with class "main" to red
  b. when click on the button with id "yes" => cahnge the color of the div with class "main" to green
*/


/* Criteria Q4
Out of 5:
1: Change the background-color for #no to red and green for #yes .
1: Use CDN for jequery (the link in the script tag)+ change the title of the html
1: Create two fucntions onClick each one assign to a button.
1: Inside these two fucntons change the color or backgroud-color of .main to red and green.
1: Final answer 100% correct .
*/
