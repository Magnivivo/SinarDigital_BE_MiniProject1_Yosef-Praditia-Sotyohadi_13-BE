// let age = 56;
// age = 12 - 2;

// console.log(age)

// const pyi = 3.14;
// pyi = 318;

const now = 2045;
const ageJones = now - 1991;
const ageSarah = now - 2019
console.log(ageJones * 2, ageSarah ** 3);

let j = 44 + 33;
j -= 16;
k = 'dontol';
console.log(j + ' ' + k);

j--
console.log(j);

const age = 19;

if (age >= 21) {
    console.log('he can drink beer now');
} else{
    const yearsleft = 21 - age;
    console.log(`he is too young, wait another ${yearsleft} years :)`);
    console.log(`he is too young, wait for ${yearsleft} years `); // use backticks (sebelah kiri keyboard 1)
}

const inputyear = '2025';
console.log(inputyear + 18);
console.log(Number(inputyear) + 2025);
console.log(Number(inputyear), inputyear);

console.log(Number('jonas')); // output NaN -> not a Number
console.log(String(23), 23); // not much change on visual output - just system read diffrent

//type coercion
console.log('I am' + 23 + ' Years old');
console.log('23' - '10' - 3);
console.log('23' * '2');

