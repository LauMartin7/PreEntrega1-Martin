import CartWidget from '../CartWidget/CartWidget';
import "./NavBar.css";
import {Link, NavLink} from "react-router-dom";

const NavBar = ({img}) => {
    
    return (
        <nav className="hero is-small">
            <div className="hero-body columns is-vcentered">
                    <div className="column is-1">
                        <img src={img} alt="logo"/>
                    </div>
                    <Link to="/" className="column is-2">
                        <h2 className="title is-1">Babyland</h2>
                    </Link>
                    <div className="column categories">
                        <li className="column button is-primary is-light">
                            <NavLink to={`/category/Coches`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>Coches</NavLink> 
                        </li>
                        <li className="column button is-primary is-light">
                            <NavLink to={`/category/Juguetes`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option' }>Juguetes</NavLink>
                        </li>
                        <li className="column button is-primary is-light">
                            <NavLink to={`/category/Cunas`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option' }>Cunas</NavLink>
                        </li>
                        <li className=" column button is-primary is-light">
                            <NavLink to={`/category/Alimentacion`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option' }>Alimentacion</NavLink>
                        </li>
                        <li className="column button is-primary is-light">
                            <NavLink to={`/category/Indumentaria`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option' }>Indumentaria</NavLink>
                        </li>
                    </div>
                    <ul className="column">
                        <li className="button is-primary is-light"><a className="textoMenu" href="#top">Coches</a></li>
                    </ul>
                    <ul className="column">
                        <li className="button is-primary is-light"><a className="textoMenu" href="#top">Juguetes</a></li>
                    </ul>
                    <ul className="column is-narrow">
                        <li className="button is-primary is-light"> <a className="textoMenu" href="#top">Cunas</a></li>
                    </ul>
                    <ul className="column">
                        <li className="button is-primary is-light"><a className="textoMenu" href="#top">Alimentación</a></li>
                    </ul>
                    <ul className="column">
                        <li className="button is-primary is-light"><a className="textoMenu" href="#top">Indumentaria</a></li>
                    </ul>
                    <div className="column"></div>

                    <div className="column">
                        <CartWidget/>
                    </div>
            </div>
        </nav>
    )
}

export default NavBar;