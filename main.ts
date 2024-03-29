export {}
let message = 'Hello World';
console.log(message);

const title: string = 'Codevolution';
let isBeginner: boolean = true;
let name: string = 'Vishwas';

let sentence: string = `My name is ${name}
I am a beginner in TypeScript`;

console.log(sentence);


let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let person1: [string, number] = ['Chris', 22];

enum Color {Red, Green, Blue};

let c: Color = Color.Green;
console.log(c);

let myVariable: any = 10;

let multiType: number | boolean;
multiType = 20;
multiType = true;





function add(num1: number, num2: number = 10) : number{
    if(num2){
        return num1 + num2;
    } else {
        return num1;
    }
}

console.log(add(1,2));
console.log(add(1));






interface Person {
    firstName: string;
    lastName: string;
}
function fullname(person: Person){
    console.log(`${person.firstName} ${person.lastName}`);
}
let p = {
    firstName: 'Yosui',
    lastName: 'Inoue'
}

fullname(p);




class Employee {
    employeeName: string;
    constructor(name: string){
        this.employeeName = name;
    }

    greet(){
        console.log(`Good Morning ${this.employeeName}`);
    }
}

class Manager extends Employee {
    constructor(managerName: string){
        super(managerName);
    }
    delegateWork(){
        console.log(`Manager delegating tasks`);
    }
}

let emp = new Employee('Vishwas');
console.log(emp.employeeName);
emp.greet();

let m = new Manager('Bruce');
m.delegateWork();
m.greet();
console.log(m.employeeName);
