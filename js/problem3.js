/*
    write an an arrow function. It will do the following:
    1. Square each array elements
    2. Calculate the sum of the squared elements
    3. Return the average of the sum of the squared elements.
 */

const res = (nums) => {
    let sum = 0;
    for (const num of nums) {
        sum = sum + Math.pow(num, 2);
    }

    return sum / nums.length;
};

const nums = [4, 5, 2, 6, 7, 9];
console.log(res(nums));