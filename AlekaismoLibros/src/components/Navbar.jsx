function Navbar(props) {
function handleNav(e){

e.preventDefault()
props.searching(props.libreria,true)
props.changeNamePage("lista de libros")
}
function handleHome(e){
e.preventDefault()
props.searching("",false)
props.changeNamePage("desarollo personal")
}
  return (

    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="/home" onClick={handleHome}
        >AlekaismoLibros</a>
        {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a aria-current="page" href="/lista" onClick={handleNav}>Lista de Libros</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar