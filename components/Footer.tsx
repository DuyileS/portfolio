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
    <div
      className="mx-4 p-4 md:h-auto lg:min-h-screen 2xl:min-h-0 2xl:max-h-full text-black bg-[#F5F5F5] rounded [background-image:linear-gradient(45deg,rgba(0,0,0,0.05)_25%,transparent_25%),linear-gradient(135deg,rgba(0,0,0,0.05)_25%,transparent_25%),linear-gradient(45deg,transparent_75%,rgba(0,0,0,0.05)_75%),linear-gradient(135deg,transparent_75%,rgba(0,0,0,0.05)_75%)]
  [background-size:2px_2px]"
    >
      <div className="flex flex-col md:flex-row justify-between items-center py-6">
        <div className="space-y-6 px-8">
          <div>
            <p className="text-4xl font-bold text-gray-600">Stay Connected</p>
            <Link href={"mailto:davidmomodu08@gmail.com"}>
              <p className="underline text-xl font-medium">
                davidmomodu.psd@gmail.com
              </p>
            </Link>
          </div>
          <p>
            Crafted with creativity and passion. Let&apos;s stay connected
            <br className="hidden md:block" />
            {" "}reach out anytime
          </p>
          <div className="flex items-center gap-x-6">
            <Link href={"/contact"}>
              <AnimatedButton />
            </Link>
            <div className="flex gap-x-2">
              <Link
                href={
                  "https://www.instagram.com/davidmomodu.psd?utm_source=qr&igsh=MWQ5aGthMjM1aDdkdA=="
                }
              >
                <Icon icon="mdi:instagram" className="w-8 h-8 text-[#5b1219]" />
              </Link>
              <Link href={"https://wa.me/2349054473098"}>
                <Icon icon="mdi:whatsapp" className="w-8 h-8 text-[#5b1219]" />
              </Link>
              <Link
                href={
                  "https://www.facebook.com/profile.php?id=100019062076189&mibextid=ZbWKwL"
                }
              >
                <Icon icon="mdi:facebook" className="w-8 h-8 text-[#5b1219]" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full mt-4 md:mt-0 md:w-[40%] border border-x-0 mr-8">
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
      <hr className="hidden md:block" />
      <div className="flex justify-between 2xl:justify-around items-center py-4 px-8">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt="Logo turned black"
            quality={100}
            height={50} 
            width={250}
            layout="responsive"
            className="filter hidden md:inline invert md:ml-24 lg:ml-24"
          />
        </Link>
        <div className="rounded">
          <video className="h-[250px] 2xl:h-full w-full 2xl:w-xl rounded-lg" autoPlay loop muted>
            <source src="/footer-gif.mp4" type="video/mp4" />
            <p></p>
          </video>
        </div>
      </div>
      <hr />
      <p className="py-4 text-xl font-bold px-8">Copyright &copy;{year}</p>
    </div>
  );
};

export default Footer;
