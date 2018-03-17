let express = require('express');
let app = express();
//if on heroku, use the provided port || use 4001
const PORT = process.env.PORT || 5006;
let bodyParser = require('body-parser');
let calcHistory=[];

// function addNumbers(addToSend){
//    result = addToSend.x + addToSend.y;
// }
// console.log(result);

app.use(bodyParser.urlencoded({extended: true})); 

//Make sure to serve static files on localHost
app.use(express.static('server/public'));

app.get('/calculation', (req, res) =>{
      res.send(calcHistory);
 });

app.post('/calculation', (req,res) =>{
    console.log(req.body);
    let addToSend = req.body;
    calcHistory.push(addToSend);
    console.log(calcHistory);
    let x = parseInt(addToSend.x);
    let y = parseInt(addToSend.y);
    console.log('this is x:', x);
    console.log('this is y:', y);
    let result = x + y;
    console.log ('we added them to get:', result);
    
    res.sendStatus(200);//respond back to client 
   
});



// Start the server
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});