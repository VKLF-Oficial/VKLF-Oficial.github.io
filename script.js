const letterToNumber = {
    'A': 573, 'B': 289, 'C': 904, 'D': 126, 'E': 735, 'F': 418, 'G': 652, 'H': 347, 'I': 189, 'J': 502,
    'K': 876, 'L': 431, 'M': 765, 'N': 294, 'Ñ' : 123, 'O': 617, 'P': 853, 'Q': 920, 'R': 105, 'S': 369, 'T': 724,
    'U': 538, 'V': 241, 'W': 986, 'X': 153, 'Y': 807, 'Z': 462
};

const numberToLetter = Object.fromEntries(Object.entries(letterToNumber).map(([k, v]) => [v, k]));

function convertTextToNumbers() {
    const text = document.getElementById('text-input').value.toUpperCase();
    const result = text.split('').map(char => letterToNumber[char] || char).join(' ');
    document.getElementById('number-output').value = result;
}

function convertNumbersToText() {
    const numbers = document.getElementById('number-input').value.split(' ');
    const result = numbers.map(num => numberToLetter[parseInt(num)] || ' ').join('');
    document.getElementById('text-output').value = result;
}
