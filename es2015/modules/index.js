const sum = (x, y) => x + y;
const diff = (x, y) => x - y;
var product = (x, y) => x * y;

class ComplexNumber {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

    toString() {
        return `${this.real} + ${this.imaginary}i`;
    }
}

export {
    sum,
    diff,
    product,
    ComplexNumber as default
};