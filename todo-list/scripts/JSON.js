//JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa)
//JSON exists as a string — useful when you want to transmit data across a network. It needs to be converted to a native JavaScript object when you want to access the data



//A common use of JSON is to exchange data to/from a web server. When sending data to a web server, the data has to be a string. Convert a JavaScript object into a string with JSON.stringify(). Use the JavaScript function JSON.stringify() to convert it into a string.

const obj = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(obj);
//The result will be a string following the JSON notation.myJSON is now a string, and ready to be sent to a server


//When receiving data from a web server, the data is always a string. Parse the data with JSON.parse(), and the data becomes a JavaScript object. Imagine we received this text from a web server:'{"name":"John", "age":30, "city":"New York"}'. Use the JavaScript function JSON.parse() to convert text into a JavaScript object:

const objiect = JSON.parse('{"name":"John", "age":30, "city":"New York"}');