import express from 'express';
import { frontpagePage, nodejsPage, javascriptPage, restApiPage, expressPage, clientServerPage} from './templatingEngine/pages.js';
import { topics } from './data/topics.js';

const app = express();

app.use(express.static('public'));



// ===============================================
// Pages
// ===============================================

app.get('/', (req, res) => {
    res.send(frontpagePage);

});

app.get('/nodejs', (req, res) => {
    res.send(nodejsPage);
});

app.get('/javascript', (req, res) => {
    res.send(javascriptPage);
});


app.get('/rest-api', (req, res) => {
    res.send(restApiPage);
});


app.get('/express', (req, res) => {
    res.send(expressPage);
});


app.get('/client-server', (req, res) => {
    res.send(clientServerPage);
});


// ===============================================
// API 
// ===============================================

app.get('/api/topics', (req, res) => {
    res.send({ data: topics });
});



// ===============================================

const PORT = process.env.PORT ?? 8080;

const server = app.listen(PORT, () => {
    console.log('Server is running on port: ', server.address().port);
});