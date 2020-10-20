import React from 'react';
import { ReactComponent as Arrow } from './img/right-arrow.svg';
import { ReactComponent as Delete } from './img/delete.svg';
import { ReactComponent as Move } from './img/move.svg';

import styled from 'styled-components';

function Actions(props) {
    const {
        standard,
        index,
        onIndentRight,
        onIndentLeft,
        onDragStart,
        onDrop,
        onDragOver,
        onDelete
    } = props;


    return(
        <StyledActions>
            <StyledIcon draggable={true} 
                onDragStart={e => onDragStart(e, index)}
                onDrop={e => onDrop(e, index)}
                onDragOver={e => onDragOver(e)}
                >
                <Move />
            </StyledIcon>
            <StyledIcon> 
                <Arrow className="reverse" onClick={(e) => onIndentLeft(standard, index)}/>
            </StyledIcon>
            <StyledIcon> 
                <Arrow onClick={(e) => onIndentRight(standard, index)}/>
            </StyledIcon>
            <StyledIcon>
                <Delete onClick={(e) => onDelete(index)}/>
            </StyledIcon>
        </StyledActions>
    )
}

const StyledActions = styled.span`
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    flex: 0.1;
    min-width: 100px;
    justify-content: space-evenly;
    align-items: center;
`;

const StyledIcon = styled.span`
    svg {
            width: 17px;
            max-width: 100%;
            max-height: 100%;

            &.reverse {
                transform: rotate(180deg);
            }

            * {
                fill: #e6eaeb !important;
            }
            &:hover {
                cursor: pointer;

                * {
                    fill: #55c7cd !important;
                }
            }
        }
`;

export default Actions;