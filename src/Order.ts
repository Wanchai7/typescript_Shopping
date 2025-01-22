import { OrderStatus } from './OrderStatus';
class Order{
    private number:number;
    private OrderStatus:New;
    private shipped:string;
    private ship_to:string;
    private status:string;
    private total:string

    constructor(number::number , shipped:string , ship_to:string , status:string , total:string){
        this.number = number;
        this.ship_to = ship_to;
        this.status = status;
        this.total = total;

    }
}

publice calculateTotal():number{
    let totalPrice = 0;
    for(let i = 0; i <this.lineItems.length; i++){
        totalPrice += this.lineItem[i].getPrice() * this.lineItems[i].getQuantity9;
    }
    return totalPrice;
}