# TypeScript-Tutorial
TypeScript Tutorial for Beginners.

[Learn TypeScript in 50 Minutes - Tutorial for Beginners](https://www.youtube.com/watch?v=WBPrJSw7yQA)

## What & Why?
- Open source programming language from Microsoft
- Typed superset of JavaScript
- Transpile to JavaScript from TypeScript
- Supported to ES6, ES7, ES8 anything

- The TypeScript can use optional static typing and type inference
- IDE support
- Rapid growth and use

## Environment Setup
Depend on Node.js. The TypeScript needs npm module.
```
$ npm install -g typescript
```
After that, you can `tsc` command. Please, execute bellow command which is showing version for TypeScript to check.
```
$ tsc -v
$ tsc -help
```

The TypeScript file has ts extension which is `.ts`. Also if you have React project, You can use `.tsx` extension.
First thing. Please, create `main.ts` file.

```
$ nvim main.ts
```

```main.ts
let message = 'Hello World';
console.log(message);
```

The TypeScript needs transpiring. If you compile TypeScript file, It will be JavaScript file. The transpile command is `$ tsc <Your file name>`.
```
$ tsc main.ts
$ node main.js
```

Also, You can transpile when you rewrite code.
```
$ tsc main.ts --watch
```

## Variable Declarations
From ES6, you can use `let` and `const`, also the TypeScript must be using `let` and `const`. Because, `var` is global scope, sometimes global scope cause problem in JavaScript development. So you should use `let` which is block scope.

## Variable Type
The TypeScript assign to type for variable. If you wanna use type, assign afeter variable and with colon(`:`).
```main.ts
let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Vishwas';
```

As well, you can use a template literal.
```main.ts
let name: string = 'JavaScript';
let sentence: string = `Hello ${name} World`;
```
### Error
If you assigned different type, The TypeScript show error.
```main.ts
let name: string = 'JavaScript';
name = true;
let sentence: string = `Hello ${name} World`;
```
### null and undefined
And also, null and undefined types, you can assign variable. The bellow code is working.
```main.ts
let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;
```
null and undefined are ignore type.


### Array
You can use also array types. The array can define familer syntax for variable.
```main.ts
let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let person1: [string, number] = ['Chris', 22];
```

### Error
```maint.ts
let person1: [string, number] = ['Chris', 22, 35];
```

### enum
If you wanna get key of value, you can use `enum` keyword. The enums allow us to declare a set of named constants i.e. a collection of related values that can be numeric or string values.
```main.ts
enum Color {Red, Green, Blue};
let c: Color = Color.Green;
console.log(c);
```


```main.ts
enum Color {Red = 5, Green, Blue};
let c: Color = Color.Green;
console.log(c);
```


### Any
The any type can put the antying type, If you didin't assign type yet, you can use useful.
```main.ts
let myVariable: any = 10;
```

```main.ts
let anyType: any;
anyType = 20;
anyType = true;
```

### Union
And if you wanna using mutilpull type at the same variable, you can use type and pipe character(`|`).
```main.ts
let multiType: number | boolean;
// or let mutilType: (number | boolean);
multiType = 20;
multiType = true;
```

### Functions
The function can assign types, the bellow code is basic function which doesn't have type function.
```main.ts
function add(num1, num2){
    return num1 + num2;
}
console.log(add(1,2));
console.log(add(1));
```
The next, assigned types.
```main.ts
function add(num1: number, num2: number) : number{
    return num1 + num2;
}
console.log(add(1,2));
console.log(add(1));
```
In the function, you can assign types arguments and return value. The return value assign after araguments. However, in another situetion, you wannt use undefined type, you can use question mark which is using assign undefined value.
```main.ts
function add(num1: number, num2?: number) : number{
    if(num2){
        return num1 + num2;
    } else {
        return num1;
    }
}
console.log(add(1,2));
console.log(add(1));
```
Then, you can use default parameter, like this.
```main.ts
function add(num1: number, num2: number = 10) : number{
    if(num2){
        return num1 + num2;
    } else {
        return num1;
    }
}
console.log(add(1,2));
console.log(add(1));
```


