class Car {
    #make;
    #model;
    #mileAge;

    constructor(make, model, mileAge) {
        this.#make = make;
        this.#model = model;
        this.#mileAge = mileAge;
    }

    get mileAge() {
        return this.#mileAge
    }

    set mileAge(ma) {
        this.#mileAge = ma
    }

    info = () => {
        console.log(this.#make, this.#model, this.#mileAge)
    }
}

const myCar = new Car('Volwo', '124', '0')

myCar.info();
console.log(myCar.mileAge)
myCar.mileAge = 10;
console.log(myCar.mileAge);