function saveToLocalStorage(theme, language) {
    window.localStorage.setItem('theme',theme);
    window.localStorage.setItem('language', language);

    console.log('preferences has been saved')
}
saveToLocalStorage('dark', 'English')
console.log(window.localStorage.getItem('theme'))
