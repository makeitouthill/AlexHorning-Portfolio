const contentBoxes = document.querySelectorAll("content-box");

contentBoxes.forEach(contentBox => {
  contentBox.addEventListener("click", () => {
    contentBox.classList.toggle("expanded");
  });
});