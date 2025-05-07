function saveToLocalStorage(theme, language) {
    window.localStorage.setItem('theme',theme);
    window.localStorage.setItem('language', language);

    console.log('preferences has been saved')
}
saveToLocalStorage('dark', 'English')
console.log(window.localStorage.getItem('theme'))


function loadFromSessionStorage(user) {
    const userData = window.sessionStorage.getItem(user);
    return userData;
}

window.sessionStorage.setItem('user',JSON.stringify({
    "name": "xyz",
    "cart-item": ['a','b']
}))

console.log(window.sessionStorage.getItem('user'))