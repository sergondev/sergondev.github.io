document.getElementById('current-date').innerText = new Date().toLocaleDateString();

function switchLanguage(lang) {
    document.querySelectorAll('[data-en]').forEach(el => {
        el.innerText = lang === 'ro' ? el.getAttribute('data-ro') : el.getAttribute('data-en');
    });
}
