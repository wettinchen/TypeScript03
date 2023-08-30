"use strict";
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"]
};
let jp = {
    name: "Jimmy",
    active: true,
    albums: ["I", "II", "IV"]
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase}!`;
    }
    return `Hello`;
};
console.log(greetGuitarist(jp));
