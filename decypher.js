const cipherText = 'YRMV PFL VMVI YRU R UIVRD EVF KYRK PFL NVIV JF JLIV NRJ IVRC NYRK ZW PFL NVIV LERSCV KF NRBV WIFD KYRK UIVRD YFN NFLCU PFL BEFN KYV UZWWVIVETV SVKNVVE KYV UIVRD NFICU REU KYV IVRC NFICU';

// Etaoin shrdlu
// https://en.wikipedia.org/wiki/Etaoin_shrdlu

let cipher = cipherText.replaceAll(' ', '');
let cipherSplit = cipher.split('');
let alphabet = Array(26).fill(0);

function decalage(c, n) {
    return (((c.charCodeAt(0) - 65) + n) % 26) + 65 ;
}

function countLetters(tab) {
    for (letter of cipherSplit) {
	alphabet[letter.charCodeAt()-65] += 1;
    }
}

// console.log(cipherSplit.filter(x => x === 'e').length);

countLetters(alphabet);
console.log(`alphabet = ${alphabet}`);
let tmp = alphabet.indexOf(Math.max(...alphabet)) + 1
console.log(tmp);
console.log(String.fromCharCode(tmp + 65));
console.log(`cipherSplit = ${cipherSplit}`);
console.log(`decalage('Z', 3) = ${decalage('Z', 3)}`);

// 'HELLO'.charCodeAt(0)
// String.fromCharCode(72)
