function method(book)
{  
    book.drive()
}
 let book={
    title : "Harry Potter",
    author: "J.K. Rowling",
    pages : 400,
        drive:function(){
            console.log("Reading "+this.title +" by "+this.author);
        }
    }
method(book)