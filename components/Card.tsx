import { renderRichText } from "@storyblok/react";
import Image from "next/image";
import parse from "html-react-parser";
const Card = ({
  image,
  title,
  description,
}: {
  image: string;
  title: any;
  description: string;
}) => {
  return (
    <div>
      {title ? (
        parse(renderRichText(title) as string)
      ) : (
        <h2>Título no disponible</h2>
      )}
      <Image src={image} alt={title} height={100} width={100} />
      <p>{description}</p>
    </div>
  );
};

export default Card;
