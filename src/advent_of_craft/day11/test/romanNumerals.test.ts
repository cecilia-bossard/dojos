import { RomanNumerals } from "../src/RomanNumerals";
import * as fc from 'fast-check';

describe('Roman Numerals', () => {
    const passingExamples = [
        [1, "I"],
        [3, "III"],
        [4, "IV"],
        [5, "V"],
        [10, "X"],
        [13, "XIII"],
        [50, "L"],
        [100, "C"],
        [500, "D"],
        [1000, "M"],
        [2499, "MMCDXCIX"],
    ];

    it.each(passingExamples)('should generate roman for numbers', (input: number, expectedRoman: string) => {
        expect(RomanNumerals.convert(input)).toEqual(expectedRoman);
    });

    it('should return empty for any number out of range', () => {
        fc.assert(
            fc.property(
                fc.integer().filter(x => x <= 0 || x > 3999),
                (int) => {
                    const convertValue = RomanNumerals.convert(int);
                    expect(convertValue).toBe("");
                }
            )
        );
    });

    it('should return only valid symbols for valid numbers', () => {

        fc.assert(
            fc.property(
                fc.integer({min: 1, max: 3999}),
                (int) => {
                    const convertValue = RomanNumerals.convert(int);
                    expect(romanCharactersAreValid(convertValue)).toBeTruthy();
                }
            )
        );
    });

    function romanCharactersAreValid(roman: string): boolean {
        return roman.search("[IVXLCDM]+") !== -1;
    }
})
