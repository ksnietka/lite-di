const Container = require('./lib/Container');
const resolvers = require('./lib/resolvers');

a = {a: 1}


function res (a) {
    console.log(a)
    a.a = 2

}

function cons (a) {
    console.log(a);
}


let container = new Container();
container.bind('name', []).to(a);
container.bind('resolves', ['name']).toFunction(res);
container.bind('cons', ['name']).toFunction(cons);

let resolves1 = container.get('resolves');
resolves1()

let resolves2 = container.get('resolves');
resolves2();

let c = container.get('cons');
c()








module.exports = {Container, resolvers};
