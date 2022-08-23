import React from 'react'
import styled from 'styled-components'

const Backdrop = (props) => {
    return (
        <Drop onClick={props.change} />
    )
}

export default Backdrop


const Drop = styled.div`
  width: 100%;
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
`