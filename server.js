const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;



const app = express();

app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));


// Routes
app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});



// Tells server tro listen to info coming from defined port
app.listen(port, () => {
  console.log('Server is running on port ${port}!');

});
