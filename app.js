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

UI.prototype.showAlert = function(msg, className){
    const div = document.createElement('div')
    const container = document.querySelector('.container')
    const form = document.querySelector('#book-form')

    div.classList.add('alert',`${className}`)

    div.appendChild(document.createTextNode(msg))

    container.insertBefore(div, form)

    setTimeout(()=>{
        document.querySelector('.alert')
            .remove()
    }, 2000)
}

// Delete book
UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove()
    }
}

UI.prototype.clearFields = function(){
    
    document.querySelector('#title').value = ''
    document.querySelector('#author').value = ''
    document.querySelector('#isbn').value = ''
}


// Listener for submission
document.querySelector('#book-form').addEventListener('submit',(e)=>{
    const title = document.querySelector('#title').value,
        author = document.querySelector('#author').value,
        isbn = document.querySelector('#isbn').value
        

    const book = new Book(title, author, isbn)

    const ui = new UI()

    // Validation
    if(title === '' || author === '' || isbn === ''){
        ui.showAlert('Please fill in all fields', 'error')
    } else {
        ui.showAlert('Book Added!', 'success')
        ui.addBookToTable(book)
        ui.clearFields()
    }

 

    e.preventDefault()
})


// Listener for delete

document.querySelector('#book-list').addEventListener('click', (e)=>{
    const ui = new UI()

    ui.deleteBook(e.target)

    ui.showAlert('Book deleted', 'success')

    e.preventDefault()
})