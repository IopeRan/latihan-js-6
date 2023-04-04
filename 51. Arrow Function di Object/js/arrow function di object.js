const person = {
    name: "Erlang",
    sayHi: (name) => {
        console.info(this);
        console.info(`Hi ${name}, My Name is ${this.name}`);
    }
};

person.sayHi("Erlang");