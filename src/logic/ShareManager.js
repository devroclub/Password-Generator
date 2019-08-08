const Cryptr = require('cryptr');

class ShareManager {
    constructor() {
        this.cryptr = new Cryptr('Devro.CLUB:TotalySecretKey');
    }

    getLink = (password) => {
        const encrypted = this.cryptr.encrypt(password);
        return "/" + encrypted;
    };

    getPass = (hash) => {
        return this.cryptr.decrypt(hash);
    }
}

export default (new ShareManager());