class Sanduiche {
    custo(){}
}

class FrangoAssado extends Sanduiche {
    custo() {return 'O sanduíche de frango assado custa $4,50.'}
}

class IngredienteDecorador extends Sanduiche {
    custo(){}
}

class Pepperoni extends IngredienteDecorador {
    constructor(sanduiche) {
        super()
        this.sanduiche = sanduiche
    }
    custo() {return 'O ingrediente adicional pepperoni custa $0,99.'}
}

class QueijoMussarelaRalado extends IngredienteDecorador {
    constructor(sanduiche) {
        super()
        this.sanduiche = sanduiche
    }
    custo() {return 'O ingrediente adicional queijo mussarela ralado custa $2,00.'}
}

//TESTANDO
const sanduiche = new FrangoAssado()
const queijo = new QueijoMussarelaRalado(sanduiche)
const pepperoni = new Pepperoni(sanduiche)

console.log(queijo.sanduiche)
console.log(pepperoni.sanduiche)
console.log(sanduiche.custo())
console.log(queijo.custo())
console.log(pepperoni.custo())
