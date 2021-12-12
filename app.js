
const input = document.querySelector(".input-get");
const btn = document.querySelector(".btn-get");
const resultInner = document.querySelector(".result-inner");

btn.addEventListener("click", () => {
  //link generation
  const firstName = input.value
  const serverGender = "https://api.genderize.io";
  const serverNation = "https://api.nationalize.io";
  const urlGender = `${serverGender}?name=${firstName}`;
  const urlNation = `${serverNation}?name=${firstName}`;
 
  //gender value
 
  fetch(urlGender)
    .then(response => response.json())
    .then(result => {
       if(result.gender === null) {
        resultInner.textContent = `${firstName} is not found`;
      } else {
        resultInner.textContent = `${firstName} is ${result.gender}`;
      }
    })
 
  // In which country is it more common
  fetch(urlNation)
  .then(response => response.json())
  .then(result => (result.country).reduce((acc,curr) => acc.probability > curr.probability ? acc : curr))
  .then(result => resultInner.textContent = `${resultInner.textContent} from country: ${result.country_id}`)
  
});


