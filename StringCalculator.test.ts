import {StringCalculator} from "./StringCalculator";

describe('StringCalculator', () => {
    it('should return 0 for empty string', () => {
        expect(StringCalculator.Add('')).toBe(0);
    });

    it('should return 1 for "1"', () => {
        expect(StringCalculator.Add('1')).toBe(1);
    });

    it.each(['1,2', '4,5', '1,4'])('should return sum for %i', (param) => {
        expect(StringCalculator.Add(param)).toBe(parseInt(param.split(',').reduce((a, b) => (parseInt(a) + parseInt(b)).toString())));
    });
});
