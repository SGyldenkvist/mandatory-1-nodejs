import express from 'express';
import { frontpagePage } from './templatingEngine/pages.js';

const app = express();

app.use(express.static('public'));

const PORT = process.env.PORT ?? 8080;

app.get('/', (req, res) => {
    res.send(frontpagePage);

});


const server = app.listen(PORT, () => {
    console.log('Server is running on port: ', server.address().port);
});