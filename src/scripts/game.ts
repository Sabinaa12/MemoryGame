import { Squares } from './Squares';
import * as PIXI from 'pixi.js'

export class Game extends PIXI.Container {
    private _square: Squares;
    private _app: PIXI.Application;
    private _tableSquares: Array<Squares>;

    constructor(app: PIXI.Application) {

        super();
        this._app = app;
        this._tableSquares = new Array<Squares>();
        this.createTableGame();
    }

    private showSquare(): Squares {
        this._square = new Squares();
        this._square.createSquare();

        return this._square;
    }

    private createTableGame(): void {
        let xOffset: number = 0;
        let yOffset: number = 0;
        for (let i = 0; i < 12; i++) {
            let a = this.showSquare();
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
}