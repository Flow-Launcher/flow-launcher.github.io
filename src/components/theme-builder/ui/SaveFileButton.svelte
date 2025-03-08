<script lang="ts">
import Button from "@/components/theme-builder/ui/Button.svelte";
import type {Snippet} from "svelte";

const {
  children,
  fileName,
  fileContent,
}: {
  children?: Snippet;
  fileName: string;
  fileContent: () => string;
} = $props();

const a = document.createElement("a");

function onclick(): void {
  a.download = fileName;
  a.href = `data:text/plain;charset=utf-8,${encodeURIComponent(fileContent())}`;
  a.click();
}
</script>

<Button {onclick}>
  {#if children}
    {@render children()}
  {:else}
    Save File
  {/if}
</Button>
