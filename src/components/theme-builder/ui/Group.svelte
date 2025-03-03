<script lang="ts">
import type { Snippet } from "svelte";

const {
  title,
  children,
}: {
  title: string;
  children: Snippet;
} = $props();
</script>

<div class="group">
  <div class="group-title">{title}</div>
  <div class="group-content">
    {@render children()}
  </div>
</div>

<style>
.group {
    background-color: var(--group-bg-alternate);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
}

.group-title {
    font-size: 18px;
    font-weight: bold;
    padding: 12px;
    border-bottom: 1px solid var(--sep);
}

.group-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 12px;
}
</style>
