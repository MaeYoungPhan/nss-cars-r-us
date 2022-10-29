import { getInteriors, setInterior } from "./database.js"

const interiors = getInteriors()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interior") {
            setInterior(parseInt(changeEvent.target.value))
        }
    }
)

export const Interiors = () => {
    let html = `<select id="interior">
    <option value="0">Please make a selection...</option>`

    // creating drop down menu of options using select HTML
    for (const interior of interiors) {
        html += `<option value="${interior.id}">${interior.material}</option>`
    }

    html += "</select>"
    return html}