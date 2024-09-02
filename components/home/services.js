import service1 from "@/app/assets/3.jpeg";
import service2 from "@/app/assets/4.jpeg";

import Image from "next/image";
import Button from "../button";

export default function Services() {
  return (
    <section id="services">
      <div>
        <h1 className="section-title">Our Services</h1>
        <div class="flex flex-col md:gap-4 gap-16 md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <div class="max-w-sm bg-white rounded-lg overflow-hidden">
            <Image
              class="w-full h-80 object-cover"
              src={service1}
              alt="Card Image"
            />
            <div class="p-4 pl-0">
              <h2 class="text-xl font-semibold gradient-text">
                Topograhic survey
              </h2>
              <p class="mt-2 text-gray-600">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </p>
            </div>
          </div>

          <div class="max-w-sm bg-white rounded-lg overflow-hidden">
            <Image
              class="w-full h-80 object-cover"
              src={service2}
              alt="Card Image"
            />
            <div class="p-4 pl-0">
              <h2 class="text-xl font-semibold gradient-text">Land Survey</h2>
              <p class="mt-2 text-gray-600">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
