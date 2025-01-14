console.log("I'm not a Developer");

class Engine {
  constructors(type) {
    this.type = type;
  }
}
class Car {
  constructor(make) {
    this.make = make;
  }
  getMake() {
    return this.make;
  }
}
let car1 = new Car("Toyota");
let car2 = new Car("Honda");
console.log(car1.getMake(), car2.getMake());
/* 
		Data structures
				- Used to organize and manage data effectively

			  - Array: A collection of Multiple data values in a single variable
				-[] array literals
				- index/subscript
				      - refers to the position of an element in the data
							- in JS, the array indeces are zero-based (meaning the first element starts is at 0)
							
		mutator methods
				- these are the functions that 'mutate' or change an array after they are created
				- these methods manipulate the original array performing various tasks such as adding or removing elements
				- push()
				    - adds a new element to the end of an array
					  - stacks
						   - Last in First out data structures (LIFO)
							 -pile Plates
						- syntax: arrayName.push('element');
				- pop()
				    - removes the last element from an array and returns it
						- syntax: arrayName.pop();
				- shift()
				    - removes the first element from an array and returns it
						-queue - First In First Out(FIFO)
						- syntax: arrayName.shift();
				-splice()
				    - removes elements from an array and returns them as an array
				
				-sort()
				 		- rearranges the elements in alphanumeric order
						- syntax: arrayName.sort();
				- reverse()
				     - reverses the order of the elements in an array
						 - syntax: arrayName.reverse();
        - Object: A collection of key-value pairs in a single variable

		Non-mutators Method
		  - these are the functions that do not 'change' an array but return a new array after they are created
			  - join()
				- concat()
				- slice()
				- map()
				- filter()
				- reduce()
				- reduceRight()

*/
//- syntax: arrayName.splice(index, deleteCount,items);
// let beatles = ["John", "Doe", "George", "Greg"];
// console.log(beatles);
// let splice = beatles.splice(1, 2, "foo");

// console.log(`Spliced array: ${splice}`);
// console.log(beatles);
// console.log("Current array: ");
// console.log(beatles);

// let beatlesLength = beatles.push("Ringo");
// console.log(beatlesLength);
// console.log("Update array: ");
// console.log(beatles);

// // adding multiple elements to the array

// beatles.push("Paul", "Pete");
// console.log(beatles);

// // pop
// let removedMembers = beatles.pop();
// console.log(removedMembers);
// console.log("Mutated array");
// console.log(removedMembers);

// // shift elements
// let anotherMembers = beatles.shift();
// console.log(anotherMembers);
// console.log("Mutated array");
// console.log(beatles);

// splice

// sort
// let sort = beatles.sort();
// console.log(sort);
// console.log("Sorted array");
// console.log(beatles);

// // reverse
// let reverse = beatles.reverse();
// console.log(reverse);
// console.log("Reversed array");
// console.log(beatles);

// //non-mutator Methods

let countries = ["US", "PH", "CAN", "JP", "TH"];

// // indexOf()
// /*
// 	indexOf - returns the index number of the first matching element found in the array
// 	-if no match was found, returns -1
// 	-the search proccess will done from the first element proceeding to the last element
// 	- syntax: arrayName.indexOf(searchElement);
// 	- syntax: arrayName.indexOf(searchElement, fromIndex);
// */
console.log(countries);
let firstIndex = countries.indexOf("TH");
console.log("First: " + firstIndex);

let invalidCountry = countries.indexOf("BR");
console.log("Invalid country: " + invalidCountry);

// // lastIndexOf()

// /*
//   lastIndexOf - returns the index number of the last matching element found in the array
//   - if no match was found, returns -1
//   - the search process will done from the last element proceeding to the first element
//   - syntax: arrayName.lastIndexOf(searchElement);
// 	- syntax: arrayName.lastIndexOf(searchElement, fromIndex);

// */
// // Getting the index number of the last matching element found in the array
let lastIndex = countries.lastIndexOf("PH");
console.log("Last: " + lastIndex);

let lastIndexStart = countries.lastIndexOf("PH", 6);
console.log("Last: " + lastIndexStart);

// let invalidLastIndex = countries.lastIndexOf("BR");
// console.log("Invalid last index: " + invalidLastIndex);

// //slice()
// /*
// 		-portion/slices element from an array and returns a new array
// 		- syntax: arrayName.slice(beginIndex, endIndex);
// 		- syntax: arrayName.slice(beginIndex);

// */

// // slicing off elements from a specified index to the last element
console.log(countries);
let slice = countries.slice(1);
console.log(`Sliced array: ${slice}`);

// // slicing off elements from the to a specified index

let sliceStart = countries.slice(1, 2);
console.log(`Sliced array: ${sliceStart}`);

// // toString
// /*

// 		toString() - converts an array or object into a string
// 		- syntax: arrayName.toString();

// */

// let stringArray = countries.toString();
// console.log(`String array: ${stringArray}`);

// // concat()
// /*
// 	-combine two arrays and returns combine result
// 	- syntax: arrayA.concat(arrayB);
// 	- syntax: arrayA.concat(elementB);

// */

let arrayA = ["Apple", "Banana"];
let arrayB = ["Cherry", "Dragon Fruit"];
let arrayC = ["Orange", "Grapes"];

let combinedArray = arrayA.concat(arrayB);
console.log(`Combined array: ${combinedArray}`);

console.log(combinedArray);

// let combinedArray1 = arrayA.concat(arrayB, arrayC);
// console.log(`Combined array: ${combinedArray1}`);

// // combining arrays with elements
// let combinedArray2 = arrayA.concat("Element");
// console.log(`Combined array: ${combinedArray2}`);

// // join()
// /*
//   - returns an array as a string separated by specified separator
//   - syntax: arrayName.join(separator);
//   - syntax: arrayName.join();

// */

// let user = ["Nicole", "John", "Car", "Bob"];
// console.log(`User: ${user}`);
// console.log(user.join());
// console.log(user.join(" "));

// // Iteration Methods
// /*
//   - iteration method are loops designed to perform repetitive
// 	task on array
// 	    -iteration method loops overall items in an array
// 			-useful for manipulating array data resulting in complex tasks
// 			- arrays iteration method normally works with a function
// 			supplied as an arguments
// */

// /*
//   forEach() - executes a provided function once for each element in an array
// 	-similar to a for loop that iterates on each array element
// 	- for each item in the array, the anonymous function
// 	passed in the forEach()method will be run
// 				- the anonymous function is able to received the
// 				current item being iterated or loop over by assigning parameters
// 				-variable names for arrays are normally writted in the plural form
// 				- syntax: arrayName.forEach(function(element){});
//   - syntax: arrayName.forEach(function(currentValue, index, array){});

// */

// // combinedArray.forEach(function (tasks) {
// //   console.log(tasks);
// // });

// // using forEach with conditional statements
// let filteredTasks = [];

// /*

// 	- it's a good practice to print the current element in the console when working with array iteration methods to have an idea of what information is being worked for each iteration of the loop
// 	- creating a separate variable to store results of array iteration methods are also good practice to avoid confusion
// 	by modifying the original array

// */
// console.log("================================");
// combinedArray.forEach(function (tasks) {
//   console.log(tasks);

//   // if the element/string's length is greater than 10 characters
//   if (tasks.length > 10) {
//     // add the element to the filtered array
//     filteredTasks.push(tasks);
//   }
// });

// console.log(`Results of filtered tasks: ${filteredTasks}`);

// // map
// /*
//  -iterates on each element and return new array with different values depending on the result of the function operation

//  -this is useful for performing tasks where mutating/changing the element are required
//  -unlike the forEach method, the map method requires the use of a 'return' statement in order to create another array with the perform operation
//  - syntax: arrayName.map(function(element){ return expression; });
// */
// let numbers = [1, 2, 3, 4, 5];
// let numbersMap = numbers.map(function (number) {
//   return number * number;
// });
// console.log(`Original array: ${numbers}`);
// console.log(`Results of numbers multiplied by themselves: ${numbersMap}`);

// map() vs forEach()

// let numbersForEach = numbers.forEach(function (number) {
//   let result = number * number;
//   return result;
// });
// console.log("forEach results: ", numbersForEach);

// // forEach(), loop overall items in the array as does map() but forEach(), does not return a new array

// // every()
// /*
// 	-check if all element in an array meet the given condition
// 	- this is useful for validating data stored in arrays especially when dealing with large amounts of data
// 	-returns true value if all elements meet the given condition
// 	and false otherwise
// 	- syntax: const result = arrayName.every(function(element){ return condition; });

// */

// let numbersEvery = numbers.every(function (number) {
//   return number < 3;
// });
// console.log(`Is every number in the array greater than 3? ${numbersEvery}`);

// // some()
// /*

//   - check if at least one element in an array meets the given condition
//   - this is useful for validating data stored in arrays especially when dealing with large amounts of data
//   - returns true value if at least one element meets the given condition
//   and false otherwise
//   - syntax: const result = arrayName.some(function(element){ return condition; });

// */
// let someValid = numbers.some(function (number) {
//   return number < 3;
// });
// console.log(`Result of some method:  ${someValid}`);

// // combining the return from the every/ some  method may used in other statements to perform consecutive results
// if (someValid) {
//   console.log("At least one number in the array is less than 3");
// }

// // filter()
// /*
//   - returns new array that contains elements which meets the given condition
// 	-return an empty array if no elements are found
// 	-useful for filtering arrays elements with the given condition and shorten the syntax compared to using other arrays iteration methods
//   - syntax: const result = arrayName.filter(function(element){ return condition; });

// */

// let filteredNumbers = numbers.filter(function (number) {
//   return number > 2;
// });

// console.log(`Original array: ${numbers}`);

// console.log(`Filtered numbers greater than 2: ${filteredNumbers}`);

// // No elements found

// let filteredEmpty = numbers.filter(function (number) {
//   return (number = 0);
// });

// console.log(`Filtered empty array: ${filteredEmpty}`);

// let filterNumbers = [];

// numbers.forEach(function (number) {
//   // console.log(number);
//   if (number > 2) {
//     filterNumbers.push(number);
//   }
// });

// console.log(`Filtered number: ${filterNumbers}`);

// // includes()

// /*
// 		- includes() method checks if the argument passed can be found in the array
// 				- returns Boolean which can be saved in a variable
// 				    - returns true if the argument is found in the array
// 						-returns false if its not
// 						- syntax: arrayName.includes(searchElement);
// */

// let products = ["Mouse", "Monitor", "Keyboard", "AVR"];

// let productFound1 = products.includes("Mouse");
// console.log(productFound1);

// let productFound2 = products.includes("Headset");
// console.log(productFound2);

// /*

// -method can be 'chained' using them one after another
// - the result of the method is used on the second method until all 'chained' methods have been resolved
// -- how chaining resolves in our example:
// 	1. the 'product' elements will be converted into all lowercase letters
// 	2.the resulting lowercases string is used in the 'includes' method
// */

// let filteredProducts = products
//   .map((product) => product.toLowerCase())
//   .filter((product) => product.includes("a"));

// console.log(filteredProducts);

// let filteredProduct = products.filter(function (product) {
//   return product.toLowerCase().includes("a");
// });
// console.log(filteredProduct.map((product) => product.toLowerCase()));

// // reduce()
// /*
// 		-valuates the elements from left to right and returns/reduces the array into a single value
// 		- syntax: const result = arrayName.reduce(function(accumulator, currentValue, currentIndex, array){ return accumulator + currentValue; }, initialValue);

// 		- the 'accumulator' parameter  in the function stores the result to every iteration of the loop
// 		- the 'currentValue' is the current/ next element in the array that is evaluated in each iteration of the loop
// 		-how the reduces method works
// 		   	1. the first/ result element in the array is stored in the accumulator parameter
// 				2. the second/ result element in the array is stored in the currentValue parameter
// 				3. an operation is performed on the two elements
// 				4. the loop repeats step 1-3 until all elements been worked on

// 	*/

// let sumNumbers = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );

// let iteration = 0;
// let reduce = numbers.reduce(function (x, y) {
//   // used to track the current iteration count and accumulator / currentValue data
//   console.warn("Current iteration: " + ++iteration);
//   console.log("accumulator: " + x);
//   console.log("currentValue: " + y);

//   // the operation to reduce the array into a single value
//   return x + y;
// });
// console.log(`Current iteration: ${reduce}`);

// let list = ["Hello", "Again", "Love"];

// let result = list.reduce(function (x, y) {
//   return x + " " + y;
// });

// console.log(`Result of reduce ${result}`); // 'HelloAgainLove'
