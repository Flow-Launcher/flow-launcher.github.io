import {getCollection} from "astro:content";
import {slugify} from "@/utils.ts";
import builtInPluginIds from "@/data/built-in-plugins.yml";
import type {ExtendedPlugin} from "@/pages/plugins/_types.ts";
import {dirname, basename} from "node:path";

interface FlowPlugin {
  ID: string;
  Name: string;
  Description: string;
  Author: string;
  Version: string;
  Language: string;
  Website: string;
  IcoPath: string;
  UrlSourceCode: string;
  UrlDownload: string;
  DateAdded: string;
  LatestReleaseDate: string;
}

let cachedData: ExtendedPlugin[] = [];

export async function getPluginsJson() {
  if (!cachedData?.length) {
    const data: FlowPlugin[] = await fetch("https://raw.githubusercontent.com/Flow-Launcher/Flow.Launcher.PluginsManifest/plugin_api_v2/plugins.json").then(v => v.json());
    const plugins = await getCollection("plugins");

    cachedData = data.map(v => {
      const plugin = plugins.find(p => p.data.id === v.ID);
      if (plugin && !plugin.data.slug) {
        plugin.data.slug = basename(dirname(plugin.filePath!));
      }

      return {
        id: v.ID,
        slug: `${slugify(v.Name)}-${v.ID}`,
        name: v.Name,
        description: v.Description,
        tags: [],
        firstReleaseDate: v.DateAdded,
        latestReleaseDate: v.LatestReleaseDate,
        icon: v.IcoPath,
        sourceCodeUrl: v.UrlSourceCode,
        author: v.Author,
        version: v.Version,
        language: v.Language,
        isBuiltIn: builtInPluginIds.includes(v.ID),
        ...(plugin?.data ?? {}),
      };
    }).sort((a, b) => a.name.localeCompare(b.name));
  }

  return cachedData;
}
