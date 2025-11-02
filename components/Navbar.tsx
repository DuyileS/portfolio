import { links } from "@/constants"
import Link from "next/link"
import AnimatedButton from "./AnimatedButton"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Icon } from "@iconify/react"

const Navbar = () => {

  const pathname = usePathname()

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

              const isActive = pathname === link.href

              return(
              <li key={link.number} className="font-bold text-gray-400 hover:text-white text-xl">
               <Link
                  href={link.href}
                  className={`font-bold text-xl transition-colors duration-300 ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}<sup>{link.number}</sup>  
                </Link>
              </li>
              )
          })}
          </ul>
          <Link href={"/contact"}>
            <AnimatedButton />
          </Link>
       </div>
       <Icon icon="mdi:menu" className="w-10 h-10 md:hidden" />
    </nav>
  )
}

export default Navbar