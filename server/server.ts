import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello from the server :)');
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});