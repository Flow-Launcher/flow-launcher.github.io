<script lang="ts">
import type {Snippet} from "svelte";

const {
  visible,
  topMargin,
  children,
}: {
  visible: boolean;
  topMargin?: boolean;
  children: Snippet;
} = $props();
</script>

<div class="collapsible" class:visible class:topMargin>
  <div class="collapsible-inner">
    {@render children()}
  </div>
</div>

<style>
.collapsible {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.3s, margin-top 0.3s;
    margin-top: 0;
}

.collapsible:not(.visible) {
    overflow: hidden;
}

.collapsible.visible {
    grid-template-rows: 1fr;
}

.collapsible.visible.topMargin {
    margin-top: 12px;
}

.collapsible-inner {
    min-height: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

@media (prefers-reduced-motion: reduce) {
    .collapsible {
        transition: none;
    }
}
</style>
