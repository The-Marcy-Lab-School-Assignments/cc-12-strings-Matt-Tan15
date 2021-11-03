//write your code here
const reverseString = (string) => {
    let stringHold = "";
    for (let i = string.length - 1; i >= 0; i--) {
        stringHold += string[i];
    }
    return stringHold;
} 

console.log(reverseString("Matthew"));