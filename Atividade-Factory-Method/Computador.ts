//Classe Abstrata Criadora - declara o método fábrica que deve retornar um objeto de uma classe produto
abstract class FactoryComputador  {
    //método abstrato
    abstract criarComputador() : IComputador   
}


//Criadores Concretos - sobrescrevem o método fábrica para mudar o tipo de produto resultante.
class ServerProduct extends FactoryComputador {
    criarComputador(): IComputador {
        return new Server
    }
}


//Criadores Concretos - sobrescrevem o método fábrica para mudar o tipo de produto resultante.
class PcProduct extends FactoryComputador {
    criarComputador(): IComputador {
        return new Pc
    }
}


//Interface Produto - declara as operações que todos os produtos concretos devem implementar.
interface IComputador {
    ram: number
    hd: number 
    cpu: number 
    type: string
    toString() 
}


//Produtos concretos - fornecem implementações da interface do produto.
class Server implements IComputador {
    ram: number
    hd: number 
    cpu: number 
    type: string

    get _ram() {
        return this.ram
    }

    get _hd() {
        return this.hd
    }

    get _cpu() {
        return this.cpu
    }

    get _type() {
        return this.type
    }

    toString() {
        return `
            Ram: ${this.ram} GB; Hd: ${this.hd} GB; CPU: ${this.cpu} GHz; type: Server.
        `
    }

}


//Produtos concretos - fornecem implementações da interface do produto.
class Pc implements IComputador {
    ram: number
    hd: number 
    cpu: number 
    type: string

    get _ram() {
        return this.ram
    }

    get _hd() {
        return this.hd
    }

    get _cpu() {
        return this.cpu
    }

    get _type() {
        return this.type
    }

    toString() {
        return `
            Ram: ${this.ram} GB; Hd: ${this.hd} GB; CPU: ${this.cpu} GHz; type: Pc.
        `
    }
}



