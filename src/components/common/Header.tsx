import React from "react";

interface IProps {
  title: string;
  description: string;
  isSmall?: boolean;
}

export default function Header({ title, description, isSmall }: IProps) {
  return (
    // <div>

    <header className="max-w-7xl mx-auto px-4 py-8">
      <nav className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Adams</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
        </ul>
      </nav>
    </header>
    //   <p
    //     className={`text-customGrayAlt font-[600] text-[0.875rem] ${
    //       isSmall ? "md:text-[1.125rem]" : "md:text-[1.25rem]"
    //     } uppercase`}
    //   >
    //     {title}
    //   </p>
    //   <p
    //     className={`text-white font-[600] text-[1.75rem] ${
    //       isSmall ? "md:text-[1.75rem] text-[#CACACE]" : "md:text-[3.625rem]"
    //     } uppercase`}
    //   >
    //     {description}{" "}
    //   </p>
    // </div>
  );
}
