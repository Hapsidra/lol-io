# lol-io

<a href="codefores.ru">Codeforces</a> uses d8 debug shell for testing js code. d8 provides IO functions, but if you don't want install d8 and you want testing your solutions using node, use this library.<br><br>
If you want to try d8 you can download it compiled for windows via MikeMirzayanov <a href="http://assets.codeforces.com/files/v8-3.32.0.7z">here</a><br><br>
Post about js on codeforces http://codeforces.com/blog/entry/10024

```js
var print = require('lol-io').print
var readline = require('lol-io').readline
print(readline());
```

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
- <code>print()</code> - write line into <code>output.txt</code>, example <code>print('hello', 'world')</code>
- <code>readline()</code> - read line from <code>input.txt</code>, example <code>var line = readline()</code>, if no more lines return <code>undefined</code>

## Features 
- automatic creation of <code>input.txt</code>, if it does not exist
- automatic creation of <code>output.txt</code>, if it does not exist

## How to use with codeforces
when you testing locally add code below to the beginning of your file<br>
```js
var print = require('lol-io').print
var readline = require('lol-io').readline
```
when you want to submit your solution delete the code above

