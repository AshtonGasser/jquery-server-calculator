$(document).ready(handleReady);

function handleReady() {
  console.log("jQuery is loaded!");
  // ⬇ Click listeners:
  $("#addBtn").on("click", addButton);
  $("#subtractBtn").on("click", subtractButton);
  $("#multiplyBtn").on("click", multiplyButton);
  $("#divideBtn").on("click", divideButton);
  $("#equalButton").on("click", clickedEqual);
  // $('#clearNumberButton').on('click', clickedClear)
  
  
  getAnswer()
  
  //clickedRestart();
} // End handleReady function.

calculateEquation = {};

function clickedEqual() {
  console.log("test log: in clickedEquals");
  let leftInput = $("#leftInput").val();
  let rightInput = $("#rightInput").val();
  calculateEquation.left = leftInput;
  calculateEquation.right = rightInput;
  //let addBtn = $('#addBtn').val()
  //calculateEquation.operator

  // ⬇ Sending those guesses to the server:
  $.ajax({
    method: "POST", // Posting information.
    url: "/solution", // Called a "route".
    data: calculateEquation,
  })
    .then(function (response) {
      // .then handles happy things; 2XX responses.
      getAnswer();
      console.log(response);
    })
    .catch(function (error) {
      // .catch handles bad things; 4XX or 5XX errors.
      console.log(error);
      alert("Something went wrong with GET, try again.");
    }); // End Ajax .then and .catch functions.
}

function addButton() {
  //console.log('clicked add');
  calculateEquation.operator = "+";
  //clickedClear()

  // $('#addBtn').on('click',)
  // let addBtn = $('#addBtn').val()
}

function subtractButton() {
  //console.log('clickedSubtract')
  calculateEquation.operator = "-";
  //clickedClear()
}

function multiplyButton() {
  calculateEquation.operator = "*";
  //clickedClear()
}

function divideButton() {
  calculateEquation.operator = "/";
  //clickedClear()
}
// ⬇ Getting those guesses from the server:
// ⬇ Render to Dom
function getAnswer() {
  $.ajax({
    method: "GET",
    url: "/solution",
  })
    .then(function (response) {
      console.log(response);
      $(".outputResult").empty();
      if(response.length>0){
      let result = response[response.length - 1];
       $(".outputResult").append(`
          <div>
        <h3>${result.result}</h3>
          </div>
          `);
        for(let i=0;i<response.length;i++){
           $("#outputHistory").append(`
          <div>
             <ul>${response[i].left} ${response[i].operator} ${response[i].right} = ${response[i].result}</ul>
        </div>
            `);
        }
    }})
    .catch(function (error) {
      console.log(error);
      alert("Something wrong with GET. Try going outside for a while");
    });
}


//(let i=0;i<response.length;i++)
