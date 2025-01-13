import { UserState } from "./UserState";
import { WebUser } from "./WebUser";
import { Customer } from "./Customer";
import { Product } from "./Product";
import { LineItem } from "./LineItem";

console.log("#####  User #####");

const product = new Product("12" , "นีโอ" , "ร้านยา")
console.log("#####  Line Item #####");
const lineItem1 = new LineItem(15 , 100 ,product)
console.log(lineItem1.toString);