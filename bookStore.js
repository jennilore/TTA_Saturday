let bookStore = [];

// ading new items\\
function addbook(newBook){
    bookStore.push(newBook)
    displayBooks();
};

// display books\\
function displayBooks(){
    bookStore.forEach(function(item, index){
        console.log(`Book ${index}; ${item}`)
    })
};


//remove book\\
function removeBook(bookToRemove){
    const index = bookStore.indexOf(bookToRemove)
    if (index != -1){
        bookStore.splice(index, 1)
        console.log("Book successfult removed");
        displayBooks();
    }else{
        console.log("Book was not found");
        displayBooks();
    }
}

// update book \\
function updateBook(oldVersion, newVersion){
    const index = bookStore.indexOf (oldVersion)
    if(index != -1 ){
        bookStore.splice(index, 1, new{})
    }
}


removeBook("king of sloth");

addbook("foundyside");
console.log('...............');
addbook("demon n ange (DNA)");
console.log('...............');
console.log('...............');
addbook('the eye of the world');
console.log('...............');
addbook('Hunting hadeline');
console.log('...............');
addbook("Agood girl guide to murder")
console.log('...............');
addbook("king of sloth");
console.log('...............');
addbook('twisted lies');
console.log('...............');