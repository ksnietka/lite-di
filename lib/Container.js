const {DClass, DFunction, DObject, DSingleton} = require('../resolvers');

class Container {
    constructor() {
        this.dependencies = new Map();
    }

    bind(name, bootstrap, needs = []) {
        let depNode = {resolver: null, needs, bootstrap};
        this.dependencies.set(name, depNode);
        this._as(name, new DObject(this, depNode));
        return {
            as: this._as.bind(this, name),
            asClass: this._as.bind(this, name, new DClass(this, depNode)),
            asFunction: this._as.bind(this, name, new DFunction(this, depNode)),
            asSingleton: this._as.bind(this, name, new DSingleton(this, depNode))
        }
    }

    _as(name, resolver) {
        let depsNode = this.dependencies.get(name);
        depsNode.resolver = resolver;
        this.dependencies.set(name, depsNode);
    }

    get(name) {
        let node =  this.dependencies.get(name);
        return node ? node.resolver.resolve() : null;
    }

    getDependencies() {
        return this.dependencies;
    }


}
module.exports = Container;
