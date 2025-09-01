class Enemy {
    constructor(name, health) {
        this.name = name;
        this.health = health
    }

    damage(power) {
        this.health -= power;
        console.log(`${this.name} понес урон ${power}. Остаток здоровья ${this.health}`)
    }
}

class Sword {
    constructor(power) {
        this.power = power;
    }
    damage(enemy) {
        enemy.damage(this.power);
    }
}

class Ork extends Enemy {
    constructor(name, health) {
        super(name, health)
    }

    damage(power) {
        const success = Math.floor(Math.random() * 2);
        console.log(success)
        if (success) {
            super.damage(power)
        }
        else console.log(`${this.name} избегает удара`)
    }
}

const badGuy = new Enemy('Bad Guy', 100);
const badOrk = new Ork("Bad Ork", 50);
const sword = new Sword(10);