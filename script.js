
    // FUNCTION OF  FACTORIAL
function fact(num){
    if(num == 0 || num == 1) return 1
    else return num * fact(num - 1)
}
console.log(fact(10))

    //   FUNCTION OF FIBONACCI
function fbn(num){
    if(num == 1 || num == 2) return 1
    else if(num == 0)return 0
    else return fbn(num-1) + fbn(num-2)
}
console.log(fbn(0))

    //   PALINDROME FUNCTION
function checkPalindrome(string) {
    // convert string to an array
    const arrayValues = string.split('');
    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();
    // convert array to string
    const reverseString = reverseArrayValues.join('');
    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}
const string = prompt('Enter a string: ');
checkPalindrome(string);

