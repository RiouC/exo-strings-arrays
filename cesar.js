
let [input, key] = [process.argv[2], process.argv[3]];

// TODO : try / catch / except
key = parseInt(key);

let text = process.argv[2].toUpperCase().split('');


// Returns ASCII decimal code of `c` shifted by `n`
const encryptChar = (c, n) => {
    if (c.charCodeAt() == 32)
	return 32;
    return (((c.charCodeAt(0) - 65) + n) % 26) + 65 ;
}

// Crypt the ciphered text `tab` with `key`
const cypher = (tab, key) => {
    let res = '';
	for (letter of tab)
	    res += String.fromCharCode(encryptChar(letter, key));
    return res;
}

// Decrypt the ciphered text `tab` with `key`
const decypher = (tab, key) => {
    return cypher(tab, 26 - key);
}

// List the most probable deciphered texts
const listDecypher = (tab) => {
    let alphabet = Array(26).fill(0);

    // Returns an array with the number of letters in the ciphered text
    // tab[0] = number of A
    function countLetters(tab) {
	for (letter of text) {
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
	keys[i] = ((freqLetterCode - (etaoinshrdlu[i].charCodeAt() - 65)) + 26) % 26;
    }
    console.log(`Probable keys = ${keys}`);

    for (key of keys) {
	let mapMethod = text.map(function(letter) {
	    return String.fromCharCode(encryptChar(letter, 26 - key));
	}).join('');
	console.log(`[DECYPHER] Shift of ${key} : ${decypher(tab, key)}`);
	console.log(`[MAPMETHOD] Shift of ${key} : ${mapMethod}`);
    }
}

const main = () => {
    if (key) {
	console.log(cypher(text, key));
    } else {
	console.log(listDecypher(text));
    }
}

main();


// EXAMPLES TEXTS : //

// const text = 'HAVE YOU EVER HAD A DREAM NEO THAT YOU WERE SO SURE WAS REAL WHAT IF YOU WERE UNABLE TO WAKE FROM THAT DREAM HOW WOULD YOU KNOW THE DIFFERENCE BETWEEN THE DREAM WORLD AND THE REAL WORLD';
// const text = 'YRMV PFL VMVI YRU R UIVRD EVF KYRK PFL NVIV JF JLIV NRJ IVRC NYRK ZW PFL NVIV LERSCV KF NRBV WIFD KYRK UIVRD YFN NFLCU PFL BEFN KYV UZWWVIVETV SVKNVVE KYV UIVRD NFICU REU KYV IVRC NFICU';

// const text = 'Though this was a school graduation mayor Gadsby said it would do no harm to point out a plan for still adding to Branton Hills public spirit this town is too plain too dingy Brick walls and asphalt paving do not light up a town but dim it'.toUpperCase();
// const text = 'HVCIUV HVWG KOG O GQVCCZ UFORIOHWCB AOMCF UORGPM GOWR WH KCIZR RC BC VOFA HC DCWBH CIH O DZOB TCF GHWZZ ORRWBU HC PFOBHCB VWZZG DIPZWQ GDWFWH HVWG HCKB WG HCC DZOWB HCC RWBUM PFWQY KOZZG OBR OGDVOZH DOJWBU RC BCH ZWUVH ID O HCKB PIH RWA WH'
