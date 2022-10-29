import { getWheels, setWheels } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheel") {
            setWheels(parseInt(changeEvent.target.value))
        }
    }
)

export const Wheels = () => {
    let html = `<select id="wheel">
    <option value="0">Please make a selection...</option>`

    // creating drop down menu of options using select HTML
    for (const wheel of wheels) {
        html += `<option value="${wheel.id}">${wheel.wheel}</option>`
    }

    html += "</select>"
    return html}