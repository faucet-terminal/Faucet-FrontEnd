"use client";

import ContributorCard from "./contributor-card";
import React from "react";

const contributors = [
  {
    id: 1,
    avatar: "https://avatars.githubusercontent.com/u/130636283?v=4",
    name: "MaxWell Pan",
    role: "Developer & initiator",
    github: "https://github.com/panyongxu1002",
    twitter: "https://x.com/YongxuPan",
  },
  {
    id: 2,
    avatar: "https://avatars.githubusercontent.com/u/62240972?v=4",
    name: "WorfGray",
    role: "Developer ",
    github: "https://github.com/WorfGray",
    twitter: "https://x.com/WorfGray",
  },
  {
    id: 3,
    avatar: "https://avatars.githubusercontent.com/u/61661665?v=4",
    name: "lony",
    role: "Developer",
    github: "https://github.com/lonySp",
    twitter: "https://x.com/ylony_",
  },
  {
    id: 4,
    avatar: "https://avatars.githubusercontent.com/u/18510448?v=4",
    name: "Ryan",
    role: "Developer",
    github: "https://github.com/sfyr111",
    twitter: "https://x.com/yangran14",
  },
  {
    id: 5,
    avatar: "https://avatars.githubusercontent.com/u/21351452?v=4",
    name: "Nebula",
    role: "Developer",
    github: "https://github.com/Autumn-qy",
    twitter: "https://x.com/zqy0412",
  },
  {
    id: 6,
    avatar: "https://avatars.githubusercontent.com/u/43111723?v=4",
    name: "Jam",
    role: "Developer",
    github: "https://github.com/dfyuik",
    twitter: "https://x.com/yuguangyan14635?s=11",
  },
  {
    id: 7,
    avatar:
      "https://i.postimg.cc/p9qGVG4h/aac3c4da1d322175f52bd4ba4d53ed99.jpg",
    name: "Kento",
    role: "Backend Developer",
    github: "https://github.com/WAIYIN-tech",
    twitter: "https://x.com/EmmertChri51825",
  },
  {
    id: 8,
    avatar: "https://avatars.githubusercontent.com/u/84056084?v=4",
    name: "Finch Ren",
    role: "Developer",
    github: "https://github.com/BigBroFinch",
    twitter: "https://twitter.com/FinchR1992",
  },
  {
    id: 9,
    avatar: "https://avatars.githubusercontent.com/u/19280070?v=4",
    name: "原点",
    role: "Developer",
    github: "https://github.com/zhouBoom/Solana_Faucet",
    twitter: "https://x.com/zhouzhou19000",
  },
  {
    id: 10,
    avatar: "https://avatars.githubusercontent.com/u/24558814?v=4",
    name: "xiangnuan",
    role: "Developer",
    github: "https://github.com/xiangnuans",
    twitter: "https://twitter.com/coco69564520",
  },
];

const ContributorsList = () => {
  return (
    <>
      <h1 className="text-3xl font-bold px-4 mb-4">社区贡献者们</h1>
      <p className="text-gray-600 px-4">
        Say hello 👋 to our awesome contributors 🧑‍💻
      </p>
      <div className="flex flex-wrap justify-start">
        {contributors.map((contributor) => (
          <ContributorCard
            key={contributor.github}
            avatar={contributor.avatar}
            name={contributor.name}
            role={contributor.role}
            github={contributor.github}
            twitter={contributor.twitter}
          />
        ))}
      </div>
    </>
  );
};

export default ContributorsList;
