const cipherText = 'YRMV PFL VMVI YRU R UIVRD EVF KYRK PFL NVIV JF JLIV NRJ IVRC NYRK ZW PFL NVIV LERSCV KF NRBV WIFD KYRK UIVRD YFN NFLCU PFL BEFN KYV UZWWVIVETV SVKNVVE KYV UIVRD NFICU REU KYV IVRC NFICU';


let cipher = cipherText.replaceAll(' ', '').split('');
let alphabet = Array(26).fill(0);

function encryptChar(c, n) {
    return (((c.charCodeAt(0) - 65) + n) % 26) + 65 ;
}

function countLetters(tab) {
    for (letter of cipher) {
	alphabet[letter.charCodeAt()-65] += 1;
    }
}

// Etaoin shrdlu
// https://en.wikipedia.org/wiki/Etaoin_shrdlu
let etaoinshrdlu = ['E', 'T', 'A', 'O', 'I', 'N', 'S', 'H', 'R', 'D', 'L', 'U'];
countLetters(alphabet);
console.log(`Frequency : ${alphabet}`);

let freqLetterCode = alphabet.indexOf(Math.max(...alphabet));
console.log(`Most frequent letter in cypher text : ${String.fromCharCode(freqLetterCode + 65)}`);

let keys = Array(etaoinshrdlu.length).fill(0);
for (let i = 0; i < etaoinshrdlu.length; i++) {
    keys[i] = freqLetterCode - (etaoinshrdlu[i].charCodeAt(0) - 65);
}
console.log(`Probable keys = ${keys}`);

for (var i = 0; i < keys.length; i++) {
    let mapMethod = cipher.map(function(letter) {
    String.fromCharCode(encryptChar(letter, 26 - keys[i]));
    });
    // console.log(mapMethod);
}


function decypher(tab, key) {
    let res = '';
	for (letter of tab) {
	    res += String.fromCharCode(encryptChar(letter, 26 - key));
	}
    return res;
}

function listDecipher(tab, keys) {
    for (key of keys) {
	console.log(`Shift of ${key} : ${decypher(tab, key)}`);
    }
}

console.log(listDecipher(cipher, keys));
// console.log(`Decyphered : ${decypher(cipher, keys[0])}`);
// console.log(`Deciphered : ${decipher(cipher, keys[0])}`);

// 'HELLO'.charCodeAt(0)
// String.fromCharCode(72)

// lines = lines.map(function(line) {
//     return line.split(' ').length;
// })

// upperWords = sentence.map(function(word) {
//     console.log(`mot: ${word.toUpperCase()}`);
// })
