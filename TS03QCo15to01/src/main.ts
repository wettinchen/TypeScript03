interface Guitarist {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"]
}

let jp = {
    name: "Jimmy",
    active: true,
    albums: ["I", "II", "IV"]
}

const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name?.toUpperCase}!`
};

console.log(greetGuitarist(jp))