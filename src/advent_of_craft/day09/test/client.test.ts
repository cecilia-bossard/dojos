import { Client } from "../src/Client"

describe('Client test', () => {
    let client: Client;

    beforeAll(() => {
        const orderLines = new Map<string, number>();
        orderLines.set("Tenet Deluxe Edition", 45.99);
        orderLines.set("Inception", 30.50);
        orderLines.set("The Dark Knight", 30.50);
        orderLines.set("Interstellar", 23.98);
        client = new Client(orderLines);
    });

    it('client should return statement', () => {
        const statement = client.toStatement();

        expect(statement).toBe( 
            "Tenet Deluxe Edition for 45.99€" + '\n' +
            "Inception for 30.5€" + '\n' +
            "The Dark Knight for 30.5€" + '\n' +
            "Interstellar for 23.98€" + '\n' +
            "Total : 130.97€");
        expect(client.getTotalAmount()).toBe(130.97);
    })
})

