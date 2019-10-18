import React from "react";
import Marquee, {
  MarqueeContainer,
  MarqueeBrand,
  MarqueeSection,
  MarqueeSectionLabel,
  MarqueeItem,
  MarqueeItemLabel,
  MarqueeItemValue
} from "./Marquee";

export default {
  title: "Marquee"
};

export const defaultUsage = () => (
  <MarqueeContainer>
    <Marquee animationDuration="10s">
      <MarqueeSection>
        <MarqueeItem>
          <MarqueeItemLabel>
            <MarqueeBrand>{`<NoNonsenseCoding />`}</MarqueeBrand>
          </MarqueeItemLabel>
        </MarqueeItem>
      </MarqueeSection>
      <MarqueeSection>
        <MarqueeSectionLabel>Recent Followers:</MarqueeSectionLabel>
        <MarqueeItem>
          <MarqueeItemLabel>Item 1</MarqueeItemLabel>
          <MarqueeItemLabel>Item 2</MarqueeItemLabel>
          <MarqueeItemLabel>Item 3</MarqueeItemLabel>
        </MarqueeItem>
      </MarqueeSection>
      <MarqueeSection>
        <MarqueeSectionLabel>Recent Donations:</MarqueeSectionLabel>
        <MarqueeItem>
          <MarqueeItem>
            <MarqueeItemLabel>Item 1</MarqueeItemLabel>
            <MarqueeItemValue>$100</MarqueeItemValue>
          </MarqueeItem>
          <MarqueeItem>
            <MarqueeItemLabel>Item 2</MarqueeItemLabel>
            <MarqueeItemValue>$1</MarqueeItemValue>
          </MarqueeItem>
          <MarqueeItem>
            <MarqueeItemLabel>Item 32</MarqueeItemLabel>
            <MarqueeItemValue>$9999</MarqueeItemValue>
          </MarqueeItem>
        </MarqueeItem>
      </MarqueeSection>
    </Marquee>
  </MarqueeContainer>
);
