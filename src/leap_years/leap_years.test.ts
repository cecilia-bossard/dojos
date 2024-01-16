
describe('leap years', () => {
    it("should return true if the year is divisible by 400", () => {
        expect(isLeapYear(2000)).toBeTruthy();
    });

    it("should return false if the year is divisible by 100 but not by 400", () => {
        expect(isLeapYear(1700)).toBeFalsy();
    });

    it("should return true if the year is divisible by 4 but not by 100", () => {
        expect(isLeapYear(2008)).toBeTruthy();
    });

    it("should return false if the year is not divisible by 4", () => {
        expect(isLeapYear(2019)).toBeFalsy();
    });
})


function isLeapYear(year) {

    if(year % 4 == 0) {
        if(year % 400 == 0) {
            return true;
        }
        if(year % 100 == 0) {
            return false;
        }
        return true;
    }
    return false;
}

