
import * as PIXI from 'pixi.js'

export class Squares extends PIXI.Graphics {
    public _clickOnSquareHandler: Function;
    private _id: number;
    private _color: number;

    constructor(id: number, color: number) {
        super();
        this._id = id;
        this._color = color;
        this.createSquare(0xff0000);
        this.interactive = true;
        this.buttonMode = true;
        this.onClick();
    }

    private createSquare(color: any): void {
        this.beginFill(color);
        this.drawRect(0, 0, 100, 100);
    }


    private onClick(): void {
        this.on('pointerdown', () => {
            this._clickOnSquareHandler(this._id);
            console.log("Click1", this._color);
            this.createSquare(this._color);
            this.interactive = false;
        });
    }
}