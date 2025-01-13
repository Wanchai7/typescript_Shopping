import { UserState } from "./UserState";
 class WebUser{
    private webuser:WebUser;
    private login_id:string;
    private password:string;
    private statie:UserState;
    
    constructor(login_id:string ,password:string ,webuser:WebUser){
        this.webuser=webuser;
        this.login_id=login_id;
        this.password=password;
        this.statie=UserState.NEW;
    }
    public getLoin_id():string{
        return this.login_id;
    }
    public setLogin_id(login_id:string):void{
        this.login_id=login_id
    }

    public getPassword():string{
        return this.password;
    }
    public setPassword(password:string):void{
        this.password=this.password
    }
    public toString():string{
        return `WebUser [
        login_id=${this.login_id},
        password=${this.password},
        state=${this.statie}
         ]`
    }
}

export {WebUser};