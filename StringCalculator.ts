
export class StringCalculator {
    static Add(numbers: string): number {
        numbers = this.replaceSeparatorsWithComma(numbers);
        const numbersArray = numbers.split(',').map(n => parseInt(n));
        this.throwIfContainNegatives(numbersArray);

        if (numbers === '') return 0;
        else return numbersArray.reduce((a, b) => a + b);
    }

    private static replaceSeparatorsWithComma(numbers: string) {
        if (numbers.startsWith('//')) {
            const separator = numbers[2];
            numbers = numbers.substring(4);
            numbers = numbers.replace(separator, ',');
        }

        return numbers.replace('\n', ',');
    }

    private static throwIfContainNegatives(numbersArray: number[]) {
        const negatives = numbersArray.filter(n => n < 0);
        if (negatives.length > 0) {
            throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
        }
    }
}
