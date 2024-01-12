import { objEmoji } from "./data/emojIco.js";
import { data } from "./data/emoji.js";
var list = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');
let input = document.querySelector(".search");
let emojiCont = document.querySelector(".Emoji_container");

let randomFavicon = (obj) => {
  obj = Object.values(obj);
  let numRandom = Math.ceil(Math.random() * obj.length);
  return obj[numRandom]
};

list.forEach(function (element) {
  element.setAttribute("href", `${randomFavicon(objEmoji)}`);
});

function createCard(obj) {
  const cardNode = document.createElement("article");
  cardNode.classList.add("emoji_card");
  let arr = new Set(obj.keywords.split(' '));
  let uniq = Array.from(arr);
  cardNode.innerHTML = `
    <h3>${obj.symbol}</h3>
    <p class="emoji_name">${obj.title}</p>
    <p class="emoji_description">${uniq.join(' ')}</p>
    `;
  return cardNode;
}

let render = (obj) => {
  emojiCont.innerHTML = "";
  obj.forEach((el) => {
    emojiCont.append(createCard(el));
  });
};

data.forEach((el) => emojiCont.append(createCard(el)));

input.addEventListener("input", function () {
  const newData = data.filter(
    (el) =>
      el.keywords.toLowerCase().includes(input.value.trim().toLowerCase()) ||
      el.title.toLowerCase().includes(input.value.trim().toLowerCase())
    
  );
  render(newData);
});
