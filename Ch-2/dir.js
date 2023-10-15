//Working with directry
const fs = require('fs');

//Creating directry if it does not exist
if(!fs.existsSync('./new')){
  fs.mkdir('./new', (err) => {
    if(err) throw err;
    console.log('Directory created')
  });
}

//Removing directry if it exist
if(fs.existsSync('./new')){
  fs.rmdir('./new', (err) => {
    if(err) throw err;
    console.log('Directory removed')
  });
}