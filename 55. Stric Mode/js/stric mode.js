function useStrictMode() {
    'use strict'
    const person = {
        firstName: "Erlang"
    };

    // ini ERROR
//     with (person) {
//        console.info(firstName);
//     }
}