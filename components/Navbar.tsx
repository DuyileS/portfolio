import { links } from "@/constants";
import Link from "next/link";
import AnimatedButton from "./AnimatedButton";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center z-15">
      <Link href={"/"}>
        <Image
          src={"/logo.png"}
          alt="Logo"
          height={40}
          width={80}
          quality={100}
        />
      </Link>
      <div className="hidden md:flex items-center">
        <ul className="flex justify-center gap-16 mr-16">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li
                key={link.number}
                className="font-bold text-gray-400 hover:text-white text-xl"
              >
                <Link
                  href={link.href}
                  className={`font-bold text-xl transition-colors duration-300 ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}
                  <sup>{link.number}</sup>
                </Link>
              </li>
            );
          })}
        </ul>
        <Link href={"/contact"}>
          <AnimatedButton />
        </Link>
      </div>
      <div className="md:hidden z-50">
        <Icon
          icon={isOpen ? "mdi:close" : "mdi:menu"}
          className="w-10 h-10 focus:outline-none cursor-pointer transition-transform duration-300"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-1/2 bg-[#5b1219] text-center transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-full pointer-events-none"
        } md:hidden`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 my-12">
          <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="/works" onClick={() => setIsOpen(false)}>Works</Link></li>
          <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link href="/contact" onClick={() => setIsOpen(false)}><AnimatedButton /></Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
