function arr(books)
{
    books.forEach(element => {
        if(element.year>2000)
        {
            console.log(element.title);
        }
    });
}

arr([ 
    { title: "Book One", author: "Author One", year: 1999 }, 
    { title: "Book Two", author: "Author Two", year: 2005 }, 
    { title: "Book Three", author: "Author Three", year: 2010 }
]
)