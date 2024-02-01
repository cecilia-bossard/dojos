import { PetType } from "./PetType";

export class Pet {
    type: PetType;
    name: String;
    age: number;

    constructor(init?:Partial<Pet>) {
        Object.assign(this, init);
    };
}