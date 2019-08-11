function echo<T>(arg: T): T{
    return arg;
}
var myStr = echo(1);

class Person {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
        return this.firstName + " " + this.lastName;
    }
}

class Admin extends Person {
}

class Manager extends Person {

}

const admin = new Admin("a", "a");
const manager = new Manager("a", "a");

function personEcho<T extends Person>(person: T): T {
    return person;
}

const foo = personEcho(admin);
const bar = personEcho(manager);
