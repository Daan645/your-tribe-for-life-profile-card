// Elements

// language containter
const languagesContainer = document.querySelector('.languages-container');

// language sections
const languageHtml = document.querySelector('.languages-html');
const languageCss = document.querySelector('.languages-css');
const languageJs = document.querySelector('.languages-js');
const languageNode = document.querySelector('.languages-node');
const languagePhp = document.querySelector('.languages-php');
const languageMysql = document.querySelector('.languages-mysql');

// language content
const htmlContents = document.querySelectorAll('.html-content');
const cssContents = document.querySelectorAll('.css-content');
const jsContents = document.querySelectorAll('.js-content');
const nodeContents = document.querySelectorAll('.node-content');
const phpContents = document.querySelectorAll('.php-content');
const mysqlContents = document.querySelectorAll('.mysql-content');

// Html tags easteregg
const htmlTags = document.querySelectorAll('.html-tags')
const htmlTagsButton = document.getElementById('html-tags-button');



// Eventlisteners

// Languages section
languageHtml.addEventListener('click', moveLanguagesHtml);

// Html tags easteregg
htmlTagsButton.addEventListener('click', htmlTagRain);



// Functions

// Pop-up function for languages section
function moveLanguagesHtml() {
    
    languageHtml.classList.add('languages-active');
    htmlContents.forEach(content => {
        content.style.display = 'block';
    });

    languageHtml.style.pointerEvents = 'none'; 

    
    const otherLanguages = document.querySelectorAll('.languages-container section:not(.languages-html)');
    otherLanguages.forEach(language => {
        language.style.display = 'none'; 
    });
}

function moveLanguagesCss() {
    
    languageCss.classList.add('languages-active');
    htmlContents.forEach(content => {
        content.style.display = 'block';
    });

    languageCss.style.pointerEvents = 'none'; 

    
    const otherLanguages = document.querySelectorAll('.languages-container section:not(.languages-css)');
    otherLanguages.forEach(language => {
        language.style.display = 'none'; 
    });
}

function moveLanguagesJs() {
    
    languageJs.classList.add('languages-active');
    htmlContents.forEach(content => {
        content.style.display = 'block';
    });

    languageHtml.style.pointerEvents = 'none'; 

    
    const otherLanguages = document.querySelectorAll('.languages-container section:not(.languages-js)');
    otherLanguages.forEach(language => {
        language.style.display = 'none'; 
    });
}

function moveLanguagesHtml() {
    
    languageHtml.classList.add('languages-active');
    htmlContents.forEach(content => {
        content.style.display = 'block';
    });

    languageHtml.style.pointerEvents = 'none'; 

    
    const otherLanguages = document.querySelectorAll('.languages-container section:not(.languages-html)');
    otherLanguages.forEach(language => {
        language.style.display = 'none'; 
    });
}

function moveLanguagesHtml() {
    
    languageHtml.classList.add('languages-active');
    htmlContents.forEach(content => {
        content.style.display = 'block';
    });

    languageHtml.style.pointerEvents = 'none'; 

    
    const otherLanguages = document.querySelectorAll('.languages-container section:not(.languages-html)');
    otherLanguages.forEach(language => {
        language.style.display = 'none'; 
    });
}

function moveLanguagesHtml() {
    
    languageHtml.classList.add('languages-active');
    htmlContents.forEach(content => {
        content.style.display = 'block';
    });

    languageHtml.style.pointerEvents = 'none'; 

    
    const otherLanguages = document.querySelectorAll('.languages-container section:not(.languages-html)');
    otherLanguages.forEach(language => {
        language.style.display = 'none'; 
    });
}

// Easteregg function on frontend development button
function htmlTagRain() {
    htmlTags.forEach(tag => {
        tag.classList.add('html-tags-rain');
    });
    console.log('make it rain');
}