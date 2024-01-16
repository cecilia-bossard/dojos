function computeScore(ballsWonPlayer1) {

    if (ballsWonPlayer1 == 1) {
        return 15;
    }
    if (ballsWonPlayer1 == 2) {
        return 30;
    }
    if (ballsWonPlayer1 == 3) {
        return 40;
    }
    return 0;
}


export function computeTennisScore(ballsWonPlayer1, ballsWonPlayer2) {
    var score1 = computeScore(ballsWonPlayer1);
    var score2= computeScore(ballsWonPlayer2);

   return score1 + '-' + score2;
};

describe('Tennis score', () => {
    // 0-0
    it('should return 0-0 when a match begins', () => {
        const res = computeTennisScore(0,0);
        expect(res).toEqual('0-0');
    });

    // 15-0
    it('should return 15-0 when player 1 wins a point', () => {
        const res = computeTennisScore(1,0);
        expect(res).toEqual('15-0');
    });

    // 0-15
    it('should return 0-15 when player 2 wins a point', () => {
        const res = computeTennisScore(0,1);
        expect(res).toEqual('0-15');
    });
   
    // 15-15
    it('should return 15-15 when both players won a point', () => {
        const res = computeTennisScore(1,1);
        expect(res).toEqual('15-15');
    });
    
    // 30-15
    it('should return 30-15 when both players won a point', () => {
        const res = computeTennisScore(2,1);
        expect(res).toEqual('30-15');
    }); 

    // 40-15
    it('should return 40-15 when both players won a point', () => {
        const res = computeTennisScore(3,1);
        expect(res).toEqual('40-15');
    }); 
});

