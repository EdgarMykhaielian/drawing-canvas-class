export default class ToolBar {
    constructor(buttonDescriptors) {
        this.bar = document.createElement("ul");
        this.bar.style.display = "flex";

        const li = document.createElement("li");
        const input = document.createElement("input");
        input.type = "color";
        input.id = "colorPicker";
        input.value = "#ffff00";
        input.style.width = "116px";
        input.style.height = "38px";
        li.appendChild(input);
        this.bar.appendChild(li);

        for (const label in buttonDescriptors) {
            if (Object.hasOwnProperty.call(buttonDescriptors, label)) {
                const { handler } = buttonDescriptors[label];
                const li = document.createElement("li");
                const btn = document.createElement("button");

                btn.innerText = label;
                btn.onclick = handler;
                this.bar.appendChild(li).append(btn);
            }
        }
    }

    appendTo(selector) {
        const parent = document.querySelector(selector);

        if (!parent) {
            throw new ReferenceError(
                "There is no element like that: " + selector
            );
        }

        parent.appendChild(this.bar);
    }
}
