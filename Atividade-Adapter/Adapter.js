class Duck {

    constructor(name){
        this.name = name;
    }

    peck(){
        console.log("peck, peck...");
    }

    run(){
        console.log("running...");
    }

}

class Chicken {

    constructor(name){
        this.name = name;
    }

    sing(){
        console.log("cococo...");
    }

    run(){
        console.log("running...");
    }
}

class DuckAdapter extends Duck {

    constructor(duck){
        super(duck.name);
    }

    peck(){
        console.log("cococo...");
    }

    run(){
        console.log("running...");
    }
}

let duck = new Duck("Donald");
let duckAdapter = new DuckAdapter(duck);

console.log(duck);
console.log(duck instanceof Duck);
duck.peck();

console.log(duckAdapter);
console.log(duckAdapter instanceof Duck);
console.log(duckAdapter instanceof DuckAdapter);

duckAdapter.peck();
duckAdapter.run();
