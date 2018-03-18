let express = require('express');
let app = express();
//if on heroku, use the provided port || use 4001
const PORT = process.env.PORT || 5006;
let bodyParser = require('body-parser');
let calcHistory=[];


app.use(bodyParser.urlencoded({extended: true})); 
app.use(express.static('server/public'));

function logic(object){
if(object.type == "Add"){
    console.log('you will add');
    x = parseInt(object.x);
    y = parseInt(object.y);
    result = x + y;
    console.log(result);
    history = ( x + ' + ' + y + ' = ' + result );
    calcHistory.push(history);
    console.log(history);
    console.log(calcHistory);
}else if(object.type == "Subtract"){
    console.log('you will subtract');
    x = parseInt(object.x);
    y = parseInt(object.y);
    result = x - y;
    console.log(result);
    history = ( x + ' - ' + y + ' = ' + result );
    calcHistory.push(history);
    console.log(history);
    console.log(calcHistory);
}else if(object.type == "Multiply"){
    console.log('you will multiply');
    x = parseInt(object.x);
    y = parseInt(object.y);
    result = x * y;
    console.log(result);
    history = ( x + ' * ' + y + ' = ' + result );
    calcHistory.push(history);
    console.log(history);
    console.log(calcHistory);
}else if(object.type == "Divide"){
    console.log('you will divide');
    x = parseInt(object.x);
    y = parseInt(object.y);
    result = x / y;
    console.log(result);
    history = ( x + ' / ' + y + ' = ' + result );
    calcHistory.push(history);
    console.log(history);
    console.log(calcHistory);
    }

}

app.get('/calculation', (req, res) =>{
      res.send(calcHistory);
 });

app.post('/calculation', (req,res) =>{
    let toCalc = req.body;
    console.log(req.body);//addToSend
    //calcHistory.push(addToSend);
    logic(toCalc);
    res.sendStatus(200);//respond back to client 
});

// Start the server
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});