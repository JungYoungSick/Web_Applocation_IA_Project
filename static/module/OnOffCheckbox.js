const OnOffCheckbox = (checkbox, statusMessage) => {


  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      statusMessage.textContent = "Off-line";
    } else {
      statusMessage.textContent = "On-line";
    }
  });
}
export default OnOffCheckbox;