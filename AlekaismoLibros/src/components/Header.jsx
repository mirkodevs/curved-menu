import "../../public/css/header.css"
import Navbar from "./Navbar"
import SearchButton from "./SearchButton"
function Header(props) {

    return (

        <header>

            <Navbar
            searching={props.searching}
            libreria = {props.libreria}
            changeNamePage = {props.changeNamePage}
            />
            <div className="search-container">
                <SearchButton 
                searching={props.searching}
                
                />

            </div>
        </header>

    )

}

export default Header