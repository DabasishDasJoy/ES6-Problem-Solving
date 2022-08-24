/**
 *Write an arrow function it will do the following:
     1. It will take two array inputs.
     2. Combine the two arrays and assign them in a new array.
     3. Find the maximum number from the new array and return the result. 
 */

const maxNumber = (arr1, arr2) => {
    const newArr = [...arr1, ...arr2];
    
    return Math.max(...newArr);
};

const arr1 = [2, 4, 5];
const arr2 = [3, 9, 7];

console.log(maxNumber(arr1, arr2));