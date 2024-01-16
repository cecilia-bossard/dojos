import { FizzBuzz } from "../src/FizzBuzz";
import { OutOfRangeException } from "../src/OutOfRangeException";

describe('FizzBuzz Tests', () => {
    it('should return the given number for 1', () => {
        expect(new FizzBuzz().convert(1)).toEqual("1");
    });

    it('should return the given number for 67', () => {
        expect(new FizzBuzz().convert(67)).toEqual("67");
    });

    it('should return the given number for 82', () => {
        expect(new FizzBuzz().convert(82)).toEqual("82");
    });

    it('should return Fizz for 3', () => {
        expect(new FizzBuzz().convert(3)).toEqual("Fizz");
    });

    it('should return Fizz for 66', () => {
        expect(new FizzBuzz().convert(66)).toEqual("Fizz");
    });

    it('should return Fizz for 99', () => {
        expect(new FizzBuzz().convert(99)).toEqual("Fizz");
    });

    it('should return Buzz for 5', () => {
        expect(new FizzBuzz().convert(5)).toEqual("Buzz");
    });

    it('should return Buzz for 50', () => {
        expect(new FizzBuzz().convert(50)).toEqual("Buzz");
    });

    it('should return Buzz for 85', () => {
        expect(new FizzBuzz().convert(85)).toEqual("Buzz");
    });

    it('should return FizzBuzz for 15', () => {
        expect(new FizzBuzz().convert(15)).toEqual("FizzBuzz");
    });

    it('should return FizzBuzz for 30', () => {
        expect(new FizzBuzz().convert(30)).toEqual("FizzBuzz");
    });

    it('should return FizzBuzz for 45', () => {
        expect(new FizzBuzz().convert(45)).toEqual("FizzBuzz");
    });

    it('should throw an exception for 0', () => {
        try {
            new FizzBuzz().convert(0);
            fail();
        } catch(OutOfRangeException) {}
    });

    it('should throw an exception for 101', () => {
        try {
            new FizzBuzz().convert(101);
            fail();
        } catch(OutOfRangeException) {}
    });

    it('should throw an exception for -1', () => {
        try {
            new FizzBuzz().convert(-1);
            fail();
        } catch(OutOfRangeException) {}
    });
})