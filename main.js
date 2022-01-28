let button = document.querySelector("input");
let section = document.querySelector(".section")
let leftCard = document.querySelector(".left");
let rightCard = document.querySelector(".right");
let result = document.querySelector(".result");
let completed = document.querySelector(".completed")
let tryAgain = document.querySelector("button")
let fontGroup = document.querySelector(".group")

let arr = ["https://i.ibb.co/QDNDQTW/0012.png",
]


let index = Math.floor(Math.random() * arr.length)
let arrIndex = arr[index]

fontGroup.innerHTML = ` 
    <img src="${arrIndex}" class="auspicious-word">
  `


function flip() {
  let rotX = Math.floor(Math.random() * 80) * 180;
  let rotY = Math.floor(Math.random() * 80) * 180;

  if ((rotX / 180) % 2 === 0) {
    section.firstElementChild.innerText = "陰";
  } else {
    section.firstElementChild.innerText = "陽";
  }

  if ((rotY / 180) % 2 === 0) {
    section.lastElementChild.innerText = "陰";
  } else {
    section.lastElementChild.innerText = "陽";
  }

  if (section.firstElementChild.textContent === "陰" && section.lastElementChild.textContent === "陰") {
    result.innerText = "陰筊"
    result.style.opacity = "0"
  }

  if (section.firstElementChild.textContent === "陽" && section.lastElementChild.textContent === "陽") {
    result.innerText = "陽筊"
    result.style.opacity = "0"
  }

  if (section.firstElementChild.textContent === "陰" && section.lastElementChild.textContent === "陽" || section.firstElementChild.textContent === "陽" && section.lastElementChild.textContent === "陰") {
    result.innerText = "聖筊"
    result.style.opacity = "0"
  }

  if (button.checked) {
    leftCard.style.transform = "rotateY(" + rotX + "deg)";
    rightCard.style.transform = "rotateY(" + rotY + "deg)";
    button.disabled = true
    section.firstElementChild.style.opacity = "0"
    section.lastElementChild.style.opacity = "0"
  } else {
    leftCard.style.transform = "rotateY(" + rotX + "deg)";
    rightCard.style.transform = "rotateY(" + rotY + "deg)";
    button.disabled = true
    section.firstElementChild.style.opacity = "0"
    section.lastElementChild.style.opacity = "0"
  }

  setTimeout(resultAnswer, 2000)
  setTimeout(complete, 2500)
}

function resultAnswer() {
  section.firstElementChild.style.opacity = "1"
  section.lastElementChild.style.opacity = "1"
  result.style.opacity = "1"
  button.disabled = false
}

function complete() {
  if (result.textContent === "聖筊") {
    completed.classList.remove("d-none")
  }
}

button.addEventListener("click", flip);

tryAgain.addEventListener('click', () => {
  window.location.reload()
})