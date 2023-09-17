import React, { useState } from 'react';
import Header from './components/Header';
import Filter from './components/Filter';
import BookList from './components/BooksList';
import dataBooks from "./components/BooksData"
import books from "./data/books.json";
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lista from './Pages/Lista';

function App() {

  const [namePage,setNamePage] = useState("libros")
  const generos = dataBooks("genre")

  const autores = dataBooks("author.name")


  const categorias = [generos, autores]

  const [filter, setFilter] = useState(""); // Stato del filtro
  const [isSearched, setIsSearched] = useState(false)

  // Funzione per impostare il filtro
  const updateFilter = (newFilter, ricerca) => {
    setFilter(newFilter);
    setIsSearched(ricerca)
  };

  const [libreria, setLibreria] = useState([])

  function addBook(newBook) {

    if (!libreria.includes(newBook))
      setLibreria((prevValue) => [...prevValue, newBook])

  }
  function handleNavigate(newName){
setNamePage(newName)

  }
  return (
    <div>
      <Header
        searching={updateFilter}
        libreria={libreria}
        changeNamePage = {handleNavigate}
      />


      <div className="container">
        <section className="main-section row p-0 m-0">
          <Filter
            changeState={updateFilter}
            category={categorias} // Passa la funzione di aggiornamento del filtro
          />
          <main className="col-12 col-lg-9 p-0 m-0 justify-content-center">

            <BrowserRouter>
              <Routes>
                <Route path="/"  >
                  <Route index element={
                    <BookList
                      filters={filter} // Passa il filtro come prop a BookList
                      isSearching={isSearched}
                      añadirLibro={addBook}
                      namePage = {namePage}
                    />} />
                  <Route path="lista" element={
                    <BookList
                      filters={filter} // Passa il filtro come prop a BookList
                      isSearching={isSearched}
                      añadirLibro={addBook}
                      namePage = {namePage}
                    />} />

                </Route>




              </Routes>
            </BrowserRouter>



          </main>
        </section>
      </div>
    </div>
  );
}

export default App;
