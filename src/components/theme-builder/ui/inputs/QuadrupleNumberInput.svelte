<script lang="ts">
type Line = "top" | "left" | "right" | "bottom" | "horizontal" | "vertical";

let {
  label,
  value1 = $bindable(),
  value2 = $bindable(),
  value3 = $bindable(),
  value4 = $bindable(),
  min1 = 0,
  max1 = 100,
  step1 = 1,
  min2 = 0,
  max2 = 100,
  step2 = 1,
  min3 = 0,
  max3 = 100,
  step3 = 1,
  min4 = 0,
  max4 = 100,
  step4 = 1,
  line1,
  line2,
  line3,
  line4,
}: {
  label?: string;
  value1: number;
  value2: number;
  value3: number;
  value4: number;
  min1?: number;
  max1?: number;
  step1?: number;
  min2?: number;
  max2?: number;
  step2?: number;
  min3?: number;
  max3?: number;
  step3?: number;
  min4?: number;
  max4?: number;
  step4?: number;
  line1?: Line;
  line2?: Line;
  line3?: Line;
  line4?: Line;
} = $props();

const hasLines = $derived(line1 || line2 || line3 || line4);
</script>

<div class="quadruple-number-input" class:hasLines>
  {#if label}
    <div class="label">{label}</div>
  {/if}
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
    <input
      type="number"
      bind:value={value3}
      min={min3}
      max={max3}
      step={step3}
      class:top-line={line3 === "top" || line3 === "horizontal"}
      class:left-line={line3 === "left" || line3 === "vertical"}
      class:right-line={line3 === "right" || line3 === "vertical"}
      class:bottom-line={line3 === "bottom" || line3 === "horizontal"}
    />
    <input
      type="number"
      bind:value={value4}
      min={min4}
      max={max4}
      step={step4}
      class:top-line={line4 === "top" || line4 === "horizontal"}
      class:left-line={line4 === "left" || line4 === "vertical"}
      class:right-line={line4 === "right" || line4 === "vertical"}
      class:bottom-line={line4 === "bottom" || line4 === "horizontal"}
    />
</div>

<style lang="scss">
@use "$styles/breakpoints";

.quadruple-number-input {
    display: grid;
    grid-template-columns: repeat(4, 25%);
    gap: 8px;
    /** Hardcoded width, otherwise layout breaks in Chrome */
    width: 318px;
}

.label {
    grid-column: 1 / -1;
}

input {
    background-color: var(--input-bg);
    border: 2px solid transparent;
    border-radius: 8px;
    color: var(--text);
    padding: 8px;
    outline: none;
    transition: background-color 0.2s;
    font-size: 16px;
}

input:focus {
    background-color: var(--input-bg-focus);
}

.hasLines input {
    border-radius: 0;
}

.hasLines input.top-line {
    border-top: 2px solid var(--text);
}

.hasLines input.left-line {
    border-left: 2px solid var(--text);
}

.hasLines input.right-line {
    border-right: 2px solid var(--text);
}

.hasLines input.bottom-line {
    border-bottom: 2px solid var(--text);
}

@include breakpoints.sm {
    .quadruple-number-input {
        grid-template-columns: 1fr 1fr;
        width: 100%;
    }
}
</style>
