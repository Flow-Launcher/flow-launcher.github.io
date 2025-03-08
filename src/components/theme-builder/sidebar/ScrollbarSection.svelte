<script lang="ts">
import Section from "@/components/theme-builder/ui/Section.svelte";
import ColorPicker from "@/components/theme-builder/ui/inputs/ColorPicker.svelte";
import NumberInput from "@/components/theme-builder/ui/inputs/NumberInput.svelte";
import type {AllState} from "@/components/theme-builder/state/AllState.svelte.ts";
import {getContext} from "svelte";

const state: AllState = getContext("state");
</script>

<Section title="Scrollbar Style">
  <ColorPicker label="Color" bind:value={state.scrollbar.color} alpha/>
  <NumberInput label="Width" bind:value={state.scrollbar.width} max={50}/>
  <NumberInput label="Border Radius" bind:value={state.scrollbar.borderRadius} max={50}/>
</Section>
