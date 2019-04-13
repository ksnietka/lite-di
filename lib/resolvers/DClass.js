const Resolver = require('./Resolver');

class DClass extends Resolver {
    initObject(dependencies) {
        return new this.instanceNode.bootstrap(...dependencies);
    }
}
module.exports = DClass;
