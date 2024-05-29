import * as PIXI from "pixi.js";
import { Loader } from "./Loader";

export class App {
    run() {

        // create canvas
        this.app = new PIXI.Application({
            resizeTo: document.getElementById("canvas-container"),
            antialias: true
        });
        document.getElementById("canvas-container").appendChild(this.app.view);

        // load sprites
        this.loader = new Loader(this.app.loader);
        this.loader.preload().then(() => {
            this.start();
        });
    }

    // method to start game after resources have been loaded
    start() {
        console.log("the game started")
    }
}