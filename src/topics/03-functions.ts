function addNumbers(a:number, b:number){
    return a + b;
}

const addNumbersArrow = (a:number, b:number) => {
    return a + b;
}

function multiply(firstNumber: number, secondNumber?:number, base:number = 2){
    return firstNumber * base

}


//const resolve:number = addNumbers(1, 2)
//const resolve2:number = addNumbersArrow(1, 2)
//const multiplyresult = multiply(5)

//console.log({resolve, resolve2, multiplyresult})

interface Character {
    name: string,
    hp: number;
    showHp: () => void;
}

const healCharacter = (character:Character, amount:number) =>{
    character.hp+= amount;
}

const strider : Character = {
    name : "isa",
    hp : 50,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`);
    }
}

healCharacter(strider, 10);

strider.showHp();


export{};