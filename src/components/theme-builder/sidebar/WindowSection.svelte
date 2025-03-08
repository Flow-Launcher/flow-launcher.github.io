<script lang="ts">
import Section from "@/components/theme-builder/ui/Section.svelte";
import Group from "@/components/theme-builder/ui/Group.svelte";
import Checkbox from "@/components/theme-builder/ui/inputs/Checkbox.svelte";
import ColorPicker from "@/components/theme-builder/ui/inputs/ColorPicker.svelte";
import NumberInput from "@/components/theme-builder/ui/inputs/NumberInput.svelte";
import {getContext} from "svelte";
import type {AllState} from "@/components/theme-builder/state/AllState.svelte.ts";

const state: AllState = getContext("state");
</script>

<Section title="Window Style">
  <Group title="Border">
    <ColorPicker label="Color" bind:value={state.window.border.color} alpha/>
    <NumberInput label="Thickness" bind:value={state.window.border.thickness}/>
    <NumberInput label="Radius" bind:value={state.window.border.radius}/>
  </Group>
  <Group title="Background">
    <ColorPicker label="Color" bind:value={state.window.background.color} alpha/>
    <Checkbox label="Blur" bind:value={state.window.background.blur}/>
  </Group>
</Section>
