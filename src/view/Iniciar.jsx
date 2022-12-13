import { useState } from "react"
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Iniciar = () => {
const navigate = useNavigate()

//hacer useState
const [correo, setCorreo] = useState('');
const [contraseña, setContraseña] = useState('')
const [error, setError] = useState(false)

//array de objetos con información del archivo json users
const correoContraseña = [
    {
        email: 'travisbarker@blink182.com',
        pass: 'tutupatutupa',
    },
    {
        email: 'synystergates@avengedsevenfold.com', 
        pass: 'sofaraway'
    }
]
 
//Función Login
const login = (e) => {
    e.preventDefault()
    if(correo === correoContraseña[0].email && contraseña === correoContraseña[0].pass || correo === correoContraseña[1].email && contraseña === correoContraseña[1].pass  ){
        localStorage.setItem('token', 'test_token_123456')
        navigate('/carta')
    }else {
        setError(true)
    }
}
    return (
        <main>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={(e) => login(e)}>
                <label for="correo">Ingrese su correo electrónico</label>

                <input type="email" id="correo" onChange={(e) => setCorreo(e.target.value)} placeholder="ejemplo@correo.com"></input>
 
                <label for="contraseña">Ingrese la contraseña</label>

                <input type="password" id="contraseña" onChange={(e)=> setContraseña(e.target.value)} placeholder="Contraseña"></input>

                <div className="btn-form">
                    <button className="iniciar-sesion">Iniciar Sesión</button>
                    <NavLink to='/'><button className="volver">Volver</button></NavLink>
                </div>

                {error && <p>Correo o contraseña incorrecta</p> }

            </form>
        </main>
    )
}

export default Iniciar