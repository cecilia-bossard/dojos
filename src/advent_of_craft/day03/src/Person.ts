import { Pet } from "./Pet";
import { PetType } from "./PetType";

export class Person {
  firstName: String;
  lastName: String;
  pets: Array<Pet>;

  constructor(init?: Partial<Person>) {
    Object.assign(this, init);
    this.pets = [];
  }

  addPet(petType: PetType, name: String, age: number) {
    this.pets.push(new Pet({ type: petType, name, age }));
    return this;
  }
}
