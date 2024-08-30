import Image from "next/image";
import logo from "@/app/icon.png";
import Link from "next/link";

import NavLink from "./nav-link";

export default function NavBar() {
  return (
    <div className="bg-highlight h-auto w-full">
      <div className="flex flex-row items-center py-2 justify-between">
        <Link href="/">
          <Image src={logo} className="pl-5" alt="SiteWorks Logo" priority />
        </Link>
        <ul className="flex flex-row gap-8 ml-16">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <NavLink href="/about">About Us</NavLink>
          </li>
          <li>
            <Link href="/#services">Servives</Link>
          </li>
          <li>
            <NavLink href="/projects">Projects</NavLink>
          </li>
        </ul>
        <h1 className="ml-8">0788 589 238</h1>
        <button className="px-8 py-2 rounded-3xl font-bold gradient-back mr-5 text-white items-center text-center ml-6">
          Start Now
        </button>
      </div>
    </div>
  );
}
