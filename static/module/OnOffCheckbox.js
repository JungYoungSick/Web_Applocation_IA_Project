const checkbox = document.getElementById("Assistant");
const statusMessage = document.getElementById("status");

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    statusMessage.textContent = "Off-line";
  } else {
    statusMessage.textContent = "On-line";
  }
});

export default OnOffCheckbox;