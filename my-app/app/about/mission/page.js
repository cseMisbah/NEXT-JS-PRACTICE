import Button from "@/app/components/Button";
import Image from "next/image";
import React from "react";
import globe from "@/public/globe.svg";

const Mission = () => {
  return (
    <main className="mt-10">
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem.
        </p>
      </div>
      <div className="mt-5">
        <Image src={globe} alt="thumb image" />
        <br />
        <Button></Button>
      </div>
    </main>
  );
};

export default Mission;
