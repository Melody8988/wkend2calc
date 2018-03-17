let express = require('express');
let app = express();
//if on heroku, use the provided port || use 4001
const PORT = process.env.PORT || 5006;
let bodyParser = require('body-parser');
let calcHistory=[];

app.use(bodyParser.urlencoded({extended: true})); 

//Make sure to serve static files on localHost
app.use(express.static('server/public'));

app.get('/calculation', (req, res) =>{
    res.send(calcHistory);
});

app.post('/calculation', (req,res) =>{
    console.log(req.body);
    let valuesToSend = req.body;
    calcHistory.push(valuesToSend);
    console.log(calcHistory);
    res.sendStatus(200);//respond back to client 
   
});


// Start the server
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});