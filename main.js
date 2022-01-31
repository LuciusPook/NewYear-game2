let button = document.querySelector("input");
let section = document.querySelector(".section")
let leftCard = document.querySelector(".left");
let rightCard = document.querySelector(".right");
let result = document.querySelector(".result");
let completed = document.querySelector(".completed")
let tryAgain = document.querySelector("button")
let fontGroup = document.querySelector(".group")
let title = document.querySelector(".title")

let arr = ["https://i.ibb.co/2PLCRCs/1.jpg",
  "https://i.ibb.co/CM5RGjs/2.jpg",
  "https://i.ibb.co/HHFnb1y/3.jpg",
  "https://i.ibb.co/Q8jQjt4/4.jpg",
  "https://i.ibb.co/BBf0cYx/5.jpg",
  "https://i.ibb.co/hBLMxBD/6.jpg",
  "https://i.ibb.co/Yjqm66v/7.jpg",
  "https://i.ibb.co/PWpKDM7/8.jpg",
  "https://i.ibb.co/HCB4hCQ/9.jpg",
  "https://i.ibb.co/xsQXyXN/10.jpg",
  "https://i.ibb.co/Ykp9bzH/11.jpg",
  "https://i.ibb.co/KFXpSdr/12.jpg",
  "https://i.ibb.co/s1Y902x/13.jpg",
  "https://i.ibb.co/t3qBSw0/14.jpg",
  "https://i.ibb.co/zHRwZDH/15.jpg",
  "https://i.ibb.co/th09vYk/16.jpg",
  "https://i.ibb.co/Kyp3BBH/17.jpg",
  "https://i.ibb.co/p20gvs3/18.jpg",
  "https://i.ibb.co/QdbL3pt/19.jpg"
]

let index = Math.floor(Math.random() * arr.length)
let arrIndex = arr[index]

fontGroup.innerHTML = ` 
    <img src="${arrIndex}" class="auspicious-word">
  `


function flip() {
  let rotX = Math.floor(Math.random() * 59 + 1) * 180;
  let rotY = Math.floor(Math.random() * 59 + 2) * 180;

  if ((rotX / 180) % 2 === 0) {
    section.firstElementChild.innerText = "陰";
  } else {
    section.firstElementChild.innerText = "陽";
  }

  if ((rotY / 180) % 2 === 0) {
    section.lastElementChild.innerText = "陽";
  } else {
    section.lastElementChild.innerText = "陰";
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

  if (section.firstElementChild.textContent === "陰" && section.lastElementChild.textContent === "陰") {
    result.innerText = "陰筊"
    result.style.opacity = "0"
  }

  if (section.firstElementChild.textContent === "陽" && section.lastElementChild.textContent === "陽") {
    result.innerText = "笑筊"
    result.style.opacity = "0"
  }

  if (section.firstElementChild.textContent === "陰" && section.lastElementChild.textContent === "陽" || section.firstElementChild.textContent === "陽" && section.lastElementChild.textContent === "陰") {
    result.innerText = "聖筊"
    result.style.opacity = "0"
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
    leftCard.style.opacity = "0"
    rightCard.style.opacity = "0"
  }
}

window.onload = (function playAudio() {
  const audio = document.createElement("audio")
  audio.src = "pongpong.mp3"
  audio.play()

  if (audio.pause) {
    audio.pause = false,
      audio.play()
  }
})()

button.addEventListener("click", flip);

tryAgain.addEventListener('click', () => {
  window.location.reload()
})

setTimeout(function () {
  title.classList.add("d-none")
}, 3000)