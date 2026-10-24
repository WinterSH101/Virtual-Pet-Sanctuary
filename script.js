class Pet {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    describe(){
        return `I am a ${this.type} named ${this.name}.`;
    }
}
const pet1 = new Pet ("Buddy", "Dog");
const pet2 = new Pet("Luna", "Cat");

console.log(pet1.describe());
console.log(pet2.describe());