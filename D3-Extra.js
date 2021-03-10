/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
Write the code to revert an array.
es:
[1, 3, 5] ==> [5, 3, 1]
*/

x = [1, 3, 5, 6, 8]
console.log(x.reverse())

/* EXERCISE 2
Write the code to get the maximum value in an array.
*/

console.log("max:", Math.max(...x))

/* EXERCISE 3
Write the code to get the minimum value in an array.
*/

console.log("min:", Math.min(...x))

/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/

x.forEach(ele => {
    if (ele % 2 === 0) {
        console.log(ele)
    }
})

/* EXERCISE 5
Write the code to delete even entries from an array.
*/

for (let i = 0; i < x.length; i++) {
    if (x[i] % 2 === 0) {
        x.splice(i, 1)
        i--
    }
}
console.log(x)

/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/

let word = "aertideouqeEffslvn"

let vowls = new RegExp("[aeiouy]", "gi")
word = word.replace(vowls, "")
console.log(word)

/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.
*/
for (ele of x) {
    x[x.indexOf(ele)] = ele + 1
}
console.log(x)
    /* EXERCISE 8 
    Replace all the strings in an array with their length.
    es.: ["strive", "is", "great"] => [6, 2, 5]
    */

z = ["strive", "is", "great"]

for (ele of z) {
    z[z.indexOf(ele)] = ele.length
}
console.log(z)

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/