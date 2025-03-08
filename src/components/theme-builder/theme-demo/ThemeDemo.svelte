<script lang="ts">
import { getContext } from "svelte";
import Backgrounds from "@/components/theme-builder/theme-demo/Backgrounds.svelte";
import Results from "@/components/theme-builder/theme-demo/Results.svelte";
import QueryBox from "@/components/theme-builder/theme-demo/QueryBox.svelte";
import Collapsible from "@/components/theme-builder/ui/Collapsible.svelte";
import type { AllState } from "@/components/theme-builder/state/AllState.svelte";
import PreviewPanel from "@/components/theme-builder/theme-demo/PreviewPanel.svelte";

const state: AllState = getContext("state");

const images = [
  {
    imagePath: "florian-van-duyn-Dm-qxdynoEc-unsplash.jpg",
    authorUsername: "flovayn",
    authorName: "Florian van Duyn",
    photoId: "Dm-qxdynoEc",
  },
  {
    imagePath: "henry-be-IicyiaPYGGI-unsplash.jpg",
    authorUsername: "henry_be",
    authorName: "Henry Be",
    photoId: "IicyiaPYGGI",
  },
  {
    imagePath: "matthew-smith-Rfflri94rs8-unsplash.jpg",
    authorUsername: "whale",
    authorName: "Matthew Smith",
    photoId: "Rfflri94rs8",
  },
  {
    imagePath: "thierry-meier-PKEPAeMBOIU-unsplash.jpg",
    authorUsername: "thierrymeier",
    authorName: "Thierry Meier",
    photoId: "PKEPAeMBOIU",
  },
];
</script>

<div
  class="demo"
  class:noProgressBar={!state.settings.progressBar}
  class:noCaret={!state.settings.caret}
  class:hasBackgrounds={state.settings.backgrounds}
  style={state.toCssPropertiesAsString()}
>
  {#if state.settings.backgrounds}
    <Backgrounds {images}/>
  {/if}

  <div class="window">
    <QueryBox settings={state.settings}/>

    <Collapsible visible={state.separator.visible}>
      <div class="separator"></div>
    </Collapsible>

    <div class="results-wrapper" class:no-preview={!state.settings.previewPanel}>
      <Results />
      <PreviewPanel />
    </div>
  </div>
</div>

<style>
.demo,
.demo :global(*) {
    transition: all 0.2s;
}

.demo {
    position: relative;
}

.demo.hasBackgrounds {
    padding: 48px;
}

.window {
    border: var(--border-thickness) solid var(--border-color);
    border-radius: var(--border-radius);
    overflow: hidden;
    position: relative;
    z-index: 1;
    backdrop-filter: var(--backdrop-blur);
}

.window::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: var(--background);
    z-index: -1;
}

.separator {
    height: var(--separator-size);
    background-color: var(--separator-color);
    margin: var(--separator-margins);
}

.results-wrapper {
    display: grid;
    grid-template-columns: 1fr 35%;
}

.results-wrapper.no-preview {
    grid-template-columns: 1fr 0;
}

@media (prefers-reduced-motion: reduce) {
    .window,
    .window :global(*) {
        transition: none !important;
    }
}
</style>
