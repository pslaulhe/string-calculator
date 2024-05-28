
export class StringCalculator {
    static Add(numbers: string): number {
        if (numbers.startsWith('//')) {
            const separator = numbers[2];
            numbers = numbers.substring(4);
            numbers = numbers.replace(separator, ',');
        }

        numbers = numbers.replace('\n', ',');
        const numbersArray = numbers.split(',').map(n => parseInt(n));
        if (numbers === '') return 0;
        else return numbersArray.reduce((a, b) => a + b);
    }
}
