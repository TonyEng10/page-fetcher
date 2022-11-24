let args = process.argv.slice(2);
const fs = require('fs');
const request = require('request');

let url = args[0];
let file = args[1];
// having seperate variables for the args helps minimize code needed putting in the arguments. args counted as seperate array so that's why args[0], args[1]
request(url, (error, response, body) => {
  const content = body; // this part not need since i could use body in arg direct but helped 
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
// notes about request part needs to have all the parameters but dont need the actual arguments in there 
  fs.writeFile(file, content, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${file}`)
  });

});


// need to make an http request and wait for response. check client related exercises
// after http request is complete need to take the data received and write it to a file in your local file system