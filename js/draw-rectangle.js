import { getColor } from "./color-picker.js";

export { startDrawingRectangle };

function startDrawingRectangle(dc, dcOverlay) {
    const { canvas } = dcOverlay;

    return () => {
        canvas.onmousedown = (e1) => {
            window.onmousemove = (e2) => {
                dcOverlay.clear();

                dcOverlay.rectangle({
                    x1: e1.offsetX,
                    y1: e1.offsetY,
                    x2: e2.offsetX,
                    y2: e2.offsetY,
                    color: "grey",
                    thickness: 1,
                });
            };

            window.onmouseup = (e2) => {
                window.onmousemove = null;
                window.onmouseup = null;

                dcOverlay.clear();

                dc.rectangle({
                    x1: e1.offsetX,
                    y1: e1.offsetY,
                    x2: e2.offsetX,
                    y2: e2.offsetY,
                    color: getColor(),
                });
                dc.history.push(dc.ctx.getImageData(0, 0, canvas.width, canvas.height))
                dc.index +=1;
                console.log(dc.history);
            };
        };
    };
}
