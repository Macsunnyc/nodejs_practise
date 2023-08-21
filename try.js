// Create event and listeners based on the following

// parent want to get notified when school fix exam date. they also want to know when the student finishes the exam. and als want to know when the school vacates for the term.

const Emmite = require("events");
const parent = new Emmite();

parent.addListener("exam_date", () => {
    console.log("school have not fixed a date");
})
parent.on("exam_end", (when) => {
    console.log(`exam will finish on ${when}`)
})
parent.addListener("vacation", (date) => {
    console.log( `school will open on ${date}`);
})

// parent.emit("exam_date");
parent.emit("vacation", "40 july 2023");
parent.emit("exam_end", "50 june 2023")


//parent.once 