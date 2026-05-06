"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaChartBar, FaHome } from "react-icons/fa";
import { FaBars, FaTimeline, FaXmark } from "react-icons/fa6";

const navLinkClass = (isActive) =>
  `rounded-md px-3 py-2 text-sm font-medium transition ${
    isActive ? "bg-[#244D3F] text-white" : "text-gray-700 hover:bg-gray-100"
  }`;

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="navbar relative bg-base-100 px-3 shadow-lg sm:px-6 md:px-12">
      <div className="flex flex-1 items-center justify-between">
        <Link href="/" className="inline-flex items-center">
          <Image src={logo} alt="KeenKeeper logo" className="h-8 w-auto" priority />
        </Link>
        <button
          type="button"
          aria-label="Toggle menu"
          className="btn btn-outline p-2 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>
      <div
        className={`absolute left-0 top-full z-20 w-full border-t bg-white p-3 shadow-md md:static md:z-auto md:w-auto md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
          isOpen ? "block" : "hidden md:block"
        }`}
      >
        <ul className="menu menu-horizontal flex-col items-stretch gap-2 px-1 md:flex-row md:items-center md:gap-3">
          <li>
            <Link href="/" className={navLinkClass(pathname === "/")} onClick={closeMenu}>
              <FaHome className="inline-block mr-1" />
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/timeline"
              className={navLinkClass(pathname === "/timeline")}
              onClick={closeMenu}
            >
              <FaTimeline className="inline-block mr-1" />
              Timeline
            </Link>
          </li>
          <li>
            <Link
              href="/friends"
              className={navLinkClass(pathname.startsWith("/friends"))}
              onClick={closeMenu}
            >
              Friends
            </Link>
          </li>
          <li>
            <Link href="/stats" className={navLinkClass(pathname === "/stats")} onClick={closeMenu}>
              <FaChartBar className="inline-block mr-1" />
              Stats
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;