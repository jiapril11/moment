"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  HomeFilledIcon,
  SearchIcon,
  SearchFilledIcon,
  NewIcon,
  NewFilledIcon,
} from "./ui/icons";
import ColorButton from "./ui/ColorButton";

export default function Navbar() {
  const path = usePathname();

  const menu = [
    { href: "/", icon: <HomeIcon />, clickedIcon: <HomeFilledIcon /> },
    {
      href: "/search",
      icon: <SearchIcon />,
      clickedIcon: <SearchFilledIcon />,
    },
    { href: "/new", icon: <NewIcon />, clickedIcon: <NewFilledIcon /> },
  ];

  return (
    <div className="flex justify-between items-center w-full max-w-screen-xl h-14 mx-auto px-5">
      <h1>
        <Link href="/">Logo</Link>
      </h1>
      <nav>
        <ul className="flex items-center gap-2 md:gap-3">
          {menu.map(({ href, icon, clickedIcon }) => (
            <li key={href}>
              <Link href={href}>{href === path ? clickedIcon : icon}</Link>
            </li>
          ))}
          <ColorButton text="SignIn" onClick={() => {}} />
        </ul>
      </nav>
    </div>
  );
}
