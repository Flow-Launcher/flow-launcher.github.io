<script lang="ts">
import {getContext, type Snippet} from "svelte";
import type {AllState} from "@/components/theme-builder/state/AllState.svelte.ts";

const state: AllState = getContext("state");

const {
  image,
  glyph,
  title,
  subtitle,
  shortcut,
  active,
}: {
  image?: string;
  glyph?: string;
  title?: Snippet;
  subtitle?: Snippet;
  shortcut: number;
  active?: boolean;
} = $props();

const displayBullet = $derived(
  (!active && state.bullet.regular.visible) ||
  (active && state.bullet.active.visible)
);
</script>

<div class="result" class:active>
  {#if image}
    <img src={image} alt="" class="result-icon"/>
  {:else if glyph}
    <div class="result-glyph">{glyph}</div>
  {:else}
    <div></div>
  {/if}
  {#if displayBullet}
    <div class="bullet"></div>
  {/if}
  <div class="result-text">
    <div class="result-title">{@render title?.()}</div>
    <div class="result-subtitle">{@render subtitle?.()}</div>
  </div>
  <div class="result-shortcut">Alt+{shortcut}</div>
</div>

<style>
.result {
    display: grid;
    grid-template-columns: 32px 1fr auto;
    gap: 18px;
    align-items: center;
    height: 58px;
    padding: 0 18px 0 calc(18px + var(--bullet-regular-width));
    margin-left: var(--result-margin-left);
    margin-right: var(--result-margin-right);
    border-radius: var(--result-border-radius);
    position: relative;
}

.result.active {
    background-color: var(--result-active-background-color);
    --result-title-color: var(--result-title-active-color);
    --result-title-font-style: var(--result-title-active-font-style);
    --result-title-font-weight: var(--result-title-active-font-weight);
    --result-subtitle-color: var(--result-subtitle-active-color);
    --result-subtitle-font-style: var(--result-subtitle-active-font-style);
    --result-subtitle-font-weight: var(--result-subtitle-active-font-weight);
    --result-glyph-color: var(--result-glyph-active-color);
    --result-shortcut-color: var(--result-shortcut-active-color);
    --result-glyph-font-size: var(--result-glyph-active-font-size);
    --result-shortcut-font-size: var(--result-shortcut-active-font-size);
    --result-shortcut-font-style: var(--result-shortcut-active-font-style);
    --result-shortcut-font-weight: var(--result-shortcut-active-font-weight);
    --bullet-regular-width: var(--bullet-active-width);
}

.result-text {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.result-text :global(i) {
    color: var(--result-highlighted-text-color);
    font-style: var(--result-highlighted-text-font-style);
    font-weight: var(--result-highlighted-text-font-weight);
}

.result-title {
    color: var(--result-title-color);
    font-style: var(--result-title-font-style);
    font-weight: var(--result-title-font-weight);
    font-size: 16px;
}

.result-subtitle {
    color: var(--result-subtitle-color);
    font-style: var(--result-subtitle-font-style);
    font-weight: var(--result-subtitle-font-weight);
    font-size: 14px;
}

.result-icon {
    width: 32px;
    aspect-ratio: 1;
    object-fit: contain;
}

.result-glyph {
    width: var(--result-glyph-font-size);
    aspect-ratio: 1;
    display: grid;
    place-items: center;
    font-size: var(--result-glyph-font-size);
    line-height: 1;
    color: var(--result-glyph-color);
    text-align: center;
}

.result-shortcut {
    color: var(--result-shortcut-color);
    font-size: var(--result-shortcut-font-size);
    font-style: var(--result-shortcut-font-style);
    font-weight: var(--result-shortcut-font-weight);
}

.bullet {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--bullet-regular-color);
    width: var(--bullet-regular-width);
    height: var(--bullet-regular-height);
    border-radius: var(--bullet-regular-border-radius);
    max-height: 100%;
}

.result.active .bullet {
    --bullet-regular-color: var(--bullet-active-color);
    --bullet-regular-width: var(--bullet-active-width);
    --bullet-regular-height: var(--bullet-active-height);
    --bullet-regular-border-radius: var(--bullet-active-border-radius);
}
</style>
