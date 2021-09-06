'use strict';

class Student {
    constructor(fullName, direction) {
        this.fullName = fullName;
        this._direction = direction;
    }
    showFullName() {
        return this.fullName;
    }
    nameIncludes(data) {
        return this.showFullName().split(' ')[0] === data;
    }
    static studentBuilder(){
       return new Student('Ihor Kohut', 'qc')
    }
    get direction(){
        return this._direction;
    }
    set direction(value){
        if(value.length < 2){
            alert("direction is too short");
            return;
        }
        this._direction = value;
    }
}

const stud1 = new Student('Ivan Petrenko', 'web')
const stud2 = new Student('Sergiy Koval', 'python')
const stud3 = Student.studentBuilder();

console.log([stud1,stud2, stud3])

console.log(stud1.nameIncludes('Ivan'));
console.log(stud1.nameIncludes('Denysenko'));