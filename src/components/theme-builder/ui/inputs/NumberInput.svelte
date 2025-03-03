<script lang="ts">
let {
  label,
  value = $bindable(),
  min = 0,
  max = 100,
  step = 1,
}: {
  label?: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
} = $props();
</script>

<div class="number-input" class:noLabel={!label}>
  {#if label}
    <div class="label">{label}:</div>
  {/if}
  <input type="number" bind:value {min} {max} {step} />
</div>

<style>
.number-input {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 8px;
    position: relative;
}

.number-input.noLabel {
    grid-template-columns: 1fr;
}

.number-input input {
    background-color: var(--input-bg);
    border: 1px solid var(--sep);
    color: var(--text);
    padding: 8px;
    border-radius: 6px;
    outline: none;
    transition: background-color 0.2s;
    font-size: 16px;
}

.number-input input:focus {
    background-color: var(--input-bg-focus);
}
</style>
