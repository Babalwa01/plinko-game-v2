import * as PIXI from "pixi.js";
import { Globals } from "./Globals";

export class MainScene {
    constructor() {
        this.container = new PIXI.Container();
        this.createPegs(Globals.resources["circle"].texture);
        this.createBall(Globals.resources["golden_ball"].texture);
        this.createSlots(Globals.resources)
    }

    createPegs(pegTexture) {
        const numRows = 9;
        const radius = 10;
        const spacing = 40;
        const totalWidth = (numRows - 1) * spacing;

        for (let row = 0; row < numRows; row++) {
            const numPegs = row + 1;
            const rowWidth = numPegs * spacing;
            const xOffset = (totalWidth - rowWidth) / 2;

            for (let i = 0; i < numPegs; i++) {
                const peg = new PIXI.Sprite(pegTexture);
                peg.anchor.set(0);
                peg.width = radius * 2;
                peg.height = radius * 2;
                peg.x = xOffset + i * spacing + spacing / 2;
                peg.y = row * spacing + spacing / 2;
                this.container.addChild(peg);
            }
        }
    }

    createBall(ballTexture) {
        const ball = new PIXI.Sprite(ballTexture);
        ball.anchor.set(0);
        ball.width = 20;
        ball.height = 20;
        ball.x = (this.container.width - ball.width) / 2;
        ball.y = 0;
        this.container.addChild(ball);
    }

    createSlots(resources) {
        const slotTextures = [
            resources["slot_10"].texture,
            resources["slot_5"].texture,
            resources["slot_2"].texture,
            resources["slot_1"].texture,
            resources["slot_0"].texture,
            resources["slot_1"].texture,
            resources["slot_2"].texture,
            resources["slot_5"].texture,
            resources["slot_10"].texture
        ];

        const spacing = 40;
        const totalWidth = slotTextures.length * spacing;

        for (let i = 0; i < slotTextures.length; i++) {
            const slot = new PIXI.Sprite(slotTextures[i]);
            slot.anchor.set(0);
            slot.width = 30;
            slot.height = 20;
            slot.x = (this.container.width - totalWidth) / 2 + i * spacing + spacing / 2;
            slot.y = 9 * spacing + spacing / 2;
            this.container.addChild(slot);
        }
    }
}