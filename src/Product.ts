class Product{
    private id:string;
    private name:string;
    private supplier:string;

    constructor(id:string ,name:string ,supplier:string){
        this.id=id;
        this.name=name;
        this.supplier=supplier
    }

    public getId():string{
        return this.id;
    }

    public getName():string{
        return this.name;
    }

    public setName(name:string):void{
        this.name;
    }

    public setSupplier():string{
        return this.supplier
    }

    public toString():string{
        return `Product[
        Id=${this.id},
        Name=${this.name},
        Supplier=${this.supplier}
        ]`
    }
}

export {Product};