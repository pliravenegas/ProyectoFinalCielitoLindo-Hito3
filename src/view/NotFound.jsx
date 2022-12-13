import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <main>
            <div className="not-found">
            <h3>Error HTPP 404 (Not Found)</h3>
            <p>Página no encontrada!</p>
            <Link to="/" className="btn_nf">Volver a Home</Link>
            </div>
        </main>
    )
}

export default NotFound