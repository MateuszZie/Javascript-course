let markWeight = 78;
let johnWeight = 92;
let markHeight = 1.69;
let johnHeight = 1.95;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / (johnHeight * johnHeight);

console.log(markBMI, johnBMI, markBMI > johnBMI);

if (markBMI > johnBMI) {
    console.log(`Mark BMI (${markBMI}) is higher then Jhon BMI ${johnBMI}`);
} else {
    console.log(`Jhon BMI (${johnBMI}) is higher then Mark BMI ${markBMI}`);
}