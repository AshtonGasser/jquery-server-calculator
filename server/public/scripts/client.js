$(document).ready(handleReady);

function handleReady() {
  console.log("jQuery is loaded!");
  // ⬇ Click listeners:
  $('#addBtn').on('click', clickedEqual)
  $('#subtractBtn').on('click', clickedEqual)
  $('#multiplyBtn').on('click', clickedEqual)
  $('#divideBtn').on('click', clickedEqual)
  $('#equalButton').on('click', clickedClear);
  $('#clearNumberButton').on('click', clickedEqual)
  //clickedRestart();
} // End handleReady function.

calculateEquation = {
    
};
function clickedEqual() {
  console.log("test log: in clickedEquals");
  let leftInput = $('#leftInput').val();
  let rightInput = $('#rightInput').val();

  
  // ⬇ Sending those guesses to the server:
  $.ajax({
    method: "POST", // Posting information.
    url: "/solution", // Called a "route".
    data: guesses,
  })
    .then(function (response) {
      // .then handles happy things; 2XX responses.
      console.log(response);
    })
    .catch(function (error) {
      // .catch handles bad things; 4XX or 5XX errors.
      console.log(error);
      alert("Something went wrong with GET, try again.");
    }); // End Ajax .then and .catch functions.


  // ⬇ Getting those guesses from the server:
  $.ajax({
    method: "GET",
    url: "/test",
  })
    .then(function (response) {
      console.log(response);
      renderDom(response);
    })
    .catch(function (error) {
      console.log(error);
      alert("Something went wrong with GET");
    });
} // End clickedSubmit function.

function clickedClear() {
  console.log('clicked clear')
  $('#guessOutput').text("");
  $.ajax({
    method: 'GET',
    url: '/restart',
  }).then(function (response) {
    console.log(response);
  }).catch(function (error) {
    console.log(error);
    alert('Something went wrong with GET, try again.')
  }) // Ajax GET .then call. 
} // End clickedRestart function

// ⬇ Function to renderDom:
function renderDom(info) {
  // ⬇ Appending to DOM:
  $("#outputResult").append(`
  
  
  
  
  
  
  
  `);
}
