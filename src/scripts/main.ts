// app.ts

import * as PIXI from 'pixi.js'
import { Game } from './game';



class Main {
    private _app: PIXI.Application;
    private _game: Game;
    constructor() {
        this._app = new PIXI.Application();
        this._game = new Game(this._app);
        this._app.renderer.backgroundColor = 0x1099bb;
        document.body.appendChild(this._app.view);
        this._app.stage.addChild(this._game);

    }


}





const main = new Main();



