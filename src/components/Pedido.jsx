import { formatearPrecio } from '../utilidades/utilidades.js'
import { Link } from 'react-router-dom'

const Pedido = ({ carro, addToCarro, removeFromCarro, carroTotal }) => {
return (
    <main>
        <div className='titulo-h2'>
            <h2>Detalle de la compra</h2>
        </div>
        <section className="detalle-compra">
            <ul>
            {/* recorrer el array con el método.map para mostrarme el detalle de cada producto  */}
            {
                carro.map((item) => {
                    return (
                        <div className='pedido'>
                            <li key={item.id}>
                                <article className='detalle-producto'>
                                    <div className="producto">
                                        <img src={item.img} alt={item.name} />
                                        <h3>{item.name}</h3>
                                    </div>
                                    
                                    <div className="botones-pedido">
                                        <p>$ {formatearPrecio(item.price * item.count)}</p>
                                        <button className="agregar-disminuir button" onClick={() => removeFromCarro(item)}>-</button>
                                        <p className="bold numero-centrado">{item.count}</p>
                                        <button className="agregar-disminuir button" onClick={() =>  addToCarro(item)}>+</button>
                                    </div>
                                </article>
                                     
                                </li>
                                </div>
                               )
                            })
                        }
                        </ul>
                        
                        <div className="total">
                            <h4>Total: $ {carroTotal()} </h4>
                            <Link to="/pagar" className="pagar">Ir a pagar</Link>
                        </div>
                            
            </section> 
        </main>
    )
}

export default Pedido