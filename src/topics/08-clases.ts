export class Person {
    // public name: string;
    // public address: string;

    constructor(
        public name:string, 
        public address:string = "No address" // Valor por defecto
        ){}
}

// export class Hero extends Person {
//     constructor(
//         public alterEeg:string,
//         public age: number,
//         public realName:string
//     ) {
//         super(realName, "NY");
//     }
// }

export class Hero{
    constructor(
        public alterEeg:string,
        public age: number,
        public realName:string,
        public person:Person
    ) {
        //this.persona = new Person(realName);
    }
}

const person = new Person("Tony Stark", "NY");

const ironman = new Hero("Ironman", 45, "Tony Stark", person);

console.log(ironman)