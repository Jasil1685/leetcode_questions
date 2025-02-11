/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
let str= x.toString()
let pali=  str.split('').reverse().join('')
if(pali === str){
    return true
}
else{
    return false
}
}