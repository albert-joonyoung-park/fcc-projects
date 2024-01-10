/**
 * Palindrome Checker
 *
 * This script provides functionality to check if a given input is a palindrome.
 */

// DOM Elements
const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

// Set focus on the input element
userInput.focus();

/**
 * @function checkForPalindrome
 * @description Check if a given input is a palindrome and display the result.
 * @param {string} input - The input string to be checked.
 */
const checkForPalindrome = (input) => {
    const originalInput = input; // Store for later output

    // Handle empty input
    if (input === '') {
        alert('Please input a value');
        return;
    }

    // Remove the previous result
    resultDiv.replaceChildren();

    // Clean and normalize the input
    const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();

    // Check if the cleaned string is a palindrome
    const isPalindrome = lowerCaseStr === [...lowerCaseStr].reverse().join('');

    // Prepare result message
    const resultMsg = `<strong>${originalInput}</strong> ${isPalindrome ? 'is' : 'is not'
        } a palindrome.`;

    // Create and append a paragraph element for the result
    const pTag = document.createElement('p');
    pTag.className = 'user-input';
    pTag.innerHTML = resultMsg;
    resultDiv.appendChild(pTag);

    // Show the result.
    resultDiv.classList.remove('hidden');

    // Set focus on the input element
    userInput.focus();
};

// Event listener for the button click
checkPalindromeBtn.addEventListener('click', () => {
    checkForPalindrome(userInput.value);
    userInput.value = '';
});

// Event listener for the Enter key press
userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        checkForPalindrome(userInput.value);
        userInput.value = '';
    }
});
