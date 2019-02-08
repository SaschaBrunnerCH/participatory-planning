
import Geometry from "esri/geometry/Geometry";

import Scene from "../../Scene";
import { redraw } from "../../support/graphics";
import "../support/extensions";
import Operation from "./Operation";

import SketchViewModel = require('esri/widgets/Sketch/SketchViewModel');
import Graphic = require('esri/Graphic');

export default class UpdateOperation extends Operation<Graphic> {

  private sketchViewModel: SketchViewModel;

  constructor(public graphic: Graphic, scene: Scene) {
    super(scene);

    this.sketchViewModel = new SketchViewModel({
      view: scene.view,
      layer: graphic.layer,
    });

    this.sketchViewModel.on("update", (event) => {
      if (event.state === "complete" || event.state === "cancel") {
        this.resolve(graphic);
      }
    });

    this.sketchViewModel.update(graphic);
  }

}