export class Client {
    orderLines: Map<string, number>;
    totalAmount: number;

    constructor(orderLines: Map<string, number>) {
        this.orderLines = orderLines;
    }

    toStatement(): string {
        let formattedLines: string[] = [];
        this.orderLines.forEach((value, key) => formattedLines.push(this.formatLine(key, value)));
        const statement = formattedLines.join('\n').concat('\n' + "Total : " + this.totalAmount + "€");
        return statement;
    }

    formatLine(name: string, value: number): string {
        this.totalAmount += value;
        return name + " for " + value + "€";
    }

    getTotalAmount(): number {
        return this.totalAmount;
    }
}
