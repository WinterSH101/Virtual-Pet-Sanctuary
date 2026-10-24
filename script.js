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

const petNameInput = document.getElementById("petName");
const addPetButton = document.getElementById("addPetButton");
const sanctuary = document.getElementById("sanctuary");

addPetButton.addEventListener("click", function (){

    const name = petNameInput.value;

    if (name ==="") {
        alert("Please enter a pet name.");
    }
    const pet = new Pet(name, "Dog");

    const petCard = document.createElement("div");

    const nameDisplay = document.createElement("h2");
    nameDisplay.textContent = pet.name;

    const hungerDisplay = document.createElement("p");
    hungerDisplay.textContent = `Hunger: ${pet.hunger}`;

    const feedButton = document.createElement("button");
    feedButton.textContent = "Feed";

    feedButton.addEventListener("click", function (){
        pet.feed();
        hungerDisplay.textContent = `Hunger: ${pet.hunger}`;
    });

    petCard.appendChild(nameDisplay);
    petCard.appendChild(hungerDisplay);
    petCard.appendChild(feedButton);

    sanctuary.appendChild(petCard);

    petNameInput.value = "";
});
