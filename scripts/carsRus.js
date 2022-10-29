
import { Wheels } from "./Wheels.js"
import { Technologies } from "./Technologies.js"
import { Orders } from "./Orders.js"
import { Interiors } from "./Interiors.js"
import { Paints } from "./Paints.js"
import { addCustomOrder } from "./database.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const carsRus = () => {
    return `
        <div class="hero"></div>
        <h1 class="title">Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__paints options">
                <h2>Paint Color</h2>
                ${Paints()}
            </section>
            <section class="choices__interiors options">
                <h2>Interiors</h2>
                ${Interiors()}
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${Wheels()}
            </section>
            <section class="choices__tech options">
                <h2>Technologies</h2>
                ${Technologies()}
            </section>
        </article>

        <article class="button">
            <button id="orderButton">Place My Car Order</button>
        </article>

        <article class="customOrders">
        <h2>Custom Car Orders</h2>
        ${Orders()}
        </article>

        <article class="thankYou">
        <p>🏎 We're racing to make your custom order. We'll meet YOU at the finish line 🏁</p>
        </article>


    `
}


