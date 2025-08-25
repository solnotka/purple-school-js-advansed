const Pers = function (race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
};

Pers.prototype.speak = function () {
  console.log(this.language, this.name);
};

const Ork = function (name, weapon) {
  const instance = new Pers("ork", name, "orkish");
  instance.weapon = weapon;
  instance.hit = function () {
    console.log(`${this.name} hits by ${this.weapon}!`);
  };
  return instance;
};

const brr = new Ork("Brr", "hammer");

console.log(brr.__proto__);
brr.speak();
brr.hit();

const Elf = function(name, castType) {
    const instance = new Pers('elf', name, 'elvish');
    instance.castType = castType;
    instance.cast = function() {
        console.log(`${this.name} cast by ${this.castType}!`)
    }
    return instance;
}

const aou = new Elf("Aou", "poison");

console.log(aou.__proto__);
aou.speak();
aou.cast();
