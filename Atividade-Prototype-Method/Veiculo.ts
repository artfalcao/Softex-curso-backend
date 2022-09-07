//Protótipo Base
abstract class Veiculo {
    modelo: string
    marca: string
    cor: string
    numeroRodas: number
    
    constructor (modelo: string, marca: string, cor: string, numeroRodas: number) {
        this.modelo = modelo
        this.marca = marca
        this.cor = cor
        this.numeroRodas = numeroRodas
    }

    abstract clone() : Veiculo

    represent() {}
}


//Protótipo Concreto
class Carro extends Veiculo {
    numeroPortas: number
    peso: number

    clone() {
        return new Carro(this.modelo, this.marca, this.cor, this.numeroRodas)
    }
}


//Protótipo Concreto
class Moto extends Veiculo {
    numeroPortas: number
    peso: number

    clone() {
        return new Moto(this.modelo, this.marca, this.cor, this.numeroRodas)
    }
}


//
class Aplicacao {

    shapes : Array<Veiculo>
    
    criarVeiculos () {
        let carro = new Carro('uno', 'fiat', 'preta', 4)
        this.shapes[0] = carro

        let carro2 = carro.clone()
        this.shapes[1] = carro2

        let moto = new Moto('150', 'suzuki', 'prata', 2)
        this.shapes[2] = moto

        let moto2 = moto.clone()
        this.shapes[3] = moto2

        let carro3 = carro.clone()
        this.shapes[4] = carro3

        let moto3 = moto.clone()
        this.shapes[5] = moto3

        let carro4 = carro.clone()
        this.shapes[6] = carro4
    }

    businessLogic() {
        let shapesCopy : Array<Veiculo> = []

        for (let s in this.shapes) {
             //Completar com a lógica
        }
        
    }
}

