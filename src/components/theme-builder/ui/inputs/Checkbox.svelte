<script lang="ts">
let {
  label,
  description,
  inline = false,
  value = $bindable(),
  offValue,
  onValue,
}: {
  label: string;
  description?: string;
  inline?: boolean;
  value: any;
  offValue?: any;
  onValue?: any;
} = $props();

const checked = $derived.by<boolean>(() => {
  if (offValue != null && onValue != null) {
    return value === onValue;
  }
  return value;
});

function onchange(e: Event) {
  const target = e.target as HTMLInputElement;
  if (offValue != null && onValue != null) {
    value = target.checked ? onValue : offValue;
  } else {
    value = target.checked;
  }
}
</script>

<label class="checkbox-label" class:inline>
  <input type="checkbox" {checked} {onchange}/>

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="checkmark" class:checked>
    <path d="M32 0 16 16 8.17 8.17" transform="translate(-4.08 8)"/>
  </svg>

  {#if !description}
    {label}
  {:else}
    <div class="checkbox-text">
      <div>{label}</div>
      <div class="checkbox-description">{description}</div>
    </div>
  {/if}
</label>

<style>
.checkbox-label {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 12px;
    padding: 0 6px;
    cursor: pointer;
}

.checkbox-label.inline {
    gap: 6px;
    padding-left: 0;
}

.checkbox-label input {
    display: none;
}

.checkmark {
    stroke-linecap: round;
    stroke-linejoin: round;
    border: 2px solid var(--checkbox-color);
    background-color: var(--checkbox-bg);
    width: 16px;
    aspect-ratio: 1;
    border-radius: 4px;
    transition: background-color 0.2s;
}

.checkbox-label:hover .checkmark {
    background-color: var(--checkbox-bg-hover);
}

.checkbox-label:active .checkmark {
    background-color: var(--checkbox-bg-active);
}

.checkmark path {
    fill: none;
    stroke: var(--checkbox-color);
    stroke-width: 4px;
    stroke-dasharray: 33.700706481933594;
    stroke-dashoffset: -33.700706481933594;
    transition: stroke-dashoffset 0.2s;
}

.checkmark.checked path {
    stroke-dashoffset: 0;
}

.checkbox-description {
    font-size: 12px;
    margin-top: 2px;
}

@media (prefers-reduced-motion: reduce) {
    .checkmark path {
        transition: none;
    }
}
</style>
