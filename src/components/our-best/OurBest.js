import useCoffeeService from '../../services/CoffeeService';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { bestCoffeesFetching, bestCoffeesFetched, bestCoffeesFetchingError } from '../../actions/coffeeActions';
import CoffeeItem from '../coffee-item/CoffeeItem';

import './ourBest.scss';


const OurBest = () => {
    const {getBestCoffee} = useCoffeeService();
    const dispatch = useDispatch();
    const {bestCoffees} = useSelector(state => state);

    useEffect(() => {
        dispatch(bestCoffeesFetching());
        getBestCoffee()
            .then(data => dispatch(bestCoffeesFetched(data)))
            .catch(() => dispatch(bestCoffeesFetchingError()));
    }, [])


    const coffeeItems = bestCoffees.map(item => <CoffeeItem
                                                    key={item.id}
                                                    id={item.id}
                                                    name={item.name}
                                                    path={item.img}
                                                    country={item.country}
                                                    price={item.price}
                                                    descr={item.description} />)

    return (
        <section className="our-best">
            <h2 className="our-best__title">Our best</h2>
            <div className="our-best__wrapper">
                {coffeeItems}
            </div>
        </section>
    )
}

export default OurBest;