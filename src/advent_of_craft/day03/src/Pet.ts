import { PetType } from "./PetType";

export class Pet {
    type: PetType;
    name: String;
    age: number;

    constructor(type: PetType, name: String, age: number) {
        this.type = type;
        this.name = name;
        this.age = age;
    }
}