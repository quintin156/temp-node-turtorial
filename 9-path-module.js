// requiring built in path module
const path = require('path')

// loging path separator ( / , \ )
console.log(path.sep);

// to join paths
const filePath = path.join('/content/', 'sub-folder', 'test.txt')
console.log(filePath)

// to get base(last file) path 
const base = path.basename(filePath);
console.log(base);

// returns absolute path
const absolute = path.resolve(__dirname, 'content', 'sub-folder', 'test.txt')
console.log(absolute);