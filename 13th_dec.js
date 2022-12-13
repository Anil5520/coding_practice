// Sum after flattening the array
// var countArray = function (array) {
//     var sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (Array.isArray(array[i])) {
//             sum += countArray(array[i]);
//         } else {
//             sum += array[i];
//         }
//     }
//     return sum;
// }
// console.log(countArray([2, 5, 7, [ 4, 5, 4, 7, [ 5, 7, 5 ], 5 ], 2]));





/*Find product of digits of number using recursion
Given an integer N, find the product of digits of N using recursion.
Write a function that accepts an integer N. The function should return the product of digits of N using recursion.
    Input: 1231
    Output: 6
    Explanation: For 1231, the product of its digits = 1*2*3*1=6
*/
//------ Normal Approach ------//
// function product(number) {
//     number = number.toString()
//     let result
//     for (let i = 0; i < number.length; i++) {
//         result *= number[i]
//     }
//     return result
// }
// console.log(product(11111))

//------ Recursion Approach ------//
// let num = 1231;
// function product(number) {
//     if (number.length == 0)  return 1;
//     return number[0] * product(number.slice(1));
// }
// console.log(product(num.toString()));









/*Sort an Array
Given an array of integers nums, sort the array in ascending order and return it.
You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.
Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
*/
// var sortArray = function(nums) {
//     if(nums.length <= 1){
//         return nums;
//     }
//     let mid = Math.floor(nums.length/2);
//     let left = sortArray(nums.slice(0,mid));
//     let right = sortArray(nums.slice(mid));
//     return merge(nums, left, right);
// };
// function merge(nums, left, right) {
//     let i = 0, j = 0, k = 0;
//     while (i < left.length && j < right.length) {
//         if (left[i] < right[j]) {
//             nums[k] = left[i];
//             i++;
//         } else {
//             nums[k] = right[j];
//             j++;
//         }
//         k++;
//     }
//     while (i < left.length) {
//         nums[k] = left[i];
//         i++;
//         k++;
//     }
//     while (j < right.length) {
//         nums[k] = right[j];
//         j++;
//         k++;
//     }
//     return nums;
// }



/* -------------- Write a Program to find the power of a number -------------- */

//------ Normal Approach ------//
// console.log(Math.pow(2, 3))

// let num = 2, pow = 7          //given
// function power(num, pow) {
//     let result = 1
//     for (let i = 0; i < pow; i++) {
//         result *= num
//     }
//     return result
// }
// console.log(power(num, pow))

//------ Recursion Approach ------//
// function power(num, pow) {
//     if (pow == 0) { return 1 }
//     return num * power(num, pow - 1)
// }
// console.log(power(2, 7))
