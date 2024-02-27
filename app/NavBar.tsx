"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classnames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    {
      label: "Issues",
      href: ["/issues", "/issues/new"],
    },
  ];

  for (let i = 1; i <= 999; i++) {
    links[1].href.push(`/issues/${i}`);
  }

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link, index) => (
          <Link
            key={index.toString()}
            className={classnames({
              "text-zinc-900": link.href.includes(currentPath),
              "text-zinc-500": !link.href.includes(currentPath),
              "hover:border-zinc-800": true,
              "border-zinc-800": link.href.includes(currentPath),
              "border-transparent": true,
              "border-b-2": true,
              "transition-border": true,
              "duration-300": true,
              "hover:text-zinc-800 transition-colors": true,
            })}
            href={link.href[0]}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
