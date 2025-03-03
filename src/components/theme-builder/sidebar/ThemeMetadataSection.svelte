<script lang="ts">
import TextInput from "@/components/theme-builder/ui/inputs/TextInput.svelte";
import Checkbox from "@/components/theme-builder/ui/inputs/Checkbox.svelte";
import SaveFileButton from "@/components/theme-builder/ui/SaveFileButton.svelte";
import Button from "@/components/theme-builder/ui/Button.svelte";
import Section from "@/components/theme-builder/ui/Section.svelte";
import type {AllState} from "@/components/theme-builder/state/AllState.svelte.ts";
import {getContext} from "svelte";

const {
  hiddenOn,
}: {
  hiddenOn: "mobile" | "desktop";
} = $props();

const state: AllState = getContext("state");

const FILE_NAME_REGEXP = /[^a-z0-9_\-.() ]/gi;
const fileName = $derived.by(() => {
  let result = state.settings.name.replace(FILE_NAME_REGEXP, "") + ".xaml";
  if (result === ".xaml") result = "theme.xaml";
  return result;
});

function fileContent(): string {
  return state.toXamlString();
}

function resetState(): void {
  if (!confirm("Are you sure you want to reset your theme?")) return;
  state.reset();
}
</script>

<div class:hidden-on-desktop={hiddenOn === "desktop"} class:hidden-on-mobile={hiddenOn === "mobile"}>
<Section title="Theme">
  <TextInput label="Name" bind:value={state.settings.name} />
  <Checkbox
    label="It's a dark theme"
    description="This doesn't affect the actual styles, it just adds an icon next to your theme's name in settings."
    bind:value={state.settings.dark}
  />
  <p class="notice">
    Please note that this preview is not a one-to-one recreation of the actual Flow Launcher window.
    It might not always look exactly the same, but it should give you a very good idea of how your theme will look.
  </p>
  <div class="actions">
    <Button onclick={resetState}>Reset</Button>
    <SaveFileButton {fileName} {fileContent}/>
  </div>
</Section>
</div>

<style lang="scss">
@use "$styles/breakpoints";

.notice {
  font-size: 14px;
  line-height: 1.25;
  margin: 8px 0;
  opacity: 0.75;
}

.actions {
  display: flex;
  gap: 24px;
  justify-content: flex-end;
}

.hidden-on-desktop {
  display: none;
}

.hidden-on-mobile {
  display: block;
}

@include breakpoints.sm {
  .hidden-on-mobile {
    display: none;
  }

  .hidden-on-desktop {
    display: block;
  }
}

@media (max-height: 750px) {
  .hidden-on-mobile {
    display: none;
  }

  .hidden-on-desktop {
    display: block;
  }
}
</style>
