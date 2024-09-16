// Selecting the elements correctly
const languagesContainer = document.querySelector('.languages-container');
const languageHtml = document.querySelector('.languages-html');
const htmlContents = document.querySelectorAll('.html-content');

// Adding an event listener to the HTML section
languageHtml.addEventListener('click', moveLanguages);

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