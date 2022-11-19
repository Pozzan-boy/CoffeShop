import CoffeeDivider from '../coffee-divider/CoffeeDivider';
import NavMenu from '../nav-menu/NavMenu';

import './mainHeader.scss';

const MainHeader = () => {
    return (
        <header className="main-header">
            <NavMenu color={'white'} />
            <h1 className="main-header__title">Everything You Love About Coffee</h1>
            <CoffeeDivider color={'white'} />
            <h2 className="main-header__subtitle">
                We makes every day full of energy and taste<br />
                <span>Want to try our beans?</span>
            </h2>
            <button className="main-header__button">More</button>
        </header>
    )
}

export default MainHeader;