const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Uhm? vou descer, vou comer vou estudar, paz de deus, vou estudar, ou amor fala!!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
