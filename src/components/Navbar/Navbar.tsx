import { useState } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import Logo from "../../assets/Logo.png"

import "./Navbar.scss"

const Navbar = () => {
    const [search, setSearch] = useState<string>("")
    let history = useHistory();
    const searchApi = () => {
        if (search !== "") {
            setSearch("")
            history.push({
                pathname: "/search",
                search: "?query=" + search,
                state: { search },
            });
        }
    }
    const handleChange = (event: any) => {
        setSearch(event.target.value);
    }
    return (
        <>
            <input type="checkbox" id="check" />
            <nav >
                <Link to="/" className=" logo">
                    <div className="logo_text">
                        Movie <strong>R</strong>ecommendation
                    </div>
                    <img src={Logo} className="logo_img" alt="logo" />
                </Link>
                <form className="search_box" onSubmit={(e) => {
                    e.preventDefault()
                    searchApi()
                }} >
                    <input value={search} type="search" onChange={handleChange} placeholder="Buscar pelicula" required />
                    <span className="fa fa-search" onClick={searchApi}>
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                </form>
                <ol>
                    <li><NavLink to="/" exact>Home</NavLink></li>
                    <li>  <NavLink to="/recommendation" exact >Recomendaciones</NavLink></li>
                </ol>
                <label htmlFor="check" className="bar" >
                    <span id="bars" ><FontAwesomeIcon icon={faBars} /></span>
                    <span id="times"><FontAwesomeIcon icon={faTimes} /></span>
                </label>
            </nav >
        </>
    )
}

export default Navbar
