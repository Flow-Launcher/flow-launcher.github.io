<script lang="ts">
let {
  label,
  options,
  value = $bindable(),
}: {
  label?: string;
  options: ({ label: string; value: string } | string)[];
  value: string;
} = $props();

const optionObjects = $derived(options.map(v => typeof v === "string" ? { label: v, value: v } : v));
const groupName = `radio-group-${crypto.randomUUID()}`;
</script>

<div class="radio-group">
  {#if label}
  <div class="label">{label}</div>
  {/if}
  <div class="buttons">
  {#each optionObjects as { label, value: optionValue }}
    <label class="radio-label">
      <input type="radio" bind:group={value} name={groupName} value={optionValue} />
      <span class="radio-indicator"></span>
      {label}
    </label>
  {/each}
  </div>
</div>

<style>
.buttons {
    margin-top: 4px;
    margin-left: 6px;
    display: flex;
    gap: 24px;
}

.radio-label {
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 4px;
}

.radio-indicator {
    display: inline-block;
    width: 16px;
    aspect-ratio: 1;
    border: 2px solid var(--checkbox-color);
    background-color: var(--checkbox-bg);
    border-radius: 50%;
    transition: background-color 0.2s;
    position: relative;
}

.radio-indicator::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 10px;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: var(--checkbox-color);
    transition: transform 0.2s;
}

.radio-label:hover .radio-indicator {
    background-color: var(--checkbox-bg-hover);
}

.radio-label:active .radio-indicator {
    background-color: var(--checkbox-bg-active);
}

.radio-label input:checked + .radio-indicator::before {
    transform: translate(-50%, -50%) scale(1);
}

.radio-label input {
    display: none;
}
</style>
