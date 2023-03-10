import {
    canvasWidth as width,
    canvasHeight as height,
    canvasColor as bgColor,
} from "./js/config.js";
import DrawingCanvas from "./js/dc.js";
import ToolBar from "./js/toolbar.js";
import { startDrawingPen } from "./js/pen.js";
import { startDrawingLine } from "./js/draw-line.js";
import { startDrawingTrapezoid } from "./js/draw-trapezoid.js";
import { startDrawingRectangle } from "./js/draw-rectangle.js";
import { startDrawingCircle } from "./js/draw-circle.js";
import { startDrawingPolygon } from "./js/draw-polygon.js";
import { switchTheme } from "./js/theme-switch.js";

const dc = new DrawingCanvas(width, height, bgColor);
const dcOverlay = new DrawingCanvas(width, height);
const toolBar = new ToolBar({
    Pen: { handler: startDrawingPen(dc, dcOverlay) },
    Line: { handler: startDrawingLine(dc, dcOverlay) },
    Circle: { handler: startDrawingCircle(dc, dcOverlay) },
    Rectangle: { handler: startDrawingRectangle(dc, dcOverlay) },
    Trapezoid: { handler: startDrawingTrapezoid(dc, dcOverlay) },
    Polygon: { handler: startDrawingPolygon(dc, dcOverlay) },
    Undo: { handler: () => dc.undo() },
    Clear: { handler: () => dc.clear() },
});

toolBar.appendTo("._container");
dc.appendTo("._container");
dcOverlay.appendTo("._container");
dcOverlay.canvas.style.marginTop = -height + "px";

switchTheme(dc);
