let currentState = "start";

let gameData = {
  start: {
    text: "start the adventure",
    choices: ["Start"],
    consequences: ["start1"],
    image: "https://live.staticflickr.com/2650/4204913417_4ec59374a7_b.jpg",
  },
  start1: {
    text: "You find yourself in a mysterious forest with two paths. Choose your path.",
    choices: ["Follow the Moonlit Path", "Venture into the Shadowy Thicket"],
    consequences: ["moonlitPath", "shadowyThicket"],
    image: "image_url_path_forest_crossroads",
},
moonlitPath: {
    text: "You follow the moonlit path. What do you encounter?",
    choices: ["Enchanted Lake", "Mystical Creature"],
    consequences: ["enchantedLake", "mysticalCreature"],
    image: "image_url_moonlit_path",
},
shadowyThicket: {
    text: "You venture into the shadowy thicket. What do you discover?",
    choices: ["Hidden Village", "Secret Cave"],
    consequences: ["hiddenVillage", "secretCave"],
    image: "image_url_shadowy_thicket",
},
enchantedLake: {
    text: "You reach an enchanted lake. What's your next move?",
    choices: ["Talk to the Water Nymph", "Search for the Moonstone"],
    consequences: ["talkWaterNymph", "findMoonstone"],
    image: "image_url_enchanted_lake",
},
mysticalCreature: {
    text: "You meet a mystical creature. What will you do?",
    choices: ["Ask for Guidance", "Offer a Gift"],
    consequences: ["askGuidance", "offerGift"],
    image: "image_url_mystical_creature",
},
hiddenVillage: {
    text: "You discover a hidden village. What's your next move?",
    choices: ["Meet the Village Elder", "Join the Festival"],
    consequences: ["meetElder", "joinFestival"],
    image: "image_url_hidden_village",
},
secretCave: {
    text: "You find a secret cave. What will you do?",
    choices: ["Explore the Depths", "Decipher Ancient Runes"],
    consequences: ["exploreDepths", "decipherRunes"],
    image: "image_url_secret_cave",
},
talkWaterNymph: {
    text: "The Water Nymph bestows you with wisdom of the forest. Congratulations!",
    choices: ["Ending 1"],
    image: "image_url_water_nymph",
},
findMoonstone: {
    text: "You find the legendary Moonstone, gaining immense power. Congratulations!",
    choices: ["Ending 2"],
    image: "image_url_moonstone",
},
askGuidance: {
    text: "The mystical creature guides you to a hidden treasure. Congratulations!",
    choices: ["Ending 3"],
    image: "image_url_creature_guidance",
},
offerGift: {
    text: "Your gift earns you the creature's eternal friendship. Congratulations!",
    choices: ["Ending 4"],
    image: "image_url_creature_friendship",
},
meetElder: {
    text: "The Village Elder reveals ancient secrets to you. Congratulations!",
    choices: ["Ending 5"],
    image: "image_url_village_elder",
},
joinFestival: {
    text: "You join the festival and become an honorary villager. Congratulations!",
    choices: ["Ending 6"],
    image: "image_url_festival",
},
exploreDepths: {
    text: "You explore the cave's depths and find rare artifacts. Congratulations!",
    choices: ["Ending 7"],
    image: "image_url_cave_depths",
},
decipherRunes: {
    text: "You decipher the runes, unlocking ancient knowledge. Congratulations!",
    choices: ["Ending 8"],
    image: "image_url_decipher_runes",
},
  
};

function startGame() {
  currentState = "start";
  updatePage();
}

function updatePage() {
  let stage = gameData[currentState];
  document.getElementById("story-text").innerText = stage.text;

  let choicesList = document.getElementById("choices");
  choicesList.innerHTML = "";
  for (let i = 0; i < stage.choices.length; i++) {
    let choice = document.createElement("button");
    choice.innerText = stage.choices[i];
    choice.addEventListener("click", function () {
      currentState = stage.consequences[i];
      updatePage();
    });
    choicesList.appendChild(choice);
  }

  document.getElementById("story-image").src = stage.image;
}

startGame();