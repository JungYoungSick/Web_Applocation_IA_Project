const OnOffCheckbox = () => {


  checkbox.addEventListener("change", function () {
    const checkbox = document.getElementById("Assistant");
    const statusMessage = document.getElementById("status");
    if (checkbox.checked) {
      statusMessage.textContent = "Off-line";
    } else {
      statusMessage.textContent = "On-line";
    }
  });
}
export default OnOffCheckbox;