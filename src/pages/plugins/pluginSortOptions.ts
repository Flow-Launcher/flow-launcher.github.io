export const PLUGIN_SORTS = {
  NAME_ASC: {
    value: "name-asc",
    label: "Name",
  },
  FIRST_RELEASE_DESC: {
    value: "first-release-desc",
    label: "Release Date",
  },
  LATEST_RELEASE_DESC: {
    value: "latest-release-desc",
    label: "Updated Date",
  },
} as const;

export const PLUGIN_SORT_LIST = Object.values(PLUGIN_SORTS);

export type PluginSortValue = typeof PLUGIN_SORTS[keyof typeof PLUGIN_SORTS]["value"];

export const DEFAULT_PLUGIN_SORT: PluginSortValue = PLUGIN_SORTS.NAME_ASC.value;

const PLUGIN_SORT_VALUE_SET = new Set<string>(
  PLUGIN_SORT_LIST.map(option => option.value),
);

export function isPluginSortValue(value: string): value is PluginSortValue {
  return PLUGIN_SORT_VALUE_SET.has(value);
}