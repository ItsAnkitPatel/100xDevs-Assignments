/*## Counter without setInterval

Without using setInterval, try to code a counter in Javascript.
*/

let count = 1;

function counter() {
  console.log(count);
  count++;
  setTimeout(counter, 1000);
}

counter(); // Start the counter
