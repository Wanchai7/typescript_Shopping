"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./Product");
const LineItem_1 = require("./LineItem");
console.log("#####  User #####");
const product = new Product_1.Product("12", "นีโอ", "ร้านยา");
console.log("#####  Line Item #####");
const lineItem1 = new LineItem_1.LineItem(15, 100, product);
console.log(lineItem1.toString);
