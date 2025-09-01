class Billing {
  #amount;
  constructor(amount) {
    this.#amount = amount;
    this.factor = 1;
  }
  calculateTotal() {
    return this.#amount * this.factor;
  }
}

class FixBilling extends Billing {
  constructor(amount) {
    super(amount);
  }
}

class HourBilling extends Billing {
  constructor(amount, hours) {
    super(amount);
    this.hours = hours;
    this.factor = this.hours
  }
}

class ItemBilling extends Billing {
  constructor(amount, items) {
    super(amount);
    this.items = items;
    this.factor = this.items;
  }
}

const calc1 = new Billing(20);
console.log(calc1.calculateTotal());
const calc2 = new FixBilling(30);
console.log(calc2.calculateTotal());
const calc3 = new HourBilling(40, 4);
console.log(calc3.calculateTotal());
const calc4 = new ItemBilling(50, 4);
console.log(calc4.calculateTotal());
