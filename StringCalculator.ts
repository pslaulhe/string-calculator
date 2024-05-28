
export class StringCalculator {
    static Add(numbers: string): number {
        if (numbers.startsWith('//')) {
            const separator = numbers[2];
            numbers = numbers.substring(4);
            numbers = numbers.replace(separator, ',');
        }

        numbers = numbers.replace('\n', ',');
        const numbersArray = numbers.split(',').map(n => parseInt(n));
        const negatives = numbersArray.filter(n => n < 0);
        if (negatives.length > 0) {
            throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
        }
        if (numbers === '') return 0;
        else return numbersArray.reduce((a, b) => a + b);
    }
}
