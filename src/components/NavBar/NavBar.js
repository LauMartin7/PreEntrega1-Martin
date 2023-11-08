import CartWidget from "../CartWidget/CartWidget";
import logo from './assets/logo.png';
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className="hero is-small">
            <div className="hero-body columns is-vcentered">
                    <div className="column is-1">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="column is-2">
                        <h2 className="title is-2">Babyland</h2>
                    </div>
                    <div className="column"></div>
                    <div className="column">
                        <button className="button is-primary is-light">Cochecitos</button>
                    </div>
                    <div className="column">
                        <button className="button is-primary is-light">Juguetes</button>
                    </div>
                    <div className="column is-narrow">
                        <button className="button is-primary is-light">Cunas</button>
                    </div>
                    <div className="column">
                        <button className="button is-primary is-light">Alimentación</button>
                    </div>
                    <div className="column">
                        <button className="button is-primary is-light">Butacas</button>
                    </div>
                    <div className="column"></div>
                    <div className="column">
                        <CartWidget/>
                    </div>
            </div>
        </nav>
    )
}

export default NavBar;