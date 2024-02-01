import { Greeter } from "../src/Greeter";

describe('Greeter tests', () => {

    it('sould say hello', () => {
        let greeter = new Greeter();
        expect(greeter.greet()).toBe('Hello.')
    });

    it('sould say hello formally', () => {
        let greeter = new Greeter();
        greeter.setFormality('formal');
        expect(greeter.greet()).toBe('Good evening, sir.')
    });

    it('sould say hello casually', () => {
        let greeter = new Greeter();
        greeter.setFormality('casual');
        expect(greeter.greet()).toBe('Sup bro?')
    });

    it('sould say hello intimately', () => {
        let greeter = new Greeter();
        greeter.setFormality('intimate');
        expect(greeter.greet()).toBe('Hello Darling!')
    });

})
