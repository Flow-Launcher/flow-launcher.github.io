<script lang="ts">
import type { Snippet } from "svelte";

let isCollapsed = $state(false);

const {
  title,
  children,
}: {
  title: string;
  children: Snippet;
} = $props();

function toggleCollapse() {
  isCollapsed = !isCollapsed;
}
</script>

<div class="section" class:isCollapsed>
  <button class="section-header" onclick={toggleCollapse}>
    <span class="section-title">
      <span class="chevron">▼</span>
      {title}
    </span>
  </button>

  <div class="section-content-container">
    <div class="section-content">{@render children()}</div>
  </div>
</div>

<style lang="scss">
@use "$styles/breakpoints";

.section {
    background-color: var(--group-bg);
    border-radius: 8px;
    border: 1px solid var(--sep);
    --duration: 0.3s;
}

.section-header {
    font-size: 20px;
    font-weight: bold;
    border-bottom: 1px solid var(--sep);
    border-radius: 0;
    display: block;
    padding: 16px;
    cursor: pointer;
    transition: border-bottom-color var(--duration);
    background-color: transparent;
    color: var(--text);
    width: 100%;
    text-align: left;
}

.chevron {
    display: inline-block;
    transform-origin: center;
    transition: transform var(--duration);
}

.section-content-container {
    display: grid;
    grid-template-rows: 1fr;
    transition: grid-template-rows var(--duration), margin var(--duration);
    margin: 16px;
}

.section-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-height: 0;
}

.isCollapsed .section-content-container {
    grid-template-rows: 0fr;
    margin: 0 16px;
    overflow: hidden;
}

.isCollapsed .section-header {
    border-color: transparent;
}

.isCollapsed .chevron {
    transform: rotateZ(61deg);
}

@include breakpoints.sm {
    .section {
        border-radius: 0;
    }
}

@media (prefers-reduced-motion: reduce) {
    .chevron {
        transition: none;
    }

    .section-content-container {
        transition: none;
    }
}
</style>
