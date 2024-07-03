const form = document.getElementById("form");
const submitBtn = document.getElementById("submit-btn");
const principalCard = document.querySelector(".principal");
const hiddenCard = document.querySelector(".hidden");
const selected = document.getElementById("selected");

submitBtn.addEventListener("click", () => {
  const checked = form.querySelector('input[name="point"]:checked');
  console.log(checked);
  if (checked) {
    const point = checked.value;
    principalCard.classList.add("d-none");
    hiddenCard.classList.remove("d-none");
    selected.textContent = point;
  }
});
