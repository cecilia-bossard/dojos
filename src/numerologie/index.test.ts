// input: 1,2,3,4,5,6,7,8,9,10
// output: 1,2,3,4,5,6,7,8,10,10,10

// RULES
// 9 --> 10,10
// X,2 --> X=3 --> 3,1,1,1
// 6,X --> X=3 --> 3,3,3,3
const calculate = (numberStr) => {
    const list = numberStr.split(',');
    return list.map((val, index, array) => {
        return rule1(rule2(array[index - 1], rule3(array[index - 1], val)))
    }).filter((item) => !!item).join(',');
};

const rule1 = (nStr) => {
    return nStr.replace(/9/g, '10,10');
}

const rule2 = (nPrev, n) => {
    if (n === '2') {
        if (!nPrev) {
            return '';
        }
        return new Array(Number(nPrev)).fill('1').join(','); 
    }
    return n;
}

const rule3 = (nPrev, n) => {
    if(n === '6') {
      return '3,3,3,3';
    }
    return n;
}

describe('premier test', () => {
    it('1', () => {
        expect(calculate('1')).toEqual('1');
    })
    it('2', () => {
        expect(calculate('3')).toEqual('3');
    })
    it('3', () => {
        expect(calculate('9')).toEqual('10,10');
    })
    it('4', () => {
        expect(calculate('1,9')).toEqual('1,10,10');
    })
    it('5', () => {
        expect(calculate('1,9,9')).toEqual('1,10,10,10,10');
    })
    it('5', () => {
        expect(calculate('1,2,3,4,5,7,8,9,10')).toEqual('1,1,3,4,5,7,8,10,10,10');
    })

    // STEP 2
    // input: 3,2,3,4,5
    // output: 3,1,1,1,3,4,5
   
    // input: 1,6,3,4,5
    // output: 1,3,3,3,3,4,5

    it('6', () => {
        expect(calculate('2')).toEqual('');
    })
    it('7', () => {
        expect(calculate('3,2')).toEqual('3,1,1,1');
    })
    it('8', () => {
        expect(calculate('2,2')).toEqual('1,1');
    })
    it('9', () => {
        expect(calculate('1,6,4')).toEqual('1,3,3,3,3,4');
    })
    
})