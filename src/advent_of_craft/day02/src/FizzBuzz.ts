import { OutOfRangeException } from "./OutOfRangeException";

export class FizzBuzz {
  FIZZ = 3;
  BUZZ = 5;
  MIN = 0;
  MAX = 100;
  convert(input: number): string {
    if (this.isOutOfBound(input)) {
      throw new OutOfRangeException();
    }
    return this.safeConvert(input);
  }

  private safeConvert(input: number) {
    let fizzyBuzzySqueezie = "";
    if (this.isMultiple(input, this.FIZZ)) {
      fizzyBuzzySqueezie = "Fizz";
    }
    if (this.isMultiple(input, this.BUZZ)) {
      fizzyBuzzySqueezie += "Buzz";
    }

    return fizzyBuzzySqueezie || input.toString();
  }

  private isOutOfBound(input: number) {
    return input <= this.MIN || input > this.MAX;
  }

  private isMultiple(input: number, modulo: number) {
    return input % modulo == this.MIN;
  }
}
