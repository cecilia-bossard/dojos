import { OutOfRangeException } from "./OutOfRangeException";

export class FizzBuzz {
    public static MIN: number = 0;
    public static MAX: number = 100;
    public static FIZZ: number = 3;
    public static BUZZ: number = 5;
    public static FIZZBUZZ: number = 15;

    type FizzBuzzMappingFunction = (i: number) => string;
    mapping = new Map<fn: FizzBuzzMappingFunction>([
        [fn: (i: number) => is(FIZZBUZZ, i), "FizzBuzz"],
        
    ]);

    private is(divisor: number, input: number): boolean {
        return input % divisor == 0;
    }

    private isOutOfRange(input: number): boolean {
        return input <= FizzBuzz.MIN || input > FizzBuzz.MAX;
    }
    
      // mapping.put(i => FizzBuzz.is(FizzBuzz.FIZZBUZZ, i), "FizzBuzz") ;
    

    convert(input: number): string {
        if(this.isOutOfRange(input)) {
            throw new OutOfRangeException();
        }
        return this.convertSafely(input);
    }

    private convertSafely(input: number): string {
        if (this.is(FizzBuzz.FIZZBUZZ, input)) {
            return "FizzBuzz";
        }
        if (this.is(FizzBuzz.FIZZ, input)) {
            return "Fizz";
        }
        if (this.is(FizzBuzz.BUZZ, input)) {
            return "Buzz";
        }
        return input.toString();
    }

   



}