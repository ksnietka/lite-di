const Resolver = require('./Resolver');

class DFunction extends Resolver {
    verifyDepType(instanceNode) {
        if (typeof instanceNode.bootstrap !== 'function') {
            throw new Error(`${instanceNode.name} should be a function`);
        }
    }
    initObject(dependencies) {
        return this.instanceNode.bootstrap.bind(null, ...dependencies);
    }

    checkDemandedDependencies() {
        return this.instanceNode.needs;
    }
}

module.exports = DFunction;
