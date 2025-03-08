"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** Import your components */

import Teaser from "./Teaser";
import Feature from "./Feature";
import Grid from "./Grid";
import Page from "./Page";
import Title from "./Title";
import Hero from "./Hero";
import SectionCard from "./SectionCard";
import Card from "./Card";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  title: Title,
  hero_section: Hero,
  section_card: SectionCard,
  card: Card,
};

storyblokInit({
  enableFallbackComponent: true,
  components,
});

export default function StoryblokProvider({ children }: any) {
  return children;
}
