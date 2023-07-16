//human age:
const myAge = 22;

//for first 2 dog years:
let earlyYears = 2;

//for first 2 dog years, count as 10.5:
earlyYears *= 10.5; 

//getting remaining years:
laterYears = myAge - 2;

//laterYears times 4
laterYears *= 4;

//add early years which is first + remaining years:
myAgeInDogYears = earlyYears + laterYears;

//method and not property bc it changes string & does not provide information on data.
myName = "Moris".toLowerCase();

//using string interpolation to print:
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog yeras.`)
//should print dog years as 101.
