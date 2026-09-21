const fs = require("fs");
const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask for filename
rl.question("Enter filename: ", (filename) => {

    // Ask for initial content
    rl.question("Enter content: ", (content) => {

        // Create/write file
        fs.writeFile(filename, content, "utf8", (err) => {

            if (err) {
                console.log("Error creating file:", err);
                rl.close();
                return;
            }

            console.log("File created successfully.");

            // Read file
            fs.readFile(filename, "utf8", (err, data) => {

                if (err) {
                    console.log("Error reading file:", err);
                    rl.close();
                    return;
                }

                console.log("\nInitial file contents:");
                console.log(data);

                // Ask for additional content
                rl.question("\nEnter additional content: ", (additionalContent) => {

                    // Append content
                    fs.appendFile(
                        filename,
                        "\n" + additionalContent,
                        "utf8",
                        (err) => {

                            if (err) {
                                console.log("Error appending file:", err);
                                rl.close();
                                return;
                            }

                            console.log("Content appended successfully.");

                            // Read final contents
                            fs.readFile(filename, "utf8", (err, finalData) => {

                                if (err) {
                                    console.log("Error reading final file:", err);
                                    rl.close();
                                    return;
                                }

                                console.log("\nFinal file contents:");
                                console.log(finalData);

                                rl.close();
                            });
                        }
                    );
                });
            });
        });
    });
});