import React from 'react';
import styled from 'styled-components';

import Curriculum from './screen/Curriculum'
function App() {
    return (
        <StyledApp className="App">
            <Curriculum />
        </StyledApp>
    );
}

const StyledApp = styled.div`
    margin: 30px auto;
    max-width: 1500px;
    padding: 30px;
    font-size: 1rem;
    position: relative;
    min-height: 100%;
`;

export default App;
