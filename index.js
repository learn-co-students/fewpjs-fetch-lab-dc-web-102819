function fetchBooks() {
	return fetch('https://anapioficeandfire.com/api/books')
		.then(resp => resp.json())
		.then(json => renderBooks(json))
		// .then(json => fifthBook(json))
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
  	console.log(json)
 	let fifthBook = json[5].name
 	console.log(fifthBook)
 	let total = 0
 	json.forEach(book => total = total + book.numberOfPages)
 	console.log(total)

}



document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
