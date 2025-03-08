// src/app/page.tsx
import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";

// Este es un Server Component
export default async function Home() {
  const sbParams: { version: "draft" | "published" | undefined } = {
    version: "draft",
  };

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get("cdn/stories/home", sbParams);

  return (
    <div>
      <StoryblokStory story={data.story} />
    </div>
  );
}
