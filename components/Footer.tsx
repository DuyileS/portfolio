import Link from "next/link";
import AnimatedButton from "./AnimatedButton";
import { links } from "@/constants";
import { Icon } from "@iconify/react";
import React from "react";
import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();
  const updatedLinks = [
    ...links,
    { label: "Contact", href: "/contact", number: `${links.length + 1}` },
  ];

  return (
    <div className="mx-4 p-4 md:min-h-screen lg:min-h-screen text-black bg-[#F5F5F5] rounded [background-image:linear-gradient(45deg,rgba(0,0,0,0.05)_25%,transparent_25%),linear-gradient(135deg,rgba(0,0,0,0.05)_25%,transparent_25%),linear-gradient(45deg,transparent_75%,rgba(0,0,0,0.05)_75%),linear-gradient(135deg,transparent_75%,rgba(0,0,0,0.05)_75%)]
  [background-size:2px_2px]">
      <div className="flex justify-between items-center py-6">
        <div className="space-y-6">
          <div>
            <p className="text-4xl font-bold text-gray-600">Stay Connected</p>
            <Link href={"mailto:davidmomodu08@gmail.com"}>
              <p className="underline text-xl font-medium">
                davidmomodu08@gmail.com
              </p>
            </Link>
          </div>
          <p>
            Crafted with creativity and passion. Let&apos;s stay connected
            <br />
            reach out anytime
          </p>
          <div className="flex items-center gap-x-6">
            <Link href={"/contact"}>
             <AnimatedButton />
            </Link>
            <div className="flex gap-x-2">
              <Link href={"https://www.instagram.com/davidmomodu.psd?utm_source=qr&igsh=MWQ5aGthMjM1aDdkdA=="}>
                <Icon icon="mdi:instagram" className="w-8 h-8 text-[#5b1219]"/>
              </Link>
              <Link href={"https://wa.me/2349054473098"}>
                <Icon icon="mdi:whatsapp" className="w-8 h-8 text-[#5b1219]"/>
              </Link>
               <Link href={"https://www.facebook.com/profile.php?id=100019062076189&mibextid=ZbWKwL"}>
                <Icon icon="mdi:facebook" className="w-8 h-8 text-[#5b1219]"/>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[40%] border border-x-0">
          {updatedLinks.map((link, index: number) => (
            <React.Fragment key={index}>
              <div className="flex justify-between py-2">
                <Link href={link.href}>
                  <p className="text-gray-500 hover:text-black">
                    <span className="text-xs">{link.number}/</span>
                    {link.label}
                  </p>
                </Link>
                <Icon icon="mdi:arrow-right" className="w-6 h-6 text-black" />
              </div>
              {index < updatedLinks.length - 1 && <hr />}
            </React.Fragment>
          ))}
        </div>
      </div>
      <hr />
      <div className="flex justify-between items-center py-4">
        <Link href={"/"}>
          <Image 
            src={"/logo.png"}
            alt="Logo turned black"
            height={"50"}
            width={250}
            quality={100}
            className="filter invert ml-32"
          />
        </Link>
        <video width="640" height="200" autoPlay loop muted>
          <source src="/footer-gif.mp4" type="video/mp4" />
          <p></p>
        </video>
      </div>
      <hr />
      <p className="py-4 text-xl font-bold">Copyright &copy;{year}</p>
    </div>
  );
};

export default Footer;
