const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let books = ["The Alchemist", "bOne Up On Wall Streetook", "Atomic Habits ", "Think like a Monk"];

let operation = () => {
    rl.question("Press 1 to show all book Press 2 to add book Press 3 to quit \n", (input) => {
        if (input == 1) {
            books.forEach((e) => {
             console.log(e);
        })
       
        operation();
    }
    else if (input == 2) {
        rl.question("Please enter book name \n", (name) => {
            books.push(name);
            console.log("Book sucessfully added");
            operation();
        });
    }
    else if (input == 3) {
        rl.question("Are you sure you want to quit - press Y to quit \n", (yes) => {
            if (yes == "y" || yes == "Y") {
                rl.close();
            } else {
                operation();
            }
        });
    } else {
        console.log("You have selected an invalid entry so please press 1, 2 or 3");
        operation();
    }
});
}

operation();1

rl.on("close", () => {
    console.log("Bye Bye");
})

