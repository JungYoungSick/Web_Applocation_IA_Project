const jsonServing = () => {


  textButton.addEventListener("click", () => {
    if (text) {
      const userName = document.getElementById("userName");
      const text = textBar.value;
      const currentTime = new Date().toLocaleTimeString(undefined, options);
      const options = { hour: "2-digit", minute: "2-digit" };
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