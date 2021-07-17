import React, {useState} from 'react';
import styled from 'styled-components';

const BotonStyle = styled.button`
    display: block;
    margin 0 auto;
`


const BotonColorido = () => {
    const [color, setColor] = useState('red')


    return <BotonColorido>
        apreta
    </BotonColorido>
}

export default BotonColorido;