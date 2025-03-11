
const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const morgan = require('morgan');
const express = require('express' );
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' },
]
app.get('/', (req, res) => {
  res.render('index', {title: "My Express App", message: "Hello!"});
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`You can do It Mikat\nListening on port ${port}...`));

/**index.pug:
 * html 
 head  
  title=title 
 body 
  h1=message 
 */