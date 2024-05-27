import {StringCalculator} from "./StringCalculator";

describe('StringCalculator', () => {
    it('should return 0 for empty string', () => {
        expect(StringCalculator.Add('')).toBe(0);
    });
});
