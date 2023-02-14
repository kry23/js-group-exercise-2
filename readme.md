# Starting repository for group project.

## Exercise starts here.
Start making changes to your *main.js* file.

# Exercise requirement:

Convert JSON object to regular js object.

Pass this object to a promise, that will resolve an array of the objects inside this object's "data" property

Chain the first promise to a second promise that sorts all the elements in that array, and resolves as a result the sorted array.
Save this sorted array for later.

Chain the second promise to a third promise that gets all these elements and calculates a total for this array.

Chain the third promise to a last promise that checks if this sum is even or odd. If it's even, resolve with "true", if it's odd resolve with "false".

We will now move all this functionality to one function, and we run all this functionality inside that one function, and return a promise.

Move this function to a class called Data, to a static function called "process".

Make a promise that will extract all odd numbers from the sorted array. 
Make another promise that will extract all the even numbers of the array.

Make a function that calculates the sum of each array of odd and even numbers, compares them and returns the array that has a greater sum.

Move this functionality in the class Data, to static functions "getOdd", "getEven" and "getBiggestSumArray".


