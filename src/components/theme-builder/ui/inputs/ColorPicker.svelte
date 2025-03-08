<script lang="ts">
import SvelteAwesomeColorPicker from "svelte-awesome-color-picker";

let {
  label,
  value = $bindable(),
  alpha = false,
}: {
  label: string;
  value: string;
  alpha?: boolean;
} = $props();
</script>

<div class="color-picker-container">
  <SvelteAwesomeColorPicker
    {label}
    bind:hex={value}
    isAlpha={alpha}
    --input-size="25px"
  />
</div>

<style>
.color-picker-container {
    --cp-bg-color: var(--card);
    --cp-border-color: var(--card-sep);
    --cp-text-color: var(--text);
    --cp-input-color: var(--color-picker-input-bg);
    --cp-button-hover-color: var(--button-copy-active);
    --focus-color: var(--sep);
}

.color-picker-container :global(.alpha) {
  margin: 1px;
    width: calc(var(--input-size) - 2px);
    height: calc(var(--input-size) - 2px);
}

.color-picker-container :global(.color) {
    border: 2px solid var(--card-sep);
}
</style>
