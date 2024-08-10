let book={
    title : "Harry Potter",
    author: "J.K. Rowling",
    pages : 400
}

for( let key in book)
    {
        console.log(`${key} : ${book[key]}`);
    }