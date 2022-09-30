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

$('#ac').click(() => {
    $('.result').text('');
})

$('#sign').click(() => {
    if (firstChar() === '-'){
        result = $('.result').text()
        sbstr = result.substring(1, result.length);
        $('.result').text(sbstr);
    } else if (!emptyResult()) {
        prepend('-');
    }
})

$('#percentage').click(() => {
    if (!emptyResult()){
        percentage = parseFloat($('.result').text())/100;
        $('.result').text(percentage);
    }
})

$('operator').click(e => {
    id = e.taget.id;

    if (id === 'equal'){
        calculate();
        $('.result').text(finalResult);
        operator = '';
        activeOperator = false;
    } else {
        operator = id;
        activeOperator = true;
    }
})

$('.number').click(e => {
    id = e.target.id;
    num = numbers[id];

    if (activeOperator){
        finalResult = parseFloat($('.result').text());
        $('.result').text('');
        activeOper= false;
    }

    if (firstChar() === '0'){
        if (hasChar('.')) { append(num); }
    } else { append(num); }
})

$('#comma').click(() => {
    if (emptyResult()) { append('0.'); }
    else if (!hasChar()) {append('.'); }
})

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