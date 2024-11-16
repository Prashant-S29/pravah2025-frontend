export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  domain: string;
  ogImage: {
    url: string;
    width: number;
    height: number;
  };
  twitterHandle: string;
  links: {
    twitter: string;
  };
};

export type MapArea = 'north' | 'west' | 'central' | 'east' | 'south';

export type ImageInfoPropsType = {
  imageTitle: string;
  imageDescription: string;
};
