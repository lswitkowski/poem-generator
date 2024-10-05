function generatePoem(event){
    event.preventDefault();
let instructionsInput = document.querySelector("#input-field");
let key= "65ae2e8ao4f01409ca53644a9atfcbed";
 let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
let context="You are a talented poet who will write a 4-6 line poem on any subject submitted by the user. Make sure to follow user instructions, and separate each line with a <br/>.";
let apiUrl= `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

axios.get(apiUrl).then(displayPoem);}


function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 12,
    cursor: "",
  });
}

let poemFormElement= document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);