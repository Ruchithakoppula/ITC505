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
    image: "https://live.staticflickr.com/6163/6194836074_5f539a637e_b.jpg",
},
moonlitPath: {
    text: "You follow the moonlit path. What do you encounter?",
    choices: ["Enchanted Lake", "Mystical Creature"],
    consequences: ["enchantedLake", "mysticalCreature"],
    image: "https://cdn11.bigcommerce.com/s-0544a/images/stencil/1280x1280/products/541/3069/Moonlight_Path_Type_Fragrance_Oil_PDP__83255.1711368036.jpg?c=2",
},
shadowyThicket: {
    text: "You venture into the shadowy thicket. What do you discover?",
    choices: ["Hidden Village", "Secret Cave"],
    consequences: ["hiddenVillage", "secretCave"],
    image: "https://fly.storage.tigris.dev/pai-images/28f0de38f0ef452991b329037004719e.jpeg",
},
enchantedLake: {
    text: "You reach an enchanted lake. What's your next move?",
    choices: ["Talk to the Water Nymph", "Search for the Moonstone"],
    consequences: ["talkWaterNymph", "findMoonstone"],
    image: "https://img.apmcdn.org/6d1796ba12e632d874ba2d20dcc243d87c71449c/normal/728a5f-20191114-arseny-meshchersky-mountain-lake.jpg",
},
mysticalCreature: {
    text: "You meet a mystical creature. What will you do?",
    choices: ["Ask for Guidance", "Offer a Gift"],
    consequences: ["askGuidance", "offerGift"],
    image: "https://qph.cf2.quoracdn.net/main-qimg-21711e6424898537ae271188e97fc2a5-pjlq",
},
hiddenVillage: {
    text: "You discover a hidden village. What's your next move?",
    choices: ["Meet the Village Elder", "Join the Festival"],
    consequences: ["meetElder", "joinFestival"],
    image: "https://www.wohoota.com/image/Secret-Garden-and-Waterfall-Jump-Bali-1.jpg",
},
secretCave: {
    text: "You find a secret cave. What will you do?",
    choices: ["Explore the Depths", "Decipher Ancient Runes"],
    consequences: ["exploreDepths", "decipherRunes"],
    image: "https://soranews24.com/wp-content/uploads/sites/3/2023/10/Tanegashima-sea-cave-Hamada-Beach-Yakushima-senza-iwaya-travel-trip-tourist-site-review-photos-1.jpg",
},
talkWaterNymph: {
    text: "The Water Nymph bestows you with wisdom of the forest. Congratulations!",
    choices: ["Ending 1"],
    image: "https://media.posterlounge.com/img/products/760000/753508/753508_poster.jpg",
},
findMoonstone: {
    text: "You find the legendary Moonstone, gaining immense power. Congratulations!",
    choices: ["Ending 2"],
    image: "https://www.moonomens.com/wp-content/uploads/2023/06/moonstone.jpg",
},
askGuidance: {
    text: "The mystical creature guides you to a hidden treasure. Congratulations!",
    choices: ["Ending 3"],
    image: "https://media.licdn.com/dms/image/C4D12AQFw_DRrvIxKUA/article-cover_image-shrink_600_2000/0/1520200141562?e=2147483647&v=beta&t=rpggDMzbm343poqnfce-IyvT1ZwKguunu_yBixmxOqw",
},
offerGift: {
    text: "Your gift earns you the creature's eternal friendship. Congratulations!",
    choices: ["Ending 4"],
    image: "https://ik.imagekit.io/storybird/images/633fd5f1-5dc7-4995-9c0a-8b2ec364068d/0_670183288.png",
},
meetElder: {
    text: "The Village Elder reveals ancient secrets to you. Congratulations!",
    choices: ["Ending 5"],
    image: "https://static.wikia.nocookie.net/warhammerfb/images/e/ec/Village_Elder_Bretonnia.jpg/revision/latest?cb=20160920224007",
},
joinFestival: {
    text: "You join the festival and become an honorary villager. Congratulations!",
    choices: ["Ending 6"],
    image: "https://cdn.britannica.com/57/244757-131-EBAFDFE0/Hindu-Holi-Festival-Mathura-Uttar-Pradesh-India.jpg",
},
exploreDepths: {
    text: "You explore the cave's depths and find rare artifacts. Congratulations!",
    choices: ["Ending 7"],
    image: "https://www.explore.com/img/gallery/visit-russia-to-explore-the-cave-with-unreachable-depths-dubbed-the-everest-of-caves/intro-1705008144.jpg",
},
decipherRunes: {
    text: "You decipher the runes, unlocking ancient knowledge. Congratulations!",
    choices: ["Ending 8"],
    image: "https://d1sjtleuqoc1be.cloudfront.net/wp-content/uploads/2014/03/25124944/shutterstock_13038943-scaled.jpg",
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