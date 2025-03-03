import process from 'node:process';

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
    .replace(/-{2,}/, '-');
}

declare function refreshFsLightbox(): void;

export function addLightboxToBlogPostImages(): void {
  const blogs = document.querySelectorAll('.blog-content') as NodeListOf<HTMLElement>;

  for (let i = 0; i < blogs.length; i++) {
    const blog = blogs[i];
    const images = blog.querySelectorAll('img');
    for (const image of images) {
      const a = document.createElement('a');
      a.href = image.src;
      a.dataset.fslightbox = `blog-${i}`;
      image.replaceWith(a);
      a.appendChild(image);
    }
  }

  refreshFsLightbox();
}

let themeToggleButtons: NodeListOf<HTMLElement> | null = null;

export function setTheme(theme: string): void {
  if (!themeToggleButtons) {
    themeToggleButtons = document.querySelectorAll(".theme-toggle-button[data-theme-toggle-button]") as NodeListOf<HTMLElement>;
  }

  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

export function toggleTheme(e?: Event): void {
  e?.preventDefault();
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(newTheme);
}

export function setUpThemeToggleButton(buttonSelector: string): void {
  const buttons = document.querySelectorAll(buttonSelector) as NodeListOf<HTMLElement>;
  buttons.forEach(button => button.addEventListener("click", toggleTheme));
}

export function getBaseUrl(emptyRoot = false): string {
  const path = "/" + (process.env.WEBSITE_BASE?.split('/')?.slice(1)?.join('/') ?? "");
  return emptyRoot && path === "/" ? "" : path;
}

export function getBaseUrlFromHtml(emptyRoot = false): string {
  const path = document.querySelector('base')?.getAttribute('href') ?? "/";
  return emptyRoot && path === "/" ? "" : path;
}

const cache = new Map();

export function setCache(key: string, value: any): void {
  cache.set(key, value);
}

export function getCache(key: string): any {
  return cache.get(key);
}

const SIZE_UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
export function formatBytes(bytes: number): string {
  let unitIndex = 0;
  while (bytes >= 1024) {
    bytes /= 1024;
    unitIndex++;
  }
  return `${bytes.toFixed(2)} ${SIZE_UNITS[unitIndex]}`;
}

export function setupButtonToOpenDownloadDialog(buttonSelector: string): void {
  const dialog = document.querySelector('#download-dialog') as HTMLDialogElement;

  document.querySelector(buttonSelector)?.addEventListener('click', (e: Event) => {
    e.preventDefault();
    dialog.showModal();
    dialog.focus();
  });
}

export function normalizeHexColorForWpf(hexColor: string): string {
  hexColor = hexColor.toUpperCase();

  if (hexColor.length === 4) {
    return `#FF${hexColor[1]}${hexColor[1]}${hexColor[2]}${hexColor[2]}${hexColor[3]}${hexColor[3]}`;
  }

  if (hexColor.length === 5) {
    return `#${hexColor[4]}${hexColor[4]}${hexColor[1]}${hexColor[1]}${hexColor[2]}${hexColor[2]}${hexColor[3]}${hexColor[3]}`;
  }

  if (hexColor.length === 7) {
    return `#FF${hexColor.substring(1)}`;
  }

  if (hexColor.length === 9) {
    return `#${hexColor.substring(7)}${hexColor.substring(1, 7)}`;
  }

  return hexColor;
}

export function normalizeMarginsForWpf({top = 0, right = 0, bottom = 0, left = 0}: {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number
}): string {
  return `${left} ${top} ${right} ${bottom}`;
}

export function normalizeBooleanForWpf(value: boolean): string {
  return value ? "True" : "False";
}

export function getFontSizeSetterForWpf(size: number): string {
  if (size > 0) {
    return `<Setter Property="FontSize" Value="${size}" />`;
  }

  return `
        <Setter Property="FontSize" Value="6" />
        <Setter Property="Visibility" Value="Collapsed" />
  `.trim();
}

export function verifyArrayTypes(array: any[] | undefined, ...types: string[]): boolean {
  if (array?.length !== types.length) {
    return false;
  }
  return array.every((item, index) => typeof item === types[index]);
}
