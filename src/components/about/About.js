import CoffeeDivider from '../coffee-divider/CoffeeDivider';
import './about.scss';

const About = ({img, title, descr}) => {
    return (
        <section className="about">
            <div className="about__wrapper">
                <img src={img} className="about__img" alt="about" />
                <div className="about__text">
                    <h2 className="about__title">
                        {title}
                    </h2>
                    <CoffeeDivider color={'black'} />
                    <p className="about__descr">
                        {descr}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;