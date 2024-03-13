//With web storage, web applications can store data locally within the user's browser. Before HTML5, application data had to be stored in cookies, included in every server request. Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance. Unlike cookies, the storage limit is far larger (at least 5MB) and information is never transferred to the server. Web storage is per origin (per domain and protocol). All pages, from one origin, can store and access the same data.

//HTML web storage provides two objects for storing data on the client:

//window.localStorage - stores data with no expiration date
//window.sessionStorage - stores data for one session (data is lost when the browser tab is closed)

//Before using web storage, check browser support for localStorage and sessionStorage:

if (typeof(Storage) !== "undefined") {
  // Code for localStorage/sessionStorage.
} else {
  // Sorry! No Web Storage support..
}

//The localStorage object stores the data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year

// Store .steItem
localStorage.setItem("lastname", "Smith");

// Retrieve .getItem
document.getElementById("result").innerHTML = localStorage.getItem("lastname");

//Remove .removeItem 
localStorage.removeItem("lastname");


//The example above could also be written like this:
// Store
localStorage.lastname = "Smith";
// Retrieve
document.getElementById("result").innerHTML = localStorage.lastname;

//Instance properties
Storage.length 
//Returns an integer representing the number of data items stored in the Storage object.

//Instance methods
Storage.key()
//When passed a number n, this method will return the name of the nth key in the storage.

Storage.getItem(keyName)
//When passed a key name, will return that key's value, or null if the key does not exist, in the given Storage object

Storage.setItem(keyName, keyValue)
//When passed a key name and value, will add that key to the storage, or update that key's value if it already exists.

Storage.removeItem(keyName)
//When passed a key name, will remove that key from the storage. If there is no item associated with the given key, this method will do nothing.

Storage.clear()
//When invoked, will empty all keys out of the storage.

//Here we access a Storage object by calling localStorage. We first test whether the local storage contains data items using !localStorage.getItem('bgcolor'). If it does, we run a function called setStyles() that grabs the data items using Storage.getItem() and uses those values to update page styles. If it doesn't, we run another function, populateStorage(), which uses Storage.setItem() to set the item values, then runs setStyles().

if (!localStorage.getItem("bgcolor")) {
  populateStorage();
} else {
  setStyles();
}

function populateStorage() {
  localStorage.setItem("bgcolor", document.getElementById("bgcolor").value);
  localStorage.setItem("font", document.getElementById("font").value);
  localStorage.setItem("image", document.getElementById("image").value);

  setStyles();
}

function setStyles() {
  const currentColor = localStorage.getItem("bgcolor");
  const currentFont = localStorage.getItem("font");
  const currentImage = localStorage.getItem("image");

  document.getElementById("bgcolor").value = currentColor;
  document.getElementById("font").value = currentFont;
  document.getElementById("image").value = currentImage;

  htmlElem.style.backgroundColor = `#${currentColor}`;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute("src", currentImage);
}