$(document).ready(handleReady);

function handleReady() {
  console.log("jQuery is loaded!");
  // ⬇ Click listeners:
  $('#addBtn').on('click', addButton)
  $('#subtractBtn').on('click', subtractButton)
  $('#multiplyBtn').on('click', multiplyButton)
  $('#divideBtn').on('click', divideButton)
  $('#equalButton').on('click',clickedEqual);
 // $('#clearNumberButton').on('click', clickedClear)
  //clickedRestart();
} // End handleReady function.

calculateEquation = {

}

function clickedEqual() {
  console.log("test log: in clickedEquals");
  let leftInput = $('#leftInput').val();
  let rightInput = $('#rightInput').val();
  calculateEquation.left=leftInput
  calculateEquation.right=rightInput
  //let addBtn = $('#addBtn').val()
  //calculateEquation.operator

  
  // ⬇ Sending those guesses to the server:
  $.ajax({
    method: "POST", // Posting information.
    url: "/solution", // Called a "route".
    data: calculateEquation
  })
    .then(function (response) {
      // .then handles happy things; 2XX responses.
      getAnswer()
      console.log(response);
    })
    .catch(function (error) {
      // .catch handles bad things; 4XX or 5XX errors.
      console.log(error);
      alert("Something went wrong with GET, try again.");
    }); // End Ajax .then and .catch functions.

  }


function addButton(){
  //console.log('clicked add');
  calculateEquation.operator = '+';
//clickedClear()


  // $('#addBtn').on('click',)
  // let addBtn = $('#addBtn').val()
}

function subtractButton(){
//console.log('clickedSubtract')
calculateEquation.operator = '-';
//clickedClear()


}

function multiplyButton(){
calculateEquation.operator = '*';
//clickedClear()
}

function divideButton(){
calculateEquation.operator = '/';
  //clickedClear()
}
  // ⬇ Getting those guesses from the server:

  function getAnswer(){
  $.ajax({
    method: "GET",
    url: "/solution",
  })
    .then(function (response) {
      console.log(response);
     // renderDom(response);
    })
    .catch(function (error) {
      console.log(error);
      alert("Something wrong with GET. Try going outside for a while");
    });
  }
// End clickedSubmit function.

// function clickedClear() {
//   console.log('clicked clear')
// }
//   $('#outputResult').text("");
//   $.ajax({
//     method: 'GET',
//     url: '/clear',
//   }).then(function (response) {
//     console.log(response);
//   }).catch(function (error) {
//     console.log(error);
//     alert('Something went wrong with GET, try again.')
//   }) // Ajax GET .then call. 
// End clickedClear function

// ⬇ Function to renderDom:
function renderDom() {
  // ⬇ Appending to DOM:
  $("#outputResult").append(`
  <div>
             <h4>equation history:</h4>
             <ul id = 'outputHistory'>
                <li>${leftInput}.val() ${calculateEquation.operator} ${rightInput}.val() = ${result}</li>
            </ul>
        </div>
  
     `);
}
// }
