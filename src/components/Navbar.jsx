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
    <nav className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur md:px-12">
      <div className="mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between px-4">
        <Link href="/" className="inline-flex items-center">
          <Image src={logo} alt="KeenKeeper logo" className="h-8 w-auto" priority />
        </Link>
        <ul className="flex items-center gap-1 md:gap-3">
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
    </nav>
  );
};

export default Navbar;