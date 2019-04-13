const Resolver = require('./Resolver');

class DFunction extends Resolver {
    initObject(dependencies) {
        return this.instanceNode.bootstrap.bind(null, ...dependencies);
    }

    checkDemandedDependencies() {
        return this.instanceNode.needs;
    }
}

module.exports = DFunction;
