import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const Page = (
  { blok }: any // noble blok lo coloca storyblok, pero es el contenido que esta dentro del content en la API
) => (
  <main
    style={{
      backgroundColor: "rgb(3, 31, 50)",
      color: blok.textColor,
      padding: "20px",
      height: "100vh",
    }}
    {...storyblokEditable(blok)}
  >
    {blok.body.map((nestedBlok: any) => {
      return <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />;
    })}
  </main>
);

export default Page;
