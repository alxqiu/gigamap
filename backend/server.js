const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
const app = express();
require('./database');

app.use(bodyParser.json()); // tells system to use JSON
app.use(cors()); // lets the app handle requests from diff origin domains

// API: send requests to /api/users users api
const users = require('/api/users');
app.use('/api/users', users);

// built files in build folder, will be built when npm run build is run
app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})

// apis available on localhost : 5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});



