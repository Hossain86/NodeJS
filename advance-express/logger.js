function log(req, res, next){
  console.log('Logging in...');
  next(); // pass control to the next middleware or route handler
}
module.exports =log;