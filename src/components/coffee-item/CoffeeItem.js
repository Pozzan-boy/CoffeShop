import { Link } from 'react-router-dom';
import './coffeeItem.scss';

const CoffeeItem = ({id, path, name, country, price, descr}) => {
    return (
        <Link to={`/coffees/${id}`} style={{textDecoration: 'none'}} >
            <article className="coffee-item">
                <img src={path} className="coffee-item__img" alt="coffe item" />
                <h3 className="coffee-item__title">{name}</h3>
                <div className="coffee-item__country">{country}</div>
                <div className="coffee-item__price">{price}$</div>
            </article>
        </Link>
    )
}

export default CoffeeItem;