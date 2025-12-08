import { generateBitmapFonts, loadImage } from '@vpmedia/bitcharify';
import { addToCache } from '@vpmedia/bitcharify-phaser2';
import { Const, Game } from '@vpmedia/phaser';
import './style.css';

class GameState {
  /**
   * TBD.
   */
  constructor() {
    /**
     * @type {Game} - TBD.
     */
    this.game = null;
  }
  /**
   * Create game objects.
   */
  create() {
    const testText = 'ABCDEFGHIJKLMNOPQRSTUVXYZ01234567890abcdefghijklmnoprstuxyz';
    const textStyle = { font: 'Arial', fontSize: 24, fill: '#FFFFFF' };
    this.game.add.text(10, 400, testText, textStyle);
    //
    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.display = 'block';
    document.body.appendChild(canvas);
    //
    const styles = [{ fontFamily: 'Arial', fontSize: 24, fill: '#FFFFFF' }];
    // @ts-expect-error TS2345
    const results = generateBitmapFonts(canvas, styles);
    for (const result of results) {
      loadImage(result.imageData).then((event) => {
        addToCache(this.game, 'Arial_24px', result.fontData, event.target);
        this.game.add.bitmapText(10, 370, 'Arial_24px', testText, 24);
        // canvas.width = 1;
        // canvas.height = 1;
      });
    }
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
game.state.add('Game', GameState);
game.state.start('Game');
window.game = game;
