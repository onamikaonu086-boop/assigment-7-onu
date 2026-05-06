"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";
import { usePathname } from "next/navigation";
import { FaChartBar, FaHome } from "react-icons/fa";
import { FaTimeline } from "react-icons/fa6";

const navLinkClass = (isActive) =>
  `rounded-md px-3 py-2 text-sm font-medium transition ${
    isActive ? "bg-[#244D3F] text-white" : "text-gray-700 hover:bg-gray-100"
  }`;

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="navbar bg-base-100 shadow-lg md:px-12">
      <div className="flex-1">
        <Link href="/" className="inline-flex items-center">
          <Image src={logo} alt="KeenKeeper logo" className="h-8 w-auto" priority />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal items-center px-1 gap-1 md:gap-3">
          <li>
            <Link href="/" className={navLinkClass(pathname === "/")}>
              <FaHome className="inline-block mr-1" />
              Home
            </Link>
          </li>
          <li>
            <Link href="/timeline" className={navLinkClass(pathname === "/timeline")}>
              <FaTimeline className="inline-block mr-1" />
              Timeline
            </Link>
          </li>
          <li>
            <Link
              href="/friends"
              className={navLinkClass(pathname.startsWith("/friends"))}
            >
              Friends
            </Link>
          </li>
          <li>
            <Link href="/stats" className={navLinkClass(pathname === "/stats")}>
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