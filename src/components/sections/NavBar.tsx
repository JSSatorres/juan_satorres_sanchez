"use client";

import { useState } from "react";
import { X } from "lucide-react";
import MainButton from "../common/MainButton";
import { PORTFOLIO_OWNER_FIRSTNAME } from "@/lib/constant";
import Link from "next/link";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  const pagesLink = [
    { href: "/experience", text: "Experience" },
    { href: "/projects", text: "Projects" },
    { href: "/contact", text: "Contact" },
    // { href: "/about", text: "About" },
    // { href: "/services", text: "Services" },
  ];

  // <header className="max-w-7xl mx-auto px-4 py-8">
  //   <nav className="flex justify-between items-center">
  //     <h1 className="text-2xl font-bold">Adams</h1>
  //     <ul className="flex space-x-4">
  //       <li>
  //         <a href="#">Home</a>
  //       </li>
  //       <li>
  //         <a href="#">Portfolio</a>
  //       </li>
  //       <li>
  //         <a href="#">Testimonials</a>
  //       </li>
  //     </ul>
  //   </nav>
  // </header>;

  return (
    <header className="max-w-7xl mx-auto px-4 py-8 sticky top-0">
      {/* <nav className="md:sticky md:top-0  bg-background md:shadow-none z-[10] p-4"> */}
      <nav className="flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Home</h1>
        <ul className="flex space-x-4">
          {pagesLink.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-white hover:text-gray-400 text-2xl md:text-4xl font-extrabold uppercase"
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
