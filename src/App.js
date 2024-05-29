import * as PIXI from "pixi.js";
import { Loader } from "./Loader";
import { MainScene } from "./MainScene";

export class App {
    run() {

        // create canvas
        this.app = new PIXI.Application({
            resizeTo: document.getElementById("canvas-container"),
            antialias: true,
            transparent: true
        });
        document.getElementById("canvas-container").appendChild(this.app.view);

        // load resources
        this.loader = new Loader(this.app.loader);
        this.loader.preload().then(() => {
            this.start();
        });
    }

    start() {
        this.scene = new MainScene();
        this.app.stage.addChild(this.scene.container);
    }
}