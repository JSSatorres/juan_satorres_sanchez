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

  const pagesLink =[
    { href: "/", text: "Home" },
    { href: "/projects", text: "Projects" },
    { href: "/contact", text: "Contact" },
    // { href: "/about", text: "About" },
    // { href: "/services", text: "Services" },
  ]

  return (
    <nav className="md:sticky md:top-0  bg-background md:shadow-none z-[10] p-4">
      <ul className="flex justify-center gap-20 items-center ">
        {pagesLink.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-white hover:text-gray-400 text-2xl md:text-4xl font-extrabold uppercase">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;

