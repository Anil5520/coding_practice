//RETURN THE COUNT OF CONSONANT AND VOWEL IN GIVEN STRING
// let str = "anilMahto"
// function count(str) {
//     let vowel = "aeiouAEIOU";
//     let vowelCount = 0
//     let consonant = 0

//     for (let i = 0; i < str.length; i++) {
//         let temp = str[i].charCodeAt(0)
//         if (vowel.includes(str[i])) {
//             vowelCount++
//             continue;
//         }
//         else if ((temp < 65 || temp > 122) && (temp < 97 || temp > 90)) {
//             continue;
//         } else {
//             consonant++
//         }
//     }
//     return {
//         vowelCount,
//         consonant
//     }
// }
// console.log(count(str));
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let str = "anilMahto"
// let vowel = "aeiouAEIOU"
// vowel = vowel.split("")
// let vCount = 0
// let cCount = 0

// function counterFreq(str) {
//     for (let i of str) {
//         if ((/^[a-zA-z]+$/.test(i))) {
//             if (vowel.indexOf(i) !== -1) {
//                 vCount++
//             } else {
//                 cCount++
//             }
//         }
//     }
//     return [vCount, cCount]
// }
// console.log(counterFreq(str))






// reverse a string 
// function reverse(str) {
//     str = str.split("");
//     let i = 0;
//     let j = str.length - 1;
//     while (i < j) {
//         [str[i], str[j]] = [str[j], str[i]];
//         i++;
//         j--;
//     }
//     return str.join('');
// }
// //++++++++++++++++++++++++++++++++++++++
// let str = "PushpakKumar"
// function reverseStr(str) {
//     if (str.length <= 1) return str;
//     return reverseStr(str.substring(1)) + str[0];
// }
// console.log(reverseStr(str));
// //+++++++++++++++++++++++++++++++++++++++
// function reverse(str) {
//     let result = ""
//     for (let i = str.length - 1; i >= 0; i--) {
//         result = result + str[i];
//     }
//     return result;
// }
// console.log(reverse("Hello World"));








//Given a set of strings, find the longest common prefix.
// Input: {"geeksforgeeks", "geeks", "geek", "geezer"}
// Output: "gee"

// Input: {"apple", "ape", "april"}
// Output: "ap"
// let str = ["apple", "ape", "april"];
// let output = ""
// function commonPrefix(str) {
//     str.sort((a, b) => a.localeCompare(b));
//     for (let i = 0; i < str[0].length; i++) {
//         if (str[0][i] == str[str.length - 1][i]) {
//             output += str[0][i];
//         } else {
//             break;
//         }
//     }
//     return output;
// }

// console.log(commonPrefix(str));








//Given a string, the task is to reverse the order of the words in the given string. 
// Examples:
// Input: s = “geeks quiz practice code” 
// Output: s = “code practice quiz geeks”

// Input: s = “i love programming very much” 
// Output: s = “much very programming love i”

// let str = "i love programming very much";
// str = str.split(' ');
// function reverseWord(str) {
//     if (str.length <= 1) return str;
//     return reverseWord(str.slice(1)) + ' ' + str[0];
// }
// console.log(reverseWord(str));





// Find the Index of the First Occurrence in a String
// let haystack = "sadbutsad", needle = "sad"

// function firstIndex(haystack, needle) {
//     for (let i = 0; i <= haystack.length - needle.length; i++) {
//         if (needle === haystack.substring(i, i + needle.length)) {
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(firstIndex(haystack, needle));







/* get the frequency count of each character and sort it by its value.... after that print all the letters and its value saperated by ' - '   
input-str = "My Name Is Ashish"          
output: 
s - 3
h - 2
M - 1
y - 1
N - 1
a - 1
m - 1
e - 1
I - 1
A - 1
i - 1
*/
// function stringWithSpace(str) {
//     let map = new Map()
//     for (let i = 0; i < str.length; i++) {
//         if (!str[i].match(/^[a-zA-Z]$/)) continue
//         map.set(str[i], map.get(str[i]) + 1 || 1)
//     }
//     let arr = []
//     for (let item of map) {
//         arr.push(item)
//     }
//     //Sort the element array by its 2nd element
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length - 1; j++) {
//             if (arr[j][1] < arr[j + 1][1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//             }
//         }
//     }
//     arr = arr.join(' ').split(' ')
//     for (let j = 0; j < arr.length; j++) {
//         console.log(arr[j].replace(',', ' - '))
//     }
// }
// const str = "My Name Is Ashish"
// stringWithSpace(str)



/* print all the fibonnacci series numbers which are less than given input...  
input - 30 
output- 0,1,1,2,3,5,8,13,21
*/
// function fibbonacci(maxValue) {
//     let arr = [0, 1];
//     let a = 0, b = 1, c;
//     while (b < maxValue) {
//         c = a + b;
//         if (c > maxValue) break;
//         a = b;
//         b = c;
//         arr.push(b);
//     }
//     return arr.join();
// }
// console.log(fibbonacci(30));
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let arr = [0,1]
// let a = 0;
// let b = 1;
// function fibbonacci(num){
//     let c = a + b;
//     if(num < 1) return 0;
//     if(num < 2 || c>num) return arr
//     arr.push(c)
//     a = b
//     b= c
//     return fibbonacci(num-1)

// }

// (fibbonacci(30))
// console.log(arr)






//Anagram count
//let str = 'aabaabaa', s2 = 'aaba';
// function anagramCount(str, s2) {
//     let map = new Map();
//     for (let i = 0; i < s2.length; i++) {
//         map.set(s2[i], map.get(s2[i]) + 1 || 1);
//     }
//     let i = 0, j = 0, count = map.size, ans = 0;
//     while (j < str.length) {
//         if (map.get(str[j]) !== undefined) {
//             map.set(str[j], map.get(str[j]) - 1);
//             if (map.get(str[j]) === 0) {
//                 count--;
//             }
//         }
//         if (j - i + 1 < s2.length) {
//             j++;
//         } else if (j - i + 1 === s2.length) {
//             if (count === 0) {
//                 ans++;
//             }
//             if (map.get(str[j]) !== undefined) {
//                 map.set(str[j], map.get(str[j]) + 1);
//                 if (map.get(str[j]) === 1) {
//                     count++
//                 }
//             }
//             i++;
//             j++;
//         }
//     }
//     return ans;
// }
// console.log(anagramCount(str, s2))






let a = "computer", b = [1, 3, 5, 6, 7, 4, 2, 8]
// output = c1r8o3e2m5t4p6u7

function sol(a, b) {
    let i = 0, j = a.length - 1, p = 0, q = b.length - 1;
    let output = '';
    while (i < j && p < q) {
        output += a[i] + b[p] + a[j] + b[q];
        i++;
        j--;
        p++;
        q--;
    }
    return output;
}
console.log(sol(a, b));