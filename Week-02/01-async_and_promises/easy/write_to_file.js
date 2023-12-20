/* ## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.
*/

const fs = require("fs");

for (let i = 1; i < 1000000000; i++) {
    // expensive task
}
fs.writeFile("./write.txt", "Writing inside write.txt file", (err) => {
  if (!err) console.log("Data has been written inside write.txt");
});
