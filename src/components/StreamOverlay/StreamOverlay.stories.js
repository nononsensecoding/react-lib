import React from "react";
import StreamOverlay from "./StreamOverlay";

export default {
  title: "StreamOverlay"
};

const recentFollowers = [
  {
    id: 1,
    name: "Freddy Mercury"
  },
  {
    id: 2,
    name: "Brian Wilson"
  },
  {
    id: 3,
    name: "Miley Cyrus"
  },
  {
    id: 4,
    name: "Tom Brady"
  },
  {
    id: 5,
    name: "Shakira"
  }
];

const donators = [
  {
    id: 1,
    name: "Freddy Mercury",
    amount: 50
  },
  {
    id: 2,
    name: "Brian Wilson",
    amount: 150
  },
  {
    id: 3,
    name: "Miley Cyrus",
    amount: 5
  },
  {
    id: 4,
    name: "Tom Brady",
    amount: 50
  },
  {
    id: 5,
    name: "Shakira",
    amount: 3333
  }
];

export const defaultUsage = () => (
  <StreamOverlay
    topDonators={donators}
    recentDonators={donators}
    recentSubs={recentFollowers}
    recentFollowers={recentFollowers}
  />
);
