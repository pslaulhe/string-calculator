
export class StringCalculator {
    static Add(numbers: string): number {
        const numbersArray = numbers.split(',').map(n => parseInt(n));
        if (numbers === '') return 0;
        else return numbersArray.reduce((a, b) => a + b);
    }
}
