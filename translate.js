let sentence =
    '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '.trim().split(' ');

upperWords = sentence.map(function(word) {
    console.log(`mot: ${word.toUpperCase()}`);
})
