import Image from "next/image";
import headerImg from "@/app/assets/1.jpeg";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="mt-10 flex flex-row ml-10">
      <div className="basis-1/2">
        <h1 className="title text-black">
          Precision in every <span className="gradient-text">measurement</span>
        </h1>
        <h2 className="text-black sub-title mt-4 ">
          Expert Topographic Surveys <br /> for Reliable Results
        </h2>
        <div className="mt-8 flex flex-row gap-8">
          <Link
            href="/contact"
            className="py-2 px-8 gradient-back items-center text-white rounded-full"
          >
            Get Started
          </Link>
          <Link
            href="/about"
            className="py-2 px-8 border items-center border-primary  text-primary rounded-full"
          >
            About Us
          </Link>
        </div>
      </div>
      <div className="basis-1/2 pt-3">
        <Image
          className="rounded-2xl mr-5"
          src={headerImg}
          alt="SiteWors Rwanda"
          width={580}
          height={445}
        />
      </div>
    </div>
  );
}
