import { useState } from 'react';


const Bookshelf = () => {

    const [books, setBooks] = useState([
        { title: 'The Alchemist', author: 'Paulo Coehlo' },
        { title: 'Things Fall Apart', author: 'Chinua Achebe' },
      ]);

// <---- Create Event handlers ====> 

    {/*handle Input Change function*/}
    const handleInputChange = (event) => { 
        setNewBook({...books, [event.target.name]: event.target.value})
      }
    
{/*handle submit function*/}
      const handleSubmit = (event) => {
        event.preventDefault()
        setBooks({...books})
        setNewBook({
            title: "",
            author: ""
        })

    }

// <---- Form Creation ====> 

   // Bookshelf Component   
return ()
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
{/* TitleInput Field, inputs will allow users to enter the details for the book they want to add to the shelf.*/}
    
    <label htmlFor="author">Author: </label>
    <input 
     id="author"
     name="author" 
     value={newBook.author}
     onChange={handleInput}
     ></input>
{/* Author Input Field, inputs will allow users to enter the details for the book they want to add to the shelf.*/}
        
<button type="submit">Add New Book</button>
     </form>
    </div>

  <div className="bookCardsDiv">
  {books.map((book, index) => (
    
    
    </div>
</div>
</>

