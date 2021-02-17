const cipherText = 'YRMV PFL VMVI YRU R UIVRD EVF KYRK PFL NVIV JF JLIV NRJ IVRC NYRK ZW PFL NVIV LERSCV KF NRBV WIFD KYRK UIVRD YFN NFLCU PFL BEFN KYV UZWWVIVETV SVKNVVE KYV UIVRD NFICU REU KYV IVRC NFICU';

let cipher = cipherText.replaceAll(' ', '').split('');
let alphabet = Array(26).fill(0);

// Returns ASCII decimal code of `c` shifted by `n`
function encryptChar(c, n) {
    return (((c.charCodeAt(0) - 65) + n) % 26) + 65 ;
}

// Returns an array with the number of letters in the ciphered text
// tab[0] = number of A
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
    keys[i] = freqLetterCode - (etaoinshrdlu[i].charCodeAt() - 65);
}
console.log(`Probable keys = ${keys}`);

// Decrypt the ciphered text `tab` with `key`
function decypher(tab, key) {
    let res = '';
	for (letter of tab)
	    res += String.fromCharCode(encryptChar(letter, 26 - key));
    return res;
}

// List the most probable deciphered texts
function listDecypher(tab, keys) {
    for (key of keys) {
	let mapMethod = cipher.map(function(letter) {
	    return String.fromCharCode(encryptChar(letter, 26 - key));
	}).join('');
	console.log(`[DECYPHER] Shift of ${key} : ${decypher(tab, key)}`);
	console.log(`[MAPMETHOD] Shift of ${key} : ${mapMethod}`);
    }
}

console.log(listDecypher(cipher, keys));
