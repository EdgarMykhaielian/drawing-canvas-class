export { startDrawingTrapezoid };

function startDrawingTrapezoid(dc, dcOverlay) {
    const { canvas } = dcOverlay;

    return () => {
        const start = (canvas.onmousedown = (e1) => {
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
                dcOverlay.clear();

                dcOverlay.rectangle({
                    x1: e1.offsetX,
                    y1: e1.offsetY,
                    x2: e2.offsetX,
                    y2: e2.offsetY,
                    color: "grey",
                    thickness: 1,
                });

                const x = (e2.offsetX + e1.offsetX) / 2;
                const y = Math.max(e1.offsetY, e2.offsetY);
                const bottomLength = Math.abs(e2.offsetX - e1.offsetX);
                const height = Math.abs(e2.offsetY - e1.offsetY)

                window.onmousemove = (e3) => {
                    const topLength = Math.abs(e3.offsetX - x) * 2;

                    dcOverlay.clear();

                    dcOverlay.trapezoid({
                        x,
                        y,
                        bottomLength,
                        topLength,
                        height,
                        color: "grey",
                        thickness: 1,
                    });
                };

                canvas.onmousedown = (e3) => {
                    const topLength = Math.abs(e3.offsetX - x) * 2;

                    dcOverlay.clear();

                    dc.trapezoid({
                        x,
                        y,
                        bottomLength,
                        topLength,
                        height,
                        color: "white",
                    });
                    window.onmousemove = null;
                    canvas.onmousedown = start;
                };

                window.onmouseup = null;
            };
        });
    };
}
