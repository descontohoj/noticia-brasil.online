// Function to determine if the script is running in an iframe or not
function isRunningInIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}

function handleAnimation(scrollY) {
  const animatedElements = document.querySelectorAll(".animation");
  const widerFactor = 10; // Adjust this value to control the range of movement
  const subtleFactor = 2; // Adjust this value to control the range of movement

  animatedElements.forEach((element, index) => {
    let newTransform;

    if (element.classList.contains("animate-float")) {
      newTransform = Math.sin(scrollY / 100 + index) * widerFactor * 10;
    } else if (element.classList.contains("animate-float-reverse")) {
      newTransform = Math.cos(scrollY / 100 + index) * widerFactor * 10;
    } 
    else if (element.classList.contains("animate-subtle")) {
      newTransform = Math.cos(scrollY / 100 + index) * subtleFactor * 10;
    } 
    element.style.transform = `translateY(${newTransform}px)`;
  });
}

if (isRunningInIframe()) {
  window.addEventListener("message", function (event) {
    if (event.data && typeof event.data.scrollY === "number") {
      handleAnimation(event.data.scrollY);
    }
  });
} else {
  window.addEventListener("scroll", function () {
    handleAnimation(window.scrollY);
  });
}
