let express = require('express');
let path = require('path');

let app = express();

app.get('/', (req, res) => {
    
    res.sendFile('index.html', {root: path.join(__dirname,  'public')});
});

app.get('/script.js', (req, res) => {
    res.sendFile('script.js', {root: __dirname});
})
app.listen(8080);