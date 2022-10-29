import { getOrders } from "./database.js"
import { getPaints } from "./database.js"
import { getInteriors } from "./database.js"
import { getTechnologies } from "./database.js"
import { getWheels } from "./database.js"

const paints = getPaints()
const interiors = getInteriors()
const wheels = getWheels()
const technologies = getTechnologies()

const buildOrderListItem = (order) => {
// Remember that the function you pass to find() must return true/false
    const foundPaint = paints.find(
    (paint) => {
        return paint.id === order.paintId})
    let totalCost = foundPaint.price

    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId})
            totalCost += foundInterior.price
    
    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId})
            totalCost += foundWheel.price

    const foundTech = technologies.find(
        (tech) => {
            return tech.id === order.techId})
            totalCost += foundTech.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
        Order #${order.id} costs ${costString} and was placed on ${order.timestamp}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

