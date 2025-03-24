const fs = require("fs");

fs.writeFile("message.txt", "Hello from NodeJS. This is updated message.", (err) => {
    if(err) throw err; 

    console.log("The file has been seaved.");
});

