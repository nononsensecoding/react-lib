import React from "react";
import styled from "styled-components";
import {
  Marquee,
  MarqueeBrand,
  MarqueeSection,
  MarqueeSectionLabel,
  MarqueeItem,
  MarqueeItemLabel,
  MarqueeItemValue
} from "../Marquee/Marquee";

export const Container = styled.div`
  min-width: 960px;
  min-height: 540px;
  width: 1920px;
  height: 1080px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.streamOverlayBorderColor};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const Ticker = styled.div`
  display: inline-flex;
  width: 100%;
  box-sizing: border-box;
  height: 50px;
  overflow: hidden;
  white-space: nowrap;
  margin-top: 10px;
  color: ${({ theme }) => theme.streamOverlayTickerColor};
  background-color: ${({ theme }) => theme.streamOverlayTickerBackgroundColor};
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  justify-content: flex-end;
  align-items: flex-end;
  padding-right: 6px;
`;

export const CameraContainer = styled.div`
  width: 355px;
  height: 200px;
  border: 3px solid #424242;
  box-sizing: border-box;
`;

export const StreamOverlay = ({
  recentFollowers = [],
  recentDonators = [],
  topDonators = [],
  recentSubs = []
}) => (
  <Container>
    <Body>
      <Column></Column>
      <Column></Column>
      <Column></Column>
      <Column>
        <CameraContainer></CameraContainer>
      </Column>
    </Body>
    <Ticker>
      <Marquee animationDuration="60s">
        <MarqueeSection>
          <MarqueeItem>
            <MarqueeItemLabel>
              <MarqueeBrand>{`<NoNonsenseCoding />`}</MarqueeBrand>
            </MarqueeItemLabel>
          </MarqueeItem>
        </MarqueeSection>
        <MarqueeSection>
          <MarqueeSectionLabel>Recent Followers:</MarqueeSectionLabel>
          {recentFollowers.map(follower => (
            <MarqueeItem key={follower.id}>
              <MarqueeItemLabel>{follower.name}</MarqueeItemLabel>
            </MarqueeItem>
          ))}
        </MarqueeSection>
        <MarqueeSection>
          <MarqueeSectionLabel>Recent Donations:</MarqueeSectionLabel>
          {recentDonators.map(donator => (
            <MarqueeItem key={donator.id}>
              <MarqueeItemLabel>{donator.name}</MarqueeItemLabel>
              <MarqueeItemValue>${donator.amount}</MarqueeItemValue>
            </MarqueeItem>
          ))}
        </MarqueeSection>
        <MarqueeSection>
          <MarqueeSectionLabel>Recent Subs:</MarqueeSectionLabel>
          {recentSubs.map(sub => (
            <MarqueeItem key={sub.id}>
              <MarqueeItemLabel>{sub.name}</MarqueeItemLabel>
            </MarqueeItem>
          ))}
        </MarqueeSection>
        <MarqueeSection>
          <MarqueeSectionLabel>Top Donators:</MarqueeSectionLabel>
          {topDonators.map(donator => (
            <MarqueeItem key={donator.id}>
              <MarqueeItemLabel>{donator.name}</MarqueeItemLabel>
              <MarqueeItemValue>${donator.amount}</MarqueeItemValue>
            </MarqueeItem>
          ))}
        </MarqueeSection>
      </Marquee>
    </Ticker>
  </Container>
);

export default StreamOverlay;
