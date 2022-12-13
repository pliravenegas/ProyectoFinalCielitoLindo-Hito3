import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom" //Hook para leer los id de los productos de la pagina
import { useContext, useState, useEffect } from "react"
import Context from "../context/context.js"

import Ingredients from "../components/Ingredients.jsx"
import { formatearPrecio } from "../utilidades/utilidades.js"

const Detalle = () => {
    //1. capturar el id de los productos de la carta desde los parametros
    const { id } = useParams()

    //2. Traer el listado completo de los productos para despues ser filtrados
    const { carta, addToCarro } = useContext(Context)

    const [detalle, setDetalle] = useState({ingredients: [], price:0})

    useEffect(() => {
        const detalle = carta.filter((item) => item.id === id)
        setDetalle(detalle[0])
       
    }, [])

    return (
        <main>
            <h2>Detalle del producto</h2>
            <section className="detalle-vista">
                <article className="imagen" style={{backgroundImage: `url(${detalle.img})`}}>
                </article>

                <article className="contenido">
                    <h3>{detalle.name} - Precio ${formatearPrecio(detalle.price)}</h3>
                   
                    <p>{detalle.desc}</p>

                    <Ingredients ingredients={detalle.ingredients}></Ingredients>
                       
                        <div className="botones-detalle">
                            <button onClick={() => addToCarro(detalle)}>Agregar <i className="fas fa-shopping-cart"></i></button>

                            <Link to="/Carta"><button className='volver-carta'>Volver a Carta</button></Link>
                        </div>
                    
                </article>

            </section>
        </main>
    )
}

export default Detalle

