import React from 'react';
import styled from 'styled-components';

function Header(props) {

    return (
            <StyledList className="headings">
                <div className="heading heading-1">
                    <span className="title">Actions</span>
                    <span className="sub-title">Move, Indent,<br />Outdent, Delete</span>
                </div>
                <div className="heading heading-2">
                    <span className="title">Standard</span>
                    <span className="sub-title">The text of the standard</span>
                </div>
            </StyledList>
    );
}

export default Header;

const StyledList = styled.li`
    padding: 10px 0;
    display: flex;
    align-items: center;

    &.headings {
        border-bottom: 2px solid #efefef;
        
        .heading {
                &-1, &-2 {
                    flex: 1;
                }
                @media(min-width: 769px) {
                    &-1 {
                        flex: 0.2;
                        margin-right: 10px;
                    }
                    &-2 {
                        flex: 0.8
                    }
                }
            .title {
                color: #424242;
                display: block;
                font-weight: bold;
                font-size: 1.071rem;
            }

            .sub-title {
                color: #cecfd0;
                font-weight: bold;
                font-size: 0.928rem;
            }
        }
    }
`;