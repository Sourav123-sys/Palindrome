


const isPalindrome = (input) => {
    
    let cleanedInput = input.replace(/[^A-Z0-9]/ig, "").toLowerCase();

    let reversedInput = [...cleanedInput ].reverse().join('');

    return cleanedInput === reversedInput;
}
 console.log(isPalindrome("level")); 
 console.log(isPalindrome("hello")); 
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("civic")); 
console.log(isPalindrome("Madam")); 