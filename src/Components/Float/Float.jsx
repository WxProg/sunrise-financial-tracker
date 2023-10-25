import React from "react";
import styled, { keyframes } from "styled-components";
import { useViewportAnimation } from "../../utils/useViewportAnimation";

function Float() {
  const { width, height } = useViewportAnimation();

  // This is an animation that was created to use in side of my float element.
  const moveFloat = keyframes`
  0%{
    transform: translate(0,0);
  }
  50%{
    transform: translate(${width / 1.2}px, ${height / 2}px)
  }
  100%{
    transform: translate(0,0);
  }
  `;

  const FloatStyled = styled.div`
    width: 85vh;
    height: 85vh;
    position: absolute;
    border-radius: 50%;
    margin-left: -37vh;
    margin-top: -37vh;
    background: linear-gradient(180deg, #f56692 0%, #f2994a 100%);
    filter: blur(150px);
    animation: ${moveFloat} 18s alternate linear infinite;
  `;

  return <FloatStyled>Float</FloatStyled>;
}

export default Float;
