import type {IState} from "@/components/theme-builder/state/IState";
import {getFontSizeSetterForWpf, normalizeHexColorForWpf, normalizeMarginsForWpf, verifyArrayTypes} from "@/utils.ts";

export class QueryBoxState implements IState {
  suggestionColor = $state("#79817F");
  textColor = $state("#D2D8E5");
  caretColor = $state("#FFAA47");

  icon = $state({
    color: "#79817F",
    visible: true,
    width: 32,
    height: 32,
  });

  progressBar = $state({
    color: "#D85E4F",
    height: 2,
  });

  date = $state({
    color: "#79817F",
    size: 14,
    fontStyle: "Normal",
    fontWeight: "Normal",
    margins: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  });

  time = $state({
    color: "#79817F",
    size: 14,
    fontStyle: "Normal",
    fontWeight: "Normal",
    margins: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  });

  datetimeMargins = $state({
    top: 0,
    right: 56,
    bottom: 0,
    left: 0,
  });

  reset(): void {
    this.suggestionColor = "#79817F";
    this.textColor = "#D2D8E5";
    this.caretColor = "#FFAA47";

    this.icon.color = "#79817F";
    this.icon.visible = true;
    this.icon.width = 32;
    this.icon.height = 32;

    this.progressBar.color = "#D85E4F";
    this.progressBar.height = 2;

    this.date.color = "#79817F";
    this.date.size = 14;
    this.date.fontStyle = "Normal";
    this.date.fontWeight = "Normal";
    this.date.margins.top = 0;
    this.date.margins.right = 0;
    this.date.margins.bottom = 0;
    this.date.margins.left = 0;

    this.time.color = "#79817F";
    this.time.size = 14;
    this.time.fontStyle = "Normal";
    this.time.fontWeight = "Normal";
    this.time.margins.top = 0;
    this.time.margins.right = 0;
    this.time.margins.bottom = 0;
    this.time.margins.left = 0;

    this.datetimeMargins.top = 0;
    this.datetimeMargins.right = 56;
    this.datetimeMargins.bottom = 0;
    this.datetimeMargins.left = 0;
  }

  toCssProperties(): Record<string, string> {
    return {
      '--suggestion-text-color': this.suggestionColor,
      '--query-text-color': this.textColor,
      '--caret-color': this.caretColor,
      '--progress-bar-color': this.progressBar.color,
      '--progress-bar-height': `${this.progressBar.height}px`,
      '--search-icon-color': this.icon.color,
      '--search-icon-visible': this.icon.visible ? '1' : '0',
      '--search-icon-width': `${this.icon.width}px`,
      '--search-icon-height': `${this.icon.height}px`,
      '--datetime-margins': `${this.datetimeMargins.top}px ${this.datetimeMargins.right}px ${this.datetimeMargins.bottom}px ${this.datetimeMargins.left}px`,
      '--date-color': this.date.color,
      '--date-size': `${this.date.size}px`,
      '--date-font-weight': this.date.fontWeight,
      '--date-font-style': this.date.fontStyle,
      '--date-margins': `${this.date.margins.top}px ${this.date.margins.right}px ${this.date.margins.bottom}px ${this.date.margins.left}px`,
      '--time-color': this.time.color,
      '--time-size': `${this.time.size}px`,
      '--time-font-weight': this.time.fontWeight,
      '--time-font-style': this.time.fontStyle,
      '--time-margins': `${this.time.margins.top}px ${this.time.margins.right}px ${this.time.margins.bottom}px ${this.time.margins.left}px`,
    };
  }

  toXamlString(): string {
    return `
    <!-- Query input text box -->
    <Style
        x:Key="QueryBoxStyle"
        BasedOn="{StaticResource BaseQueryBoxStyle}"
        TargetType="{x:Type TextBox}">
        <Setter Property="Foreground" Value="${normalizeHexColorForWpf(this.textColor)}" />
        <Setter Property="CaretBrush" Value="${normalizeHexColorForWpf(this.caretColor)}" />
    </Style>

    <!-- Query suggestion text box -->
    <Style
        x:Key="QuerySuggestionBoxStyle"
        BasedOn="{StaticResource BaseQuerySuggestionBoxStyle}"
        TargetType="{x:Type TextBox}">
        <Setter Property="Foreground" Value="${normalizeHexColorForWpf(this.suggestionColor)}" />
    </Style>
    
    <!-- The panel with the time and date -->
    <Style
        x:Key="ClockPanel"
        BasedOn="{StaticResource ClockPanel}"
        TargetType="{x:Type StackPanel}">
        <Setter Property="Margin" Value="${normalizeMarginsForWpf(this.datetimeMargins)}" />
    </Style>
    
    <!-- Time text block -->
    <Style
        x:Key="ClockBox"
        BasedOn="{StaticResource BaseClockBox}"
        TargetType="{x:Type TextBlock}">
        <Setter Property="Margin" Value="${normalizeMarginsForWpf(this.time.margins)}" />
        <Setter Property="Foreground" Value="${normalizeHexColorForWpf(this.time.color)}" />
        ${getFontSizeSetterForWpf(this.time.size)}
        <Setter Property="FontStyle" Value="${this.time.fontStyle}" />
        <Setter Property="FontWeight" Value="${this.time.fontWeight}" />
    </Style>
    
    <!-- Date text block -->
    <Style
        x:Key="DateBox"
        BasedOn="{StaticResource BaseDateBox}"
        TargetType="{x:Type TextBlock}">
        <Setter Property="Margin" Value="${normalizeMarginsForWpf(this.date.margins)}" />
        <Setter Property="Foreground" Value="${normalizeHexColorForWpf(this.date.color)}" />
        ${getFontSizeSetterForWpf(this.date.size)}
        <Setter Property="FontStyle" Value="${this.date.fontStyle}" />
        <Setter Property="FontWeight" Value="${this.date.fontWeight}" />
    </Style>
    
    <!-- Icon to the right of the query text box -->
    <Style
        x:Key="SearchIconStyle"
        BasedOn="{StaticResource BaseSearchIconStyle}"
        TargetType="{x:Type Path}">
    ${this.getSearchIconStyleContents()}
    </Style>
    
    <!-- Progress bar under the query text box -->
    <Style
        x:Key="PendingLineStyle"
        BasedOn="{StaticResource BasePendingLineStyle}"
        TargetType="{x:Type Line}">
        <Setter Property="Stroke" Value="${normalizeHexColorForWpf(this.progressBar.color)}" />
        <Setter Property="StrokeThickness" Value="${this.progressBar.height}" />
    </Style>
    `;
  }

  private getSearchIconStyleContents(): string {
    if (this.icon.visible)
      return `
        <Setter Property="Fill" Value="${normalizeHexColorForWpf(this.icon.color)}" />
        <Setter Property="Width" Value="${this.icon.width}" />
        <Setter Property="Height" Value="${this.icon.height}" />
      `.trim();
    return `
        <Setter Property="Visibility" Value="Collapsed" />
      `.trim();
  }

  fromJSON(data: Record<string, any>): void {
    if (typeof data.sc === "string")
      this.suggestionColor = data.sc;

    if (typeof data.tc === "string")
      this.textColor = data.tc;

    if (typeof data.cc === "string")
      this.caretColor = data.cc;

    if (verifyArrayTypes(data.i, "string", "number", "number", "number")) {
      this.icon.color = data.i[0];
      this.icon.visible = !!data.i[1];
      this.icon.width = data.i[2];
      this.icon.height = data.i[3];
    }

    if (verifyArrayTypes(data.pb, "string", "number")) {
      this.progressBar.color = data.pb[0];
      this.progressBar.height = data.pb[1];
    }

    if (verifyArrayTypes(data.d, "string", "number", "number", "number", "number", "number", "number", "number")) {
      this.date.color = data.d[0];
      this.date.size = data.d[1];
      this.date.fontStyle = data.d[2] === 0 ? "Normal" : "Italic";
      this.date.fontWeight = data.d[3] === 0 ? "Normal" : "Bold";
      this.date.margins.top = data.d[4];
      this.date.margins.right = data.d[5];
      this.date.margins.bottom = data.d[6];
      this.date.margins.left = data.d[7];
    }

    if (verifyArrayTypes(data.t, "string", "number", "number", "number", "number", "number", "number", "number")) {
      this.time.color = data.t[0];
      this.time.size = data.t[1];
      this.time.fontStyle = data.t[2] === 0 ? "Normal" : "Italic";
      this.time.fontWeight = data.t[3] === 0 ? "Normal" : "Bold";
      this.time.margins.top = data.t[4];
      this.time.margins.right = data.t[5];
      this.time.margins.bottom = data.t[6];
      this.time.margins.left = data.t[7];
    }

    if (verifyArrayTypes(data.dm, "number", "number", "number", "number")) {
      this.datetimeMargins.top = data.dm[0];
      this.datetimeMargins.right = data.dm[1];
      this.datetimeMargins.bottom = data.dm[2];
      this.datetimeMargins.left = data.dm[3];
    }
  }

  toJSON(): Record<string, any> {
    return {
      sc: this.suggestionColor,
      tc: this.textColor,
      cc: this.caretColor,
      i: [
        this.icon.color,
        +this.icon.visible,
        this.icon.width,
        this.icon.height,
      ],
      pb: [
        this.progressBar.color,
        this.progressBar.height,
      ],
      d: [
        this.date.color,
        this.date.size,
        this.date.fontStyle === "Normal" ? 0 : 1,
        this.date.fontWeight === "Normal" ? 0 : 1,
        this.date.margins.top,
        this.date.margins.right,
        this.date.margins.bottom,
        this.date.margins.left,
      ],
      t: [
        this.time.color,
        this.time.size,
        this.time.fontStyle === "Normal" ? 0 : 1,
        this.time.fontWeight === "Normal" ? 0 : 1,
        this.time.margins.top,
        this.time.margins.right,
        this.time.margins.bottom,
        this.time.margins.left,
      ],
      dm: [
        this.datetimeMargins.top,
        this.datetimeMargins.right,
        this.datetimeMargins.bottom,
        this.datetimeMargins.left,
      ],
    }
  };
}
