import type {IState} from "@/components/theme-builder/state/IState";
import {getFontSizeSetterForWpf, normalizeHexColorForWpf, normalizeMarginsForWpf, verifyArrayTypes} from "@/utils.ts";

export class ResultState implements IState {
  regular = $state({
    shortcut: {
      color: "#5BAFB0",
      fontSize: 12,
      fontStyle: "Normal",
      fontWeight: "Normal",
    },
    glyph: {
      color: "#5BAFB0",
      fontSize: 20,
    },
    title: "#5989B2",
    subtitle: "#7B858F",
    bullet: {
      color: "transparent",
      width: 4,
      height: 10,
      borderRadius: 2,
    },
  });

  active = $state({
    shortcut: {
      color: "#EA7354",
      fontSize: 12,
      fontStyle: "Normal",
      fontWeight: "Normal",
    },
    glyph: {
      color: "#FFFFFF",
      fontSize: 20,
    },
    title: "#5BAFB0",
    subtitle: "#CC8EC8",
    background: "#3C454E",
    bullet: {
      color: "#D0A23A",
      width: 4,
      height: 10,
      borderRadius: 2,
    },
  });

  resultListMargins = $state({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  });

  margins = $state({
    left: 0,
    right: 0,
  });

  borderRadius = $state(0);

  highlightedText = $state({
    color: "#FFAA47",
    fontStyle: "Normal",
    fontWeight: "Normal",
  });

  reset(): void {
    this.regular.shortcut.color = "#5BAFB0";
    this.regular.shortcut.fontSize = 12;
    this.regular.shortcut.fontStyle = "Normal";
    this.regular.shortcut.fontWeight = "Normal";

    this.regular.glyph.color = "#5BAFB0";
    this.regular.glyph.fontSize = 20;

    this.regular.title = "#5989B2";
    this.regular.subtitle = "#7B858F";

    this.regular.bullet.color = "transparent";
    this.regular.bullet.width = 4;
    this.regular.bullet.height = 10;
    this.regular.bullet.borderRadius = 2;

    this.active.shortcut.color = "#EA7354";
    this.active.shortcut.fontSize = 12;
    this.active.shortcut.fontStyle = "Normal";
    this.active.shortcut.fontWeight = "Normal";

    this.active.glyph.color = "#FFFFFF";
    this.active.glyph.fontSize = 20;

    this.active.title = "#5BAFB0";
    this.active.subtitle = "#CC8EC8";
    this.active.background = "#3C454E";

    this.active.bullet.color = "#D0A23A";
    this.active.bullet.width = 4;
    this.active.bullet.height = 10;
    this.active.bullet.borderRadius = 2;

    this.resultListMargins.top = 0;
    this.resultListMargins.right = 0;
    this.resultListMargins.bottom = 0;
    this.resultListMargins.left = 0;

    this.margins.left = 0;
    this.margins.right = 0;

    this.borderRadius = 0;

    this.highlightedText.color = "#FFAA47";
    this.highlightedText.fontStyle = "Normal";
    this.highlightedText.fontWeight = "Normal";
  }

  toCssProperties(): Record<string, string> {
    return {
      '--result-title-color': this.regular.title,
      '--result-title-active-color': this.active.title,

      '--result-subtitle-color': this.regular.subtitle,
      '--result-subtitle-active-color': this.active.subtitle,

      '--result-glyph-color': this.regular.glyph.color,
      '--result-glyph-font-size': `${this.regular.glyph.fontSize}px`,

      '--result-glyph-active-color': this.active.glyph.color,
      '--result-glyph-active-font-size': `${this.active.glyph.fontSize}px`,

      '--result-shortcut-color': this.regular.shortcut.color,
      '--result-shortcut-font-size': `${this.regular.shortcut.fontSize}px`,
      '--result-shortcut-font-style': this.regular.shortcut.fontStyle,
      '--result-shortcut-font-weight': this.regular.shortcut.fontWeight,

      '--result-shortcut-active-color': this.active.shortcut.color,
      '--result-shortcut-active-font-size': `${this.active.shortcut.fontSize}px`,
      '--result-shortcut-active-font-style': this.active.shortcut.fontStyle,
      '--result-shortcut-active-font-weight': this.active.shortcut.fontWeight,

      '--result-active-background-color': this.active.background,
      '--result-margin-left': `${this.margins.left}px`,
      '--result-margin-right': `${this.margins.right}px`,
      '--result-border-radius': `${this.borderRadius}px`,

      '--result-highlighted-text-color': this.highlightedText.color,
      '--result-highlighted-text-font-style': this.highlightedText.fontStyle,
      '--result-highlighted-text-font-weight': this.highlightedText.fontWeight,

      '--result-list-margins': `${this.resultListMargins.top}px ${this.resultListMargins.right}px ${this.resultListMargins.bottom}px ${this.resultListMargins.left}px`,
      '--result-list-margin-right': `${this.resultListMargins.right}px`,
      '--result-list-margin-top': `${this.resultListMargins.top}px`,
      '--result-list-margin-bottom': `${this.resultListMargins.bottom}px`,

      '--result-bullet-color': this.regular.bullet.color,
      '--result-bullet-width': `${this.regular.bullet.width}px`,
      '--result-bullet-height': `${this.regular.bullet.height}px`,
      '--result-bullet-border-radius': `${this.regular.bullet.borderRadius}px`,

      '--result-active-bullet-color': this.active.bullet.color,
      '--result-active-bullet-width': `${this.active.bullet.width}px`,
      '--result-active-bullet-height': `${this.active.bullet.height}px`,
      '--result-active-bullet-border-radius': `${this.active.bullet.borderRadius}px`,
    };
  }

  toXamlString(): string {
    return `
    <!-- Margins for the list of results -->
    <Thickness x:Key="ResultMargin">${normalizeMarginsForWpf(this.resultListMargins)}</Thickness>

    <!-- Result title -->
    <Style
        x:Key="ItemTitleStyle"
        BasedOn="{StaticResource BaseItemTitleStyle}"
        TargetType="{x:Type TextBlock}">
        <Setter Property="Foreground" Value="${normalizeHexColorForWpf(this.regular.title)}" />
    </Style>
    
    <Style
        x:Key="ItemTitleSelectedStyle"
        BasedOn="{StaticResource BaseItemTitleSelectedStyle}"
        TargetType="{x:Type TextBlock}">
        <Setter Property="Foreground" Value="${normalizeHexColorForWpf(this.active.title)}" />
    </Style>
    
    <!-- Result subtitle -->
    <Style
        x:Key="ItemSubTitleStyle"
        BasedOn="{StaticResource BaseItemSubTitleStyle}"
        TargetType="{x:Type TextBlock}">
        <Setter Property="Foreground" Value="${normalizeHexColorForWpf(this.regular.subtitle)}" />
    </Style>
    
    <Style
        x:Key="ItemSubTitleSelectedStyle"
        BasedOn="{StaticResource BaseItemSubTitleSelectedStyle}"
        TargetType="{x:Type TextBlock}">
        <Setter Property="Foreground" Value="${normalizeHexColorForWpf(this.active.subtitle)}" />
    </Style>
    
    <!-- Result hotkey (Alt+1, Alt+2, etc.) -->
    <Style x:Key="ItemHotkeyStyle" TargetType="{x:Type TextBlock}">
        ${getFontSizeSetterForWpf(this.regular.shortcut.fontSize)}
        <Setter Property="Foreground" Value="${this.regular.shortcut.color}" />
    </Style>
    
    <Style x:Key="ItemHotkeySelectedStyle" TargetType="{x:Type TextBlock}">
        ${getFontSizeSetterForWpf(this.active.shortcut.fontSize)}
        <Setter Property="Foreground" Value="${this.active.shortcut.color}" />
    </Style>
    
    <!-- Result glyph -->
    <Style x:Key="ItemGlyphStyle" TargetType="{x:Type TextBlock}">
        <Setter Property="Foreground" Value="${normalizeHexColorForWpf(this.regular.glyph.color)}" />
        <Setter Property="Width" Value="${this.regular.glyph.fontSize}" />
        <Setter Property="Height" Value="${this.regular.glyph.fontSize}" />
        ${getFontSizeSetterForWpf(this.regular.glyph.fontSize)}
    </Style>
    
    <Style x:Key="ItemGlyphSelectedStyle" TargetType="{x:Type TextBlock}">
        <Setter Property="Foreground" Value="${normalizeHexColorForWpf(this.active.glyph.color)}" />
        <Setter Property="Width" Value="${this.active.glyph.fontSize}" />
        <Setter Property="Height" Value="${this.active.glyph.fontSize}" />
        ${getFontSizeSetterForWpf(this.active.glyph.fontSize)}
    </Style>
    
    <!-- Selected result styles -->
    <SolidColorBrush x:Key="ItemSelectedBackgroundColor">${normalizeHexColorForWpf(this.active.background)}</SolidColorBrush>
    <CornerRadius x:Key="ItemRadius">${this.borderRadius}</CornerRadius>
    <Thickness x:Key="ItemMargin">${normalizeMarginsForWpf(this.margins)}</Thickness>
    
    <!-- Highlighted text -->
    <Style x:Key="HighlightStyle">
        <Setter Property="Inline.Foreground" Value="${normalizeHexColorForWpf(this.highlightedText.color)}" />
        <Setter Property="Inline.FontStyle" Value="${this.highlightedText.fontStyle}" />
        <Setter Property="Inline.FontWeight" Value="${this.highlightedText.fontWeight}" />
    </Style>
    `;
  }

  fromJSON(data: Record<string, any>): void {
    if (verifyArrayTypes(
      data.r,
      "string",
      "number",
      "number",
      "number",

      "string",
      "number",

      "string",
      "string",

      "string",
      "number",
      "number",
      "number",
    )) {
      this.regular.shortcut.color = data.r[0];
      this.regular.shortcut.fontSize = data.r[1];
      this.regular.shortcut.fontStyle = data.r[2] === 0 ? "Normal" : "Italic";
      this.regular.shortcut.fontWeight = data.r[3] === 0 ? "Normal" : "Bold";

      this.regular.glyph.color = data.r[4];
      this.regular.glyph.fontSize = data.r[5];

      this.regular.title = data.r[6];
      this.regular.subtitle = data.r[7];

      this.regular.bullet.color = data.r[8];
      this.regular.bullet.width = data.r[9];
      this.regular.bullet.height = data.r[10];
      this.regular.bullet.borderRadius = data.r[11];
    }

    if (verifyArrayTypes(
      data.a,
      "string",
      "number",
      "number",
      "number",

      "string",
      "number",

      "string",
      "string",

      "string",

      "string",
      "number",
      "number",
      "number",
    )) {
      this.active.shortcut.color = data.a[0];
      this.active.shortcut.fontSize = data.a[1];
      this.active.shortcut.fontStyle = data.a[2] === 0 ? "Normal" : "Italic";
      this.active.shortcut.fontWeight = data.a[3] === 0 ? "Normal" : "Bold";

      this.active.glyph.color = data.a[4];
      this.active.glyph.fontSize = data.a[5];

      this.active.title = data.a[6];
      this.active.subtitle = data.a[7];

      this.active.background = data.a[8];

      this.active.bullet.color = data.a[9];
      this.active.bullet.width = data.a[10];
      this.active.bullet.height = data.a[11];
      this.active.bullet.borderRadius = data.a[12];
    }

    if (verifyArrayTypes(data.rlm, "number", "number", "number", "number")) {
      this.resultListMargins.top = data.rlm[0];
      this.resultListMargins.right = data.rlm[1];
      this.resultListMargins.bottom = data.rlm[2];
      this.resultListMargins.left = data.rlm[3];
    }

    if (verifyArrayTypes(data.margins, "number", "number")) {
      this.margins.left = data.margins[0];
      this.margins.right = data.margins[1];
    }

    if (typeof data.br === "number")
      this.borderRadius = data.br;

    if (verifyArrayTypes(data.ht, "string", "number", "number")) {
      this.highlightedText.color = data.ht[0];
      this.highlightedText.fontStyle = data.ht[1] === 0 ? "Normal" : "Italic";
      this.highlightedText.fontWeight = data.ht[2] === 0 ? "Normal" : "Bold";
    }
  }

  toJSON(): Record<string, any> {
    return {
      r: [
        this.regular.shortcut.color,
        this.regular.shortcut.fontSize,
        this.regular.shortcut.fontStyle === "Normal" ? 0 : 1,
        this.regular.shortcut.fontWeight === "Normal" ? 0 : 1,
        this.regular.glyph.color,
        this.regular.glyph.fontSize,
        this.regular.title,
        this.regular.subtitle,
        this.regular.bullet.color,
        this.regular.bullet.width,
        this.regular.bullet.height,
        this.regular.bullet.borderRadius,
      ],
      a: [
        this.active.shortcut.color,
        this.active.shortcut.fontSize,
        this.active.shortcut.fontStyle === "Normal" ? 0 : 1,
        this.active.shortcut.fontWeight === "Normal" ? 0 : 1,
        this.active.glyph.color,
        this.active.glyph.fontSize,
        this.active.title,
        this.active.subtitle,
        this.active.background,
        this.active.bullet.color,
        this.active.bullet.width,
        this.active.bullet.height,
        this.active.bullet.borderRadius,
      ],
      rlm: [
        this.resultListMargins.top,
        this.resultListMargins.right,
        this.resultListMargins.bottom,
        this.resultListMargins.left,
      ],
      m: [
        this.margins.left,
        this.margins.right,
      ],
      br: this.borderRadius,
      ht: [
        this.highlightedText.color,
        this.highlightedText.fontStyle === "Normal" ? 0 : 1,
        this.highlightedText.fontWeight === "Normal" ? 0 : 1,
      ],
    }
  }
}
