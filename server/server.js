const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require('./controller.js');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/api/kanye', controller.kanye);
app.post('/api/links', controller.create);
app.get('/api/links', controller.read)
app.put('/api/links/:id', controller.update);
app.delete('/api/links/:id', controller.delete);

const port = 3000; 

app.listen(port, () => console.log(`listening on port ${port}`));
