const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;

let storageArray = [];
//let result = 0
// const calculateEquationObject = {

// }
//let leftInput = req.body
// ⬇ This must be added before GET & POST routes below:
app.use(bodyParser.urlencoded({ extended: true }));

// ⬇ Serve up static files (HTML, CSS, Client JS) below:
app.use(express.static("server/public"));

// ⬇ Shows when the server is running below:
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});

// ⬇ GET & POST Routes below:

app.get("/solution", (req, res) => {
  console.log("YAY Got to /solution");

  res.send(storageArray);
});

// app.get("/clear", (req, res) => {
//   console.log("got to /clear");
//   clearCalculation()

// });

app.post("/solution", (req, res) => {
  console.log("got to /solutions POST, req.body: ", req.body);
 
  
  let result = doMath(req.body);
  req.body.result=result
  storageArray.push(req.body);
  //calculateEquation = req.body;

  console.log(result);
  res.sendStatus(201);
});
//⬇ Logic for clearButton below:
// const clearCalculation = () => {
// result = 0

// }

// ⬇ logic for calculation operators  below:
const doMath = (calculateEquation) => {
  let left = Number(calculateEquation.left);
  let right = Number(calculateEquation.right);
  let operator = calculateEquation.operator;

  //   }
  switch (operator) {
    case "+":
      return left + right;
      break;
    case "-":
      return left - right;
      break;
    case "*":
      return left * right;
      break;
    case "/":
      return left / right;
      break;
    default:
      console.log("could not calculate");
  }
};

//calculateEquation.push(`${left}, ${operator}, ${right}, ${result}`)

