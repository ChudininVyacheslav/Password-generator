import { generateLetters, lettersNumbers, lettersSpecialСharacters } from '../js/generator.js'


const iconSixNode = document.getElementById('six');
const iconSevenNode = document.getElementById('seven');
const iconEightNode = document.getElementById('eight');
const numbersNode = document.getElementById('numbers');
const specialCharactersNode = document.getElementById('sp-char');


const buttonNode = document.querySelector('.btn');
const ClassIconCircle = 'fa-regular fa-circle';
const ClassIconCircleMark = 'fa-sharp fa-regular fa-circle-check';





buttonNode.addEventListener('click', () => {
    randomPassword();
});

iconSixNode.addEventListener('click', () => {
    iconSixNode.className = ClassIconCircleMark;
    iconSevenNode.className = iconEightNode.className = ClassIconCircle;
    return iconSixNode.className = ClassIconCircleMark;

});

iconSevenNode.addEventListener('click', () => {
    iconSevenNode.className = ClassIconCircleMark;
    iconSixNode.className = iconEightNode.className = ClassIconCircle;
    return iconSevenNode.className = ClassIconCircleMark;
});

iconEightNode.addEventListener('click', () => {
    iconEightNode.className = ClassIconCircleMark;
    iconSixNode.className = iconSevenNode.className = ClassIconCircle;
    return iconEightNode.className = ClassIconCircleMark;
});

numbersNode.addEventListener('click', () => {
    if (numbersNode.classList.value == ClassIconCircleMark) {
        return numbersNode.className = ClassIconCircle;
    } else {
        specialCharactersNode.className = ClassIconCircle;
        return numbersNode.className = ClassIconCircleMark;
    }
});

specialCharactersNode.addEventListener('click', () => {
    if (specialCharactersNode.classList.value == ClassIconCircleMark) {
        return specialCharactersNode.className = ClassIconCircle;
    } else {
        numbersNode.className = ClassIconCircle;
        return specialCharactersNode.className = ClassIconCircleMark;
    }
});



const randomPassword = function () {
    if (iconSixNode.classList.value == ClassIconCircleMark) {
        if (numbersNode.classList.value == ClassIconCircleMark) {
            lettersNumbers(5);
        } else if (specialCharactersNode.className == ClassIconCircleMark) {
            lettersSpecialСharacters(5);
        } else { 
            generateLetters(5);
        };
    } else if (iconSevenNode.classList.value == ClassIconCircleMark) {
        if (numbersNode.classList.value == ClassIconCircleMark) {
            lettersNumbers(6);
        } else if (specialCharactersNode.className == ClassIconCircleMark) {
            lettersSpecialСharacters(6);
        } else { 
            generateLetters(6);
        };
    } else if (iconEightNode.classList.value == ClassIconCircleMark) {
        if (numbersNode.classList.value == ClassIconCircleMark) {
            lettersNumbers(7);
        } else if (specialCharactersNode.className == ClassIconCircleMark) {
            lettersSpecialСharacters(7);
        } else { 
            generateLetters(7);
        };
    }
};

randomPassword();


