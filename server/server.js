const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

let calculateEquation = [];
//let result = 0 


//let leftInput = req.body
// ⬇ This must be added before GET & POST routes below:
app.use(bodyParser.urlencoded({extended:true}))

// ⬇ Serve up static files (HTML, CSS, Client JS) below:
app.use(express.static('server/public'));


// ⬇ Shows when the server is running below:
app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  })

  



  


// ⬇ GET & POST Routes below:


 app.get('/solution', (req, res) => {
     console.log('Got to /test');
    

    res.send(calculateEquation)
 })


    app.post('/solution ', (req, res) => {
    console.log('got to /solutions POST, req.body: ', req.body)
    calculateEquation.push(req.body)
    let calculateEquation = req.body
    let result = doMatch(req.body)
    console.log(result)
    res.sendStatus(201)
})


const doMatch = (calculateEquation) => {
let left = calculateEquation.left
let right= calculateEquation.right
let operator = calculateEquation.operator
 
    //   }
    switch(operator){
        case '+':
        return left + right
        break;
        case '-':
        return left - right
        break;
        case '*':
        return left * right
        break;
        case '/':
        return left / right
        break;
        default:
            console.log('could not calculate')
    }
}

//calculateEquation.push(`${left}, ${operator}, ${right}, ${result}`)
console.log()