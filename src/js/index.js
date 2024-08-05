const arrayText = ["Front - End", "Mobile"];

const writeTime = 100;
const removeTime = 1000;

let indexSentence = 0;
let indexChar = 0;

const element = document.getElementById("funcao");

function writeText() {
  if (indexChar <= arrayText[indexSentence].length) {
    element.textContent = arrayText[indexSentence].substring(0, indexChar);
    indexChar++;
    setTimeout(writeText, writeTime);
  } else {
    setTimeout(removeText, removeTime);
  }
}

function removeText() {
  if (indexChar >= 0) {
    element.textContent = arrayText[indexSentence].substring(0, indexChar);
    indexChar--;
    setTimeout(removeText, writeTime);
  } else {
    indexSentence++;
    if (indexSentence >= arrayText.length) {
      indexSentence = 0;
    }
    setTimeout(writeText, removeText);
  }
}



writeText();
