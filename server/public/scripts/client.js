$(document).ready(readyNow);
function readyNow(){
    console.log('js');
    $('#addBtn').on('click', addNumbers);
    $('#subtractBtn').on('click', subtractNumbers);
    $('#multiplyBtn').on('click', multiplyNumbers);
    $('#divideBtn').on('click', divideNumbers);
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
        postToDom();
    }).fail(function(response){
        alert('Did not send to server, sorry');
    });

}

function postToDom(){
    $.ajax({
        type: 'GET',
        url: '/calculation'
    }).done(function(response){
        appendToHist(response); //response should be history
    });
}

function appendToHist(response){
    console.log('in append');
    console.log(response);
    for(let statement of response)
    appendString = '<tr><td>' + statement + '<td></tr>'
    $('#histContent').append(appendString);
}













