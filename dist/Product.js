"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, name, supplier) {
        this.id = id;
        this.name = name;
        this.supplier = supplier;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name;
    }
    setSupplier() {
        return this.supplier;
    }
    toString() {
        return `Product[
        Id=${this.id},
        Name=${this.name},
        Supplier=${this.supplier}
        ]`;
    }
}
exports.Product = Product;
