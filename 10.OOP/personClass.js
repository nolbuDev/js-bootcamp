// myPerson => Person.prototype => object.prototype => null

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.likes = likes;
    }

    getBio() {
        let bio = `${this.firstName} is ${this.age}`;
        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}`;
        });
        return bio;
    }

    set fullName(fullName) {
        const names = fullName.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes);
        this.position = position;
    }

    getBio() {
        return `${this.firstName} ${this.lastName} is a ${this.position}.`;
    }

    getYearsLeft() {
        return 65 - this.age;
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes);
        this.grade = grade;
    }

    getBio() {
        return this.grade >= 70 ? `${this.firstName} is passing` : `${this.firstName} fail`;
    }

    upgradeGrade(grade) {
        this.grade = grade;
    }
}

const son = new Student('Jangseob', 'Son', 24, 69, ['Teaching', 'Biking']);
son.fullName = 'Nolbu Son';
console.log(son.getBio());
son.upgradeGrade(99);
console.log(son.getBio());
