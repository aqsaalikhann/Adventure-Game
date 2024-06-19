import inquirer from "inquirer";
class player {
    fuelincrease() {
    }
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
class opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
let gamer = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please Enter Your Name:"
    }
]);
let Opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select Your Opponent",
        choices: ["Skeleton", "Dragon", "Zombie"]
    }
]);
let p1 = new player(player.name);
let o1 = new opponent(Opponent.select);
do {
    if (Opponent.select == "Skeleton") {
    }
    if (Opponent.select == "Dragon") {
    }
    if (Opponent.select == "Zombie") {
    }
    let ask = await inquirer.prompt([
        {
            name: "opt",
            type: "list",
            message: "What would you like to do?",
            choices: ["Attack", "Drink portion", "Run for your life..."]
        }
    ]);
    if (ask.opt == "Attack") {
        let num = Math.floor(Math.random() * 2);
        if (num > 0) {
            p1.fuelDecrease();
            console.log(`${p1.name} fuel is ${p1.fuel}`);
            console.log(`${o1.name} fuel is ${o1.fuel}`);
            if (p1.fuel <= 0) {
                console.log("You Loose, Better Luck Next Time");
                process.exit();
            }
        }
        if (num <= 0) {
            o1.fuelDecrease();
            console.log(`${p1.name} fuel is ${p1.fuel}`);
            console.log(`${o1.name} fuel is ${o1.fuel}`);
            if (o1.fuel <= 0) {
                console.log("You Win");
                process.exit();
            }
        }
    }
    if (ask.opt == "Drink portion") {
        p1.fuelincrease();
        console.log(`You Drink Health portion your fuel is ${p1.fuel}`);
    }
    if (ask.opt == "Run for your life...") {
        console.log("You Loose, Better Luck Next Time");
        process.exit();
    }
} while (true);
