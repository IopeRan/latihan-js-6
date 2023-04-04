function createFullName(firstName, lastName){
    debugger;
    const fullName = `${firstName} ${lastName} ${lastName}`;
    return fullName;
}

const name = createFullName('Erlang', "Andriyanputra");
console.info(name);

function sum(...numbers){
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total;
}

console.info(sum(1, 1, 1, 1, 1,));