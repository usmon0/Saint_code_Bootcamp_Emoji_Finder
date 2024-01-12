import { data } from "./data/emoji.js";
let input = document.querySelector(".search");
let emojiCont = document.querySelector(".Emoji_container");

function createCard(obj) {
  const cardNode = document.createElement("article");
  cardNode.classList.add("emoji_card");
  cardNode.innerHTML = `
  <h3>${obj.symbol}</h3>
  <p class="emoji_name">${obj.title}</p>
  <p class="emoji_description">${obj.keywords}</p>
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
      el.keywords.toLowerCase().includes(input.value.toLowerCase()) ||
      el.title.toLowerCase().includes(input.value.toLowerCase())
  );
  render(newData);
});
