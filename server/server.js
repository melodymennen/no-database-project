const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require('./controller.js');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/api/test', controller.test);
app.post('/api/links', controller.post);

const port = 3000; 

app.listen(port, () => console.log(`listening on port ${port}`));
