/* Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)
 */

function clock() {
  const time = new Date().toLocaleTimeString();
  const convertedArray = time.split(":");
  const takenHour = convertedArray[0];
  const hourFormat = takenHour > 12 ? takenHour - 12 : takenHour;

  convertedArray[0] = hourFormat;
  result = convertedArray.join(":");
  decideAM_PM = takenHour > 12 ? `${result} PM` : `0${result} AM`
  console.log(decideAM_PM);
  
}
setInterval(clock, 1000);

/* 
NOTE: When you run the above code directly in browser console you will do not see any issues.
 But if you run it locally you will see the output format is different. Like 9:20:44 AM AM
*/

// To solve the above issue ChatGpt gave this👇️👇️ solution

/* 
function clock() {
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const time = new Intl.DateTimeFormat('en-US', options).format(new Date());
    console.log(time);
  }
  
setInterval(clock, 1000);
*/
