const {DClass, DFunction, DObject, DSingleton} = require('./resolvers');

class Container {
    constructor() {
        this.dependencies = new Map();
    }

    bind(name, needs = []) {
        let depNode = {resolver: null, bootstrap: null, needs};
        this.dependencies.set(name, depNode);
        return this._returnToFunction.call(this, name);
    }

    get(name) {
        let node =  this.dependencies.get(name);
        return node ? node.resolver.resolve() : null;
    }

    getDependencies() {
        return this.dependencies;
    }

    injectMember(target, fieldMapping) {
        fieldMapping.forEach(map => {
            if (typeof map === 'string') {
                target[map] = this.get(map)
            }
            if (typeof map === 'object') {
                target[map.field] = this.get(map.name)
            }
        });
    }

    _to(name, ResolverConstructor, bootstrap) {
        let depsNode = this.dependencies.get(name);
        depsNode.bootstrap = bootstrap;
        depsNode.resolver = new ResolverConstructor(this, depsNode);
        this.dependencies.set(name, depsNode);
        return this._returnAsFunction.call(this, name, depsNode);
    }

    _returnToFunction(name) {
        return {
            to: this._to.bind(this, name, DObject),
            toClass: this._to.bind(this, name, DClass),
            toFunction: this._to.bind(this, name, DFunction),
            toSingleton: this._to.bind(this, name, DSingleton)
        }
    }

    _returnAsFunction(name, depsNode) {
        return {
            as: this._as.bind(this, name, depsNode)
        }
    }

    _as(name, depNode, resolver) {
        depNode.resolver = resolver;
    }
}
module.exports = Container;
