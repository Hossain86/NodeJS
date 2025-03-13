const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const morgan = require('morgan');
const express = require('express' );
const app = express();

if(app.get('env') === 'development'){
  app.use(morgan('dev')); // logging in development mode
  startupDebugger('Morgan Enabled...');
}

//db work
  dbDebugger('Connected to the database...');

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`You can do It Mikat\nListening on port ${port}...`));
/*E:\Web Code\NodeJs>set DEBUG=app:startup

E:\Web Code\NodeJs>nodemon indx.js
[nodemon] 3.1.9
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node indx.js index.js`
  app:startup Morgan Enabled... +0ms
You can do It Mikat
Listening on port 3000...
^C
E:\Web Code\NodeJs>set DEBUG=app:*

E:\Web Code\NodeJs>nodemon index.js
[nodemon] 3.1.9
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node index.js`
  app:startup Morgan Enabled... +0ms
  app:db Connected to the database... +0ms
You can do It Mikat
Listening on port 3000... */