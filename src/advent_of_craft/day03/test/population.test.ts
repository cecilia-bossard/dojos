import { Person } from "../src/Person";
import { PetType } from "../src/PetType";

describe('Population tests', () => {

    let population: Array<Person>;

    beforeAll(() => {
        population = [
            new Person("Peter", "Griffin")
                        .addPet(PetType.CAT, "Tabby", 2),
            new Person("Stewie", "Griffin")
                        .addPet(PetType.CAT, "Dolly", 3)
                        .addPet(PetType.DOG, "Brian", 9),
                new Person("Joe", "Swanson")
                        .addPet(PetType.DOG, "Spike", 4),
                new Person("Lois", "Griffin")
                        .addPet(PetType.SNAKE, "Serpy", 1),
                new Person("Meg", "Griffin")
                        .addPet(PetType.BIRD, "Tweety", 1),
                new Person("Chris", "Griffin")
                        .addPet(PetType.TURTLE, "Speedy", 4),
                new Person("Cleveland", "Brown")
                        .addPet(PetType.HAMSTER, "Fuzzy", 1)
                        .addPet(PetType.HAMSTER, "Wuzzy", 2),
                new Person("Glenn", "Quagmire")
        ]
    });

    it('should return who owns the yougest pet', () => {

        var filtered = population.reduce((person, current) => Math.min(...current.pets.map(pet => pet.age)) < Math.min(...person.pets.map(pet => pet.age)) ? current : person, population[0]);

        expect(filtered).not.toBeNull();
        expect(filtered.firstName).toEqual("Lois");
    });
})
