const userName = document.getElementById("userName");
const prompt = document.getElementById("prompt");
const options = { hour: "2-digit", minute: "2-digit" };
const currentTime = new Date().toLocaleTimeString(undefined, options);
const textBar = document.getElementById("textBar");
const textButton = document.getElementById("textButton");




const name = userName.textContent
textButton.addEventListener("click", () => {
  const text = textBar.value;
  if (text) {
    const textData = { userName, text, currentTime };
    fetch('/jys/text', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(textData),

    })
      .then((response) => response.json())
      .then((data) => {
        prompt.value += name + "  " + text + "  " + currentTime + "\n";
        textBar.value = "";
      });
  }
});

export default jsonServing;