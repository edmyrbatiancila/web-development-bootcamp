const fileSystem = require("fs");


// fileSystem.writeFile("anotherMessage.txt", "I am practicing NodeJs", (error) => {
//     if(error) throw error;

//     console.log("Successfully created file.");
// });

fileSystem.readFile("./anotherMessage.txt", "utf8", (err, data) => {
    if(err) throw err;

    console.log(data);
});
