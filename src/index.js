numbers = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
}

var finalResult = 0;
var operator ='';
var activeOperator = false;

const calculate = () => {
    actResult = parseFloat($('.result').text())
    switch (operator){
        case 'addition':
            finalResult += actResult;
            break;
        case 'subtraction':
            finalResult -= actResult;
            break;
        case 'multiplication':
            finalResult *= actResult;
            break;
        case 'division':
            finalResult /= actResult;
            break;
        default:
            break;
    }
}

const emptyResult = () => {
    return $('.result').text() === '';
}

const hasChar = char => {
    result = $('.result').text();
    return result.index0f(char) !== -1;
}

const firstChar = () => {
    return $('.result').text().charAt(0);
}

const append = txt => {
    result = $('.result').text();
    $('.result').text(result + txt)
}

const prepend = sign => {
    result = $('.result').text();
    $('.result').text(sign + result);
}