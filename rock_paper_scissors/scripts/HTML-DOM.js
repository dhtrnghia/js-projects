/*
When a web page is loaded, the browser creates a Document Object Model (DOM) of the page
With the object model, JavaScript gets all the power it needs to create dynamic HTML:

JavaScript can change all the HTML elements in the page
JavaScript can change all the HTML attributes in the page
JavaScript can change all the CSS styles in the page
JavaScript can remove existing HTML elements and attributes
JavaScript can add new HTML elements and attributes
JavaScript can react to all existing HTML events in the page
JavaScript can create new HTML events in the page

The HTML DOM is a standard object model and programming interface for HTML. It defines:

The HTML elements as objects
The properties of all HTML elements
The methods to access all HTML elements
The events for all HTML elements
*/

//Finding HTML Elements
//Often, with JavaScript, you want to manipulate HTML elements.
//To do so, you have to find the elements first. There are several ways to do this:

//Finding HTML elements by id (id="intro")
const element = document.getElementById("intro");
//Finding HTML elements by tag name (p element inside "main")
const x = document.getElementById("main");
const y = x.getElementsByTagName("p");
//Finding HTML elements by class name (class="intro")
const x = document.getElementsByClassName("intro");
//Finding HTML elements by CSS selectors (returns a list of all elements p with class="intro")
const x = document.querySelectorAll("p.intro");
//Finding HTML elements by HTML object collections
const x = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length ;i++) {
  text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;

//To change the content of an HTML element, use this syntax:

document.getElementById(id).innerHTML = new HTML
document.getElementById("p1").innerHTML = "New text!";

//To change the value of an HTML attribute, use this syntax:
document.getElementById(id).attribute = new value
document.getElementById("myImage").src = "landscape.jpg";


//To change the style of an HTML element, use this syntax:
document.getElementById(id).style.property = new style
document.getElementById("p2").style.color = "blue";


//The addEventListener() method

//Add an event listener that fires when a user clicks a button:
document.getElementById("myBtn").addEventListener("click", displayDate);

element.addEventListener(event, function, useCapture);

//The first parameter is the type of the event (like "click" or "mousedown" or "keydown" or any other HTML DOM Event.)

//The second parameter is the function we want to call when the event occurs.

//The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.

/*
KeyboardEvent Properties
key:	The value of the key that triggered the event
The key property returns the key that was pressed when the event occured.

The key property is read-only.

The return value can be:

A single character ("a", "W", "4", "+", "$")
Multiple characters ("F1", "Enter", "HOME", "CAPS LOCK")
*/
let key = event.key;

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  }
})




