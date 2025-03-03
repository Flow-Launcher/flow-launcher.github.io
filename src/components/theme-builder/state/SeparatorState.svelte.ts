import type {IState} from "@/components/theme-builder/state/IState";
import {normalizeHexColorForWpf, normalizeMarginsForWpf, verifyArrayTypes} from "@/utils.ts";

export class SeparatorState implements IState {
  visible = $state(true);
  color = $state("#3c454e");
  margins = $state({
    top: 1,
    right: 0,
    bottom: 0,
    left: 0,
  });
  size = $state(2);

  reset(): void {
    this.visible = true;
    this.color = "#3c454e";
    this.margins = {
      top: 1,
      right: 0,
      bottom: 0,
      left: 0,
    };
    this.size = 2;
  }

  toCssProperties(): Record<string, string> {
    return {
      '--separator-color': this.color,
      '--separator-size': `${this.size}px`,
      '--separator-margins': `${this.margins.top}px ${this.margins.right}px ${this.margins.bottom}px ${this.margins.left}px`,
    };
  }

  toXamlString(): string {
    const color = this.visible ? normalizeHexColorForWpf(this.color) : "Transparent";
    const height = this.visible ? this.size : 0;
    const margin = this.visible ? normalizeMarginsForWpf(this.margins) : "0";
    return `
    <!-- Separator between the query box and the results -->
    <Style
        x:Key="SeparatorStyle"
        BasedOn="{StaticResource BaseSeparatorStyle}"
        TargetType="{x:Type Rectangle}">
        <Setter Property="Fill" Value="${color}" />
        <Setter Property="Height" Value="${height}" />
        <Setter Property="Margin" Value="${margin}" />
    </Style>
    `;
  }

  fromJSON(data: any[]): void {
    if (!verifyArrayTypes(data, "number", "string", "number", "number", "number", "number", "number"))
      return;

    this.visible = !!data[0];
    this.color = data[1];
    this.margins.top = data[2];
    this.margins.right = data[3];
    this.margins.bottom = data[4];
    this.margins.left = data[5];
    this.size = data[6];
  }

  toJSON(): any[] {
    return [
      +this.visible,
      this.color,
      this.margins.top,
      this.margins.right,
      this.margins.bottom,
      this.margins.left,
      this.size,
    ];
  }
}
