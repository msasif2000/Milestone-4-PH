function InchtoFT(inch){
    const feet=inch/12;
    return feet;
}

const dadaInch=144;
const dadaFeet=InchtoFT(dadaInch);
console.log(dadaFeet);