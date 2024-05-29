import "./styles/main.scss";
import { App } from "./App";
import casino from "./sprites/casino.png";

document.getElementById("logo").src = casino;

document.addEventListener("DOMContentLoaded", (event) => {

    const app = new App();
    app.run();

});