import BookList from "../components/BooksList"
function Home(props){


    return (

        <BookList
        filters={props.filters} // Passa il filtro come prop a BookList
        isSearching = {props.isSearching}
        añadirLibro = {props.addBook}
      />

    )
}
export default Home