const Resolver = require('./Resolver');

class DObject extends Resolver {
    verifyDepType(instanceNode) {
        console.log(instanceNode.bootstrap)
        if (typeof instanceNode.bootstrap !== 'object') {
            throw new Error(`${instanceNode.name} should be an object`);
        }
    }
    checkDemandedDependencies() {
        return [];
    }

    initObject(dependencies) {
        return this.instanceNode.bootstrap;
    }
}
module.exports = DObject;
