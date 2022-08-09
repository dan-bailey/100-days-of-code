// stuff from the bootcamp
// maybe I'll add some list sorting so that the UL is ordered alphabetically
const form = document.querySelector('#listForm');
const input = document.querySelector('#listItem');
const list = document.querySelector('#outputList');

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const newEntry = input.value;
    const newLI = document.createElement("li");
    newLI.innerText = newEntry;
    list.append(newLI);
})