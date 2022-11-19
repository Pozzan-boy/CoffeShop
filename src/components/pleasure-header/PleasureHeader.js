

import NavMenu from '../nav-menu/NavMenu';
import './pleasureHeader.scss';

const PleasureHeader = () => {


    return (
        <header className="pleasure-header">
            <NavMenu color={'white'} />
            <h2 className="pleasure-header__title">For your pleasure</h2>
        </header>
    )
}

export default PleasureHeader;