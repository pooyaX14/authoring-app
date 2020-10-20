import React, { useRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as DownloadFile } from './assets/icons/download.svg';

function Download(props) {
    const { file, onDownloadSuccess } = props;
    const linkReference = useRef();

    async function prepareDownload() {
        const fileName = file.name || new Date().toDateString();
        const json = JSON.stringify(file);
        const blob = new Blob([json],{type:'application/json'});
        const href = await URL.createObjectURL(blob);

        linkReference.current.href = href;
        linkReference.current.download = fileName + ".json";
        linkReference.current.click();
        onDownloadSuccess("File downloaded successfully!")
    }

    return (
        <>
            <DownloadFile onClick={ e => prepareDownload()}/>
            <HiddenLink ref={linkReference} />
        </>
    )
};

const HiddenLink = styled.a`
    display: hidden;
`;

export default Download;