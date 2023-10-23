//thực hiện phép toán cơ bản
const operation = process.argv[2];
const num1 = parseFloat(process.argv[3]);
const num2 = parseFloat(process.argv[4]);
let result;

switch (operation) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        if (num2 === 0) {
            console.log('Cannot divide by zero!');
            process.exit(1);
        }
        result = num1 / num2;
        break;
    default:
        console.log('Invalid operation!');
        process.exit(1);
}
console.log(`Result: ${result}`);
