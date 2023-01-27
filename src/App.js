import { useEffect } from "react";
import * as PIXI from "pixi.js";
import { Live2DModel } from "pixi-live2d-display/cubism4";

window.PIXI = PIXI;

Live2DModel.registerTicker(PIXI.Ticker);

function App() {
  useEffect(() => {
    const app = new PIXI.Application({
      view: document.getElementById("canvas"),
      autoStart: true,
      resizeTo: window
    });

    Live2DModel.from("resources/runtime/rice_pro_t03.model3.json").then(
      (model) => {
        app.stage.addChild(model);

        model.anchor.set(0.5, 0.5);
        model.position.set(window.innerWidth / 2, window.innerHeight / 2);
        model.scale.set(0.1, 0.1);

        model.on("hit", () => {
          model.motion("Tap@Body");
        });
      }
    );
  }, []);

  return <canvas id="canvas" />;
}

export default App;
