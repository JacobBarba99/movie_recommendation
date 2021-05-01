import { Link } from "react-router-dom"
import tmdb from "../../assets/tmdb.svg"
import "./Footer.scss"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_links">
                <h4>&copy; Jesús Lares Contreras 2021 </h4>
                <Link to="/" >Home</Link>
                <Link to="/recommendation" >Recommendation</Link>
            </div>
            <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer" >
                <img className="footer_img" alt="Logo TMDB" src={tmdb} />
            </a>
        </div>
    )
}

export default Footer
