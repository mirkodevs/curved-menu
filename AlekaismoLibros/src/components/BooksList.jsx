// src/components/BookList.js

import React, { useState } from 'react';
import Book from './Book';
import "../../public/css/books.css"
import BooksData from "../data/books.json"

function BookList(props) {
   

    return (
        <div className="book-list container p-0 ms-lg-4 mt-3">
            <h2 className="text-left ">{props.namePage}</h2>
            <main className='container p-0'>

                {!props.isSearching ? props.filters ? BooksData.map((book) => (
                    book.genre  ===  props.filters ?
                        <Book
                            key={book.id}
                            title={book.title}
                            author={book.author.name}
                            genre={book.genre}
                            year={book.year}
                            cover={book.cover}
                            file = {book.file}
                            añadirLibro={props.añadirLibro}
                            book = {book}
                            libreria = {props.libreria}
                        />
                  : book.author.name  ===  props.filters &&

                        <Book
                            key={book.id}
                            title={book.title}
                            author={book.author.name}
                            genre={book.genre}
                            year={book.year}
                            cover={book.cover}
                            file = {book.file}
                            añadirLibro={props.añadirLibro}
                            book = {book}
                            libreria = {props.libreria}
                        />

                ))
              :
               BooksData.map((book)=>(
                <Book
                            key={book.id}
                            title={book.title}
                            author={book.author.name}
                            genre={book.genre}
                            year={book.year}
                            cover={book.cover}
                            file = {book.file}
                            añadirLibro={props.añadirLibro}
                            book = {book}
               
                        />


               )


               ) 
:props.filters.map((book)=>
<Book
                            key={book.id}
                            title={book.title}
                            author={book.author.name}
                            genre={book.genre}
                            year={book.year}
                            cover={book.cover}
                            file = {book.file}
                            añadirLibro={props.añadirLibro}
                            book = {book}
                            libreria = {props.libreria}
                        />  

)          }
            </main>
        </div>
    );
}

export default BookList;
