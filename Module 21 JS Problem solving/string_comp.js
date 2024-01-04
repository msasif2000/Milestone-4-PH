//1  string concatenation
const firstName="Hanif";
const lastName="Poribohon";
const fullName=firstName+lastName;
console.log(fullName);


//2 if a word/substring does exist
const lyrics ="amar sonar bangla ami tomay valobashi";
const doesExist=lyrics.includes('bangla');
console.log( doesExist);

//3 IndexOf
console.log(lyrics.indexOf('bangla'));

//4 startsWith
console.log(lyrics.startsWith('amar'));

//endsWith
const filename='bio.pdf';
const otherfile='pic.png';
console.log(filename.endsWith('.pdf'));

