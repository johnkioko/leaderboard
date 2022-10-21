import './style.css';
import './modules/display.js';

const clock = document.getElementById('clock');

const time = new Date();
clock.innerHTML = time;
