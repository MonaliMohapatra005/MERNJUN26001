# QLITH MERN Internship Batch - JUN 2026

# What is an Array?

An **Array** in JavaScript is an ordered collection of multiple values stored in a single variable.

Arrays are used when you need to store multiple related values together.

```
const fruits= ["Apple","Banana","Orange"];
```

---

# Characteristics of Arrays

### 1. Ordered Collection

Elements are stored in a fixed order.

```
constcolors= ["Red","Green","Blue"];

console.log(colors[0]);// Red
console.log(colors[2]);// Blue
```

---

### 2. Zero Indexed

Index always starts from **0**.

| Index | Value |
| --- | --- |
| 0 | Apple |
| 1 | Banana |
| 2 | Orange |

```
constfruits= ["Apple","Banana","Orange"];

console.log(fruits[0]);// Apple
console.log(fruits[1]);// Banana
```

---

### 3. Dynamic (Resizable)

Arrays can grow or shrink.

```
constarr= [1,2];

arr.push(3);
arr.push(4);

console.log(arr);
// [1,2,3,4]
```

---

### 4. Mixed Data Types

Arrays can store different data types.

```
constmixed= [
100,
"Hello",
true,
null,
    {name:"John"},
    [10,20]
];
```

---

### 5. Object Nature

Arrays are actually objects.

```
constarr= [10,20,30];

console.log(typeofarr);// object
```

---

# Creating Arrays

## 1. Array Literal (Recommended)

```
constfruits= ["Apple","Banana","Orange"];

constnumbers= [10,20,30];

constmixed= [1,"Hello",true];
```

---

## 2. Array Constructor

```
constarr=newArray();

constcolors=newArray("Red","Green","Blue");
```

---

# Array Property

## length

Returns the total number of elements.

```
constfruits= ["Apple","Banana","Orange"];

console.log(fruits.length);

// 3
```

---

# Basic Array Methods

---

# 1. push()

Adds element(s) at the end.

### Syntax

```
array.push(value1,value2,...)
```

Example

```
constfruits= ["Apple","Banana"];

fruits.push("Orange");

console.log(fruits);

// ["Apple","Banana","Orange"]
```

---

# 2. pop()

Removes last element.

### Syntax

```
array.pop()
```

Example

```
constfruits= ["Apple","Banana","Orange"];

fruits.pop();

console.log(fruits);

// ["Apple","Banana"]
```

---

# 3. unshift()

Adds element(s) at the beginning.

```
constfruits= ["Banana","Orange"];

fruits.unshift("Apple");

console.log(fruits);

// ["Apple","Banana","Orange"]
```

---

# 4. shift()

Removes first element.

```
constfruits= ["Apple","Banana","Orange"];

fruits.shift();

console.log(fruits);

// ["Banana","Orange"]
```

---

# 5. slice()

Returns a portion of an array.

Original array remains unchanged.

### Syntax

```
array.slice(start,end)
```

Example

```
constnumbers= [10,20,30,40,50];

constresult=numbers.slice(1,4);

console.log(result);

// [20,30,40]

console.log(numbers);

// [10,20,30,40,50]
```

---

# 6. splice()

Adds, removes, or replaces elements.

Original array changes.

### Syntax

```
array.splice(start,deleteCount,item1,item2...)
```

### Remove

```
constarr= [10,20,30,40];

arr.splice(1,2);

console.log(arr);

// [10,40]
```

---

### Add

```
constarr= [10,20,40];

arr.splice(2,0,30);

console.log(arr);

// [10,20,30,40]
```

---

### Replace

```
constarr= [10,20,30];

arr.splice(1,1,100);

console.log(arr);

// [10,100,30]
```

---

# 7. concat()

Joins arrays.

```
constarr1= [1,2];

constarr2= [3,4];

constresult=arr1.concat(arr2);

console.log(result);

// [1,2,3,4]
```

---

# 8. toString()

Converts array into string.

```
constfruits= ["Apple","Banana","Orange"];

console.log(fruits.toString());

// Apple,Banana,Orange
```

---

# 9. join()

Works like toString() but allows separator.

```
constfruits= ["Apple","Banana","Orange"];

console.log(fruits.join(" - "));

// Apple - Banana - Orange
```

---

# 10. fill()

Fills all elements with same value.

```
constarr= [1,2,3,4];

arr.fill(0);

console.log(arr);

// [0,0,0,0]
```

---

# 11. includes()

Checks if value exists.

```
constfruits= ["Apple","Banana"];

console.log(fruits.includes("Banana"));

// true
```

---

# 12. indexOf()

Returns first index.

```
constarr= [10,20,30];

console.log(arr.indexOf(20));

// 1
```

---

# 13. lastIndexOf()

Returns last occurrence.

```
constarr= [10,20,30,20];

console.log(arr.lastIndexOf(20));

// 3
```

---

# 14. reverse()

Reverses array.

```
constarr= [1,2,3];

arr.reverse();

console.log(arr);

// [3,2,1]
```

---

# 15. sort()

Sorts array.

```
constarr= [5,1,4,2];

arr.sort();

console.log(arr);

// [1,2,4,5]
```

For numbers (ascending):

```
constarr= [50,10,8,100];

arr.sort((a,b)=>a-b);

console.log(arr);

// [8,10,50,100]
```

---

# JavaScript Functions

A **function** is a reusable block of code that performs a specific task.

---

# Syntax

```
functionfunctionName(){
// code
}
```

---

# Types of Functions

---

## 1. Function Declaration

```
function greet(){
console.log("Hello");
}

greet();
```

---

## 2. Function Expression

```
const greet=function(){
console.log("Hello");
};

greet();
```

---

## 3. Arrow Function (ES6)

```
constgreet= () =>{
console.log("Hello");
};

greet();
```

Single line

```
constadd= (a,b)=>a+b;

console.log(add(5,3));

// 8
```

---

## 4. Anonymous Function

Function without a name.

```
function(){
console.log("Hello");
}
```

---

## 5. Immediately Invoked Function (IIFE)

Runs immediately after creation.

```
(function(){
console.log("Executed");
})();
```

---

## 6. Callback Function

Passed as an argument.

```
functiongreet(name){
console.log("Hello",name);
}

functionprocess(callback){
callback("John");
}

process(greet);
```

---

## 7. Higher Order Function

A function that takes another function as an argument or returns a function.

```
functioncalculate(a,b,operation){
returnoperation(a,b);
}

console.log(
calculate(10,20,(x,y)=>x+y)
);

//30
```

---

---

# Special Array Methods (Most Important)

These are the methods you'll use most often in modern JavaScript.

---

# 1. forEach()

Loops through every element.

```
constnumbers= [10,20,30];

numbers.forEach((num,index)=>{
console.log(index,num);
});
```

Output

```
0 10
1 20
2 30
```

---

# 2. map()

Creates a new array by transforming each element.

```
constnumbers= [1,2,3];

constsquare=numbers.map(num=>num*num);

console.log(square);

// [1,4,9]
```

---

# 3. filter()

Returns elements that satisfy a condition.

```
constnumbers= [10,15,20,25,30];

consteven=numbers.filter(num=>num%2==0);

console.log(even);

// [10,20,30]
```

---

# 4. find()

Returns the first matching element.

```
constnumbers= [10,15,20,25];

constresult=numbers.find(num=>num>18);

console.log(result);

//20
```

---

# 5. findIndex()

Returns index of first matching element.

```
constnumbers= [10,20,30];

console.log(numbers.findIndex(num=>num==20));

//1
```

---

# 6. some()

Returns `true` if at least one element satisfies the condition.

```
constnumbers= [1,3,5,6];

console.log(numbers.some(num=>num%2==0));

//true
```

---

# 7. every()

Returns `true` if all elements satisfy the condition.

```
constnumbers= [2,4,6];

console.log(numbers.every(num=>num%2==0));

//true
```

---

# 8. reduce()

Reduces array to a single value.

```
constnumbers= [10,20,30];

constsum=numbers.reduce((total,current)=>{

returntotal+current;

},0);

console.log(sum);

//60
```

---

# 9. flat()

Flattens nested arrays.

```
constarr= [1,[2,[3]],4];

console.log(arr.flat(2));

// [1,2,3,4]
```