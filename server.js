const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
  res.send(`OK`)
})
 
function keepAlive() {
  server.listen(3000, () => { console.log('Server is online') });
}

// why export if you can just require the file
// and run it here
module.exports = keepAlive;

//bc it works