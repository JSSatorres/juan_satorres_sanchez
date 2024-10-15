"use client";

import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import MainButton from "../ui/MainButton";
import { PAGES_LINK } from "@/lib/constant/constactHeader";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="bg-secondBackgrond w-full px-4 py-4 sticky top-0 z-20 shadow-md">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-main hover:text-primary text-lg md:text-2xl font-bold capitalize transition duration-300"
          onClick={() => setMenu(false)}
        >
          Home
        </Link>

        <div className="md:hidden shadow-lg">
          <MainButton onClick={toggleMenu}>
            {menu ? <AiOutlineClose size={24} /> : "Menu"}
          </MainButton>
        </div>

        {/* Mobile Menu */}
        {menu && (
          <div className="absolute top-16 left-0 right-0 bg-background shadow-lg z-10 py-4">
            <ul className="flex flex-col items-center space-y-4">
              {PAGES_LINK.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-main hover:text-primary text-lg font-bold capitalize transition duration-300"
                    onClick={() => setMenu(false)}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {PAGES_LINK.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-main hover:text-primary text-lg md:text-2xl font-semibold capitalize transition duration-300"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
