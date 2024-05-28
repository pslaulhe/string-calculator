
export class StringCalculator {
    static Add(numbers: string): number {
        if (numbers === '') return 0;
        else return parseInt(numbers.split(',')[0]) + (numbers.split(',').length > 1 ? parseInt(numbers.split(',')[1]) : 0);
    }
}
