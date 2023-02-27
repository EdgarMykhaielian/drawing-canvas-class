import { canvasWidth as width, canvasHeight as height, canvasColor as bgColor } from "./js/config.js";
import DrawingCanvas from "./js/dc/dc.js";
import ToolBar from "./js/toolbar.js";
import { startDrawingLine } from "./js/draw-line.js";
import { startDrawingTrapezoid } from "./js/draw-trapezoid.js";
import { startDrawingRectangle } from "./js/draw-rectangle.js";
import { startDrawingCircle } from "./js/draw-circle.js";
import { startDrawingPolygon } from "./js/draw-polygon.js";

const dc = new DrawingCanvas(width, height, bgColor);
const dcOverlay = new DrawingCanvas(width, height);
const toolBar = new ToolBar({
    'Clear': { handler: () => dc.clear() },
    'Line': { handler: startDrawingLine(dc, dcOverlay) },
    'Circle': { handler: startDrawingCircle(dc, dcOverlay) },
    'Rectangle': { handler: startDrawingRectangle(dc, dcOverlay) },
    'Trapezoid': { handler: startDrawingTrapezoid(dc, dcOverlay) },
    'Polygon': { handler: startDrawingPolygon(dc, dcOverlay) },
});

toolBar.appendTo('._container');
dc.appendTo('._container');
dcOverlay.appendTo('._container');
dcOverlay.canvas.style.marginTop = - height + "px";

dc.trapezoid({ x: 400, y: 800, bottomLength: 800, topLength: 400, height: 400, color: 'darkgrey' });

dc.circle({ x: 400, y: 200, radius: 200, color: 'orange' });

dc.polygon({ x1: 200, y1: 450, x2: 300, y2: 450, x3: 300, y3: 500, color: 'red' }, { x: 200, y: 500 });

dc.line({ x1: 400, y1: 750, x2: 600, y2: 750, thickness: 20, color: 'black' });

dc.rectangle({x:400, y:250, width: 200, height:300, color:'yellow', thickness: 6})

dc.rectangle({x1:400, y1:250, x2: 200, y2:300, color:'red', thickness: 6})