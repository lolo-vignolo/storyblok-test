import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";

const Hero = ({ blok }: any) => {
  return (
    <div
      {...storyblokEditable(blok)}
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        alignItems: "center",
        width: "fit-content",
      }}
    >
      <h1>{blok.title}</h1>
      <img
        width={100}
        height={100}
        src={blok.image.filename}
        alt={blok.title}
      />
    </div>
  );
};

export default Hero;
