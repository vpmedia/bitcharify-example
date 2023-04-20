import "./style.css";
import { Game } from "phaser";
import { generateBitmapFont, loadImage } from "@vpmedia/bitcharify";
import { addToCache } from "@vpmedia/bitcharify-phaser3";

/**
 * TBD.
 */
function create() {
  const scope = this;
  const testText = "ABCDEFGHIJKLMNOPQRSTUVXYZ01234567890abcdefghijklmnoprstuxyz";
  const textStyle = { fontFamily: "Arial", fontSize: 24, fill: "#FFFFFF" };
  scope.add.text(10, 400, testText, textStyle);
  //
  const canvas = document.createElement("canvas");
  canvas.style.position = "absolute";
  canvas.style.display = "block";
  document.body.appendChild(canvas);
  //
  const fontStyle = { fontFamily: "Arial", fontSize: 24, fill: "#FFFFFF" };
  const fontData = generateBitmapFont(canvas, fontStyle);
  //
  loadImage(canvas.toDataURL()).then((event) => {
    addToCache(scope.game, "Arial_24px", fontData, event.target);
    scope.add.bitmapText(10, 370, "Arial_24px", testText, 24);
    // canvas.width = 1;
    // canvas.height = 1;
  });
}

new Game({
  width: 1000,
  height: 600,
  backgroundColor: "#333333",
  banner: true,
  antialiasGL: false,
  transparent: false,
  autoRound: true,
  roundPixels: true,
  disableContextMenu: true,
  scene: {
    create,
  },
});
