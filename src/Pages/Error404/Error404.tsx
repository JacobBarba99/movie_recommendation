import { Link } from 'react-router-dom'

import "./Error404.scss"

const Error404 = () => {
    return (
        <div className="error" >
            <div className="error_content">
                <h1>404</h1>
                <h4>Pagina no encontrada</h4>
                <p>Lo siento, la pagina que estas buscando no existe. Si piensas que algo esta roto, reporta el problema </p>
                <div className="error_content-btns">
                    <Link to="/" >Ir a Home </Link>
                    <a href="mailto:contacto@jesuslares.com?subject=Problemas sobre la pagina Movie Recommendation">Reportar problema </a>
                </div>
            </div>
        </div>
    )
}

export default Error404
