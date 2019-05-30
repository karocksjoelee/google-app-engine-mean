const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

app.use(express.static(path.join(__dirname, './public/dist/angular-with-node')));
app.get('/', (req, res) => {
    res.status(200).send('Hello World from express').end();
});

app.get('/api/books', (req, res) => {
    const books = [
        {
            name: 'Harry Porter',
            price: 200
        },
        {
            name: 'Game Of Thrones',
            price: 400
        },
        {
            name: 'Principle',
            price: 350
        }
    ];
    res.status(200).send(books);
});

