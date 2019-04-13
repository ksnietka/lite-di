const Resolver = require('./Resolver');

class DObject extends Resolver {
    checkDemandedDependencies() {
        return [];
    }

    initObject(dependencies) {
        return this.instanceNode.bootstrap;
    }
}
module.exports = DObject;
