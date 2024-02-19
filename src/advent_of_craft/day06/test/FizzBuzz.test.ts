import { FizzBuzz } from "../src/FizzBuzz";
import { OutOfRangeException } from "../src/OutOfRangeException";

const success = [
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

const failures = [[0], [101], [-1]];

describe("FizzBuzz Tests", () => {
  test.each(success)("should return the given number for %i", (n, result) => {
    expect(new FizzBuzz().convert(n)).toEqual(result);
  });

  test.each(failures)("should throw an exception for %i", (n) => {
    try {
      new FizzBuzz().convert(n);
      fail();
    } catch (OutOfRangeException) {}
  });
});
