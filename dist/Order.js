"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    constructor(number, number, shipped, ship_to, status, total) {
        this.number = number;
        this.ship_to = ship_to;
        this.status = status;
        this.total = total;
    }
}
publice;
calculateTotal();
number;
{
    let totalPrice = 0;
    for (let i = 0; i < this.lineItems.length; i++) {
        totalPrice += this.lineItem[i].getPrice() * this.lineItems[i].getQuantity9;
    }
    return totalPrice;
}
