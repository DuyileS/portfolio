import { links } from "@/constants"
import Link from "next/link"
import AnimatedButton from "./AnimatedButton"

const Navbar = () => {

  return (
    <nav className="flex justify-between items-center">
      <p className="text-5xl font-extrabold">DM<span className="text-[#5b1219]">*</span></p>
       <div className="flex items-center">
          <ul className="flex justify-center gap-16 mr-16">
            {links.map((link) => (
            <li key={link.number} className="font-bold text-gray-400 hover:text-white text-xl">
              <Link href={link.href}>
                {link.label}<sup>{link.number}</sup>  
              </Link>
            </li>
            ))}
          </ul>
          <Link href={"/contact"}>
            <AnimatedButton />
          </Link>
       </div>
    </nav>
  )
}

export default Navbar