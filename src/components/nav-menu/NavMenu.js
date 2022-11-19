import styled from 'styled-components'
import CoffeeBeans from './coffee-beans/CoffeeBeans';

import './navMenu.scss';

const NavMenu = ({color}) => {
    const linkStyle = {
        color: color
    }

    const Link = styled.a`
        &::before {
            background: ${color}
        }
    `;

    return (
        <nav className="nav-menu">
            <CoffeeBeans color={color} />
            <ul className="nav-menu__list">
                <li className="nav-menu__item">
                    <Link href='/' className="nav-menu__link" style={linkStyle} >Coffee house</Link>
                </li>
                <li className="nav-menu__item">
                    <Link href='/coffees' className="nav-menu__link" style={linkStyle} >Our coffee</Link>
                </li>
                <li className="nav-menu__item">
                    <Link href='/for-your-pleasure' className="nav-menu__link" style={linkStyle} >For your pleasure</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavMenu;