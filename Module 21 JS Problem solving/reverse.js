//char reverse
function reverseString(str) {
    let reversed='';
  for(var i=str.length-1; i>=0; i--){
    var char = str[i];
    reversed+=char;
    console.log(char, reversed);
  }
}

const str="I am a good boy";
const result=reverseString(str);
console.log(result);

//word reverse
function reverseWords(str) {
    const words=str.split(' ');
    const result=[];
    for(var i=str.length-1; i>=0; i--){
        const element=words[i];
        result.push(element);
    }
    const reversed=result.join(' ');
    return reversed;
}
const myStr="I am a good boy";
const result2=reverseWords(myStr);
console.log(result2);