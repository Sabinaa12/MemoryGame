
import * as PIXI from 'pixi.js'
import gsap from "gsap";

export class Squares extends PIXI.Graphics {
    public _clickOnSquareHandler: Function;
    private _id: number;
    private _color: number;
    private _text: PIXI.Text;
    private _squareMask: PIXI.Graphics;
    public _wasFound: boolean = false;

    constructor(id: number, color: number) {
        super();
        this._id = id;
        this._color = color;
        this.createSquare(0xffffff);
        this.createMaskSquare(this._color);
        console.log("mask", this.mask);
        this.onClick();

    }
    getColor() {
        return this._color;
    }

    private createSquare(color: any) {
        this.beginFill(color);
        this.drawRect(0, 0, 100, 100);
        this.endFill();
        this.interactive = true;
        this.buttonMode = true;
        this.createSquareText("?");
    };


    private createSquareText(text: string): void {
        this._text = new PIXI.Text(text);
        this._text.x = this.width / 3;
        this._text.y = this.height / 4;
        this._text.style.fontSize = 50;
        this._text.style.fontWeight = 'bold';
        this.addChild(this._text);

    }
    private createMaskSquare(color: any): void {
        this._squareMask = new PIXI.Graphics();
        this._squareMask.beginFill(color);
        this._squareMask.drawRect(0, 0, 100, 100);
        this._squareMask.endFill();
        this._squareMask.visible = false;
        this.addChild(this._squareMask);

    }

    public resetSquaresToOriginalColor(): void {
        gsap.delayedCall(0.5, () => {
            this._squareMask.visible = false;
            this.interactive = true;
        });
    }


    private onClick(): void {
        this.on('pointerdown', () => {
            this._clickOnSquareHandler(this._id);
            console.log("Click1", this._color);
            this._squareMask.visible = true;
            this.interactive = false;
        });
    }
}