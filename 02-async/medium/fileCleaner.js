/* ## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
``` 
*/

const fs = require("fs");
const path = "./file_cleaner.txt";
fs.readFile(path, "utf-8", (err, data) => {
  const cleanString = data.replace(/\s+/g, " ");
  if (err === null) {
    console.log("null found");
  }
  fs.writeFile(path, cleanString, (err) => {
    if (!err) {
      console.log("Operation is done successfully");
    } else {
      console.log(`Got an error ${err}`);
    }
  });
});
