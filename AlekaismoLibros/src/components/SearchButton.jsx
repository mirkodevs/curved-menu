import React, { useState } from 'react';
import booksData from '../data/books.json';  // Importa i dati dal file JSON

function SearchButton(props) {



    const [searchQuery, setSearchQuery] = useState('');


    const handleSearch = (e) => {
   
        e.preventDefault();
   
       const filteredResults = booksData.filter((book)=>
       book.title.toLowerCase().includes(searchQuery.toLocaleLowerCase())
       );

        props.searching(filteredResults,true)
      
    };



    return (

        <form class="form">
            <button
                onClick={handleSearch}
            >
                <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                    <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
            <input
                class="input"
                placeholder="Type your text"
                required
                type="text"
                value={searchQuery}
                onChange={(e) => {
                    setSearchQuery(e.target.value)
                    
                }
                }

            />
            <button
                class="reset"
                type="reset"
                onClick={(e) => {
  setSearchQuery(""); // Azione 1: Resetta la searchQuery

}}

            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </form>
    )

}
export default SearchButton