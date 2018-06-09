const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, err => {
	console.log('Counter listening on port %j', PORT);
});


var count = 0;
app.get('/', (req,res) => {
	count++;
	res.send('You have annoyed ' + count + ' times');
});
