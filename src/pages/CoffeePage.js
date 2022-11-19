import About from "../components/about/About";
import CoffeeHeader from "../components/coffee-header/CoffeeHeader";
import CoffeeList from "../components/coffee-list/CoffeeList";
import Filter from "../components/filter/Filter";

import aboutOurBeansImg from '../resources/img/about-our-beans-img.jpg';

const CoffeePage = () => {
    const lineStyle = {
        width: '240px',
        display: 'block',
        margin: '0 auto',
        marginBottom: '60px'
    }

    return (
        <>
            <CoffeeHeader />
            <About img={aboutOurBeansImg}
                   title={'About our beans'}
                   descr={`Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                           Afraid at highly months do things on at. Situation recommend objection do intention
                           so questions. 
                           As greatly removed calling pleased improve an. Last ask him cold feel
                           met spot shy want. Children me laughing we prospect answered followed. At it went
                           is song that held help face.`} />
            <hr style={lineStyle}/>
            <Filter />
            <CoffeeList />
        </>
    )
}

export default CoffeePage;