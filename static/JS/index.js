// Elements
const languagesContainer = document.querySelector('.languages-container');
const languageHtml = document.querySelector('.languages-html');
const htmlContents = document.querySelectorAll('.html-content');
const htmlTagsButton = document.getElementById('html-tags-button');
const htmlTags = document.querySelectorAll('.html-tags')

// Eventlisteners
languageHtml.addEventListener('click', moveLanguages);
htmlTagsButton.addEventListener('click', htmlTagRain);

// Functions
function moveLanguages() {
    // Add a class to highlight the HTML section
    languageHtml.classList.add('languages-active');
    htmlContents.forEach(content => {
        content.style.display = 'block';
    });

    languageHtml.style.pointerEvents = 'none'; // Disable interaction with other sections

    // Hide other language sections
    const otherLanguages = document.querySelectorAll('.languages-container section:not(.languages-html)');
    otherLanguages.forEach(language => {
        language.style.display = 'none'; // Hide other sections
    });
}

function htmlTagRain() {
    htmlTags.forEach(tag => {
        tag.classList.add('html-tags-rain');
    });
    console.log('make it rain');
}