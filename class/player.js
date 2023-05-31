const { Food } = require('./food');
const { Item } = require('./item');

class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {
        let item = this.currentRoom.getItemByName(itemName);
        this.items.push(item);
        // Fill this in
        this.currentRoom.items = this.currentRoom.items.filter(item => item.name !== itemName);
    }

    dropItem(itemName) {
        let item = this.getItemByName(itemName);
        this.currentRoom.items.push(item);
        // Fill this in
        this.items = this.items.filter(item => item.name !== itemName);
    }

    eatItem(itemName) {
        // Fill this in
        let item = this.getItemByName(itemName);
        if(item instanceof Food) {
            this.items = this.items.filter(item => item.name !== itemName);
        }
    }

    getItemByName(name) {
        return this.items.find(item => item.name === name);
        // Fill this in
    }
}

module.exports = {
  Player,
};
