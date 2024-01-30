const skills : string[] = ["Bash", "Counter", "Healing"]

interface Character{
    name: string;
    hp: number;
    skills: string[];
    hometown?: string
}

const isa: Character = {
    name: "Isa",
    hp : 100,
    skills: ["Bash", "Counter"],
};

isa.hometown = "mi casita"

console.table(isa)


export {};