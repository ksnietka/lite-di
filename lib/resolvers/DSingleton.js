const Resolver = require('./Resolver');

class DSingleton extends Resolver {
    constructor(container, dep) {
        super(container, dep);
        this.instance = null;

    }

    initObject(dependencies) {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new this.instanceNode.bootstrap(...dependencies);
        return this.instance;
    }
}
module.exports = DSingleton;
