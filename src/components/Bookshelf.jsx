import { useState } from 'react';


const Bookshelf = () => {

    const [books, setBooks] = useState([
        { title: 'The Alchemist', author: 'Paulo Coehlo' },
        { title: 'Things Fall Apart', author: 'Chinua Achebe' },
      ]);

      const [newBook, setNewBook] = useState([
        {
            title: '',
            author: '',
        }
    ])

// <---- Create Event handlers ====> 

    {/*handle Input Change function*/}
    const handleInputChange = (event) => {
      setNewBook({ ...newBook, [event.target.name]: event.target.value });
  };
    
{/*handle submit function*/}
      const handleSubmit = (event) => {
        event.preventDefault()
        setBooks([...books, newBook]);
        setNewBook({
            title: "",
            author: ""
        })

    }

// <---- Form Creation ====> 

   // Bookshelf Component   
return (
<>
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <form onSubmit={handleSubmit}>

    <label htmlFor="title">Title: </label>
    <input 
    id="title" 
    name="title" 
    value={newBook.title} 
    onChange={handleInputChange}
    ></input>

    
    <label htmlFor="author">Author: </label>
    <input 
     id="author"
     name="author" 
     value={newBook.author}
     onChange={handleInputChange}
     ></input>

        
<button type="submit">Add New Book</button>
     </form>
    </div>

  <div className="bookCardsDiv">
  {books.map((book, index) => (
      <div key={index}>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
    
        </div>
      ))}
      </div>
    </div>
      </>
    )
}

export default Bookshelf;