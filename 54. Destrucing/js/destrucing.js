//Destructuring Array
{
    const names = ["Erlang", "Andriyanputra"];
    let  [firstName, , lastName, ...others] = names;

    console.info(firstName);
    console.info(lastName);
}

    //Destructuring Object
{
    const person = {
        firstName: "Erlang",
        lastName: "Andriyanputra",
        address: {
            street: "Pearl",
            city: "Bikini Bottom",
            Country: "USA"
        },
        hobby: "reading",
        Channel: "Erlang Andriyanputra"
    };

    let {firstName, lastName, address:{city, street, Country}, ...others} = person;
    console.info(firstName);
    console.info(lastName);
    console.info(city);
    console.info(street);
    console.info(Country);
    console.info(others);
}

{

    //Destructuring di Function Parameter(1)
    function displayPerson({firstName, middleName, lastName}) {
        console.info(firstName);
        console.info(lastName);
    }

    const person = {
        firstName: "Erlang",
        lastName: "Andriyanputra"
    };
    displayPerson(person);

}

{
    //Destructuring di Function Parameter(2)
    function sum([first, second]){
        return first + second;
    }

    console.info(sum([1,1]));
    console.info(sum([10,10]));

}

{
    //Default Value Destructuring Array
    const names = ["Erlang", "Andriyanputra"]
    const [firstName, lastName = "Andriyan"] = names;

    console.info(firstName);
    console.info(lastName);
}

{   
    //Default Value Destructuring Object
    const person = {
        firstName: "Erlang",
        lastName: "Andriyanputra"
    };

    let {firstName = "Erlang", lastName} = person;
    console.info(firstName);
    console.info(lastName);
}

{
    //Menggunakan Nama Variable Lain
    const person = {
        firstName: "Erlang",
        lastName: "Andriyan"
    };

    let {firstName: namaDepan,
        lastName: namaBelakang} = person;
    console.info(namaDepan);
    console.info(namaBelakang);
   
}