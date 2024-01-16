import { PetType } from "./PetType";

export class Pet {
    type: PetType;
    name: string;
    age: number;

    constructor(type: PetType, name: string, age: number) {
        this.type = type;
        this.name = name;
        this.age = age;
    }
}