<script lang="ts">
import ThemeDemo from "@/components/theme-builder/theme-demo/ThemeDemo.svelte";
import {AllState} from "@/components/theme-builder/state/AllState.svelte.ts";
import {onMount, setContext} from "svelte";
import WindowSection from "@/components/theme-builder/sidebar/WindowSection.svelte";
import PreviewSettingsSection from "@/components/theme-builder/sidebar/PreviewSettingsSection.svelte";
import QueryBoxSection from "@/components/theme-builder/sidebar/QueryBoxSection.svelte";
import ResultsSection from "@/components/theme-builder/sidebar/ResultsSection.svelte";
import ScrollbarSection from "@/components/theme-builder/sidebar/ScrollbarSection.svelte";
import BulletSection from "@/components/theme-builder/sidebar/BulletSection.svelte";
import PreviewPanelSection from "@/components/theme-builder/sidebar/PreviewPanelSection.svelte";
import ThemeMetadataSection from "@/components/theme-builder/sidebar/ThemeMetadataSection.svelte";

const state = new AllState();

setContext("state", state);

onMount(() => {
  const hash = location.hash.slice(1);
  if (!hash) return;

  try {
    state.fromEncodedJSON(hash);
  } catch(e) {
    console.error(e);
  }
});

let timeout: number | null = null;

$effect(() => {
  if (timeout !== null) clearTimeout(timeout);
  const newLocation = location.pathname + `#${state.toEncodedJSON()}`;
  timeout = window.setTimeout(() => {
    history.replaceState({}, "", newLocation);
    timeout = null;
  }, 300);
});
</script>

<div class="theme-builder">
  <div class="theme-builder-preview-container">
    <ThemeDemo />
    <ThemeMetadataSection hiddenOn="mobile" />
  </div>

  <div class="sections">
    <ThemeMetadataSection hiddenOn="desktop" />
    <PreviewSettingsSection />
    <WindowSection />
    <QueryBoxSection />
    <ResultsSection />
    <ScrollbarSection />
    <BulletSection />
    <PreviewPanelSection />
  </div>
</div>

<style lang="scss">
@use "@/assets/styles/breakpoints";

.theme-builder {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 400px;
    gap: 24px;
    align-items: start;
    position: relative;
}

.theme-builder-preview-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    position: sticky;
    top: 88px;
    z-index: 1;
}

.sections {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

@include breakpoints.sm {
    .theme-builder {
        grid-template-columns: 1fr;
        gap: 0;
    }

    .theme-builder-preview-container {
        background-color: var(--bg);
        top: 60px;
        padding: 16px;
        margin: -46px -20px 0;
    }

  .sections {
      margin: 0 -20px;
      gap: 4px;
  }
}
</style>
