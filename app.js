import express from 'express';
import { readPage, constructPage } from './templatingEngine/templatingEngine.js';

const app = express();

app.use(express.static('public'));

const PORT = process.env.PORT ?? 8080;

app.get('/', (req, res) => {
    const frontPage = readPage('public/pages/frontpage/frontpage.html');

    const page = constructPage(frontPage, { 
        tabTitle: 'Node.js Documentation',
        cssLinks: '<link rel="stylesheet" href="/pages/frontpage/frontpage.css">'
    });

    res.send(page);

});


const server = app.listen(PORT, () => {
    console.log('Server is running on port: ', server.address().port);
});