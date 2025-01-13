"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebUser = void 0;
const UserState_1 = require("./UserState");
class WebUser {
    constructor(login_id, password, webuser) {
        this.webuser = webuser;
        this.login_id = login_id;
        this.password = password;
        this.statie = UserState_1.UserState.NEW;
    }
    getLoin_id() {
        return this.login_id;
    }
    setLogin_id(login_id) {
        this.login_id = login_id;
    }
    getPassword() {
        return this.password;
    }
    setPassword(password) {
        this.password = this.password;
    }
    toString() {
        return `WebUser [
        login_id=${this.login_id},
        password=${this.password},
        state=${this.statie}
         ]`;
    }
}
exports.WebUser = WebUser;
