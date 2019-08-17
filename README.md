# lol-io

<a href="codefores.ru">Codeforces</a> uses d8 for testing javascript code. d8 provides IO functions, but if you don't want install d8 and you want testing your solutions using node.js then you can use this module<br><br>
If you want try d8 you can download it compiled for windows <a href="http://assets.codeforces.com/files/v8-3.32.0.7z">here</a><br><br>
Post about js on codeforces http://codeforces.com/blog/entry/10024<br>
Discussing on codeforces http://codeforces.com/blog/entry/57807

When you use this library, your code is valid for submitting to codeforces

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install lol-io
```

## Functions
- <code>write</code> - write line into <code>output.txt</code>, example <code>write('hello', 'world')</code>
- <code>print</code> - write line into <code>output.txt</code>, automatically prints new line, example <code>print('hello', 'world')</code>
- <code>readline</code> - read line from <code>input.txt</code>, example <code>var line = readline()</code>, if no more lines return <code>undefined</code>

## Features 
- automatic creation of <code>input.txt</code> and <code>output.txt</code>, if does not exist


# Examples

```js
var print = this.print || require('lol-io').print
var write = this.write || require('lol-io').write
var readline = this.readline || require('lol-io').readline
// a + b
const s = readline().split(' ')
print(+s[0] + +s[1]);
```

or

https://codeforces.com/contest/271/submission/58961340