import { useState } from "react";
import './CheckoutForm.css';
import {auth, googleProvider} from "../../config/firebase"
import {signInWithPopup, signOut} from "firebase/auth";

const CheckoutForm = ({ onConfirm }) =>{
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')

    const handleConfirm = (event) =>{
        event.preventDefault()

        const mailGoogle=  auth?.currentUser?.email
        const userData ={
            name, phone, mail, password, mailGoogle
        }

        onConfirm(userData)
    }
    
    const signInWithGoogle = async () =>{
        await signInWithPopup(auth, googleProvider)
        
    }

    const logOut = async () =>{
        await signOut(auth);
    }

    return(
        <div className="container">
            <form onSubmit={handleConfirm} className="form">
                <h2>SIGN IN</h2>
                <button onClick={signInWithGoogle}>Ingresar con Google</button>
                <span>Usuario: {auth?.currentUser?.email}</span>
                <button onClick={logOut}>Cerrar sesión</button>
                <h2>SIGN UP</h2>
                <label className="label">
                    Nombre
                    <input
                    className="input"
                    type="text"
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                    />
                </label>
                <label className="label">
                    Telefono
                    <input
                    className="input"
                    type="text"
                    value={phone}
                    onChange={({ target }) => setPhone(target.value)}
                    />
                </label>
                <label className="label">
                    Email
                    <input
                    className="input"
                    type="email"
                    value={mail}
                    onChange={({ target }) => setMail(target.value)}
                    />
                </label>
                <label className="label">
                    Password
                    <input
                    className="input"
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