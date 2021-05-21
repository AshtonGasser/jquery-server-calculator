$(document).ready(handleReady);

function handleReady() {
  console.log("jQuery is loaded!");
  // ⬇ Click listeners:
  $("#submitButton").on("click", clickedSubmit);
  //$('#restartButton').on('click', clickedRestart)
  //clickedRestart();
} // End handleReady function.

function clickedSubmit() {
  console.log("test log: in clickedSubmit");

  // ⬇ Sending those guesses to the server:
  $.ajax({
    method: "POST", // Posting information.
    url: "/test", // Called a "route".
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


// ⬇ Function to renderDom:
function renderDom(info) {
  // ⬇ Appending to DOM:
  $("#guessOutput").append(`
  
  
  
  
  
  
  
  `);
}
