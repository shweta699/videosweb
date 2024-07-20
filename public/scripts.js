// scripts.js// scripts.js
function changeLanguage() {
    const languageSelector = document.getElementById('language');
    const selectedLanguage = languageSelector.value;

    // Update page content based on selected language
    switch (selectedLanguage) {
        case 'en':
            updateContent('My Channel News', 'Select Language:', 'Select Category:');
            break;
        case 'hi':
            updateContent('मेरा चैनल समाचार', 'भाषा चुनें:', 'श्रेणी का चयन करें:');
            break;
        case 'te':
            updateContent('నా ఛానల్ వార్తలు', 'భాషను ఎంచుకోండి:', 'విభాగం ఎంచుకోండి:');
            break;
    }
}

function updateContent(title, languageLabel) {
    document.getElementById('pageTitle').textContent = title;
    document.querySelector('label[for="language"]').textContent = languageLabel;
}
function changeCategory() {
    const categorySelector = document.getElementById('category');
    const selectedCategory = categorySelector.value;

    // Filter videos based on selected category
    const videos = document.querySelectorAll('.video-container iframe');

    videos.forEach(video => {
        const category = video.getAttribute('data-category');

        if (selectedCategory === 'all' || category === selectedCategory) {
            video.style.display = 'block';
        } else {
            video.style.display = 'none';
        }
    });
}

function updateContent(title, languageLabel, categoryLabel) {
    document.getElementById('pageTitle').textContent = title;
    document.querySelector('label[for="language"]').textContent = languageLabel;
    document.querySelector('label[for="category"]').textContent = categoryLabel;
}
// document.addEventListener('DOMContentLoaded', () => {
//     const uploadForm = document.getElementById('uploadForm');

//     uploadForm.addEventListener('submit', async (event) => {
//         event.preventDefault();

//         const formData = new FormData(uploadForm);
//         const response = await fetch('/upload', {
//             method: 'POST',
//             body: formData
//         });

//         const result = await response.text();
//         console.log(result);
//     });
// });
