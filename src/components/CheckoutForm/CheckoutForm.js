import { useState } from "react";
import './CheckoutForm.css';

const CheckoutForm = ({ onConfirm }) =>{
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [mail, setMail] = useState('')

    const handleConfirm = (event) =>{
        event.preventDefault()

        const userData ={
            name, phone, mail
        }

        onConfirm(userData)
    }

    return(
        <div className="container">
            <form onSubmit={handleConfirm} className="form">
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
                <div className="label">
                    <button type="submit" className="button">Crear orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm