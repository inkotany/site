import img1 from "@/app/assets/5.jpeg";
import img2 from "@/app/assets/3.jpeg";
import Image from "next/image";

export default function about() {
  return (
    <section className="py-16">
      <h1 className="section-title">About Us</h1>
      <div className="grid grid-cols-2 ">
        <Image src={img1} alt="About SiteWorks" className="w-full" />
        <p className="text-black p-16">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
        </p>
        <p className="text-black p-16">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
        </p>
        <Image src={img2} alt="About SiteWorks" className="w-full" />
      </div>
    </section>
  );
}
