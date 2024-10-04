function generatePoem(event){
    event.preventDefault();
new Typewriter('#poem', {
  strings: "Your poem",
  autoStart: true,
  delay: 12,
  cursor: ""
});}

let poemFormElement= document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);