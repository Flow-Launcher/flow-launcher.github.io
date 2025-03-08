import {getCollection} from "astro:content";
import path from "node:path";

export async function getPluginBlogPosts(pluginId?: string) {
  if (!pluginId) return [];

  const plugin = await getCollection("plugins", v => v.data.id === pluginId).then(v => v[0]);
  if (!plugin) return [];

  const directoryPath = path.join(plugin!.filePath!, "..", "blog");
  return getCollection("pluginBlog", v => path.join(v.filePath!).startsWith(directoryPath));
}
