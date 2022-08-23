import React, { useState } from 'react'
import styled from 'styled-components'
import VideoLarge from '../assets/videos/VideoLarge.mp4'
import VideoMedium from '../assets/videos/VideoMedium.mp4'
import VideoSmall from '../assets/videos/VideoSmall.mp4'
import { Container } from "react-bootstrap"

const Video = (props) => {

    const src = getVideoSrc(window.innerWidth);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    const onLoadedData = () => {
        setIsVideoLoaded(true)
    }
    return (


        <VidContainer>

            <VideoContainer>
                <video autoPlay playsInline muted src={src} onLoadedData={onLoadedData} />
            </VideoContainer>
            <VideoText className=" textCenter">
                Welcome to
                <span className="display-5">
                    SoulBreeze
                </span>
            </VideoText>
        </VidContainer>

    )
}

const getVideoSrc = width => {
    if (width >= 1080) return VideoLarge;
    if (width >= 720) return VideoMedium;
    return VideoSmall;
};

export default Video


// const VidContainer = styled.div`
//   position: relative;
//   overflow: hidden;
//   /* width: 100%;
//   height: 100%; */
// /* height:100%; */

// `

// const VideoContainer = styled.div`
//  width: 100%    !important;
//   height: auto   !important;

// `

// const VideoText = styled.div`
// position:absolute;
// top:0;
// left:0;
// font-weight:700;
// color:#fff;
// margin:0 auto;
// `