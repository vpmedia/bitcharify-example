import "./style.css";
import { Game, Display } from "phaser";
import { generateBitmapFont } from "./bitcharify/generateBitmapFont";
import { loadImage } from "./bitcharify/core/loadImage";
import { addToCache } from "./bitcharify/integration/phaser3/addToCache";

function create() {
  const testText = "ABCDEFGHIJKLMNOPQRSTUVXYZ01234567890abcdefghijklmnoprstuxyz";
  const textStyle = { fontFamily: "Arial", fontSize: 24, fill: "#FFFFFF" };
  this.add.text(10, 400, testText, textStyle);
  //
  const canvas = Display.Canvas.CanvasPool.create(this);
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
    addToCache(this.game, "Arial_24px", font.data, event.target);
    this.add.bitmapText(10, 370, "Arial_24px", testText, 24);
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
