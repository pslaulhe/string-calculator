
export class StringCalculator {
    static Add(numbers: string): number {
        numbers = this.replaceSeparatorsWithComma(numbers);

        let numbersArray = numbers.split(',').map(n => parseInt(n));
        numbersArray = numbersArray.filter(n => n <= 1000);

        this.throwIfContainNegatives(numbersArray);

        if (numbers === '' || numbersArray.length == 0) return 0;
        else return numbersArray.reduce((a, b) => a + b);
    }

    private static replaceSeparatorsWithComma(numbers: string) {
        if (numbers.startsWith('//')) {
            const regex = new RegExp('\/\/(?:\\[(.*)\]|(.))', 'g');
            const separatorMatch = numbers.matchAll(regex);
            for (let match of separatorMatch) {
                const separator = match[1] ?? match[2];
                numbers = numbers.substring(numbers.indexOf('\n') + 1);
                numbers = numbers.replaceAll(separator!, ',');
            }
        }

        return numbers.replaceAll('\n', ',');
    }

    private static throwIfContainNegatives(numbersArray: number[]) {
        const negatives = numbersArray.filter(n => n < 0);
        if (negatives.length > 0) {
            throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
        }
    }
}
