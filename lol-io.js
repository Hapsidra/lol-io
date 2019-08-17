const fs = require('fs');
const inputPath = 'input.txt';
const outputPath = 'output.txt';

fs.writeFileSync(outputPath, '');
if (!fs.existsSync(inputPath)) fs.openSync(inputPath, 'w');

let index = 0;
const lines = fs.readFileSync(inputPath, 'utf8').split('\n');

module.exports = {
    readline() {
        return String(lines[index++]);
    },
    print(...args) {
        fs.appendFileSync(outputPath, args.join(' ') + '\n', 'utf8');
    },
    write(...args) {
        fs.appendFileSync(outputPath, args.join(' '), 'utf8');
    }
}