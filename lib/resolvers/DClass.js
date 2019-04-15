const {isClass} =  require('../helpers');

const Resolver = require('./Resolver');

class DClass extends Resolver {
    verifyDepType(instanceNode) {
        console.log(instanceNode)
        if (!isClass(instanceNode.bootstrap)) {
            throw new Error(`${instanceNode.name} should be an object`);
        }
    }

    initObject(dependencies) {
        return new this.instanceNode.bootstrap(...dependencies);
    }
}
module.exports = DClass;
