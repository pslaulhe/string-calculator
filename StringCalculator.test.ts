import {StringCalculator} from "./StringCalculator";

describe('StringCalculator', () => {
    it('should return 0 for empty string', () => {
        expect(StringCalculator.Add('')).toBe(0);
    });

    it.each(['1', '4', '5'])('should return 1 for "1"', (param) => {
        expect(StringCalculator.Add(param)).toBe(parseInt(param));
    });

    it.each(['1,2', '4,5', '1,4'], )('should return sum for %i', (param) => {
        expect(StringCalculator.Add(param)).toBe(parseInt(param.split(',').reduce((a, b) => (parseInt(a) + parseInt(b)).toString())));
    });

    it.each([
        ['1,2,3', 6 ],
        ['4,5,6', 15 ],
        ['1,4,5,100,53', 163 ]
    ])
    ('should return sum for %p: %i', (param, value) => {
        expect(StringCalculator.Add(param)).toBe(value);
    });

    it.each([
        ['1\n2,3', 6 ],
        ['4,5\n6', 15 ],
        ['1,4,5,100\n53', 163 ]
    ])
    ('should return sum for %p: %i with line breaks', (param, value) => {
        expect(StringCalculator.Add(param)).toBe(value);
    });

    it.each([
        ['//|\n1', 1 ],
        ['//;\n1;2;3', 6 ],
        ['//:\n4:5:6', 15 ],
        ['//*\n1*4*5*100*53', 163 ]
    ])
    ('should return sum for %p: %i with different separators', (param, value) => {
        expect(StringCalculator.Add(param)).toBe(value);
    });

    it.each([
        ['//[|]\n1', 1 ],
        ['//[;+]\n1;+2,3', 6 ],
        ['//[*123]\n4*1235*1236', 15 ],
        ['//[sep]\n1sep4sep5sep100sep53', 163 ]
    ])
    ('should return sum for %p: %i with different separators of arbitrary length', (param, value) => {
        expect(StringCalculator.Add(param)).toBe(value);
    });


    it.each([
        ['-1\n2,3', [-1]],
        ['4,-5,-6', [-5, -6]],
        ['-3', [-3]]
    ])
    ('should throw negatives not allowed for %p', (param, negatives) => {
        for (let n of negatives) {
            expect(() => StringCalculator.Add(param)).toThrow(n.toString());
        }

        expect(() => StringCalculator.Add(param)).toThrow('negatives not allowed');
    });

    it.each([
        ['1001', 0 ],
        ['4,5,6,1001', 15 ],
        ['1,4,5,34561300,53,1001', 63 ]
    ])
    ('should ignore numbers greater than 1000', (param, value) => {
        expect(StringCalculator.Add(param)).toBe(value);
    });
});
