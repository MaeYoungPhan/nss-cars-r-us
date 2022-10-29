/*

    This module contains all of the data, or state, for the
    application. It exports functions that allow other
    modules to get copies of the state.

*/

const database = {
    paints: [
        {id: 1, color: "Silver", price: 5},
        {id: 2, color: "Midnight Blue", price: 6},
        {id: 3, color: "Firebrick Red", price: 7},
        {id: 4, color: "Spring Green", price: 8}
    ],
    interiors: [
        {id: 1, material: "Beige Fabric", price: 1.5},
        {id: 2, material: "Charcoal Fabric", price: 2.6},
        {id: 3, material: "White Leather", price: 3.7},
        {id: 4, material: "Black Leather", price: 4.8}
    ],
    technologies: [
        {id: 1, tech: "Basic Package (basic sound system)", price: 100},
        {id: 2, tech: "Navigation Package (include integrated navigation controls)", price: 200},
        {id: 3, tech: "Visibility Package (includes side and reat cameras)", price: 300},
        {id: 4, tech: "Ultra Package (includes navigation and visibility packages)", price: 400}
    ],
    wheels: [
        {id: 1, wheel: "17-inch Pair Radial", price: .5},
        {id: 2, wheel: "17-inch Pair Radial Black", price: .5},
        {id: 3, wheel: "18-inch Pair Spoke Silver", price: .75},
        {id: 4, wheel: "18-inch Pair Spoke Black", price: .75}
    ],
    customOrders: [
        {
            id: 1,
            paintId: 1,
            interiorId: 2,
            techId: 3,
            wheelId: 4,
            timestamp: Date.now()
        }
    ],
    orderBuilder: {},
}

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(tech => ({...tech}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTech = (id) => {
    database.orderBuilder.techId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}