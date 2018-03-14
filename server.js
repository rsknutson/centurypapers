let express = require('express');
let path = require('path');

let app = express();

app.get('/', (req, res) => {
    
    res.sendFile('index.html', {root: path.join(__dirname,  'public')});
});
app.listen(8080);