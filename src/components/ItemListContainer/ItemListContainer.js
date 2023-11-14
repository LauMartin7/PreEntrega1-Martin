import "./ItemListContainer.css";


const ItemListContainer = ({ greeting, img }) => {
    return (
        <div className="columns is-vcentered mensaje">
            <div className="column is-3 notification is-primary is-light is-offset-3">
                <h1 className="subtitle is-3">{greeting}</h1>
            </div>
            <figure className="column image is-4 is-by1">
                    <img className="is-rounded" src={img} alt="logo"/>
            </figure>
        </div>
    );
}

export default ItemListContainer