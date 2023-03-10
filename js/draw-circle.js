import { getColor } from "./color-picker.js";

export { startDrawingCircle };

function startDrawingCircle(dc, dcOverlay) {
    const { canvas } = dcOverlay;

    return () => {
        canvas.onmousedown = (e1) => {
            window.onmousemove = (e2) => {
                const dx = e2.offsetX - e1.offsetX;
                const dy = e2.offsetY - e1.offsetY;
                const radius = Math.sqrt(dx ** 2 + dy ** 2);
                dcOverlay.clear();

                dcOverlay.circle({
                    x: e1.offsetX,
                    y: e1.offsetY,
                    radius,
                    color: "grey",
                    thickness: 1,
                });
            };

            window.onmouseup = (e2) => {
                // const color = `hsl(${Math.random() * 360}, 75%, 60%)`;
                window.onmousemove = null;
                window.onmouseup = null;

                const dx = e2.offsetX - e1.offsetX;
                const dy = e2.offsetY - e1.offsetY;
                const radius = Math.sqrt(dx ** 2 + dy ** 2);

                dcOverlay.clear();

                dc.circle({
                    x: e1.offsetX,
                    y: e1.offsetY,
                    radius,
                    color: getColor(),
                });
                dc.history.push(dc.ctx.getImageData(0, 0, canvas.width, canvas.height))
                dc.index +=1;
                console.log(dc.history);
            };
        };
    };
}
