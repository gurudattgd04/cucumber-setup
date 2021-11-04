const importCwd = require('import-cwd');
const {setWorldConstructor} = importCwd("@cucumber/cucumber");

export class CustomWorld {
     variable;
    constructor() {
        this.variable = 0;
    }

    setTo(number) {
        this.variable = number;
    }

    incrementBy(number) {
        this.variable += number;
    }
}

setWorldConstructor(CustomWorld);