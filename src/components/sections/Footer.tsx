import { GITHUB_URL, LINKEDIN_URL } from "@/lib/constant/constantHomePage";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondBackgrond text-main py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <p className="text-center mb-2">
          &copy; {new Date().getFullYear()} Juan Satorres Sánchez
        </p>
        <div className="flex space-x-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition duration-200"
          >
            <FaGithub size={24} />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-main hover:text-primary transition duration-200"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
