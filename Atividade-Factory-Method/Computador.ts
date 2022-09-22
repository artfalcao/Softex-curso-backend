class Pc {
    ram = 0
    hd = 0
    cpu = 0

    getRam() {
        return `${this.ram} GB`
    }

    getHd() {
        return `${this.hd} GB`
    }

    getCpu() {
        return `${this.cpu} GHz`
    }

    setRam(value) {
        this.ram = value
    }

    setHd(value) {
        this.hd = value
    } 

    setCpu(value) {
        this.cpu = value
    }  

    toString() {
        return (this.getRam() + ', ' + this.getHd() + ', ' + this.getCpu())
    }
}

class Server {
    ram = 0
    hd = 0
    cpu = 0

    getRam() {
        return `${this.ram} GB`
    }

    getHd() {
        return `${this.hd} GB`
    }

    getCpu() {
        return `${this.cpu} GHz`
    }

    setRam(value) {
        this.ram = value
    }

    setHd(value) {
        this.hd = value
    } 

    setCpu(value) {
        this.cpu = value
    }

    toString() {
        return (this.getRam() + ', ' + this.getHd() + ', ' + this.getCpu())
    }
}

class CreateComputer{
    createComputer(type){
        if (type === 'pc') {
            return new Pc()
        }
        
        if (type === 'server') {
            return new Server()
        }
    }
}

//TESTANDO
const createComp = new CreateComputer()
const pc = createComp.createComputer('pc')
const server = createComp.createComputer('server')
console.log('-----PC------')
console.log(pc.getRam())
console.log('-----SERVER------')
console.log(server.toString())
pc.setRam(10)
pc.setHd(5)
pc.setCpu(3)
server.setRam(100)
server.setHd(50)
server.setCpu(30)
console.log('-----PC------')
console.log(pc.toString())
console.log('-----SERVER------')
console.log(server.toString())



