import { useState } from 'react';


const Bookshelf = () => {

    const [books, setBooks] = useState([
        { title: 'The Alchemist', author: 'Paulo Coehlo' },
        { title: 'Things Fall Apart', author: 'Chinua Achebe' },
      ]);

// <---- Create Event handlers ====> 

    const handleInputChange = (event) => { 
        setNewBook({...books, [event.target.name]: event.target.value})
    
      }
    






   // Bookshelf Component   
return ()
<>
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    {/* Form will go here */}
  </div>
  <div className="bookCardsDiv">{/* Book cards will display here */}</div>
</div>
</>

