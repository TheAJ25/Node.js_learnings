const fs = require('fs');
const path = require('path');

// One methode:
const fileOps = async () => {
  try{

    const data = await fsPromises.readFile(path.join(__dirname, 'starter.txt'), 'utf8');
    console.log(data);

    await fsPromises.writeFile(path.join(__dirname, 'pw.txt'), 'I am a software engineering student');

    await fsPromises.appendFile(path.join(__dirname, 'pw.txt'), '\n\nHello welcome to my course.');

    await fsPromises.rename(path.join(__dirname, 'pw.txt'), path.join(__dirname, 'new_starter.txt'));

    const new_data = await fsPromises.readFile(path.join(__dirname, 'new_starter.txt'), 'utf8');
    console.log(new_data);

  } catch(err){
    console.error(err);
  }
}


//For reading a file
fs.readFile(path.join(__dirname, 'starter.txt'), 'utf8', (err, data) =>{
  if (err) throw err;
  // console.log(data);
  console.log(data.toString());
})

//For creating a new file and also we can append extra contents with it by including append function to it
fs.writeFile(path.join(__dirname, 'reply.txt'), 'Nice to meet you', (err) =>{
  if (err) throw err;
  console.log('Write complete');

  //Appending within the file
  fs.appendFile(path.join(__dirname, 'reply.txt'), '\n\nThis is called appending in a particular file', (err) =>{
    if (err) throw err;
    console.log('Append inside file complete');

    //We can also rename the file, in that case we have to call the fuction under append function
    fs.rename(path.join(__dirname, 'reply.txt'), path.join(__dirname, 'new_reply.txt'), (err) =>{
      if (err) throw err;
      console.log('Renaming file complete');
    })
  })
})

//Appending alone without creating any file also creates a new file
fs.appendFile(path.join(__dirname, 'test.txt'), 'This is append file testing.', (err) =>{
  if (err) throw err;
  console.log('Append complete');
})

// Exit on uncaught errors
process.on('uncaughtException', err =>{
  console.error(`There was a uncaught error: ${err}`);
  process.exit(1);
})