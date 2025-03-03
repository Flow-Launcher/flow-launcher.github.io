<script lang="ts">
import Section from "@/components/theme-builder/ui/Section.svelte";
import Group from "@/components/theme-builder/ui/Group.svelte";
import Checkbox from "@/components/theme-builder/ui/inputs/Checkbox.svelte";
import type {AllState} from "@/components/theme-builder/state/AllState.svelte.js";
import {getContext} from "svelte";

const state: AllState = getContext("state");
</script>

<Section title="Preview Settings">
  <Checkbox label="Backgrounds" bind:value={state.settings.backgrounds}/>
  <Checkbox label="Progress Bar" bind:value={state.settings.progressBar}/>
  <Checkbox label="Caret" bind:value={state.settings.caret}/>
  <Checkbox label="Date and time" bind:value={state.settings.datetime}/>
  <Checkbox label="Preview Panel" bind:value={state.settings.previewPanel}/>

  <Group title="Active Results">
    <div class="active-results-checkboxes">
      {#each state.settings.activeResults as _, i}
        <Checkbox label={(i + 1).toString()} bind:value={state.settings.activeResults[i]} inline/>
      {/each}
    </div>
  </Group>
</Section>

<style>
.active-results-checkboxes {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
}
</style>
