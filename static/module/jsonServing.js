const jsonServing = (text, options) => {


  textButton.addEventListener("click", () => {
    if (text) {
      const userName = document.getElementById("userName");
      const textBar = document.getElementById("textBar");
      const text = textBar.value;
      const currentTime = new Date().toLocaleTimeString(undefined, options);
      const textData = { userName, text, currentTime };
      const prompt = document.getElementById("prompt");
      const name = userName.value;

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
}

export default jsonServing;