
import * as PIXI from 'pixi.js'

export class Squares extends PIXI.Graphics {
    constructor() {
        super();
    }

    public createSquare(): void {
        this.beginFill(0xff0000);
        this.drawRect(0, 0, 200, 100);
    }
}