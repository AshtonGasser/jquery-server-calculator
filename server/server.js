const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

// 

// ⬇ This must be added before GET & POST routes below:
app.use(bodyParser.urlencoded({extended:true}))

// ⬇ Serve up static files (HTML, CSS, Client JS) below:
app.use(express.static('server/public'));


// ⬇ Shows when the server is running below:
app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  })



// ⬇ GET & POST Routes below:
// app.get('/results', (req, res) => {
//     console.log('Got to /results');

app.post('', (req, res) => {
console.log()



    res.send()
})