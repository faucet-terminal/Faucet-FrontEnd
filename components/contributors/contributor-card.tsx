import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// ContributorCard.js
import React from "react";

interface Props {
  avatar: string;
  name: string;
  role: string;
  github: string;
  twitter: string;
}

const ContributorCard = ({ avatar, name, role, github, twitter }: Props) => {
  return (
    <div className="w-full sm:w-1/3 p-4">
      <div className="bg-gray-100 dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-6">
        <img
          className="w-16 h-16 rounded-full"
          src={avatar}
          alt={`${name}'s avatar`}
        />
        <div className="mt-4 text-center">
          <div className="text-gray-900 dark:text-white text-xl mb-2">
            {name}
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-base">{role}</p>
        </div>
        <div className="mt-4 flex space-x-4">
          <a
            href={github}
            aria-label={`${name}'s GitHub`}
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900"
          >
            <FaGithub size={24} />
          </a>
          <a
            href={twitter}
            aria-label={`${name}'s Twitter`}
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900"
          >
            <FaXTwitter size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContributorCard;
