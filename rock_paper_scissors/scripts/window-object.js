//The window object represents an open window in a browser.

//Window Object Properties

window.console

window.document

window.localStorage

//Window Object Methods

window.addEventListener();

window.alert();

window.setInterval();  //Calls a function or evaluates an expression at specified intervals (in milliseconds)
intervalId = setInterval(function, milliseconds);
//The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.
setInterval(displayHello, 1000);

window.clearInterval();
clearInterval(intervalId); //To clear an interval, use the id returned from setInterval():

window.setTimeout();  //Calls a function or evaluates an expression after a specified number of milliseconds
const myTimeout = setTimeout(myGreeting, 5000);

window.clearTimeout();
clearTimeout(myTimeout);

window.confirm();


