import React, { useState } from 'react';
import ReactFileReader from 'react-file-reader';
import styled from 'styled-components';

import Header from '../../core/components/Header';
import Button from '../../core/components/Button';
import Standard from '../../core/components/Standard';
import Download from '../../core/components/Download';

import { ReactComponent as UploadFile } from './assets/icons/upload.svg';

import {
    indentLeft,
    indentRight,
} from './business/indentation';
import {
    moveNodes,
    deleteNodes
} from './business/reorder';

import { 
    fileUpload 
} from './business/file';

import data from './data.json';
import { PALETTE } from '../../palette';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Curriculum() {
    const [curriculumData, setCurriculumData] = useState(data);

    const editStandard = (value, id) => {
        const updatedCurriculum = curriculumData.standards.map((standard, index) => {
            if(standard.id === id) {
                standard.text = value;
            }

            return standard;
        });
        setCurriculumData({...curriculumData, standards: updatedCurriculum});
        toast.success('Standard updated!');
    }
    
    const addStandard = (id, text, indentation) => {
        const updatedStandards = curriculumData.standards.concat({id, text, indentation})
        setCurriculumData({...curriculumData, standards: updatedStandards});   
    };

    const onDragStart = (e, index) => {
        e.dataTransfer.setData('index', index)
    }

    const onDragOver = (e) => {
        e.preventDefault();
    }
  
    const onDrop = (e, dropIndex) => {
        const selectedIndex = e.dataTransfer.getData("index");
        const reorderedStandards = moveNodes(
            curriculumData.standards,
            Number(selectedIndex),
            dropIndex
        );

        setCurriculumData({...curriculumData, standards: reorderedStandards })
    }

    function handleLeftIndent(standard, index) {
        const result = indentLeft(curriculumData.standards, index, 1);

        if (result) {
            setCurriculumData({...curriculumData, result});
        }
        
    }

    function handleRightIndent(standard, index) {
        const result = indentRight(curriculumData.standards, index, 1);

        if (result) {
            setCurriculumData({...curriculumData, result});
        }
    }

    function onDelete(index) {
        const updatedStandards = deleteNodes(curriculumData.standards, index);
        setCurriculumData({...curriculumData, standards: updatedStandards});
        toast.success('Standard deleted');
    }

    function fileUploadSuccess(curriculumData) {
        setCurriculumData(curriculumData);
        toast.success(`Uploaded standards for ${ curriculumData.name }`);
    }

    function fileDownloadSuccess(message) {
        toast.success(message);
    }

    function fileUploadError(error) {
        toast.error(error); 
    }

    const standards = curriculumData && curriculumData.standards && curriculumData.standards.map((standard, index) => {
        return <Standard 
                    key={standard.id} 
                    standard={standard}
                    index={index}
                    onBlur={editStandard}
                    onIndentLeft={handleLeftIndent}
                    onIndentRight={handleRightIndent}
                    // draggable={true}
                    onDragStart={onDragStart}
                    onDragOver={onDragOver}
                    onDrop={onDrop}
                    onDelete={onDelete}
                />
    })
    return (
        <>  
            <StyledHeader>
                {curriculumData.name}
            </StyledHeader>

            <StyledList>
                <Header/>
                {standards}
            </StyledList>
            <Button onClick={ e => addStandard(String(Date.now()), '', 0)}/>
            <StyledIcons>
                <ReactFileReader
                    handleFiles={files => fileUpload(files, fileUploadSuccess, fileUploadError)}
                    fileTypes={'.json'}
                >
                    <span className="side-btn upload-btn">
                        <UploadFile />
                    </span>
                </ReactFileReader>
                <Download
                    file={curriculumData}
                    onDownloadSuccess={fileDownloadSuccess}
                />
            </StyledIcons>
            <ToastContainer autoClose={2000}/>
        </>
    );
}

export default Curriculum;

const StyledHeader = styled.h1`
    margin: 0;
    text-transform: uppercase;
    font-size: 1.25rem;
    letter-spacing: 0.5px;
    color: #bcbcbc;
    border-bottom: 2px solid #efefef;
`;

const StyledIcons = styled.div`
    display: flex;
    width: 500px;
    margin: 20px auto;
    justify-content: space-evenly;
    svg {
        width: 60px;
        * {
            fill: ${PALETTE.icons.primary} !important;
        }

        &:hover {
            cursor: pointer;

            * {
                fill: ${PALETTE.icons.secondary} !important;
            }
        }
    }
`;

const StyledList = styled.ul`
    padding-left: 0;
    li {
        list-style-type: none;
        margin: 0;
        display: flex;
        padding-left: 0;
        align-items: center;
    }
`;
