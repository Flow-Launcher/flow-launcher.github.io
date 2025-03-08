<script lang="ts">
import type {AllState} from "@/components/theme-builder/state/AllState.svelte.ts";
import {getContext} from "svelte";

const state: AllState = getContext("state");
</script>

<div class="preview" style:--size-multiplier={+state.settings.previewPanel}>
  <div class="separator"></div>
  <div class="preview-icon-and-title">
    <div class="preview-glyph">W</div>
    <div class="preview-title">Flow Launcher</div>
  </div>
  <div class="preview-subtitle">
    <div class="horizontal-separator" class:hidden={!state.separator.visible}></div>
    A fast and powerful launcher for Windows
  </div>
</div>

<style>
.preview {
    display: flex;
    flex-direction: column;
    margin-top: var(--result-list-margin-top);
    margin-bottom: var(--result-list-margin-bottom);
    padding:
            10px
            16px
            10px
            calc(4px + var(--preview-panel-separator-width) + var(--preview-panel-separator-margin-left) + var(--preview-panel-separator-margin-right));
    background-color: var(--preview-background);
    overflow: hidden;
    position: relative;
    line-height: 1.5;
}

.separator {
    position: absolute;
    background-color: var(--preview-panel-separator-color);
    width: var(--preview-panel-separator-width);
    top: var(--preview-panel-separator-margin-top);
    bottom: var(--preview-panel-separator-margin-bottom);
    left: var(--preview-panel-separator-margin-left);
}

.preview-icon-and-title {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex: 1;
}

.preview-glyph {
    font-size: calc(64px * var(--size-multiplier));
    color: var(--preview-panel-glyph-color);
}

.preview-title {
    font-size: calc(var(--preview-panel-title-size) * var(--size-multiplier));
    color: var(--preview-panel-title-color);
    font-weight: var(--preview-panel-title-weight);
    font-style: var(--preview-panel-title-style);
}

.preview-subtitle {
    position: relative;
    padding: 12px 6px 0;
    font-size: calc(var(--preview-panel-subtitle-size) * var(--size-multiplier));
    color: var(--preview-panel-subtitle-color);
    font-weight: var(--preview-panel-subtitle-weight);
    font-style: var(--preview-panel-subtitle-style);
}

.horizontal-separator {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: var(--separator-color);
}

.horizontal-separator.hidden {
    background-color: transparent;
}
</style>
