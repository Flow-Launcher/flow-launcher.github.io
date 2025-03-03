<script lang="ts">
import Section from "@/components/theme-builder/ui/Section.svelte";
import DoubleNumberInput from "@/components/theme-builder/ui/inputs/DoubleNumberInput.svelte";
import CollapsibleGroup from "@/components/theme-builder/ui/CollapsibleGroup.svelte";
import ColorPicker from "@/components/theme-builder/ui/inputs/ColorPicker.svelte";
import NumberInput from "@/components/theme-builder/ui/inputs/NumberInput.svelte";
import type {AllState} from "@/components/theme-builder/state/AllState.svelte.ts";
import {getContext} from "svelte";

const state: AllState = getContext("state");
</script>

<Section title="Bullet Style">
  <CollapsibleGroup title="Regular" bind:value={state.bullet.regular.visible}>
    <ColorPicker label="Color" bind:value={state.bullet.regular.color} alpha/>
    <DoubleNumberInput
      label="Size"
      bind:value1={state.bullet.regular.width}
      bind:value2={state.bullet.regular.height}
      max1={22}
      line1="horizontal"
      line2="vertical"
    />
    <NumberInput label="Border Radius" bind:value={state.bullet.regular.borderRadius} max={50}/>
  </CollapsibleGroup>

  <CollapsibleGroup title="Active" bind:value={state.bullet.active.visible}>
    <ColorPicker label="Color" bind:value={state.bullet.active.color} alpha/>
    <DoubleNumberInput
      label="Size"
      bind:value1={state.bullet.active.width}
      bind:value2={state.bullet.active.height}
      max1={22}
      line1="horizontal"
      line2="vertical"
    />
    <NumberInput label="Border Radius" bind:value={state.bullet.active.borderRadius} max={50}/>
  </CollapsibleGroup>
</Section>
