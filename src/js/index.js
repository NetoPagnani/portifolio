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

function radio(){
  const btradio1 = document.getElementById("radio1")
  const btradio2 = document.getElementById("radio2")
  const btradio3 = document.getElementById("radio3")
  const btradio4 = document.getElementById("radio4")

  

}

writeText();
