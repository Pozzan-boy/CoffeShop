import useCoffeeService from '../../services/CoffeeService';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setFilters, coffeesFetching, coffeesFetched, coffeesFetchingError } from '../../actions/coffeeActions';
import CoffeeItem from '../coffee-item/CoffeeItem';

import './coffeeList.scss';

const CoffeeList = () => {

    const {getCoffee} = useCoffeeService();
    const dispatch = useDispatch();
    const {coffees, currentFilters, filterString} = useSelector(state => state);

    useEffect(() => {
        dispatch(coffeesFetching());
        getCoffee()
            .then(data => {
                dispatch(coffeesFetched(data));
            })
            .catch(() => dispatch(coffeesFetchingError()));
    }, [])

    const coffeeItems = coffees.filter((item) => {
        if(!(item.name.includes(filterString))) {
            return;
        }
        if(currentFilters.length === 0) {
            return item;
        }
        if(currentFilters.indexOf(item.country) !== -1) {
            return item
    }}).map(item => <CoffeeItem
                                                key={item.id}
                                                id={item.id}
                                                name={item.name}
                                                path={item.img}
                                                country={item.country}
                                                price={item.price}
                                                descr={item.description} />)

    const findFilter = (coffees) => {
        const countries = coffees.map(item => item.country);
        return [...new Set(countries)];
    }

    useEffect(() => {
        dispatch(setFilters(findFilter(coffees)));
    }, [coffees]);

    return (
        <section className="coffee-list">
            <div className="coffee-list__wrapper">
                {coffeeItems}
            </div>
        </section>
    )
}

export default CoffeeList;