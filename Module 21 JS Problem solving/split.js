const lyrics ="amar sonar bangla ami tomay valobashi";
console.log(lyrics);
console.log(lyrics.split(' '));
console.log(lyrics.split('.'));
console.log(lyrics.split(''));

//slice
const partial=lyrics.slice(5,8);
console.log(partial);

//substring
const partial2=lyrics.substring(5,10);
console.log(partial2);


//
const lines =['amar sonar bangla',  'ami tomay valobashi', 'chirodin tomar akash', 'tomar batash amar prane'];
const song = lines.join(' ');
console.log(song);
