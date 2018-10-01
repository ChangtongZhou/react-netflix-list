const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4000;

// Import routes from the movie
const movie = require('./routes/movie.route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', movie);

app.listen(PORT, () => console.log(`Netflix-list app listening on port ${PORT}`));