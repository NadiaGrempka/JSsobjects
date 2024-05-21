class Grade {
    constructor(subject, value) {
        this.subject = subject;
        this.value = value;
    }
}

class Student{
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
        this._grades = [];
        this.average = 0;
    }

    hello(){
        return `Hello ${this.name}, Your average grade is: ${this.average.toFixed(2)}`;
    }

    set grade(newGrade){
        if (newGrade instanceof Grade){
            this._grades.push(newGrade);
            this.countAverage();
        }else {
            console.error("Given value is not correct");
        }
    }

    get grades(){
        let message = '';
        this._grades.forEach(grade => {
            message += `Subject: ${grade.subject} - ocena ${grade.value}.\n`;
        });
        return message;
    }

    countAverage(){
        const sumGrade = this._grades.reduce((sum, grade) => sum + grade.value);
        this.average = sumGrade/this._grades.length;
    }
}

const studentName = new Student("Nadia", "Grempka");
console.log(studentName.hello());

studentName.grade = new Grade("WPR", 3);
studentName.grade = new Grade("TIN", 5);
studentName.grade = new Grade("POJ", 4);

console.log(studentName.hello());
console.log(studentName.grades);