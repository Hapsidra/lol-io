var fs = require('fs');

const inputPath = 'input.txt';
const outputPath = 'output.txt';

fs.writeFileSync(outputPath, '');

var index = 0;
var lines;
if (fs.existsSync(inputPath)) {
    lines = fs.readFileSync('input.txt', 'utf8').split('\n');
}
else {
    lines = [];
    fs.openSync(inputPath);
}

exports.readline = function() {
    return lines[index++];
}

exports.print = function(){
    var result = '';
    for(var i = 0; i < arguments.length; i++){
        result += arguments[i] + ' ';
    }
    fs.appendFileSync(outputPath, result + '\n', 'utf8');
}