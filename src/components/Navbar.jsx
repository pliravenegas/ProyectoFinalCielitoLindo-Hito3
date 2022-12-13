import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import Context from '../context/context.js'
import { useLocation } from 'react-router-dom'//Hook que sirve para saber las rutas

const Navbar = () => {
    const navigate = useNavigate()
    const {carroTotal} = useContext(Context)

    /* crear variable token para traer lo que existe en el localstorage(cache) con el nombre token */
    const token = localStorage.getItem('token')

    //función cerrarSesion
    const cerrarSesion = () =>{
    localStorage.removeItem('token')//borrar token del cache
    navigate('/') 
}

    const location = useLocation()//crear variable location para ejecutar useLocation

    return (
        <header className="encabezado">

            <nav className="menu">
                <div className="logo_nombre">
                    <Link to="/"><img src="logo_charro.png" alt='Logo de Restaurant' /></Link>
                    <h1>Cielito Lindo</h1>
                </div>
                {/* si location.pathname es estrictamente igual al home muestrame los botones */}
                {location.pathname === "/" && <div className="btns">
                    <Link to="/carta"><button>Carta</button></Link>
                    {/* condicional ternaria. si token es igual a null muéstrame iniciar sesión y si no muestrma cerra sesión */}
                    {token === null ? 
                    <Link to="/iniciar"><button>Iniciar Sesión</button></Link> : <button className='cerrar-sesion' onClick={cerrarSesion}>Cerrar Sesión</button>}
                </div>}

                {/* si si location.pathname es estrictamente igual a la vista carta, detalle y pedido muestra un carrito */}
                {(location.pathname === "/carta" || location.pathname.startsWith('/detalle') || location.pathname === '/carro') &&
                    <p className='precio'><Link to="/carro"><i className="fas fa-shopping-cart"> </i></Link> ${carroTotal()}</p>
                }
            </nav>

        </header>
    )
}

export default Navbar