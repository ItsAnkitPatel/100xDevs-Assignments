/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    const ans = new Promise(function(resolve){
        setTimeout(resolve,n)
    })
    return ans;
}

module.exports = wait;