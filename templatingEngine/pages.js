import { constructPage, readPage } from './templatingEngine.js';

const frontpage = readPage('public/pages/frontpage/frontpage.html');

export const frontpagePage = constructPage(frontpage, {
    tabTitle: 'Node.js Documentation',
    cssLinks: '<link rel="stylesheet" href="/pages/frontpage/frontpage.css">'
});