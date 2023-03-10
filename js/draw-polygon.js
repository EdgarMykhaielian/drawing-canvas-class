import { getColor } from "./color-picker.js";

export { startDrawingPolygon };

function startDrawingPolygon(dc, dcOverlay) {
    const { canvas } = dcOverlay;

    const points = [];

    function draw() {
        dcOverlay.clear();

        if (points.length >= 2) {
            dcOverlay.polygon({
                points,
                color: "grey",
            });
        }

        points.forEach((point) => {
            dcOverlay.circle({
                x: point.x,
                y: point.y,
                radius: 3,
                color: "grey",
                thickness: 1,
            });
        });
    }

    return () => {
        canvas.onmousedown = (e1) => {
            const point = { x: e1.offsetX, y: e1.offsetY };
            points.push(point);

            draw();

            canvas.onmousemove = (e2) => {
                point.x = e2.offsetX;
                point.y = e2.offsetY;

                draw();
            };

            canvas.onmouseup = (e2) => {
                canvas.onmousemove = null;
                canvas.onmouseup = null;
                
                if (e2.detail === 2) {
                    dcOverlay.clear();

                    if (points.length >= 3) {
                        dc.polygon({
                            points,
                            color: getColor(),
                        });
                        dc.history.push(dc.ctx.getImageData(0, 0, canvas.width, canvas.height))
                dc.index +=1;
                console.log(dc.history);
                    }

                    points.length = 0;
                }
            };
        };
    };
}
