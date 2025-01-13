import { UserState } from "./UserState";
class Customer {
    private id: string;
    private address: string;
    private phone: string;
    private email: string;

    constructor(id: string, address: string, phone: string, email: string) {
        this.id = id;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }

    public getId(): string {
        return this.id;
    }

    public getAddress(): string {
        return this.address;
    }

    public setAddress(address: string): void {
        this.address = address;
    }

    public getPhone(): string {
        return this.phone;
    }

    public setPhone(phone: string): void {
        this.phone = phone;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email;
    }

    public toString(): string {
        return `Customer[
        Id = ${this.id},
        Address = ${this.address},
        Phone=${this.phone},
        Email=${this.email},
        webuser=${this.toString}
    ]`
    }
}

export {Customer};