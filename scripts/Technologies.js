import { getTechnologies, setTech } from "./database.js"

const technologies = getTechnologies()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "technologies") {
            setTech(parseInt(changeEvent.target.value))
        }
    }
)

export const Technologies = () => {
    let html = `<select id="technologies">
    <option value="0">Please make a selection...</option>`

    // creating drop down menu of options using select HTML
    for (const tech of technologies) {
        html += `<option value="${tech.id}">${tech.tech}</option>`
    }

    html += "</select>"
    return html}