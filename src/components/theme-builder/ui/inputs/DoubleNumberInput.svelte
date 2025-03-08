<script lang="ts">
type Line = "top" | "left" | "right" | "bottom" | "horizontal" | "vertical";

let {
  label,
  value1 = $bindable(),
  value2 = $bindable(),
  min1 = 0,
  max1 = 100,
  step1 = 1,
  min2 = 0,
  max2 = 100,
  step2 = 1,
  line1,
  line2,
}: {
  label?: string;
  value1: number;
  value2: number;
  min1?: number;
  max1?: number;
  step1?: number;
  min2?: number;
  max2?: number;
  step2?: number;
  line1?: Line;
  line2?: Line;
} = $props();

const hasLines = $derived(line1 || line2);
</script>

<div class="double-number-input">
  {#if label}
    <div class="label">{label}</div>
  {/if}
  <div class="inputs" class:hasLines>
    <input
      type="number"
      bind:value={value1}
      min={min1}
      max={max1}
      step={step1}
      class:top-line={line1 === "top" || line1 === "horizontal"}
      class:left-line={line1 === "left" || line1 === "vertical"}
      class:right-line={line1 === "right" || line1 === "vertical"}
      class:bottom-line={line1 === "bottom" || line1 === "horizontal"}
    />
    <input
      type="number"
      bind:value={value2}
      min={min2}
      max={max2}
      step={step2}
      class:top-line={line2 === "top" || line2 === "horizontal"}
      class:left-line={line2 === "left" || line2 === "vertical"}
      class:right-line={line2 === "right" || line2 === "vertical"}
      class:bottom-line={line2 === "bottom" || line2 === "horizontal"}
    />
  </div>
</div>

<style>
.double-number-input {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.inputs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
}

.inputs input {
    background-color: var(--input-bg);
    border: 2px solid transparent;
    border-radius: 8px;
    color: var(--text);
    padding: 8px;
    outline: none;
    transition: background-color 0.2s;
    font-size: 16px;
}

.inputs input:focus {
    background-color: var(--input-bg-focus);
}

.inputs.hasLines input {
    border-radius: 0;
}

.inputs input.top-line {
    border-top: 2px solid var(--text);
}

.inputs input.left-line {
    border-left: 2px solid var(--text);
}

.inputs input.right-line {
    border-right: 2px solid var(--text);
}

.inputs input.bottom-line {
    border-bottom: 2px solid var(--text);
}
</style>
