const EventEmitter = require("events");
const door = new EventEmitter();

// todo:  Create event
door.on("open",() => {
  console.log("Door is open");
}
)

door.addListener("open",( by) => {
  console.log(`${by} Opened the door`);
}
)

door.on("jam", (user) => {
  console.log(`${user} jammed the door in my face`)
})
// Todo: Emmit an event
door.emit("open", "Leanuel");
door.emit("jam", "Mike");
door.emit("jam", "Luke");
door.emit("jam", "John");

console.log(door.eventNames())
console.log(door.listenerCount("jam"))
class logger extends EventEmitter{
  constructor(event){
    super(event);
  }

}
 
const myLogger = new logger();