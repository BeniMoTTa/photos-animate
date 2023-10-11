function showDescription(description) {
  document.getElementById("image-description").textContent = description;
}

function hideDescription() {
  document.getElementById("image-description").textContent = "";
}

const cards = document.querySelectorAll(".card-five");

cards.forEach((card) => {
  const backTitle = card.querySelector(".back-title");
  const contentText = card.querySelector(".text-five");

  card.addEventListener("mouseenter", () => {
    card.classList.add("card-color-hovered");
    backTitle.classList.add("back-title-hovered");
    contentText.classList.add("text-content-hovered");
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("card-color-hovered");
    backTitle.classList.remove("back-title-hovered");
    contentText.classList.remove("text-content-hovered");
  });
});
