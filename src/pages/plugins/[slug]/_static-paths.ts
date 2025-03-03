import {GET} from "@/pages/plugins.json.ts";

export async function getStaticPaths() {
  const data = await GET().then(v => v.json());
  return data.map((v: any) => ({
    params: {
      slug: v.slug,
    },
    props: {
      plugin: v,
    },
  }));
}
