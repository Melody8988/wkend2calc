let express = require('express');
let app = express();
//if on heroku, use the provided port || use 4001
const PORT = process.env.PORT || 5006;
let bodyParser = require('body-parser');
let calcHistory=[];

//uses
app.use(bodyParser.urlencoded({extended: true}));
//serve static files(look in server/public 1st)
app.use(express.static('server/public'));

function logic(object){
if(object.type == "Add"){
    x = parseInt(object.x);
    y = parseInt(object.y);
    result = x + y;
    history = ( x + ' + ' + y + ' = ' + result );
    calcHistory.push(history);

}else if(object.type == "Subtract"){
    x = parseInt(object.x);
    y = parseInt(object.y);
    result = x - y;
    history = ( x + ' - ' + y + ' = ' + result );
    calcHistory.push(history);
}else if(object.type == "Multiply"){
    x = parseInt(object.x);
    y = parseInt(object.y);
    result = x * y;
    history = ( x + ' * ' + y + ' = ' + result );
    calcHistory.push(history);
}else if(object.type == "Divide"){
    x = parseInt(object.x);
    y = parseInt(object.y);
    result = x / y;
    history = ( x + ' / ' + y + ' = ' + result );
    calcHistory.push(history);
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

app.post('/clearcalcHistory', (req,res) =>{
    calcHistory=[];
    res.sendStatus(200);//respond back to client 
});

// Start the server
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});