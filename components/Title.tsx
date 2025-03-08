import { storyblokEditable } from "@storyblok/react/rsc";

const Title = ({ blok }: any) => {
  console.log(blok);

  return (
    <h1
      style={{
        color: "white",
        textAlign: "center",
      }}
      {...storyblokEditable(blok)}
    >
      {blok.title}
    </h1>
  );
};

export default Title;
