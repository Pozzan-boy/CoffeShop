import CoffeeDivider from '../coffee-divider/CoffeeDivider';
import NavMenu from '../nav-menu/NavMenu';
import './footer.scss';

const Footer = () => {
    const color = 'black';

    return (
        <footer className="footer">
            <NavMenu color={color} />
            <CoffeeDivider color={color} />
        </footer>
    )
}

export default Footer;