const RandExp = require('randexp');

class PasswordManager {
    generate = (strong) => {
        if (strong === true) {
            return new RandExp(/^[<>{}"/|;:.,~!?@#$%^=&*0-9_+]{12,16}$/).gen();
        } else {
            return new RandExp(/^[0-9,A-Za-z]{8,10}$/).gen();
        }
    }
}

export default (new PasswordManager());