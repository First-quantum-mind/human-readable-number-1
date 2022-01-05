module.exports = function toReadable (num) {
    let arrNum = String(num).split('');
    let lengthArrNum = arrNum.length;

    let num_0_19 = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    }

    let num_20_99 = {
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    }

    if (num >= 0 && num <= 19) {
        return funcOne();
    } else if (lengthArrNum == 2) {
        return funcTwo();
    } else if (lengthArrNum === 3) {
        return funcThree();

    }

    function funcOne(number = num) {
        return num_0_19[number];
    }

    function funcTwo(number = num) {
        let arrNum = String(number).split('');
        if (Number(arrNum[1]) === 0) {
            return num_20_99[number];
        }
        let currentNum = arrNum[0] + 0;
        return (num_20_99[currentNum] + ' ' + num_0_19[arrNum[1]]);
    }

    function funcThree() {
        let localNumTwo = Number(arrNum[1] + arrNum[2]);

        if (Number(arrNum[1]) === 0 && Number(arrNum[2]) === 0) {
            return `${num_0_19[arrNum[0]]} hundred`
        }

        else if (Number(arrNum[1]) === 0 ) {
            return `${num_0_19[arrNum[0]]} hundred ${funcOne(Number(arrNum[2]))}`
        }

        else if(localNumTwo >= 10 && localNumTwo <= 19) {
            return `${num_0_19[arrNum[0]]} hundred ${num_0_19[localNumTwo]}`
        }

        else {
            return `${num_0_19[arrNum[0]]} hundred ${funcTwo( localNumTwo )}`
        }
    }
}
