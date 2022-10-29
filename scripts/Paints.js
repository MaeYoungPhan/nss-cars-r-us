import { getPaints, setPaint } from "./database.js"

const paints = getPaints()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "paint") {
            setPaint(parseInt(changeEvent.target.value))
        }
    }
)

export const Paints = () => {
    let html = `<select id="paint">
    <option value="0">Please make a selection...</option>`

    // creating drop down menu of options using select HTML
    for (const paint of paints) {
        html += `<option value="${paint.id}">${paint.color}</option>`
    }

    html += "</select>"
    return html}