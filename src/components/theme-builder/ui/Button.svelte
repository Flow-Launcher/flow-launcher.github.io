<script lang="ts">
import type { Snippet } from "svelte";

const {
  children,
  onclick,
}: {
  children: Snippet;
  onclick: (e: MouseEvent) => void;
} = $props();
</script>

<button type="button" class="theme-builder-button" {onclick}>
  {@render children()}
</button>

<style>
.theme-builder-button {
    align-self: flex-end;
    padding: 8px 16px;
    border-radius: 8px;
    background-color: var(--button-primary);
    transition: background-color 0.2s, color 0.2s;
    cursor: pointer;
    color: var(--button-primary-text);
}

.theme-builder-button:hover {
    background-color: var(--button-primary-hover);
}

.theme-builder-button:active {
    background-color: var(--button-primary-active);
}
</style>
