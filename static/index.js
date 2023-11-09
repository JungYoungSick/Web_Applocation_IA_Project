
import bergerHandle from "./module/bergerhandle.js";
import jsonServing from "./module/jsonServing.js";
import OnOffCheckbox from "./module/OnOffCheckbox.js";


const menuButton = document.getElementById('menuButton');
const bergerMenu = document.getElementById('bergerMenu');

const textButton = document.getElementById("textButton");
const options = { hour: "2-digit", minute: "2-digit" };

const checkbox = document.getElementById("Assistant");
const statusMessage = document.getElementById("status");


bergerHandle(menuButton, bergerMenu);
jsonServing(textButton, options);
OnOffCheckbox(checkbox, statusMessage);
//OnOffCheckbox에서만 왜 콜백 함수로 표시해줘야 하는지 모르겠다.