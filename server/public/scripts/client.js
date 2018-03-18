$(document).ready(readyNow);
function readyNow(){
    console.log('js')
    $('#addBtn').on('click', addNumbers);
   // $('#subtractBtn').on('click', subtractNumbers);
   //$('#multiplyBtn').on('click', multiplyNumbers);
  //  $('#divideBtn').on('click', divideNumbers);
  
  // getUserInputs();
}

function postToDom(){
    $.ajax({
        type: 'GET',
        url: '/calculation'
    }).done(function(response){
        appendToHist(response); //new function to append to DOM
    });
}
function appendToHist(addStatement){
    $('#histContent').empty();
    appendString = '<tr><td>' + addStatement.x + '+' + addStatement.y + '=' + result + '<td></tr>'
    $('#histContent').append(appendString);

}

function addNumbers(){
    let x = $('#firstNum').val();
    let y = $('#secondNum').val();
    let addToSend = {x: x, y: y, type: "Add"};  
    console.log('x:', addToSend.x);
    console.log('y:', addToSend.y);
    $.ajax({
        type: 'POST',
        data: addToSend,
        url:'/calculation'
    }).done(function(response){
        console.log('Successfully sent to server');
       // getUserInputs();
    }).fail(function(response){
        alert('Did not send to server, sorry');
    });

}








