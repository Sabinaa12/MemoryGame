import { Squares } from './Squares';
import * as PIXI from 'pixi.js'

export class Game extends PIXI.Container {
    private _square: Squares;
    private _app: PIXI.Application;
    private _tableSquares: Array<Squares>;
    private _colorsArray: any[] = [];
    private _colorsUsedArray: any[] = [];

    private _squareNumber: number = 12;


    constructor(app: PIXI.Application) {
        super();
        this._app = app;
        this.generateColor();

        this._tableSquares = new Array<Squares>();
        this.createTableGame();

    }

    private showSquare(id: number): any {
        let randomColor = (this._colorsArray[Math.floor(Math.random() * this._squareNumber - 1) + id]);
        if (this._colorsUsedArray[this._colorsArray.indexOf(randomColor)] == false) {
            this._square = new Squares(id, randomColor);

            this._colorsUsedArray[this._colorsArray.indexOf(randomColor)] = true;
        } else {
            let colorFound = this._colorsUsedArray.indexOf(this._colorsUsedArray.find(element => element == false));
            this._square = new Squares(id, this._colorsArray[colorFound]);
            this._colorsUsedArray[colorFound] = true;

        }

        return this._square;
    }

    private createTableGame(): void {
        let xOffset: number = 0;
        let yOffset: number = 0;
        for (let i = 0; i < this._squareNumber; i++) {
            let a = this.showSquare(i);

            this._square._clickOnSquareHandler = (id: number) => {
                console.log("Click", id);
            };
            this._tableSquares.push(a)
            this._tableSquares[i].name = i.toString();


            if (i % 4 == 0 && i != 0) {
                xOffset = 0;
                yOffset = yOffset + 150;


            } else if (i != 0) {
                this._tableSquares[i].position.y = this._tableSquares[i].position.y;
                xOffset++;

            }

            this._tableSquares[i].position.y = yOffset;
            this._tableSquares[i].position.x = this._tableSquares[i].position.x + xOffset * 150;

            console.log(this._tableSquares[i].position);
            console.log(this._tableSquares[i].name);

        }

        this._app.stage.addChild(...this._tableSquares);



    }

    private generateColor(): void {
        for (let i = 0; i < this._squareNumber / 2; i++) {
            this._colorsArray[i] = this._colorsArray[this._squareNumber - 1 - i] = '0x' + Math.floor(Math.random() * 16777215).toString(16);
            this._colorsUsedArray[i] = this._colorsUsedArray[this._squareNumber - 1 - i] = false;
        }
        console.log("0x", ...this._colorsArray);
    }

}