import Toastify from 'toastify-js';
function FavouriteButton(props){

  function addBook(){
 
  Toastify({
    text: "Libro añadido",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "var(--color4)",
    },
    onClick: function(){} // Callback after click
  }).showToast();

  props.addNewBook(props.book)

}

    return(
<button className="fav-btn" onClick={addBook}>
{props.Svg}

</button>

    )
}
export default FavouriteButton