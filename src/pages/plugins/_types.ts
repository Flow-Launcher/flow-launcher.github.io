export interface ExtendedPlugin {
  id: string;
  slug: string;
  name: string;
  description: string;
  tags: string[];
  firstReleaseDate: string;
  latestReleaseDate: string;
  icon: string;
  sourceCodeUrl: string;
  author: string;
  version: string;
  language: string;
  isBuiltIn: boolean;
}
