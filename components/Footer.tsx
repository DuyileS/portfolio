import Link from "next/link";
import AnimatedButton from "./AnimatedButton";
import { links } from "@/constants";
import { Icon } from "@iconify/react";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  const updatedLinks = [
    ...links,
    { label: "Contact", href: "/contact", number: `${links.length + 1}` },
  ];

  return (
    <div className="mx-4 p-4 min-h-screen text-black bg-gray-300 rounded">
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
            <AnimatedButton />
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
        <h1 className="text-6xl font-extrabold">DM DESIGNS</h1>
        <video width="640" height="200" autoPlay loop muted>
          <source src="/footer-gif.mp4" type="video/mp4" />
          <p></p>
        </video>
      </div>
      <hr />
      <p className="py-4 text-xl font-bold">Copyright&copy; {year}</p>
    </div>
  );
};

export default Footer;
