import React, { useState } from 'react';
import Actions from './Actions';

import classNames from 'classnames';
import styled from 'styled-components';

function Standard(props) {
    const { 
        standard, 
        index,
        onBlur, 
        onIndentLeft, 
        onIndentRight, 
        onDragStart,
        onDragOver,
        onDrop,
        onDelete
    } = props;
    
    const [isEditing, toggleEditing] = useState(false);
    const textStyle = classNames('text', (!standard.text ? "empty" : ''))

    const handleReturnKeyPress = (e) => {
        if (e.charCode === 13) {
            onBlur(e.target.value, standard.id)
            toggleEditing(false)
        }
       
    }

    const handleBlur = (value, id) => {
        toggleEditing(false);
        onBlur(value, id);   
    }  
 
    return (
        <StyledSection>
            <li className={`row indent-${standard.indentation}`}>
            <Actions 
                standard={standard} 
                index={index}
                onIndentLeft={onIndentLeft}
                onIndentRight={onIndentRight} 
                onDragStart={onDragStart}
                onDrop={onDrop}
                onDragOver={onDragOver}
                onDelete={onDelete}
            />
            <span
                className="indentation"
                style={{ width: `${standard.indentation*20}px`}}
            ></span>
            {
                isEditing
                ?
                <div>
                    <input
                        type="text"
                        defaultValue={standard.text}
                        onBlur={e => handleBlur(e.target.value, standard.id)}
                        onKeyPress={handleReturnKeyPress}
                        placeholder="Type standard here (e.g. Numbers)"
                        autoFocus={true}
                    />
                </div>
                : 
                <span className={textStyle} onClick={() => toggleEditing(true)}>
                    { standard.text ? standard.text: "Type standard here (e.g. Numbers)"}
                </span>
            }   
            </li>
        </StyledSection>
    )
}

export default Standard;

const StyledSection = styled.section`
    li.row {
        padding: 0;
        border-bottom: 2px solid #e6e6e6;

        & > span {
            &:not(:last-of-type) {
                margin-right: calc(10px + 1vw);
            }
        }

        & > span.text,
        div {
        
            display: flex;
            position: relative;
            flex: 1;
            padding: 12px 0 12px calc(30px + 3vw);
            font-weight: bold;
            word-break: break-all;
            
            &::before {
                content: " ";
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                background-color: #f7f8f8;
                width: 42px;
            }
        }
        &.indent-0 > span.text {
            color: #5dced3;
        }
        &.indent-1 > span.text {
            color: #303030;
        }
        &.indent-2 > span.text {
            color: #9d9e9f;
        }
        & > span.text.empty {
            color: #cecfd0;
            font-weight: bold;
            font-size: 1rem;
        }
        
        div {
            display: flex;
            
            &::before {
                display: none;
            }
            input {
                border: 0;
                padding: 0;
                flex: 1;
                font-size: 1rem;
                outline: none;
        
                &::placeholder {
                    color: #cecfd0;
                    font-weight: bold;
                }
            }
        }
    }
`