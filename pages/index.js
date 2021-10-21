import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {Content, Primary, HeroVideo, HeroContent} from '../src/styled/App';

const IFrameContainer = styled.div`
    position: relative;
    padding-top: 100vh;
    width: 300%;
    left: -100%;
    margin-top: -50px;
`;

const IFrame = styled.iframe`
    position: absolute; 
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%;
    z-index: -99;
`;

const VideoFilter = styled.div`
    background: rgba(0,0,0,0.76);
    z-index: 10;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;

const LeftButton = styled.div`

`;

const RightButton = styled.div`

`;

export default function Index() {

    return <>
    <Content>
        <IFrameContainer>
            <VideoFilter></VideoFilter>
            <IFrame frameborder="0" height="100%" width="100%" allow = "autoplay; fullscreen"
            src="https://youtube.com/embed/EXtYTXfArFs?autoplay=1&playlist=EXtYTXfArFs&loop=1&mute=1&controls=0&showinfo=0&autohide=1">
            </IFrame>
        </IFrameContainer>
    </Content>
    </>
}
