import { useState } from "react";
import './CheckoutForm.css';
import {auth} from "../../config/firebase"
import {createUserWithEmailAndPassword, signOut} from "firebase/auth";

const CheckoutForm = ({ onConfirm }) =>{
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleConfirm = (event) =>{
        event.preventDefault()

        const userData ={
            name, phone, email, password
        }

        if (name && phone && email && password) {
            onConfirm(userData);
        } 
    }

    const signUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        }   catch (error) {
            alert("Error al crear usuario: " + error.message);
        }
    }

    const logOut = async () => {
        await signOut(auth);
    }

    return(
        <div className="container">
            <div className="form">
                <h2 className="subtituloForm">SIGN UP</h2>
                <label className="label">
                    Email
                    <input
                    className="input"
                    required={true}
                    type="email" 
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                    />
                </label>
                <label className="label">
                    Password
                    <input
                    className="input"
                    required={true}
                    type="password" 
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                    />
                </label>
                <div className="columns is-vcentered">
                    <button className="btnLog column is-5" onClick={signUp}>Registrate</button>
                    <div className="column is-1"></div>
                    <button className="btnLog column is-6" onClick={logOut}>Cerrar sesión</button>
                </div>
                <span className="spanForm">Usuario: {auth?.currentUser?.email}</span>
            </div>
                
            <form onSubmit={handleConfirm} className="form">
                <h2 className="subtituloForm">CREAR ORDEN DE COMPRA</h2>
                <label className="label">
                    Nombre
                    <input
                    className="input"
                    required={true}
                    type="text" 
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                    />
                </label>
                <label className="label">
                    Telefono
                    <input
                    className="input" 
                    required={true}
                    type="text" 
                    value={phone}
                    onChange={({ target }) => setPhone(target.value)}
                    />
                </label>
                <label className="label">
                    Email
                    <input
                    className="input"
                    required={true}
                    type="email" 
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                    />
                </label>
                <label className="label">
                    Password
                    <input
                    className="input"
                    required={true}
                    type="password" 
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                    />
                </label>
                <div className="label">
                    <button type="submit" className="button">Crear orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm