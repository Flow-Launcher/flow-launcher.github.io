import type {IState} from "@/components/theme-builder/state/IState.ts";
import {SettingsState} from "@/components/theme-builder/state/SettingsState.svelte.ts";
import {WindowState} from "@/components/theme-builder/state/WindowState.svelte.ts";
import {QueryBoxState} from "@/components/theme-builder/state/QueryBoxState.svelte.ts";
import {SeparatorState} from "@/components/theme-builder/state/SeparatorState.svelte.ts";
import {ResultState} from "@/components/theme-builder/state/ResultState.svelte.ts";
import {ScrollbarState} from "@/components/theme-builder/state/ScrollbarState.svelte.ts";
import {BulletState} from "@/components/theme-builder/state/BulletState.svelte.ts";
import {normalizeBooleanForWpf} from "@/utils.ts";
import {compressSync, decompressSync} from "fflate";
import {PreviewPanelState} from "@/components/theme-builder/state/PreviewPanel.svelte.ts";

export class AllState implements IState {
  settings = new SettingsState();
  window = new WindowState();
  queryBox = new QueryBoxState();
  scrollbar = new ScrollbarState();
  separator = new SeparatorState();
  result = new ResultState();
  bullet = new BulletState();
  previewPanel = new PreviewPanelState();

  reset(): void {
    this.settings.reset();
    this.window.reset();
    this.queryBox.reset();
    this.scrollbar.reset();
    this.separator.reset();
    this.result.reset();
    this.bullet.reset();
    this.previewPanel.reset();
  }

  toCssProperties(): Record<string, string> {
    return {
      ...this.window.toCssProperties(),
      ...this.queryBox.toCssProperties(),
      ...this.scrollbar.toCssProperties(),
      ...this.separator.toCssProperties(),
      ...this.result.toCssProperties(),
      ...this.bullet.toCssProperties(),
      ...this.previewPanel.toCssProperties(),
    };
  }

  toCssPropertiesAsString(): string {
    return Object.entries(this.toCssProperties())
      .map(([key, value]) => `${key}: ${value};`)
      .join(' ');
  }

  toXamlString(): string {
    return `
<!--
    Name: ${this.settings.name}
    IsDark: ${normalizeBooleanForWpf(this.settings.dark)}
    HasBlur: ${normalizeBooleanForWpf(this.window.background.blur)}
-->
<ResourceDictionary
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:m="http://schemas.modernwpf.com/2019"
    xmlns:system="clr-namespace:System;assembly=mscorlib">

    <ResourceDictionary.MergedDictionaries>
        <ResourceDictionary Source="pack://application:,,,/Themes/Base.xaml" />
    </ResourceDictionary.MergedDictionaries>
    
    ${this.window.toXamlString()}
    ${this.queryBox.toXamlString()}
    ${this.separator.toXamlString()}
    ${this.result.toXamlString()}
    ${this.bullet.toXamlString()}
    ${this.scrollbar.toXamlString()}
    ${this.previewPanel.toXamlString()}
    
</ResourceDictionary>
    `.trim();
  }

  fromJSON(data: Record<any, any>): void {
    if (data.s)
      this.settings.fromJSON(data.s);

    if (data.w)
      this.window.fromJSON(data.w);

    if (data.qb)
      this.queryBox.fromJSON(data.qb);

    if (data.sb)
      this.scrollbar.fromJSON(data.sb);

    if (data.se)
      this.separator.fromJSON(data.se);

    if (data.r)
      this.result.fromJSON(data.r);

    if (data.b)
      this.bullet.fromJSON(data.b);

    if (data.pp)
      this.previewPanel.fromJSON(data.pp);
  }

  fromEncodedJSON(encodedJson: string): void {
    try {
      const decoded = Uint8Array.from(atob(encodedJson), c => c.charCodeAt(0));
      const decompressed = new TextDecoder().decode(decompressSync(decoded));
      const json = JSON.parse(decompressed);
      this.fromJSON(json);
    } catch (error) {
      console.error(error);
    }
  }

  toJSON(): Record<string, any> {
    return {
      s: this.settings.toJSON(),
      w: this.window,
      qb: this.queryBox,
      sb: this.scrollbar,
      se: this.separator,
      r: this.result,
      b: this.bullet,
      pp: this.previewPanel,
    };
  }

  toEncodedJSON(): string {
    const jsonString = JSON.stringify(this);
    const compressed = compressSync(new TextEncoder().encode(jsonString), {
      level: 9,
    });
    return btoa(String.fromCharCode(...compressed));
  }
}
