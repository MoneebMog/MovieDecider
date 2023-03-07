const nameInput = document.getElementById("name-input");
const addNameButton = document.getElementById("add-name-button");
const spinButton = document.getElementById("spin-button");
const namesList = document.getElementById("names-list");
const winnerContainer = document.getElementById("winner-container");
const winnerName = document.getElementById("winner-name");
let names = [];

addNameButton.addEventListener("click", () => {
  // Add the name to the list and display it in the names container
  const name = nameInput.value.trim();
  if (name) {
    names.push(name);
    const listItem = document.createElement("li");
    listItem.textContent = name;
    namesList.appendChild(listItem);
    nameInput.value = "";
  }
});

spinButton.addEventListener("click", () => {
  // Randomly choose a winner from the list
  if (names.length > 0) {
    const winner = names[Math.floor(Math.random() * names.length)];

    // Display the winner's name
    winnerName.textContent = winner;

    // Hide the input container and show the winner container
    document.getElementById("input-container").style.display = "none";
    document.getElementById("names-container").style.display = "none";
    winnerContainer.style.display = "block";

    // Add the "shake" class to the winner's name
    winnerName.classList.add("shake");
  }
});
