function calculateFrame(frame) {
    const scores = frame.map((score) => {
        if (score === '-') {
            return 0;
        }
        if (score === 'X' || score === "/") {
            return 10;
        }
        return Number(score);
    });
    return scores.reduce((acc, value) => {
        return acc + value;
    }, 0);
}

function calculateScore(scoreStr) {
    let scores = scoreStr.split(' ').map((frame) => frame.split(''));
    scores = scores.map((frame) => calculateFrame(frame));
    return scores.reduce((acc, value, index, array) => {
        let total = value;
        if (value === 10) {
            total += array[index + 1];
        }
        return acc + total;
    }, 0);
};

describe('bowling tests', () => {
    it('should return 0', () => {
        const res = calculateScore('-- -- -- -- -- -- -- -- -- --');
        expect(res).toEqual(0);
    });

    it('should return 1', () => {
        const res = calculateScore('1- -- -- -- -- -- -- -- -- --');
        expect(res).toEqual(1);
    });

    it('should return 2', () => {
        const res = calculateScore('1- 1- -- -- -- -- -- -- -- --');
        expect(res).toEqual(2);
    });

    it('should return 10', () => {
        const res = calculateScore('X -- -- -- -- -- -- -- -- --');
        expect(res).toEqual(10);
    });

    it('should return 12', () => {
        const res = calculateScore('X 1- -- -- -- -- -- -- -- --');
        expect(res).toEqual(12);
    });

    it('should return 10', () => {
        const res = calculateScore('/ -- -- -- -- -- -- -- -- --');
        expect(res).toEqual(10);
    });
});
