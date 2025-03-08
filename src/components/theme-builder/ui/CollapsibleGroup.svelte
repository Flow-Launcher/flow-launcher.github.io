<script lang="ts">
import type {Snippet} from "svelte";
import Checkbox from "@/components/theme-builder/ui/inputs/Checkbox.svelte";
import Collapsible from "@/components/theme-builder/ui/Collapsible.svelte";

let {
  title,
  children,
  value = $bindable(),
}: {
  title: string;
  children: Snippet;
  value: boolean;
} = $props();
</script>

<div class="field-with-label" class:checked={value}>
  <div class="title">
    <Checkbox label={title} bind:value={value}/>
  </div>
  <div class="grouped-elements">
    <Collapsible visible={value}>
      {@render children()}
    </Collapsible>
  </div>
</div>

<style>
.field-with-label {
    display: flex;
    flex-direction: column;
    background-color: transparent;
    border-radius: 8px;
    transition: background-color 0.2s;
}

.checked {
    background-color: var(--group-bg-alternate);
}

.title {
    border-bottom: 1px solid transparent;
    transition: border-bottom-color 0.2s, padding 0.2s;
}

.checked .title {
    padding: 12px;
    border-bottom-color: var(--sep);
}

.grouped-elements {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 0 12px;
    transition: padding 0.2s;
}

.checked .grouped-elements {
    padding: 12px;
}
</style>
