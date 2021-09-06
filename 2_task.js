'use strict';

class Person{
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName(){
        console.log(`${this.name} ${this.surname}`)
    }
}
class Student extends Person{
    constructor(name,surname, year) {
        super(name,surname);
        this.year = year;
    }
    showFullName(middleName) {
        return `${this.surname} ${this.name} ${middleName}`;
    }
    showCourse(){
        const currentYear = new Date().getFullYear();
        if (currentYear - this.year > 6)
            return 6;
        return currentYear - this.year;

    }
}

const stud1 = new Student('Petro', 'Petrenko', 2015)
console.log(stud1.showFullName('Petrovych'));
console.log('Current course: ' + stud1.showCourse());
