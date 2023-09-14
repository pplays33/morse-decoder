const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let result = "";


    let prev_index = 0;
    // console.log(expr.length);
    for (let index = 0; index <= expr.length; index++) {
        if (index === 0) {
            continue;
        }
        console.log(index);
        if (index % 10 === 0) {
            // console.log(true);
            // console.log("prev");
            // console.log(prev_index);
            // console.log("curr");
            // console.log(index);
            // console.log("text");
            const currTenChar = expr.slice(prev_index, index);
            // console.log(currTenChar);
            if (currTenChar === '**********') {
                result += " ";
                continue;
            }

            let decodeTenChar = "";
            let prev_indexTwo = 0;
            for (let indexTwo = 2; indexTwo <= currTenChar.length; indexTwo += 2) {
                let curr_duo = currTenChar.slice(prev_indexTwo, indexTwo);

                if (curr_duo === '10') {
                    decodeTenChar += ".";
                }
                if (curr_duo === '11') {
                    decodeTenChar += "-";
                }

                prev_indexTwo = indexTwo;
            }
            // console.log("decodeTenChar");
            // console.log(decodeTenChar);
            prev_index = index;
            result += MORSE_TABLE[decodeTenChar];
            // console.log("result");
            // console.log(result);
        }

    }

    return result.toString();
}


module.exports = {
    decode
}