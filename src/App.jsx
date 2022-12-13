import './App.css'
//importar rutas
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'//importar hooks
import Context from './context/context.js'//importar context

//componentes
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

//views
import Home from './view/Home.jsx'
import Carta from './view/Carta.jsx'
import Carro from './view/Carro.jsx'
import Pagar from './view/Pagar.jsx'
import NotFound from './view/NotFound.jsx'
import Detalle from './view/Detalle.jsx'
import Iniciar from './view/Iniciar.jsx'

//importar función formatearPrecio que está dentro del archivo utilidades.js
import { formatearPrecio } from './utilidades/utilidades.js'

function App() {
  //crear variables y setter setCarta y setCarro para modificar los elementos
  const [carta, setCarta] = useState([])
  const [carro, setCarro] = useState([])

  //función agregar al carro
  const addToCarro = (item) => {
    //determinar si el carro tiene el producto que quiero agregar
    const itemIndex = carro.findIndex((producto) => producto.id === item.id)
    const updateCarro = [...carro]

    //realizar una condicional if para saber si el carro no tiene el producto
    if (itemIndex === -1) {
      const producto = {
        id: item.id,
        count: 1,
        price: item.price,
        img: item.img,
        name: item.name
      }

      updateCarro.push(producto)

      //si ya tiene el producto se incrementa la cuenta
    } else {
      updateCarro[itemIndex].count += 1
    }

    setCarro(updateCarro)
  }

  //Remover productos del carrito
  const removeFromCarro = (item) => {
    const itemIndex = carro.findIndex((producto) => producto.id === item.id)
    const updateCarro = [...carro]

    updateCarro[itemIndex].count -= 1

    if (updateCarro[itemIndex].count <= 0) {
      updateCarro.splice(itemIndex, 1)
    }

    setCarro(updateCarro)
  }

  //Calcular total del carro
  const carroTotal = () => {
    let total = 0
    carro.forEach((item) => total += item.count * item.price)

    return formatearPrecio(total)
  }

  //ocupar hook useEffect para llamar a la ruta de carta.json y hacer la petición
  useEffect(() => {
    fetch('/carta.json')
      .then((res) => res.json())
      .then((json) => setCarta(json))
      .catch((error) => console.log(error))
  }, [])

  //realizar un globalState
  const globalState = { carta, carro, addToCarro, removeFromCarro, carroTotal }

  return (
    <div className="App">
      {/* rutas */}
      <Context.Provider value={globalState}>
        <BrowserRouter>
          <Navbar></Navbar>
          {/* proteger página iniciar */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path='/iniciar' element={<Iniciar />}></Route>

            <Route path='/carta' element={
              <ProtectedRoute>
                <Carta></Carta>
              </ProtectedRoute>
            }></Route>

            <Route path='/carta' element={<Carta />}></Route>
            <Route path='/detalle/:id' element={<Detalle />}></Route>
           
            <Route path='/carro' element={<Carro />}></Route>
            <Route path='/pagar' element={<Pagar />}></Route>
            <Route path='*' element={<NotFound />}></Route>

          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </Context.Provider>
    </div>
  )
}

export default App
