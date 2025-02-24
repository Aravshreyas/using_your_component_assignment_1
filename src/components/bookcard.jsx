// write the book component code here
import React from 'react'
import './bookcard.css'
const bookcard = ({books}) => {
  return (
<div className='book'>
{books.map((book) => (
  <div key={book.id} className='book-card'>
    <img src={book.image} alt={book.name}  className='book-image'/>
    <h2>{book.name}</h2>
    <p>{book.genre}</p>
    <p>{book.author}</p>
  </div>
))}
</div>
  )
}

export default bookcard
