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

## Variable Types

