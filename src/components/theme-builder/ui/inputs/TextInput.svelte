<script lang="ts">
let {
  label,
  value = $bindable(),
}: {
  label?: string;
  value: string;
} = $props();
</script>

<div class="text-input" class:noLabel={!label}>
  {#if label}
    <div class="label">{label}:</div>
  {/if}
  <input type="text" bind:value />
</div>

<style>
.text-input {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 8px;
    position: relative;
}

.text-input.noLabel {
    grid-template-columns: 1fr;
}

.text-input input {
    background-color: var(--input-bg);
    border: 1px solid var(--sep);
    color: var(--text);
    padding: 8px;
    border-radius: 6px;
    outline: none;
    transition: background-color 0.2s;
    font-size: 16px;
}

.text-input input:focus {
    background-color: var(--input-bg-focus);
}
</style>
