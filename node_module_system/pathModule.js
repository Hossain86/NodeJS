const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);

//some other properties of the path module
// console.log(pathObj.root);
// console.log(pathObj.dir);
// console.log(pathObj.base);
// console.log(pathObj.ext);
// console.log(pathObj.name);
/*{
  root: 'e:\\',
  dir: 'e:\\Web Code\\NodeJs\\codes',
  base: 'pathModule.js',
  ext: '.js',
  name: 'pathModule'
}*/