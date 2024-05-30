import * as PIXI from "pixi.js";
import * as TWEEN from "@tweenjs/tween.js";
import { Globals } from "./Globals";

let points = 100;

export class MainScene {
    constructor(app) {
        this.app = app;
        this.container = new PIXI.Container();
        this.createPegs(Globals.resources["circle"].texture);
        this.createBall(Globals.resources["golden_ball"].texture);
        this.createSlots(Globals.resources);
        this.positionElements();
        this.updateScore();
        this.playButtons = document.getElementsByClassName("play-button");
        Array.from(this.playButtons).forEach((playButton) => {
            playButton.addEventListener("click", () => this.startGame());
        });
        this.isGameStarted = false;
        this.isBallLanded = false;
    }

    createPegs(pegTexture) {
        const numRows = 10;
        const radius = 10;
        const spacing = 43;
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
        ball.y = 21;
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

        const spacing = 44;
        const totalWidth = slotTextures.length * spacing;

        for (let i = 0; i < slotTextures.length; i++) {
            const slot = new PIXI.Sprite(slotTextures[i]);
            slot.anchor.set(0.5);
            slot.width = 38;
            slot.height = 28;
            slot.x = (this.container.width - totalWidth) / 2 + i * spacing + spacing / 2;
            slot.y = 10 * spacing + spacing / 2;
            this.container.addChild(slot);
        }
    }

    positionElements() {
        this.container.position.set((this.app.screen.width - this.container.width) / 2, (this.app.screen.height - this.container.height) / 2);
    }

    updateScore() {
        document.getElementById("balance-text").innerHTML = points;
    }

    getBallSlotIndex() {
        const ball = this.container.getChildAt(55); // Get the golden ball
        const ballPositionX = ball.x; // Get the x position of the ball
        const slots = this.container.children.slice(-9); // Get the slot sprites
        const slotWidth = 44; // Width of each slot
        const offset = 22; // Offset to get the center of each slot

        // Iterate through the slots to find which slot the ball landed on
        for (let i = 0; i < slots.length; i++) {
            const slot = slots[i];
            const slotPositionX = slot.x - offset;
            if (ballPositionX >= slotPositionX && ballPositionX <= slotPositionX + slotWidth) {
                return i;
            }
        }

        return -1; // Return -1 if the ball did not land on any slot
    }

    // Logic to check the ball's position and return the points
    checkBallPosition() {
        const slotIndex = this.getBallSlotIndex(); // Get the index of the slot where the ball landed
        const slotPoints = [10, 5, 2, 1, 0, 1, 2, 5, 10]; // Points assigned to each slot position
        return slotPoints[slotIndex]; // Return the points for that slot position
    }

    startGame() {
        this.isGameStarted = true;
        points -= 10;
        this.updateScore();

        // Reset ball position
        const ball = this.container.getChildAt(55); // the golden ball is the 55th child
        ball.position.set((this.container.width - ball.width) / 2, 21);

        // Start ball animation
        const targetY = 500;
        const duration = 1000;

        new TWEEN.Tween(ball.position)
            .to({ y: targetY }, duration)
            .easing(TWEEN.Easing.Quadratic.Out)
            .onComplete(() => {
                // check if the ball landed on a slot
                const points = this.checkBallPosition();
                this.ballLandsOnSlot(points);
            })
            .start();

        // update tween
        const animate = () => {
            if(TWEEN.update()) {
                requestAnimationFrame(animate);
            }
        };
        animate();

        console.log("Game started!");
    }

    ballLandsOnSlot(slotPoints) {
        // Check if the points are less than 10
        if (points + slotPoints < 10) {
            this.gameOver();
        } else {
            this.isBallLanded = true;
            points += slotPoints;
            this.updateScore();
            this.enablePlayButton();
        }
    }

    enablePlayButton() {
        const playButtons = document.getElementsByClassName("play-button");
        Array.from(playButtons).forEach((playButton) => {
            playButton.disabled = false;
        });
    }

    gameOver() {
        alert("You ran out of points! Click OK to play again.");
        
        // Reset ball position
        const ball = this.container.getChildAt(55); // the golden ball is the 55th child
        ball.position.set((this.container.width - ball.width) / 2, 21);

        // Reset points to 100
        points = 100;
        this.updateScore();
    }
}