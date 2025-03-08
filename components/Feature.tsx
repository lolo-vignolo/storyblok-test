import { storyblokEditable } from "@storyblok/react/rsc";

const Feature = ({ blok }: any) => (
  <div
    style={{
      color: "white",
    }}
    {...storyblokEditable(blok)}
  >
    {blok.name}
  </div>
);

export default Feature;
