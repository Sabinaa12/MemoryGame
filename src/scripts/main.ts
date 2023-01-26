// app.ts

import * as PIXI from 'pixi.js'
import { Squares } from './Squares';



class Main {
    private _square: Squares;
    private _app: PIXI.Application;
    constructor() {
        this._app = new PIXI.Application();
        this._square = new Squares();
        this._app.renderer.backgroundColor = 0x1099bb;
        document.body.appendChild(this._app.view);

    }

    public showSquare(): void {
        this._square.createSquare();
        this._app.stage.addChild(this._square);
    }
}





const main = new Main();
main.showSquare();



