function throwAbstractMethodError () {
    throw new Error('Method is abstract and should be override in Child class');
}

function isClass(func) {
    return typeof func === 'function'
        && /^class\s/.test(Function.prototype.toString.call(func));
}

module.exports = {
    throwAbstractMethodError,
    isClass
};
