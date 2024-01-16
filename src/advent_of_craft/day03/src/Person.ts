import { Pet } from "./Pet";
import { PetType } from "./PetType";

export class Person {
    firstName: String;
    lastName: String;
    pets: Array<Pet>;
    
    constructor(firstName: String, lastName: String) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.pets = [];
    }

    addPet(petType: PetType, name: String, age: number) {
        this.pets.push(new Pet(petType, name, age));
        return this;
    }
}