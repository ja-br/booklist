function Book(title, author, isbn){
    this.title = title
    this.author = author
    this.isbn = isbn
}

function UI(){}

document.querySelector('#book-form').addEventListener('submit',(e)=>{
    const title = document.querySelector('#title').value,
        author = document.querySelector('#author').value,
        isbn = document.querySelector('#isbn').value
        

    const book = new Book(title, author, isbn)
    e.preventDefault()
})