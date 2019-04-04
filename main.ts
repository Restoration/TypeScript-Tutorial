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
