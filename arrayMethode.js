let bookStore = ["legend born", "girl king", "storm dancer", "the shadow of what was lost", "twisted series"];

// ..........................Method.............................//

//...............push Methode.................//
bookStore.push('the jini key'); //add items adt the end
console.log(bookStore);

//................pop Methode...............//
bookStore.pop(); //removes item at the end
console.log (bookStore);

//.............shift Methode................//
bookStore.shift(); // removes item at the beginning
console.log(bookStore);


// ............unshift Methode..............//
bookStore.unshift("Daughter of nri"); // add new item at the beginning
console.log(bookStore);


//............splice Methode................//
bookStore.splice(0, 1, "Children of anguishe and anarchy");
console.log(bookStore);


//.............index of Methode..............//
const index = bookStore.indexOf("girl king");
console.log(index);