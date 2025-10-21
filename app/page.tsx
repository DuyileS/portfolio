import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { homeDescription } from "@/constants";
import Image from "next/image";

export default function Home() {

  const year = new Date().getFullYear();

  return (
    <>
      <div className="relative min-h-screen overflow-auto">
        <Image
          src={"/momodu.jpg"}
          alt="Background"
          fill
          className="object-cover object-[50%_20%]"
          quality={100}
          priority
        />
        <div className="relative z-10 px-8 py-12 text-white">
          <Navbar />
          <div className="flex justify-between items-center mt-40">
            <p className="font-semibold text-4xl"><span className="text-white">&copy;</span>{year}</p>
            <div className="flex flex-col w-1/3">
              <Image
                src={"/dm_globe.png"}
                alt="Globe"
                width={100}
                height={100}
                className="ml-48 mb-4"
              />
              <p className="font-semibold text-3xl">{homeDescription}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
