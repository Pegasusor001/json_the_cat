const fs = require('fs');
const request = require('request');
const arg = process.argv;

const breedName = arg[2];
const domain = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(domain, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  const data = JSON.parse(body);
  if (data.length === 0){
    console.log ('The request breed name is not found.')
  } else {
    console.log(data[0]['description']);
  }
});

