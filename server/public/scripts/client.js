
$(document).ready(readyNow);

function readyNow(){
    console.log('js')
    $('#addBtn').on('click', addNumbers);
    $('#subtractBtn').on('click', subtractNumbers);
    $('#multiplyBtn').on('click', multiplyNumbers);
    $('#divideBtn').on('click', divideNumbers);
    //get inputs when page loads v
    getUserInputs();
}

function getUserInputs(){
    $.ajax({
        type: 'GET',
        url: '/calculation'
    }).done(function(response){
        appendToHist(response); //new function to append to DOM
    });
}
function appendToHist(calcHistory){
    $('#histContent').empty();
    for (let input of calcHistory){
        console.log('INPUT:', input);
        let tr = $('<tr></tr>');
        tr.append('<td>' + input.first + input.second +  '</td>');
        $('#histContent').append(tr);
    }
}

function addNumbers(){
    console.log('addition test');
    let x = $('#firstNum').val();
    let y = $('#secondNum').val();
    let valuesToSend = {x: x, y: y, type: "Add"};

$.ajax({
    type: 'POST',
    data: valuesToSend,
    url:'/calculation'
}).done(function(response){
    console.log('Successfully sent to server')
    getUserInputs();
}).fail(function(response){
    alert('Did not send to server, sorry')
});

}