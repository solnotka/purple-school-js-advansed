class Pers {
  
  constructor(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
  }
  speak() {
    console.log(this.language, this.name);
  }
}

class Ork extends Pers {
  #weapon;
  constructor(name, weapon) {
    super("ork", name, "orkish");
    this.#weapon = weapon;
  }
  hit() {
    console.log(`${this.name} hits by ${this.#weapon}!`)
  }
  speak() {
    super.speak();
    console.log(`Я великий и ужасный орк! Бойcя мой ${this.#weapon}! Грррр!!!`)
  }
}

const brr = new Ork("Brr", "hammer");

console.log(brr.__proto__);
brr.speak();
brr.hit();

class Elf extends Pers {
  #castType
  constructor(name, castType) {
    super("elf", name, "elvish");
    this.#castType = castType;
  }
  cast() {
    console.log(`${this.name} cast by ${this.#castType}!`);
  }
  speak() {
    super.speak();
    console.log('Я эльф и пришел с миром. Но это не точно')
  }
}

const aou = new Elf("Aou", "poison");

console.log(aou.__proto__);
aou.speak();
aou.cast();
