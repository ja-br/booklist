function Book(title, author, isbn){
    this.title = title
    this.author = author
    this.isbn = isbn
}

function UI(){}

document.querySelector('#book-form').addEventListener('submit',(e)=>{
    console.log('test')
    e.preventDefault()
})