const input = document.querySelector(".input-get");
const btn = document.querySelector(".btn-get");
const result = document.querySelector(".result");

btn.addEventListener("click", () => {
  //link generation
  const firstName = input.value;
  const serverGender = "https://api.genderize.io";
  const serverNation = "https://api.nationalize.io";
  const urlGender = `${serverGender}?name=${firstName}`;
  const urlNation = `${serverNation}?name=${firstName}`;
  //gender value
  fetch(urlGender)
    .then((response) => response.json())
    .then((res) => (result.textContent = `${firstName} is ${res.gender}`))

  // In which country is it more common
  fetch(urlNation)
  .then((response) => response.json())
  .then((res) =>  a = (res.country).reduce((acc,curr) => acc.probability > curr.probability ? acc : curr))
  .then(res => result.textContent = `${result.textContent} from country: ${res.country_id}`)
});


