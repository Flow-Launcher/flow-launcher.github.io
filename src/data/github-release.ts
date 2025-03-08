import {formatBytes, formatDate} from "@/utils.ts";

interface GHReleaseData {
  html_url: string;
  published_at: string;
  tag_name: string;
  assets: GHReleaseAsset[];
}

interface GHReleaseAsset {
  name: "Flow-Launcher-Portable.zip" | "Flow-Launcher-Setup.exe" | string;
  browser_download_url: string;
  size: number;
}

interface CachedReleaseData {
  pageLink: string;
  tagName: string;
  publishedAt: string;
  formattedPublishedAt: string;

  installer: CachedAssetData;
  portable: CachedAssetData;
}

interface CachedAssetData {
  url: string;
  size: number;
  formattedSize: string;
}

let cachedReleaseData: CachedReleaseData | null = null;

export async function getGitHubReleaseData(): Promise<CachedReleaseData> {
  if (cachedReleaseData) return cachedReleaseData;

  const data: GHReleaseData = await fetch("https://api.github.com/repos/Flow-Launcher/Flow.Launcher/releases/latest").then(response => response.json());

  cachedReleaseData = {
    pageLink: data.html_url,
    tagName: data.tag_name,
    publishedAt: data.published_at,
    formattedPublishedAt: formatDate(data.published_at),

    installer: prepareAssetInfo(data.assets.find(asset => asset.name === "Flow-Launcher-Setup.exe")!),
    portable: prepareAssetInfo(data.assets.find(asset => asset.name === "Flow-Launcher-Portable.zip")!),
  }

  return cachedReleaseData!;
}

function prepareAssetInfo(asset: GHReleaseAsset): CachedReleaseData["installer"] {
  return {
    url: asset.browser_download_url,
    size: asset.size,
    formattedSize: formatBytes(asset.size),
  };
}
