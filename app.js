function Book(title, author, isbn){
    this.title = title
    this.author = author
    this.isbn = isbn
}

function UI(){}

UI.prototype.addBookToTable = function(book){
    const list = document.querySelector('#book-list')
    const row = document.createElement('tr')

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">x</a></td>
    `

    list.appendChild(row)
}

document.querySelector('#book-form').addEventListener('submit',(e)=>{
    const title = document.querySelector('#title').value,
        author = document.querySelector('#author').value,
        isbn = document.querySelector('#isbn').value
        

    const book = new Book(title, author, isbn)

    const ui = new UI()

    ui.addBookToTable(book)
    e.preventDefault()
})

