<script lang="ts">
import type {AllState} from "@/components/theme-builder/state/AllState.svelte.ts";
import {getContext} from "svelte";
import Section from "@/components/theme-builder/ui/Section.svelte";
import Group from "@/components/theme-builder/ui/Group.svelte";
import ColorPicker from "@/components/theme-builder/ui/inputs/ColorPicker.svelte";
import NumberInput from "@/components/theme-builder/ui/inputs/NumberInput.svelte";
import QuadrupleNumberInput from "@/components/theme-builder/ui/inputs/QuadrupleNumberInput.svelte";
import Checkbox from "@/components/theme-builder/ui/inputs/Checkbox.svelte";
import UniformGrid from "@/components/theme-builder/ui/UniformGrid.svelte";

const state: AllState = getContext("state");
</script>

<Section title="Preview Panel">
  <Group title="Separator">
    <ColorPicker label="Color" bind:value={state.previewPanel.separator.color} alpha />
    <NumberInput label="Width" bind:value={state.previewPanel.separator.width} />
    <QuadrupleNumberInput
      label="Margins"
      bind:value1={state.previewPanel.separator.margins.left}
      bind:value2={state.previewPanel.separator.margins.top}
      bind:value3={state.previewPanel.separator.margins.bottom}
      bind:value4={state.previewPanel.separator.margins.right}
      line1="left"
      line2="top"
      line3="bottom"
      line4="right"
    />
  </Group>

  <Group title="Title">
    <ColorPicker label="Color" bind:value={state.previewPanel.title.color} alpha />
    <NumberInput label="Font Size" bind:value={state.previewPanel.title.size} />
    <UniformGrid>
      <Checkbox label="Italic" bind:value={state.previewPanel.title.style} offValue="Normal" onValue="Italic" />
      <Checkbox label="Bold" bind:value={state.previewPanel.title.weight} offValue="Normal" onValue="Bold" />
    </UniformGrid>
  </Group>

  <Group title="Subtitle">
    <ColorPicker label="Color" bind:value={state.previewPanel.subtitle.color} alpha />
    <NumberInput label="Font Size" bind:value={state.previewPanel.subtitle.size} />
    <UniformGrid>
      <Checkbox label="Italic" bind:value={state.previewPanel.subtitle.style} offValue="Normal" onValue="Italic" />
      <Checkbox label="Bold" bind:value={state.previewPanel.subtitle.weight} offValue="Normal" onValue="Bold" />
    </UniformGrid>
  </Group>

  <Group title="Glyph">
    <ColorPicker label="Color" bind:value={state.previewPanel.glyphColor} alpha />
  </Group>
</Section>
