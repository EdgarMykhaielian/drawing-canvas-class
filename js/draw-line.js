import { getColor } from "./color-picker.js";
import { getThickness } from "./color-picker.js";
export { startDrawingLine };

function startDrawingLine(dc, dcOverlay) {
    const { canvas } = dcOverlay;

    return () => {
        canvas.onmousedown = (e1) => {
            window.onmousemove = (e2) => {
                dcOverlay.clear();

                dcOverlay.line({
                    x1: e1.offsetX,
                    y1: e1.offsetY,
                    x2: e2.offsetX,
                    y2: e2.offsetY,
                    thickness: getThickness(),
                    color: "grey",
                });
            };

            window.onmouseup = (e2) => {
                window.onmousemove = null;
                window.onmouseup = null;

                dc.line({
                    x1: e1.offsetX,
                    y1: e1.offsetY,
                    x2: e2.offsetX,
                    y2: e2.offsetY,
                    thickness: getThickness(),
                    color: getColor(),
                });

                dcOverlay.clear();
                //add history
                dc.history.push(dc.ctx.getImageData(0, 0, canvas.width, canvas.height))
                dc.index +=1;
                console.log(dc.history);
            };
        };
    };
}
