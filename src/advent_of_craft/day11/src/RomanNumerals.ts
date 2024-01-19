export class RomanNumerals {
    static MAX_NUMBER = 3999;
    static intToNumerals: Map<number, string> = this.createMapForIntegerToNumerals();

   private static createMapForIntegerToNumerals(): Map<number, string> {
        let map = new Map<number, string>();
        map.set(1000, "M");
        map.set(900, "CM");
        map.set(500, "D");
        map.set(400, "CD");
        map.set(100, "C");
        map.set(90, "XC");
        map.set(50, "L");
        map.set(40, "XL");
        map.set(10, "X");
        map.set(9, "IX");
        map.set(5, "V");
        map.set(4, "IV");
        map.set(1, "I");

        return map;
    };

    static convert(number: number): string {
        return this.isInRange(number)
            ? this.convertSafely(number)
            : "";
    };

    private static convertSafely(number: number): string {
        let roman = "";
        var remaining = number;

        this.intToNumerals.forEach((value, key) => {
            while (remaining >= key) {
                roman += (value);
                remaining -= key;
            }
        })
        return roman;
    }

    private static isInRange(number: number): boolean {
        return number > 0 && number <= this.MAX_NUMBER;
    }

}