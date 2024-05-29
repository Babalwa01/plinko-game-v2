import * as PIXI from "pixi.js";

export class App {

    run() {

        this.app = new PIXI.Application({
            resizeTo: document.getElementById("canvas-container"),
            antialias: true
        });

        document.getElementById("canvas-container").appendChild(this.app.view);

        console.log("canvas", this.app.view)
    }
}