const inputNode = document.querySelector('.password-field');

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const alphabetLength = alphabet.length;



export const generateLetters = function (quantity) {
    let result = '';


    for (let i = 0; i <= quantity; i++) {
        if (Math.random() >= 0.5) {
            result += alphabet[Math.floor(Math.random() * alphabetLength)].toUpperCase()
        } else {
            result += alphabet[Math.floor(Math.random() * alphabetLength)];
        }
    };
    inputNode.textContent = result;
};


export const lettersNumbers = function (quantity) {
    let result = '';
    const numbers = '1234567890';
    const numbersLength = numbers.length;

    for (let i = 0; i <= quantity; i++) {
        if (Math.random() <= 0.35) {
            result += alphabet[Math.floor(Math.random() * alphabetLength)].toUpperCase()
        } else if (0.35 < Math.random() <= 0.7) {
            result += alphabet[Math.floor(Math.random() * alphabetLength)];
        } else if (0.7 < Math.random() <= 1) {
            result += numbers[Math.floor(Math.random() * numbersLength)];
        }
    };
    inputNode.textContent = result;
};

export const lettersSpecialСharacters = function (quantity) {
    let result = '';
    const specialСharacters = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
    const specialСharactersLength = specialСharacters.length;

    for (let i = 0; i <= quantity; i++) {
        if (Math.random() <= 0.35) {
            result += alphabet[Math.floor(Math.random() * alphabetLength)].toUpperCase()
        } else if (0.35 < Math.random() <= 0.7) {
            result += alphabet[Math.floor(Math.random() * alphabetLength)];
        } else if (0.7 < Math.random() <= 1) {
            result += specialСharacters[Math.floor(Math.random() * specialСharactersLength)];
        }
    };
    inputNode.textContent = result;
};
