"use strict";

class User {
    #login;
    #password;
    #encryptPassword(password) {
        const newPass =  password.split("").reverse().join("");
        return newPass;
    }

    constructor(login, password) {
        this.#login = login;
        this.#password = this.#encryptPassword(password)
    }

    get login() {
        return this.#login;
    }

    checkPassword(password) {
        return this.#password === this.#encryptPassword(password)
    }

    changePassword(oldPass, newPass) {
        if (this.checkPassword(oldPass)) {
            this.#password = this.#encryptPassword(newPass);
        } else console.log('Ошибка')
    }
}


