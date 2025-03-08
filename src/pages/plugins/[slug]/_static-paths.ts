import {getPluginsJson} from "@/getPluginsJson.ts";

export async function getStaticPaths() {
  const data = await getPluginsJson();
  return data.map((v: any) => ({
    params: {
      slug: v.slug,
    },
    props: {
      plugin: v,
    },
  }));
}
