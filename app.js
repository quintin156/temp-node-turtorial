// npm - global command comes  with node
// npm --v or --version

// local dependency - use it only in particular project
// npm i or install <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip step)
// npm init -y (everything default)

const _ = require('lodash');

const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items);
console.log(newItems)