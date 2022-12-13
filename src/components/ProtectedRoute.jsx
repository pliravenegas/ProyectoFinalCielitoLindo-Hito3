import {Navigate} from 'react-router-dom'
/* children es un prop de react que hace referencia a todo lo que vaya dentro del componente ProtecterRoute. Con este componente se detecta a una persona si esta logueada para luego retornar al componente que envuelve o redirigire. Además el componente va a buscar un token al locastorage y verifica si existe un token al momento de cargar, si es asi carga children sino redirige */

const ProtectedRoute = ({children}) =>{
    //método getItem permite traer algo que este guardado en el localstorage
    const token = localStorage.getItem('token')
    if(token){
        return children //props anidado dentro del componente Protected Route 
    }else {
        return <Navigate to='/iniciar'></Navigate>
    }
}

export default ProtectedRoute