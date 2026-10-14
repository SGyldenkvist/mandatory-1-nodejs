import { constructPage, readPage } from './templatingEngine.js';


const topics = [
    {
        title: 'Node.js',
        description: 'Runtime, npm, modules and environment variables',
        url: '/nodejs'
    },
    {
        title: 'JavaScript',
        description: 'Data types, scope, functions, array methods and Date',
        url: '/javascript'
    },
    {
        title: 'REST API',
        description: 'Http methods, endpoints and CRUD operations',
        url: '/rest-api'
    },
    {
        title: 'Express',
        description: 'Server setup, routing, middelware, redirects and routers',
        url: '/express'
    },
    {
        title: 'Client & Server',
        description: 'Requests, responses, fetch, cors and xss',
        url: '/client-server'

    },
    {
        title: 'Frontend',
        description: 'Html, css, static files and semantic html',
        url: '/frontend'

    },
    {
        title: 'SSR',
        description: 'Server side rendering vs. client side rendering, templating, file reading',
        url: '/ssr'
    },
    {
        title: 'Git & tools',
        description: 'Git, gitHub, nodemon, Postman and deployment',
        url: '/git-tools'

    }

]


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
    tabTitle: 'Node.js | Documentation'
});
