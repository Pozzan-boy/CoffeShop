import { useDispatch, useSelector } from 'react-redux';
import { setCurrentFilters, setFilterString } from '../../actions/coffeeActions';

import './filter.scss';

const Filter = () => {

    const dispatch = useDispatch();
    const {filters, currentFilters, filterString} = useSelector(state => state);

    const onFilterClick = (filter) => {
        if(currentFilters.indexOf(filter) === -1) {
            let copyFilters = currentFilters.filter(item => item);
            copyFilters.push(filter);
            dispatch(setCurrentFilters(copyFilters));
        } else {
            dispatch(setCurrentFilters(currentFilters.filter((item) => {
                if(item !== filter) {
                    return item;
                }
            })))
        }
    }

    const filterItems = filters.map((item, i) => {
            const style = currentFilters.indexOf(item) !== -1 ? {background: 'rgba(0, 0, 0, 0.3)'} : {};
            return (<button key={i} className="filter__button" onClick={() => onFilterClick(item)} style={style} >{item}</button>)
        });

    return (
        <div className="filter">
            <div className="filter__wrapper">
                <h3 className="filter__title-look">Looking for</h3>
                <input className="filter__input" placeholder="start typing here..." value={filterString} onChange={(e) => dispatch(setFilterString(e.target.value))} />
                <h3 className="filter__title-country">Or filter for</h3>
                <div className="filter__filters">
                    {filterItems}
                </div>
            </div>
        </div>
    )
}

export default Filter;