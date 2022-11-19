import NavMenu from '../nav-menu/NavMenu';
import './coffeeHeader.scss';

const CoffeeHeader = () => {
    return (
        <header className="coffee-header">
            <NavMenu color={'white'} />
            <h2 className="coffee-header__title">
                Our Coffee
            </h2>
        </header>
    )
}

export default CoffeeHeader;