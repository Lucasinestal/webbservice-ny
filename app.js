const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const router = require('./routes/postRoutes');
const port = 4000;


app.use("/", router);


app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(port, () => {
    console.log(`Lyssnar på http://localhost:${port}`)
});
