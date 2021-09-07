'use strict';

class Worker{
    #experience = 1.2;
    constructor(fullName, dayRate, workingDays) {
        this.fullName  = fullName;
        this.dayRate  = dayRate;
        this.workingDays  = workingDays;
    }
    showSalary(){
        if(Worker.counter)
            console.log(this.fullName + ' salary: ' + this.dayRate * this.workingDays);
        delete Worker.counter;
        return this.dayRate * this.workingDays;
    }
    showSalaryWithExperience(){
        console.log(this.fullName + ' salary: ' + this.showSalary() * this.showExp);
        return this.fullName + ' salary: ' + this.showSalary() * this.showExp;
    }
    get showExp(){
        return  this.#experience;
    }
    set setExp(value){
        this.#experience = value;
    }
}

const worker1 = new Worker("John Johnson", 20, 23);
const worker2 = new Worker("Tom Tomson", 48, 22);
const worker3 = new Worker("Andy Ander", 29, 23);

const array = [];

const calcExp = (worker) => {
    const obj = {};
    Worker.counter  = 1;
    console.log(worker.fullName);
    worker.showSalary();
    console.log("New experience: " + worker.showExp);
    worker.showSalaryWithExperience();
    worker.setExp = 1.5;
    console.log("New experience: " + worker.showExp);
    obj.salary = worker.showSalaryWithExperience();
    console.log('\n')

    obj.fullName = worker.fullName;
    obj.salary = parseFloat(obj.salary.split(' ').reverse().join(''));
    array.push(obj);
}

calcExp(worker1);
calcExp(worker2);
calcExp(worker3);

for(let i = 0; i < array.length - 1; i++){
    let count;
    if(array[i].salary > array[i+1].salary){
        count = array[i];
        array[i] = array[i+1];
        array[i+1] = count;
    }
}
console.log('Sorted salary:');
array.forEach(item => console.log(`${item.fullName}: ${item.salary}`))

