class Pet {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.hunger = 50;
    }
    describe(){
        return `I am a ${this.type} named ${this.name}.`;
    }
    feed(){
        this.hunger -= 10;
    }
}

const myPet = new Pet("Buddy", "Dog");

const hungerDisplay = document.getElementById("hungerDisplay");
const feedButton = document.getElementById("feedButton");

feedButton.addEventListener("click", function (){
    myPet.feed();

    hungerDisplay.textContent = myPet.hunger
});