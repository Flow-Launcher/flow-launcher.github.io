import type {IState} from "@/components/theme-builder/state/IState";
import {normalizeBooleanForWpf, normalizeHexColorForWpf, verifyArrayTypes} from "@/utils.ts";

export class WindowState implements IState {
  border = $state({
    thickness: 2,
    color: "#6C7279",
    radius: 5,
  });

  background = $state({
    color: "#303840",
    blur: false,
  });

  reset(): void {
    this.border.thickness = 2;
    this.border.color = "#6C7279";
    this.border.radius = 5;

    this.background.color = "#303840";
    this.background.blur = false
  }

  toCssProperties(): Record<string, string> {
    return {
      '--border-thickness': `${this.border.thickness}px`,
      '--border-color': this.border.color,
      '--border-radius': `${this.border.radius}px`,
      '--background': this.background.color,
      '--backdrop-blur': this.background.blur ? 'blur(30px)' : 'none',
    }
  }

  toXamlString(): string {
    return `
    <!-- Blur behind the window -->
    <system:Boolean x:Key="ThemeBlurEnabled">${normalizeBooleanForWpf(this.background.blur)}</system:Boolean>
    
    <!-- Main window background -->
    <Style
        x:Key="WindowBorderStyle"
        BasedOn="{StaticResource BaseWindowBorderStyle}"
        TargetType="{x:Type Border}">
        <Setter Property="BorderThickness" Value="${this.border.thickness}" />
        <Setter Property="BorderBrush" Value="${normalizeHexColorForWpf(this.border.color)}" />
        <Setter Property="Background" Value="${normalizeHexColorForWpf(this.background.color)}"/>
        <Setter Property="CornerRadius" Value="${this.border.radius}" />
        <Setter Property="UseLayoutRounding" Value="True" />
    </Style>
    
    <Style
        x:Key="WindowStyle"
        BasedOn="{StaticResource BaseWindowStyle}"
        TargetType="{x:Type Window}" />
        
    <Style x:Key="WindowRadius" TargetType="{x:Type Border}" />
    `;
  }

  fromJSON(data: any[]): void {
    if (!verifyArrayTypes(data, "number", "string", "number", "string", "number"))
      return;

    this.border.thickness = data[0];
    this.border.color = data[1];
    this.border.radius = data[2];
    this.background.color = data[3];
    this.background.blur = !!data[4];
  }

  toJSON(): any[] {
    return [
      this.border.thickness,
      this.border.color,
      this.border.radius,
      this.background.color,
      +this.background.blur,
    ];
  }
}
