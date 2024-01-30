export interface Passenger{
    name: string;
    children?: string[]
}

const passenger1 : Passenger = {
    name: "Isa"
}

const passenger2 : Passenger = {
    name: "Bella",
    children: ["kala", "sam"]
}

const prinChildren = (passegner:Passenger) => {
    const howManyChildren = passegner.children?.length || 0;;
    console.log(howManyChildren);
}

prinChildren(passenger1)