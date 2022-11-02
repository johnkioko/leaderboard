import "./style.css";
import "./modules/display.js";

const clock = document.getElementById("clock");
const showTime = () => {
  clock.innerHTML = new Date().toLocaleTimeString();;
};
setInterval(showTime, 1000);

