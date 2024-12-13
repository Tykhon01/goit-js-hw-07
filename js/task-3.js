const inputField = document.querySelector(`#name-input`);
const outputSpan = document.querySelector(`#name-output`);

inputField.addEventListener(`input`, () => { 
const inputText = inputField.value;
const trimmedText = inputText.trim();
if (trimmedText) {
    outputSpan.textContent = trimmedText;
} else {
    outputSpan.textContent = `Anonymous`;
}
});