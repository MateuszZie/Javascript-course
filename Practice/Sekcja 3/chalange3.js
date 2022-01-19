'use strict'
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBmi: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,

    calcBmi: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};


if (john.calcBmi() > mark.calcBmi()) {
    console.log(`${john.fullName} BMI(${john.bmi}) is higher then ${mark.fullName} BMI(${mark.bmi})`);
} else if (john.bmi < mark.bmi) {
    console.log(`${john.fullName} BMI(${john.bmi}) is lower then ${mark.fullName} BMI(${mark.bmi})`);
} else {
    console.log(`${john.fullName} BMI(${john.bmi}) is the same like ${mark.fullName} BMI(${mark.bmi})`);
} 