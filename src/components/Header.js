import React, { useState } from 'react'
import styles from "styled-components"
import VideoLarge from '../assets/videos/soul-large.mp4'
import VideoMedium from '../assets/videos/soul-medium.mp4'
import VideoSmall from '../assets/videos/soul-small.mp4'
import { Container, Row } from "react-bootstrap"
const Header = () => {
  //const src = getVideoSrc(window.innerWidth);
  //const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  //const onLoadedData = () => {
  //setIsVideoLoaded(true)
  // }

  const src = VideoMedium;

  return (
    <>

      <Container fluid>
        <Row>
          <video className="embed-responsive embed-responsive-16by9" autoPlay playsInline muted>
            <source className="embed-responsive-item" src={src} type="video/mp4" />
          </video>
        </Row>

      </Container>
    </>
  )
}
//const getVideoSrc = width => {
//if (width >= 1080) return VideoLarge;
//if (width >= 720) return VideoMedium;
//return VideoSmall;
//}

// const HeaderBg = styles.div`

// width:100%
// position:relative;



// `

export default Header