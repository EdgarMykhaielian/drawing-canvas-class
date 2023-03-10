import { getColor } from "./color-picker.js";
import { getThickness } from "./color-picker.js";
export { startDrawingPen };

function startDrawingPen(dc, dcOverlay) {
    const { canvas } = dcOverlay;
    let isDrawing = false;
    return () => {
        canvas.onmousedown = (e1) => {
            isDrawing = true;
            dc.ctx.beginPath();
            dc.pen({
                x1: e1.clientX,
                y1: e1.clientY,
                thickness: getThickness(),
                color: getColor(),
            });
            window.onmousemove = (e2) => {
                if(!isDrawing) return
                dc.pen({
                    x1: e2.clientX,
                    y1: e2.clientY,
                    thickness: getThickness() ,
                    color: getColor(),
                });
            };

            window.onmouseup = () => {
                isDrawing = false;
                window.onmousemove = null;
                window.onmouseup = null;
                dc.ctx.beginPath();

                dc.history.push(dc.ctx.getImageData(0, 0, canvas.width, canvas.height))
                dc.index +=1;
                console.log(dc.history);
            };
        };
    };
}
