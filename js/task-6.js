function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector(`.input`);
const createBtn = document.querySelector(`[data-create]`);
const destroyBtn = document.querySelector(`[data-destroy]`);
const boxesContainer = document.querySelector(`#boxes`);

function createBoxes(amount) {

  destroyBoxes();

  let size = 30;
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement(`div`);
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginBottom = `5px`;

    boxes.push(box);
    size += 10;
  }
  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = ``;
}

createBtn.addEventListener(`click`, () => {
  
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ``;
  } else {
    alert(`Введіть число від 1 до 100!`)
  }
});

destroyBtn.addEventListener(`click`, destroyBoxes);