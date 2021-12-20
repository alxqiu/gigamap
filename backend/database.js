const mongoose = require('mongoose');
const config = require('../config');
const connection = config.config.SECRET_CONNECTION;
mongoose.connect(connection,{ useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));

