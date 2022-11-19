import styled from 'styled-components'

import CoffeeBeansDivider from './coffee-beans/CoffeeBeansDivider';
import './coffeeDivider.scss';

const CoffeeDivider = ({color}) => {
    const Line = styled.hr(`
        background-color: ${color}
    `)

    return (
        <div className="coffee-divider">
            <Line className="coffee-divider__line" />
            <CoffeeBeansDivider color={color} />
            <Line className="coffee-divider__line" />
        </div>
    )
}

export default CoffeeDivider;