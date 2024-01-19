import { FizzBuzz } from "../src/FizzBuzz";
import { OutOfRangeException } from "../src/OutOfRangeException";

describe('FizzBuzz Tests', () => {

    const validInputs = [
        [1, "1"],
        [67, "67"],
        [82, "82"],
        [3, "Fizz"],
        [66, "Fizz"],
        [99, "Fizz"],
        [5, "Buzz"],
        [50, "Buzz"],
        [85, "Buzz"],
        [15, "FizzBuzz"],
        [30, "FizzBuzz"],
        [45, "FizzBuzz"],
    ];

    const invalidInputs = [
        [0],
        [-1],
        [101],
    ];

    it.each(validInputs)('should return the number representation', (input: number, expectedResult: string) => {
        expect(new FizzBuzz().convert(input)).toEqual(expectedResult);
    })

    it.each(invalidInputs)('should throw an exception if the number is out of range', (input: number) => {
        expect(() => new FizzBuzz().convert(input)).toThrow(OutOfRangeException);
    })
})