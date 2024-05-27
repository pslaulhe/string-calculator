import {StringCalculator} from "./StringCalculator";

describe('StringCalculator', () => {
    it('should return 0 for empty string', () => {
        expect(StringCalculator.Add('')).toBe(0);
    });

    it('should return 1 for "1"', () => {
        expect(StringCalculator.Add('1')).toBe(1);
    });

    it('should return 3 for "1,2"', () => {
        expect(StringCalculator.Add('1,2')).toBe(3);
    });
});
