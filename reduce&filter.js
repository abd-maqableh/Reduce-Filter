// console.log('Here is : ' 'Reduce & Filter') 

//Using Reduce 1 -5
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];



/*
1
Using the varabile persons
Create a function called avgAge
that accept an array
and return average age of this array

Ex: avgAge(persons) => 41.2


*/
  function avgAge(arr) {


    var result = arr.reduce(function (acc,elem) {

      return acc+elem.age;
    },0)

    return result/arr.length
  }

/*
2
Using the varabile persons
Create a function called longestName
that accept an array
and return the longerst full name

Ex: longestName(persons) => 'Soso Al-Amora'
*/
function longestName(persons) {
  var t;
  var maxLength = -Infinity ;
 
  var result =persons.reduce(function(max, elem){
    t= elem.name.first.length + elem.name.last.length ;
    if (t>maxLength) {
      maxLength = t ;
      max = elem.name.first+" "+elem.name.last;
    }
    return max;
  },'');
 
 return result;
 }
 console.log(longestName(persons));
/*
3
Create a function called maxNumber
that accept an array
and return max number

Ex: maxNumber([1,2,4,9]) => 9
*/
 function maxNumber(arr) {
   var result = arr.reduce(function (index,elemant) {
      if (elemant>index) {
        index=elemant
      }
     return index
   },0)
   return result
 }

/*
4
Create a function called repeatChar
that accept a string and char
and return number times that this char repeat inside the string

Ex: repeatChar("hello world",w) => 1
*/
function repeatChar(str,char) {
  var x = char;
  var splitStr=[]
  var splitStr=str.split('')
  var result= splitStr.reduce(function (repeat,element) {
    if (x===element) {
      repeat++;
    }

    return repeat;

    
  },0)
  return result;
}

/*
5
Create a function called usAndNumberBeetweenUs
that accept two numbers
and return array of these two numbers and the numbers between them

Ex: usAndNumberBeetweenUs(2,5) => [2,3,4,5]
*/







//Filter 6 - 11
/*
6
Create a function called evenOnly
that accept an array
and return an array of even number only

Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/
function evenOnly(arr) {
   var result = arr.filter(index=>index%2===0)
   return result;

  
}

/*
7
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4

Ex: multiFour([1,8,6,4]) => [8,4]
*/
function multiFour(arr) {
  var result = arr.filter(index=>index%4===0)
  return result;

 
}


/*
8
**this question not that easy mybe you will need to use two function inside each other

Create a function called containChar
that accept an array of string
and return an array of these string that contain this char

Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/
function containChar(arr,char) {
//  debugger
  var result = arr.filter( element=>
    {
      return element.toLowerCase().indexOf(char.toLowerCase()) !==-1
    }

    
  )
  return result;

 
}

/*
9
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index


Ex: evenIndexOddLength(strings) => ["madrasa"]
*/
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
function  evenIndexOddLength(strings) {
  var result = strings.filter((elem,index)=>(elem.length%2!==0 && index%2===0)
   )
    
    
    
  return result
}


/*
10
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number

Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/
function olderThan(person,number) {
  var result=person.filter(index=> index.age>number)
  return result
}
/*
11
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/
function shorterThan(strings,number) {
  var result=strings.filter((index,value)=>index.length<number)

  return result
}

// if you finish the exercises review the material of the week and help your classmate
