<script lang="ts">
import type {Snippet} from "svelte";

const {
  columns = 2,
  gap = 8,
  children,
}: {
  columns?: number;
  gap?: number;
  children?: Snippet;
} = $props();
</script>

<div class="uniform-grid" style:--columns={columns} style:--gap={gap}>
  {@render children?.()}
</div>

<style>
.uniform-grid {
    display: grid;
    grid-template-columns: repeat(var(--columns), 1fr);
    gap: calc(var(--gap) * 1px);
}
</style>
