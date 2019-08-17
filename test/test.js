const assert = require('assert');
let io, readline, print, write;
const log = console.log
const fs = require('fs')
const inputPath = 'input.txt';
const outputPath = 'output.txt';
describe('js io', function () {
    before(() => {
        const id = fs.openSync(inputPath, 'w');
        fs.writeFileSync(id, 'hello\nworld', 'utf8');
        fs.closeSync(id);
        io = require('../lol-io');
        readline = io.readline
        print = io.print
        write = io.write;
    })
    it('readline', function () {
        const l1 = readline()
        const l2 = readline()
        log(l1, l2);
        assert.equal(l1, 'hello', 'first line is not "hello"')
        assert.equal(l2, 'world', 'second line is not "world"')
    });
    it('print', () => {
        print('kek 22 44');
        print('line 2');
        const result = fs.readFileSync(outputPath, 'utf8');
        assert.equal(result, 'kek 22 44\nline 2\n');
    })
    it('write', () => {
        write('hello')
        write('world')
        const result = fs.readFileSync(outputPath, 'utf8');
        assert.equal(result, 'kek 22 44\nline 2\nhelloworld');
    })
    after(() => {
        fs.unlinkSync(inputPath);
        fs.unlinkSync(outputPath);
    })
});