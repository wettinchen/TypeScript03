type Guitarist = {
    name: string,
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
    albums: ["I", "II", "IV"]
}

evh = jp