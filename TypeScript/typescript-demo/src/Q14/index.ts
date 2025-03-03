function LogClassInstantiation(constructor: Function) {
    console.log(`Class ${constructor.name} has been instantiated.`);
}

@LogClassInstantiation
class User {
    constructor(public name: string, public age: number) {
        console.log(`User created: ${this.name}, Age: ${this.age}`);
    }
}


const user1 = new User("Abhirup", 22);
const user2 = new User("Arnab", 23);
