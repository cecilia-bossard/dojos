function thomasSwitch(n) {
    let result;
    switch(n) {
        case 1: 
        case 2: 
        case 3: 
            result = new Array(+n).fill('I').join('');
            break;
        case 4: 
            result = 'IV';
            break;
        case 5: 
            result = 'V';
            break;
        case 6: 
            result = 'VI';
            break;
        case 7: 
            result = 'VII';
            break;
        case 8: 
            result = 'VIII';
            break;
        case 9: 
            result = 'IX';
            break;
    }
    return result;
}

function convertNumberToRoman(n) {
    if (n === 0) {
        throw new Error('Zero is not an option to Romans');
    }
    const nbStr = String(n);
    const diz = +(nbStr.split('').slice(-2, -1)[0]) || 0;
    const unit = +(nbStr.split('').slice(-1)[0]) || 0;
    let resStr = '';
    if (diz) {
        resStr = resStr.concat('X');
    }
    if (unit) {
        resStr = resStr.concat(thomasSwitch(unit));
    }
    return resStr;
};

describe('Roman Numerals', () => {
    it('should return "I" for 1', () => {
        const res = convertNumberToRoman(1);
        expect(res).toEqual('I');
    });
    it('should return "II" for 2', () => {
        const res = convertNumberToRoman(2);
        expect(res).toEqual('II');
    });
    it('should return "III" for 3', () => {
        const res = convertNumberToRoman(3);
        expect(res).toEqual('III');
    });
    it('should return "IV" for 4', () => {
        const res = convertNumberToRoman(4);
        expect(res).toEqual('IV');
    });
    it('should return "V" for 5', () => {
        const res = convertNumberToRoman(5);
        expect(res).toEqual('V');
    });
    it('should return "VI" for 6', () => {
        const res = convertNumberToRoman(6);
        expect(res).toEqual('VI');
    });
    it('should return "X" for 10', () => {
        const res = convertNumberToRoman(10);
        expect(res).toEqual('X');
    });
    it('should return "XI" for 11', () => {
        const res = convertNumberToRoman(11);
        expect(res).toEqual('XI');
    });

    it('should throw an error if 0 is provided', () => {
        expect(() => convertNumberToRoman(0)).toThrow("Zero is not an option to Romans");
    });
});
