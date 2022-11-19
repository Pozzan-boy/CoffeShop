import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import useCoffeeService from '../../services/CoffeeService';

import './itemView.scss';
import CoffeeDivider from '../coffee-divider/CoffeeDivider';

const ItemView = () => {

    const {coffeeId} = useParams();
    const [coffee, setCofee] = useState(null);
    const {getCoffeeItem} = useCoffeeService();

    useEffect(() => {
        getCoffeeItem(coffeeId)
            .then(setCofee)
    }, []);

    function renderView() {
        return (
            <section className="item-view">
            <div className="item-view__wrapper">
                <img className="item-view__img" alt="coffee-img" src={`../${coffee.img}`} />
                <div className="item-view__text">
                    <h2 className="item-view__title">About it</h2>
                    <CoffeeDivider color={'black'} />
                    <br />
                    <div className="item-view__country">
                        <b>Country: </b>{coffee.country}
                    </div><br></br>
                    <div className="item-view__descr">
                        <b>Description: </b>{coffee.description}
                    </div><br></br>
                    <div className="item-view__price">
                        <b>Price: </b><span>{`${coffee.price}$`}</span>
                    </div>
                </div>
            </div>
        </section>
        )
    }

    return (
        <>
            {coffee == null ? null : renderView()}
        </>
    )
}

export default ItemView;