let express = require('express');
let app = express();
//if on heroku, use the provided port || use 4001
const PORT = process.env.PORT || 5006;
let bodyParser = require('body-parser');
let calcHistory=[];

function addNumbers(object){
    let x = parseInt(object.x);
    let y = parseInt(object.y);
    let result = x + y;
}


app.use(bodyParser.urlencoded({extended: true})); 

//Make sure to serve static files on localHost
app.use(express.static('server/public'));

app.get('/calculation', (req, res) =>{
      res.send(result);
 });

app.post('/calculation', (req,res) =>{
    let addToSend = req.body;
    console.log(req.body);
    calcHistory.push(addToSend);
    addNumbers(addToSend);
    res.sendStatus(200);//respond back to client 
   
});



// Start the server
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});