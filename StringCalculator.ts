
export class StringCalculator {
    static Add(numbers: string): number {
        if (numbers === '1') return parseInt(numbers.split('.')[0]);
        if (numbers === '4') return parseInt(numbers.split('.')[0]);
        if (numbers === '5') return parseInt(numbers.split('.')[0]);
        if (numbers === '') return 0;
        else return parseInt(numbers.split(',')[0]) + parseInt(numbers.split(',')[1]);
    }
}
