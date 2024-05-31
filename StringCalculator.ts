
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
            // const regexAll = new RegExp('\\[([^\]]*)\]|([^\]])\n', 'g');
            const regex1 = new RegExp('\\[([^\\]]*)\]', 'g');
            const regex2 = new RegExp('\/\/([^\\[])', 'g');

            for (let match of numbers.matchAll(regex1)) {
                console.log(match);
                const separator = match[1] ?? match[2];
                numbers = numbers.substring(numbers.indexOf('\n') + 1);
                numbers = numbers.replaceAll(separator!, ',');
            }

            for (let match of numbers.matchAll(regex2)) {
                console.log(match);
                const separator = match[1];
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
