// splitting bill functions will be made here
// can be moved to appropriate component later

// Example order
const orders = {
    "John": [
        { description: "Steak", price: 15.50, tip: 0.15 },
        { description: "Salad", price: 8.75, tip: 0.15 }
    ],
    "Alice": [
        { description: "Pasta", price: 20.75, tip: 0.18 },
        { description: "Wine", price: 12.30, tip: 0.18  }
    ],
    "Bob": [
        { description: "Burger", price: 10.45, tip: 0.2  },
        { description: "Fries", price: 8.20, tip: 0.2 },
        { description: "Soda", price: 5.30, tip: 0.2  }
    ]
};

// if we want to keep this function in util.js remember to export the function!
function splitBillEvenly(orders, tax = 1.08875) {
    // Check if the input is valid
    if (typeof orders !== 'object' || orders === null) {
        return "Orders must be valid object!";
    }

    let totalBill = 0;

    // Calculate the total bill
    for (const person in orders) {
        if (Object.hasOwnProperty.call(orders, person)) {
            const order = orders[person];
            if (!Array.isArray(order) || order.some(item => typeof item !== 'object' || !item.hasOwnProperty('description') || !item.hasOwnProperty('price') || typeof item.description !== 'string' || typeof item.price !== 'number' || item.price <= 0)) {
                return `Invalid order for ${person}. Please provide a valid array of objects with description and price.`;
            }
            totalBill += order.reduce((acc, item) => acc + item.price + (item.price*item.tip || 0), 0);
        }
    }

    // Calculate the amount each person has to pay
    const numberOfPeople = Object.keys(orders).length;
    const amountPerPerson = totalBill / numberOfPeople;

    return `Each person needs to pay $${amountPerPerson.toFixed(2)}.`;
}

// Example
console.log(splitBillEvenly(orders));


// if we want to keep this function in util.js remember to export the function!
function splitBySeat(orders) {
    // Check if the input is valid
    if (typeof orders !== 'object' || orders === null) {
        return "Orders must be valid object!";
    }

    let individualTotals = {};

    // Calculate individual totals
    for (const person in orders) {
        if (Object.hasOwnProperty.call(orders, person)) {
            const order = orders[person];
            if (!Array.isArray(order) || order.some(item => typeof item !== 'object' || !item.hasOwnProperty('description') || !item.hasOwnProperty('price') || typeof item.description !== 'string' || typeof item.price !== 'number' || item.price <= 0 || (item.hasOwnProperty('tip') && (typeof item.tip !== 'number' || item.tip < 0)))) {
                return `Invalid order for ${person}. Please provide a valid array of objects with description, price, and optional tip.`;
            }
            const totalWithoutTip = order.reduce((acc, item) => acc + item.price, 0);
            const totalTip = order.reduce((acc, item) => acc + (item.tip*item || 0), 0);
            individualTotals[person] = (totalWithoutTip + totalTip).toFixed(2);
        }
    }

    return individualTotals;
}

// Example
console.log(splitBySeat(orders));