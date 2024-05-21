#! /usr/bin/env node 

// Assignment of array

// Q1 : Creat an array named fruits that contain the following string element:
// "apple","banana","mango","orange"

let fruits: string[] = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits , "orignal array"); 

// Q2 : Declare an array named numbers that can contain only number elements and iniialize it with the
// values 10,20,30,40

let numbers: number[] = [10, 20, 30, 40];
console.log(numbers ,"orignal array");

// Q3: Access the third element of the fruits array and assign it to a variable named thirdfruit.

let thirdElement= fruits[2];
console.log(thirdElement, "is a third element in array");

// Q4 : Change the secound element of the numbers array to 25.

numbers[1] = 25;
console.log(numbers, " change secound element ");

// Q5: Add the "grape" element to the end of the fruits array using the method.

fruits.push("grape");
console.log(fruits, "add element to the end");

// Q6: Remove the last element from the fruits array using the method and assign it to a variable
// named last fruit.

let lastFruit = fruits.pop();
console.log(fruits, "remove the last element");

// Q7: Remove the first element from the fruits array using the method and assign it to a variable named first fruit.

let firstFruit = fruits.shift();
console.log(fruits, "remove the first element");

// Q8: Add the element "kiwi" to the begining of the fruits array using the method.

fruits.unshift("kiwi");
console.log(fruits, "add element in the start ");

// Q9: Remove 2 elements from the fruits array starting from index 1 using the method.

let Fruits: string[] = ["Apple", "Banana", "Mango", "Orange"];
Fruits.splice(1, 2);
console.log(Fruits ," Use new array Fruits,remove two element from the start index 1");

// Q10: Insert the elements "pineapple" and "pear" at index 2 of the fruits array using the method.

Fruits.splice(2, 0, "pineapple", "peer");
console.log(Fruits, "insert element by index no 2");

// Q11 : Creat a new array named citrusFruits that contain the first two element of the fruits array using the method .

let citrusFruits = Fruits.slice(0,2);                          // slice method (0,2)for add first 2 element
console.log(citrusFruits, "first two element from the fruits array");

// Q12 : Creat a new array named lastTwoFruits that contain the last two elements of the fruits array using the method .

let lastTwoFruits = Fruits.slice(-2);                            // slice (-2)for last 2 element add
console.log(lastTwoFruits ,"last two element from the fruits array");
