const fs=require('fs');
//read file asynchronously
fs.readFile('example.txt', 'utf8', (err, data)=>{
  if(err) throw err;
  console.log(data);
});
