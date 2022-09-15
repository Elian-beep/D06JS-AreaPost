let text = document.querySelector('.text');
let words = document.querySelector('.word');
let characters = document.querySelector('.characters');

text.addEventListener('input', () => {
    characters.textContent = text.value.length;
    let txt = txt.value.trim();
    words.textContent = txt.split(/\s+/).filter((item) => item).length;
})