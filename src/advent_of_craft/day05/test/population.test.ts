import { Person } from "../src/Person";
import { Pet } from "../src/Pet";
import { PetType } from "../src/PetType";
import { isEmpty, last } from 'lodash';

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

    it('peopleWithTheirPets', () => {
        const response = formatPopulation();

        expect(response).toBe("Peter Griffin who owns : Tabby " + lineSeparator() +
            "Stewie Griffin who owns : Dolly Brian " + lineSeparator() +
            "Joe Swanson who owns : Spike " + lineSeparator() +
            "Lois Griffin who owns : Serpy " + lineSeparator() +
            "Meg Griffin who owns : Tweety " + lineSeparator() +
            "Chris Griffin who owns : Speedy " + lineSeparator() +
            "Cleveland Brown who owns : Fuzzy Wuzzy " + lineSeparator() +
            "Glenn Quagmire");
    });

    function formatPopulation(): string {
        let response = "";

        for(var person of population) {
            response = response.concat(`${person.firstName} ${person.lastName}`);

            if (!isEmpty(person.pets)) {
                response = response.concat(" who owns : ");
            }

            for(var pet of person.pets) {
                response = response.concat(pet.name).concat(" ");
            };

            if (last(population) !== person) {
                response = response.concat(lineSeparator());
            }
        };
        return response;
    }

    function lineSeparator() {
        return "\n";
    }
})

