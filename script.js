let textArea = document.getElementById("evaluatedText");
let h3 = document.getElementById("letterCount");

textArea.addEventListener("keyup", () => {
  func();
});

let func = () => {
  console.log("helli");
  let count = textArea.value.length;
  h3.innerText = count;
};
