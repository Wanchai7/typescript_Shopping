"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(id, address, phone, email) {
        this.id = id;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }
    getId() {
        return this.id;
    }
    getAddress() {
        return this.address;
    }
    setAddress(address) {
        this.address = address;
    }
    getPhone() {
        return this.phone;
    }
    setPhone(phone) {
        this.phone = phone;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email;
    }
    toString() {
        return `Customer[
        Id = ${this.id},
        Address = ${this.address},
        Phone=${this.phone},
        Email=${this.email},
        webuser=${this.toString}
    ]`;
    }
}
exports.Customer = Customer;
