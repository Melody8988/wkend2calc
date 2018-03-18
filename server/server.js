let express = require('express');
let app = express();
//if on heroku, use the provided port || use 4001
const PORT = process.env.PORT || 5006;
let bodyParser = require('body-parser');
let calcHistory=[];



app.use(bodyParser.urlencoded({extended: true})); 
app.use(express.static('server/public'));

function addNumbers(object){
    let x = parseInt(object.x);
    let y = parseInt(object.y);
    let result = x + y;
    console.log(result);
    let history = ( x + ' + ' + y + ' = ' + result );
    calcHistory.push(history);
    console.log(history);
    console.log(calcHistory);
}

app.get('/calculation', (req, res) =>{
      res.send(calcHistory);
 });

app.post('/calculation', (req,res) =>{
    let addToSend = req.body;
    console.log(req.body);//addToSend
    //calcHistory.push(addToSend);
    addNumbers(addToSend);
    res.sendStatus(200);//respond back to client 
});

// Start the server
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});