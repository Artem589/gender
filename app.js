
const input = document.querySelector('.input-get')
const btn = document.querySelector('.btn-get')
const result = document.querySelector('.result')

btn.addEventListener('click', () => {
//link generation
const firstName = input.value
const serverUrl = 'https://api.genderize.io';
const url = `${serverUrl}?name=${firstName}`;
//gender value
fetch(url)
.then(response => response.json())
.then(res => result.textContent = `${firstName} is ${res.gender}`)
})


