import { storyblokEditable } from "@storyblok/react";
import Card from "./Card";

const SectionCard = ({ blok }: any) => {
  const { cards, title, subtitle } = blok;

  return (
    <div {...storyblokEditable(blok)}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {cards.map((card: any) => {
          return (
            <Card
              key={card._uid}
              image={card.image.filename}
              title={card.title}
              description={card.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SectionCard;
