import "./style.css";
import { Game, Const, CanvasPool } from "@vpmedia/phaser";
import { generateBitmapFont } from "@vpmedia/bitcharify";
import { loadImage } from "@vpmedia/bitcharify";
import { addToCachePhaser2 } from "@vpmedia/bitcharify";

class GameState {
  create() {
    const testText = "ABCDEFGHIJKLMNOPQRSTUVXYZ01234567890abcdefghijklmnoprstuxyz";
    const textStyle = { font: "Arial", fontSize: 24, fill: "#FFFFFF" };
    this.game.add.text(10, 400, testText, textStyle);
    //
    const canvas = CanvasPool.create(this);
    canvas.style.position = "absolute";
    canvas.style.display = "block";
    document.body.appendChild(canvas);
    //
    const fontStyle = { fontFamily: "Arial", fontSize: 24, fill: "#FFFFFF" };
    const font = generateBitmapFont(canvas, fontStyle);
    // console.log(font.canvas);
    // console.log(font.data);
    //
    loadImage(font.canvas.toDataURL()).then((event) => {
      // console.log("Image loaded", event.target);
      // CanvasPool.remove(this);
      addToCachePhaser2(this.game, "Arial_24px", font.data, event.target);
      this.game.add.bitmapText(10, 370, "Arial_24px", testText, 24);
    });
  }
}

const config = {
  width: 1000,
  height: 600,
  renderType: Const.RENDER_AUTO,
  backgroundColor: 0x333333,
  antialias: false,
  roundPixels: true,
};

const game = new Game(config);
game.state.add("Game", GameState);
game.state.start("Game");
window.game = game;
