import { canvasWidth as width, canvasHeight as height, canvasColor as bgColor } from "./js/config.js";
import DrawingCanvas from "./js/dc/dc.js"

const dc = new DrawingCanvas(width, height, bgColor);

dc.apendTo('._container');

dc.trapezoid({ x: 400, y: 800, bottomLength: 200, topLength: 100, height: 50, color: 'darkgrey' });

dc.circle({x: 400, y: 700, radius: 25, color: 'orange'})

dc.line({x1:400, y1:750, x2:600, y2:750, thickness: 2, color: 'black'})