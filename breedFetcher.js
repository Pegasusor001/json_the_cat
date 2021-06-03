const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  const domain = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  request(domain, (error, response, body) => {
    if (error) {
      callback (error, null);
    }
    // console.log(error);
    const data = JSON.parse(body)[0];
    
    if (data){
      callback(null, data.description);
    } else {
      callback("Error, It\'s not found", null);
    }
    
    
  });
};

module.exports = { fetchBreedDescription };


