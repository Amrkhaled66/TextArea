const result = document.querySelector(".res");
const Text = document.getElementById("Text");
const charNms = document.querySelector(".charNms");
const wordNums = document.querySelector(".wordNums");
const clear = document.querySelector(".clear");
const copy = document.querySelector(".copy");
const undo = document.querySelector(".undo");
const Bold = document.querySelector(".bold")
const underline = document.querySelector(".underline")
const increasesize = document.querySelector(".increasesize")
const decreasesize = document.querySelector(".decreasesize")

const updatecharactercount = () => {
  const text = Text.value;
  const characterCount = text.length;
  result.textContent = `Character Count: ${characterCount}`;
};

charNms.addEventListener("click", () => {
  updatecharactercount();
});

clear.addEventListener("click", () => {
  Text.value = "";
  updatecharactercount();
});

copy.addEventListener("click", () => {
  Text.select();
  document.execCommand("copy");
});

wordNums.addEventListener("click", () => {
  const text = Text.value.trim(); // Remove leading/trailing whitespace
  const wordCount = text === "" ? 0 : text.split(/\s+/).length; // Split text by whitespace to count words
  result.textContent = `Word Count: ${wordCount}`;
});

Bold.addEventListener("click", () => {
  Text.classList.toggle("Bold")
})

underline.addEventListener("click", () => {
  Text.classList.toggle("underline")
})

increasesize.addEventListener("click", () => {
  const currSize = ((window.getComputedStyle(Text)).fontSize);
  Text.style.fontSize = `${parseFloat(currSize) + 2}px`;
})
decreasesize.addEventListener("click", () => {
  console.log("Decrease function");
  const currSize = ((window.getComputedStyle(Text)).fontSize);
  Text.style.fontSize = `${parseFloat(currSize) - 2}px`;
})