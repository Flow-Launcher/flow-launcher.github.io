<script lang="ts">
import Result from "@/components/theme-builder/theme-demo/Result.svelte";
import type {AllState} from "@/components/theme-builder/state/AllState.svelte.js";
import Scrollbar from "@/components/theme-builder/theme-demo/Scrollbar.svelte";
import {getContext} from "svelte";
import {getBaseUrlFromHtml} from "@/utils.ts";

const state: AllState = getContext("state");
const baseUrl = getBaseUrlFromHtml(true);
const image = `${baseUrl}/favicon.ico`;
</script>

<div class="results">
  <Result shortcut={1} {image} active={state.settings.activeResults[0]}>
    {#snippet title()}<i>Hel</i>lo world plugin{/snippet}
  </Result>
  <Result shortcut={2} {image} active={state.settings.activeResults[1]}>
    {#snippet title()}Hi{/snippet}
    {#snippet subtitle()}Say <i>Hel</i>lo to Flow Launcher{/snippet}
  </Result>
  <Result shortcut={3} glyph="W" active={state.settings.activeResults[2]}>
    {#snippet title()}<i>Hel</i>lo everyone{/snippet}
    {#snippet subtitle()}This result has a glyph{/snippet}
  </Result>
  <Result shortcut={4} glyph="H" active={state.settings.activeResults[3]}>
    {#snippet title()}<i>Hel</i>lo everyone again{/snippet}
    {#snippet subtitle()}This result also has a glyph{/snippet}
  </Result>

  <Scrollbar/>
</div>

<style>
.results {
    position: relative;
    padding: var(--result-list-margins);
}
</style>
