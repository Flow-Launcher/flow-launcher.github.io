<script lang="ts">
import QuadrupleNumberInput from "@/components/theme-builder/ui/inputs/QuadrupleNumberInput.svelte";
import Section from "@/components/theme-builder/ui/Section.svelte";
import DoubleNumberInput from "@/components/theme-builder/ui/inputs/DoubleNumberInput.svelte";
import CollapsibleGroup from "@/components/theme-builder/ui/CollapsibleGroup.svelte";
import UniformGrid from "@/components/theme-builder/ui/UniformGrid.svelte";
import Group from "@/components/theme-builder/ui/Group.svelte";
import ColorPicker from "@/components/theme-builder/ui/inputs/ColorPicker.svelte";
import NumberInput from "@/components/theme-builder/ui/inputs/NumberInput.svelte";
import Checkbox from "@/components/theme-builder/ui/inputs/Checkbox.svelte";
import type {AllState} from "@/components/theme-builder/state/AllState.svelte.ts";
import {getContext} from "svelte";

const state: AllState = getContext("state");
</script>

<Section title="Query Box Style">
  <Group title="Text">
    <ColorPicker label="Color" bind:value={state.queryBox.textColor} alpha/>
    <ColorPicker label="Suggestion Text Color" bind:value={state.queryBox.suggestionColor} alpha/>
    <ColorPicker label="Caret Color" bind:value={state.queryBox.caretColor} alpha/>
  </Group>

  <CollapsibleGroup title="Search Icon" bind:value={state.queryBox.icon.visible}>
    <ColorPicker label="Color" bind:value={state.queryBox.icon.color} alpha/>

    <DoubleNumberInput
      label="Size"
      bind:value1={state.queryBox.icon.width}
      bind:value2={state.queryBox.icon.height}
      line1="horizontal"
      line2="vertical"
    />
  </CollapsibleGroup>

  <Group title="Progress Bar">
    <ColorPicker label="Color" bind:value={state.queryBox.progressBar.color} alpha/>
    <NumberInput label="Size" bind:value={state.queryBox.progressBar.height} max={50}/>
  </Group>

  <CollapsibleGroup title="Separator" bind:value={state.separator.visible}>
    <ColorPicker label="Color" bind:value={state.separator.color} alpha/>

    <QuadrupleNumberInput
      label="Margins"
      bind:value1={state.separator.margins.left}
      bind:value2={state.separator.margins.top}
      bind:value3={state.separator.margins.bottom}
      bind:value4={state.separator.margins.right}
      line1="left"
      line2="top"
      line3="bottom"
      line4="right"
    />

    <NumberInput label="Height" bind:value={state.separator.size} max={50}/>
  </CollapsibleGroup>

  <Group title="Date & Time Margins">
    <QuadrupleNumberInput
      bind:value1={state.queryBox.datetimeMargins.left}
      bind:value2={state.queryBox.datetimeMargins.top}
      bind:value3={state.queryBox.datetimeMargins.bottom}
      bind:value4={state.queryBox.datetimeMargins.right}
      line1="left"
      line2="top"
      line3="bottom"
      line4="right"
    />
  </Group>

  <Group title="Time">
    <ColorPicker label="Color" bind:value={state.queryBox.time.color} alpha/>
    <UniformGrid>
      <Checkbox label="Italic" bind:value={state.queryBox.time.fontStyle} offValue="Normal" onValue="Italic"/>
      <Checkbox label="Bold" bind:value={state.queryBox.time.fontWeight} offValue="Normal" onValue="Bold"/>
    </UniformGrid>
    <NumberInput label="Font Size" bind:value={state.queryBox.time.size} max={100}/>
    <QuadrupleNumberInput
      label="Margins"
      bind:value1={state.queryBox.time.margins.left}
      bind:value2={state.queryBox.time.margins.top}
      bind:value3={state.queryBox.time.margins.bottom}
      bind:value4={state.queryBox.time.margins.right}
      line1="left"
      line2="top"
      line3="bottom"
      line4="right"
    />
  </Group>

  <Group title="Date">
    <ColorPicker label="Color" bind:value={state.queryBox.date.color} alpha/>
    <UniformGrid>
      <Checkbox label="Italic" bind:value={state.queryBox.date.fontStyle} offValue="Normal" onValue="Italic"/>
      <Checkbox label="Bold" bind:value={state.queryBox.date.fontWeight} offValue="Normal" onValue="Bold"/>
    </UniformGrid>
    <NumberInput label="Font Size" bind:value={state.queryBox.date.size} max={100}/>
    <QuadrupleNumberInput
      label="Margins"
      bind:value1={state.queryBox.date.margins.left}
      bind:value2={state.queryBox.date.margins.top}
      bind:value3={state.queryBox.date.margins.bottom}
      bind:value4={state.queryBox.date.margins.right}
      line1="left"
      line2="top"
      line3="bottom"
      line4="right"
    />
  </Group>
</Section>
