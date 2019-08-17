var print = this.print || require('../lol-io').print
var write = this.write || require('../lol-io').write
var readline = this.readline || require('../lol-io').readline

const s = readline().split(' ')
print(+s[0] + +s[1]);