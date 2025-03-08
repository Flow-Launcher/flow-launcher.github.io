<script lang="ts">
import {onMount} from "svelte";
import {getBaseUrlFromHtml} from "@/utils.ts";

const { images }: {
  images: {
    imagePath: string;
    authorUsername: string;
    authorName: string;
    photoId: string;
  }[];
} = $props();

let interval: number | undefined;

let currentBackgroundIndex = $state(0);

function nextBackground() {
  currentBackgroundIndex = (currentBackgroundIndex + 1) % images.length;
}

const base = getBaseUrlFromHtml(true);

onMount(() => {
  interval = window.setInterval(nextBackground, 5000);

  return () => {
    window.clearInterval(interval);
  };
});
</script>

<div class="backgrounds">
  {#each images as { imagePath, authorUsername, authorName, photoId }, i}
    <div class="background" class:visible={currentBackgroundIndex === i} style:--img={`url('${base}/theme-builder/${imagePath}')`}>
      <div class="credit">
        Photo by <a href={`https://unsplash.com/@${authorUsername}`} target="_blank">{authorName}</a>
        on <a href={`https://unsplash.com/photos/${photoId}`} target="_blank">Unsplash</a>
      </div>
    </div>
  {/each}
</div>

<style>
.backgrounds {
    position: absolute;
    inset: 0;
    border-radius: 8px;
    overflow: hidden;
}

.background {
    position: absolute;
    inset: 0;
    background-image: var(--img);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0;
    transition: opacity 0.3s;
}

.visible {
    opacity: 1;
}

.credit {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 6px;
    font-size: 12px;
    text-align: center;
    backdrop-filter: blur(8px);
    z-index: 1;
}

.credit::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: var(--bg);
    opacity: 0.6;
    z-index: -1;
}
</style>
