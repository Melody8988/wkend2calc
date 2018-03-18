$(document).ready(readyNow);

function readyNow(){
    console.log('js');
    $('#addBtn').on('click', addNumbers);
    $('#subtractBtn').on('click', subtractNumbers);
    $('#multiplyBtn').on('click', multiplyNumbers);
    $('#divideBtn').on('click', divideNumbers);
    $('#clear').on('click', clearHistory);
    
}

function addNumbers(){
    x = $('#firstNum').val();
    y = $('#secondNum').val();
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

function subtractNumbers(){
    x = $('#firstNum').val();
    y = $('#secondNum').val();
    let subtractToSend = {x: x, y: y, type: "Subtract"};  
    console.log('x:', subtractToSend.x);
    console.log('y:', subtractToSend.y);
    $.ajax({
        type: 'POST',
        data: subtractToSend,
        url:'/calculation'
    }).done(function(response){
        console.log('Successfully sent to server');
        postToDom();
    }).fail(function(response){
        alert('Did not send to server, sorry');
    });
}

function multiplyNumbers(){
    x = $('#firstNum').val();
    y = $('#secondNum').val();
    let multiplyToSend = {x: x, y: y, type: "Multiply"};  
    console.log('x:', multiplyToSend.x);
    console.log('y:', multiplyToSend.y);
    $.ajax({
        type: 'POST',
        data: multiplyToSend,
        url:'/calculation'
    }).done(function(response){
        console.log('Successfully sent to server');
        postToDom();
    }).fail(function(response){
        alert('Did not send to server, sorry');
    });
}

function divideNumbers(){
    x = $('#firstNum').val();
    y = $('#secondNum').val();
    let divideToSend = {x: x, y: y, type: "Divide"};  
    console.log('x:', divideToSend.x);
    console.log('y:', divideToSend.y);
    $.ajax({
        type: 'POST',
        data: divideToSend,
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

function clearHistory(){
    
    $('#histContent').empty('');
}















