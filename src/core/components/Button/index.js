import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Add } from  "./assets/icons/plus.svg"

function Button(props) {
    const { title } = props;
    return (
        <StyledButton onClick={ props.onClick}>
			<Add />
			{ title ? title : "Add a Standard" }
		</StyledButton>
    );
}

export default Button;

const StyledButton = styled.button`
    cursor: pointer;
    outline: none;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: #337ab7;
    color: #e4eff5;
    font-size: 1.428rem;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 6px;
    margin-top: 20px;

    svg {
        width: 1.286rem;
        height: 1.286rem;
        border: 1px solid #e4eff5;
        border-radius: 50%;
        padding: 3px;
        box-sizing: border-box;
        margin-right: 5px;
        
        * {
            fill: #e4eff5;
        }
    }
`