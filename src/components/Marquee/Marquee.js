import React from "react";
import styled, { keyframes } from "styled-components";

const marquee = keyframes`
  0% {
    transform: translate(0%, 0);
  }
  50% {
    transform: translate(-100%, 0);
  }
  50.001% {
    transform: translate(100%, 0);
  }
  100% {
    transform: translate(0%, 0);
  }
`;

export const MarqueeContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  font-family: ${({ theme }) => theme.fontFamily};
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  min-height: 50px;
  height: 50px;
  color: ${({ theme }) => theme.marqueeColor};
  background-color: ${({ theme }) => theme.marqueeBackgroundColor};
`;

export const Marquee = styled.div`
  display: inline-flex;
  box-sizing: border-box;
  align-items: center;
  animation: ${marquee} 30s linear infinite running;
  animation-duration: ${({ animationDuration }) => animationDuration || "30s"};
  padding: 0 20px;
  font-family: ${({ theme }) => theme.fontFamily};
  height: 100%;

  &:hover {
    animation-play-state: paused;
  }
`;

export const MarqueeBrand = styled.code`
  font-size: 18px;
  color: #fff;
`;

export const MarqueeSection = styled.div`
  display: inline-flex;
  height: 100%;
  align-items: center;
`;

export const MarqueeSectionLabel = styled.div`
  color: ${({ theme }) => theme.marqueeSectionLabelColor};
  background-color: ${({ theme }) => theme.marqueeSectionLabelBackgroundColor};
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 20px;
  margin-right: 20px;
  text-transform: uppercase;
`;

export const MarqueeItem = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const MarqueeItemLabel = styled.span`
  padding-right: 10px;
  color: ${({ theme }) => theme.marqueeSectionItemLabelColor};
`;

export const MarqueeItemValue = styled.span`
  color: ${({ theme }) => theme.marqueeSectionItemValueColor};
`;

export default Marquee;
