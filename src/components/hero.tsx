import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";

function Hero() {
  return (
    <div className="flex flex-col gap-7 md:flex-row min-h-[300px] bg-green-500 sm:bg-purple-500 lg:bg-blue-500 items-center px-4 justify-between">
      <div className="flex flex-col items-start gap-2">
        <h1 className="font-bold text-3xl">Hello Welcome to the Website</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
          excepturi minima atque incidunt ab sit eum unde doloremque, totam
          error!
        </p>
        <Button variant="outline" className="w-fit">
          <Mail className="mr-2 h-4 w-4" /> Login with Email
        </Button>
      </div>
      <Image
        width={400}
        height={400}
        src={"/hero-image.jpg"}
        alt={"Book Webste"}
      ></Image>
    </div>
  );
}

export default Hero;
