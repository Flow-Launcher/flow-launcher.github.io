<script lang="ts">
import {onMount} from "svelte";
import type {SettingsState} from "@/components/theme-builder/state/SettingsState.svelte.ts";

const { settings }: { settings: SettingsState; } = $props();

let interval: number | null = null;

let date = $state("");
let time = $state("");

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

const timeFormatter = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "numeric",
});

function updateDateTime(): void {
  const now = new Date();
  date = dateFormatter.format(now);
  time = timeFormatter.format(now);
}

updateDateTime();

onMount(() => {
  interval = setTimeout(updateDateTime, 5000);

  return () => {
    clearTimeout(interval);
  };
})
</script>

<div class="query-box">
  <div class="query-suggestion">hello World!</div>
  <div class="query">hel</div>
  <div class="datetime" class:visible={settings.datetime}>
    <div class="time">{time}</div>
    <div class="date">{date}</div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" class="search-icon" viewBox="0 0 12000 12000">
    <path fill="currentColor"
          d="M10354 10962c-28-11-75-35-105-55-33-21-773-754-1879-1861-1004-1004-1829-1826-1834-1826-4 0-38 22-75 48-248 179-578 351-869 453-398 139-790 198-1232 185-748-20-1407-259-2020-732-209-161-508-475-676-709-270-377-476-847-567-1295-53-261-67-406-67-700 0-340 26-556 105-861 128-499 376-976 715-1374 86-101 312-324 410-406 521-434 1162-709 1830-784 181-20 577-20 758 0 657 75 1252 323 1782 744 144 114 451 426 556 566 176 233 281 404 393 635 223 465 332 947 332 1470 0 394-50 705-174 1082-53 160-62 182-135 343-85 186-212 407-332 575-28 39-50 73-50 78 0 4 826 833 1835 1842 1386 1386 1843 1849 1869 1894 21 34 42 90 52 134 14 64 15 85 4 146-28 163-140 311-290 383-69 34-83 37-180 40-85 3-115 0-156-15zM4685 7050c529-49 1009-241 1415-566 109-88 296-275 384-384 667-833 762-1990 237-2910-352-619-923-1053-1621-1234-394-101-878-101-1270 1-382 99-690 253-992 496-501 402-828 974-930 1627-31 194-31 576 0 770 40 255 120 520 225 740 326 682 944 1192 1677 1383 157 41 275 61 480 80 81 8 293 6 395-3z"/>
  </svg>
</div>

<style>
.query-box {
    height: 56px;
    position: relative;
    font-size: 22px;
    caret-color: var(--caret-color);
}

.query-box::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100px;
    height: var(--progress-bar-height);
    background-color: var(--progress-bar-color);
    animation: progress-bar 2s infinite linear;
}

.query-suggestion {
    color: var(--suggestion-text-color);
}

.query {
    color: var(--query-text-color);
}

.query::before {
    content: "";
    position: absolute;
    right: -1px;
    top: 50%;
    height: 50%;
    width: 1px;
    background-color: var(--caret-color);
    transform: translateY(-50%);
    animation: caret 1.25s infinite;
}

.query,
.query-suggestion {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 18px;
    display: flex;
    align-items: center;
}

.search-icon {
    position: absolute;
    right: 18px;
    width: calc(var(--search-icon-width) * var(--search-icon-visible));
    height: var(--search-icon-height);
    aspect-ratio: 1;
    top: 50%;
    transform: translateY(-50%);
    color: var(--search-icon-color);
}

.datetime {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: var(--datetime-margins);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 4px;
    opacity: 0;
}

.datetime.visible {
    opacity: 1;
}

.date {
    color: var(--date-color);
    font-size: var(--date-size);
    font-style: var(--date-font-style);
    font-weight: var(--date-font-weight);
    margin: var(--date-margins);
}

.time {
    color: var(--time-color);
    font-size: var(--time-size);
    font-style: var(--time-font-style);
    font-weight: var(--time-font-weight);
    margin: var(--time-margins);
}

:global(.noProgressBar) .query-box::before {
    display: none;
}

:global(.noCaret) .query::before {
    display: none;
}

@keyframes caret {
    0%,
    49.9%,
    100% {
        opacity: 1;
    }
    50%,
    99.9% {
        opacity: 0;
    }
}

@keyframes progress-bar {
    0% {
        left: -100px;
    }
    100% {
        left: 100%;
    }
}
</style>
