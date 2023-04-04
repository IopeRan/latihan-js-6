    // global scope
    let i = 20;

    for (let i = 0; i < 10; i++) {
        // local scope
        console.info(`Local ${i}`);
    }

    console.info(`Global ${i}`);