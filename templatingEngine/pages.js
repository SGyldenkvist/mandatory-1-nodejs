import { constructPage, readPage } from './templatingEngine.js';

import { topics } from '../data/topics.js';


const topicCards = topics.map((topic) => `
    <a href="${topic.url}" class="topic-card">
        <div>
            <strong>${topic.title}</strong>
            <p>${topic.description}</p>
        </div>
        <span>→</span>
    </a>
`).join('');



const frontpage = readPage('public/pages/frontpage/frontpage.html')
    .replace('{{TOPIC_CARDS}}', topicCards);


export const frontpagePage = constructPage(frontpage, {
    tabTitle: 'Node.js Documentation',
    cssLinks: '<link rel="stylesheet" href="/pages/frontpage/frontpage.css">'
});


const nodejs = readPage('public/pages/nodejs/nodejs.html');

export const nodejsPage = constructPage(nodejs, {
    tabTitle: 'Node.js | Documentation',
    cssLinks: '<link rel="stylesheet" href="/assets/css/documentation.css">'
});

const javascript = readPage('public/pages/javascript/javascript.html');

export const javascriptPage = constructPage(javascript, {
    tabTitle: 'JavaScript | Documentation',
    cssLinks: '<link rel="stylesheet" href="/assets/css/documentation.css">'
});



const restApi = readPage('public/pages/rest-api/rest-api.html');

export const restApiPage = constructPage(restApi, {
    tabTitle: 'REST API | Documentation',
    cssLinks: '<link rel="stylesheet" href="/assets/css/documentation.css">'
});


const express = readPage('public/pages/express/express.html');

export const expressPage = constructPage(express, {
    tabTitle: 'Express | Documentation',
    cssLinks: '<link rel="stylesheet" href="/assets/css/documentation.css">'
});



const clientServer = readPage('public/pages/client-server/client-server.html');

export const clientServerPage = constructPage(clientServer, {
    tabTitle: 'Client & Server | Documentation',
    cssLinks: '<link rel="stylesheet" href="/assets/css/documentation.css">'
});
