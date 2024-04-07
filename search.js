const lyrics ='Tumi bondhu kala Pakhi ami jeno ki. bosonto kale tomai Bolte pari ni'
// eta hoilo string er moddhe uper or lower ache kina seta check kora
const searchString = 'PaKhi';
// const doesExist = lyrics.includes('bolte');
// const doesExist = lyrics.includes('ni');
// const doesExist = lyrics.includes(searchString);
// const lyricsLowerCase = lyrics.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchString);
// console.log(doesExist);

// ebar ami jeta select korsi , seta jodi uper or lower hoi 


const lyricsLowerCase = lyrics.toLowerCase();
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);
console.log(doesExist);


// >>>>>>>>>>>>>>.........................

// indexOf

console.log(lyrics.indexOf('Tumi'));

if(lyrics.indexOf('valobasha') !== -1){
    console.log('exists inside the string')
}
else{
    console.log('cannot find it');
}

// startsWith

console.log(lyrics.startsWith('Tumi'));


// Endswith

const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';
fileName.endsWith('.pdf');