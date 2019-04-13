class Resolver {
    constructor(container, dep) {
        this.instanceNode = dep;
        this.container = container;

    }

    checkDemandedDependencies() {
        this.container.getDependencies().get();
        return this.instanceNode.bootstrap.inject
            ? this.instanceNode.bootstrap.inject
            : this.instanceNode.needs;
    }

    getDependencies(demanded) {
        let dependencies = this.container.getDependencies();
        return demanded.map(d => dependencies.get(d).resolver.resolve());
    }

    initObject(dependencies) {
        throw new Error('Abstract');
    }

    resolve() {
        let demanded = this.checkDemandedDependencies();
        let dependencies = this.getDependencies(demanded);
        return this.initObject(dependencies);
    }
}
module.exports = Resolver;
