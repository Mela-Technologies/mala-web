import { Bank, Box2, Data } from "iconsax-react";
import React from "react";

const HomeAbout = () => {
  const iconSize = 40;
  const cardList = [
    {
      icon: <Bank size={iconSize} color="white" variant="Outline" />,
      title: "Token Creation Made Easy",
      description:
        "Launch your ERC-20, BEP-20, or Solana token in minutes with fully audited smart contracts and zero coding required.",
    },
    {
      icon: <Box2 size={iconSize} color="white" variant="Outline" />,
      title: "Launchpad Access",
      description:
        "Instantly list your project on our decentralized launchpad with KYC options, investor tiers, and vesting schedule support.",
    },
    {
      icon: <Data size={iconSize} color="white" variant="Outline" />,
      title: "Secure Wallet Integration",
      description:
        "Seamlessly connect with MetaMask, WalletConnect, Phantom, and more. Non-custodial and fully encrypted & secured.",
    },
  ];
  return (
    <div className="flex flex-row flex-wrap section-wrapper px-2 mx-auto justify-center md:justify-between pt-32 gap-4 md:gap-2 ">
      {cardList.map((card, index) => (
        <div
          className="bg-white/5 rounded-2xl px-8 py-16 border-2 border-gray-100/10"
          style={{}}
          key={index}
        >
          {/* icon */}
          <div className="mb-24 inline-block">{card.icon} </div>
          {/* title */}
          <h2 className="mb-2 font-bold text-2xl text-white">{card.title}</h2>
          {/* description */}
          <p className="w-95 text-white">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HomeAbout;
