//globals
let sizeIncrement = 20;
let pointer = document.getElementById("doc-pointer");
let pointerbase = pointer.clientWidth;
//functions to be called
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
//---------------------------------------------------------//
//---------------------------------------------------------//

//function only at event
//move pointer
document.addEventListener("mousemove", function (e) {
  let pointerX = e.pageX;
  let pointerY = e.pageY;
  pointer.style.left = pointerX + "px";
  pointer.style.top = pointerY + "px";
});
//increase size when click
document.addEventListener("click", function (e) {
  let pointerX = pointerbase + sizeIncrement;
  pointer.style.width = pointerX + "px";
  pointer.style.height = pointerX + "px";
  setTimeout(() => {
    pointer.style.width = pointerbase + "px";
    pointer.style.height = pointerbase + "px";
  }, 100);
});

//welcoming-words
const wordsanimator = document.getElementById("welcome-words");
const words = ["Welcome", "to my", "Portfolio", "and..."];
let currentIndex = 0;
let isFadingIn = true;

function animateWord() {
  if (isFadingIn) {
    let opacity = 0;
    const fadeInInterval = setInterval(() => {
      opacity += 0.2;
      wordsanimator.style.opacity = opacity.toFixed(1);
      if (opacity >= 1) {
        clearInterval(fadeInInterval);
        setTimeout(() => {
          isFadingIn = false;
          animateWord();
        }, 100); // Wait for 1 second (adjust as needed)
      }
    }, 100); // Adjust the interval for smoother fading
  } else {
    let opacity = 1;
    const fadeOutInterval = setInterval(() => {
      opacity -= 0.2;
      wordsanimator.style.opacity = opacity.toFixed(1);
      if (opacity <= 0) {
        clearInterval(fadeOutInterval);
        currentIndex = (currentIndex + 1) % words.length;
        wordsanimator.textContent = words[currentIndex];
        setTimeout(() => {
          isFadingIn = true;
          animateWord();
        }, 100); // Wait for 1 second (adjust as needed)
      }
    }, 100); // Adjust the interval for smoother fading
  }
}

animateWord();

//pointer functions
function pointerHover() {
  pointer.style.border = "2px dashed rgb(189, 189, 189)";
  let pointerX = pointerbase + sizeIncrement;
  pointer.style.width = pointerX + "px";
  pointer.style.height = pointerX + "px";
}
function pointerUnhover() {
  pointer.style.border = "2px solid aliceblue";
  pointerX = pointerbase;
  pointer.style.width = pointerX + "px";
  pointer.style.height = pointerX + "px";
}
