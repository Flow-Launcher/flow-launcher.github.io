import type {IState} from "@/components/theme-builder/state/IState";
import {normalizeHexColorForWpf, verifyArrayTypes} from "@/utils.ts";

export class BulletState implements IState {
  regular = $state({
    visible: false,
    color: "#ffffff00",
    width: 4,
    height: 10,
    borderRadius: 2,
  });

  active = $state({
    visible: false,
    color: "#D0A23A",
    width: 4,
    height: 10,
    borderRadius: 2,
  });

  reset(): void {
    this.regular.visible = false;
    this.regular.color = "#ffffff00";
    this.regular.width = 4;
    this.regular.height = 10;
    this.regular.borderRadius = 2;

    this.active.visible = false;
    this.active.color = "#D0A23A";
    this.active.width = 4;
    this.active.height = 10;
    this.active.borderRadius = 2;
  }

  toCssProperties(): Record<string, string> {
    return {
      '--bullet-regular-color': this.regular.color,
      '--bullet-regular-width': `${this.regular.width}px`,
      '--bullet-regular-height': `${this.regular.height}px`,
      '--bullet-regular-border-radius': `${this.regular.borderRadius}px`,

      '--bullet-active-color': this.active.color,
      '--bullet-active-width': `${this.active.width}px`,
      '--bullet-active-height': `${this.active.height}px`,
      '--bullet-active-border-radius': `${this.active.borderRadius}px`,
    };
  }

  toXamlString(): string {
    return `
    <!-- Bullets -->
    <Style
        x:Key="BulletStyle"
        BasedOn="{StaticResource BaseBulletStyle}"
        TargetType="{x:Type Border}">
        ${this.getBulletStyleContent(this.regular)}
    </Style>
    
    <Style
        x:Key="ItemBulletSelectedStyle"
        BasedOn="{StaticResource BaseBulletStyle}"
        TargetType="{x:Type Border}">
        ${this.getBulletStyleContent(this.active)}
    </Style>
    `;
  }

  private getBulletStyleContent(bullet: typeof this.regular): string {
    if (bullet.visible) {
      return `
        <Setter Property="Width" Value="${bullet.width}" />
        <Setter Property="Height" Value="${bullet.height}" />
        <Setter Property="CornerRadius" Value="${bullet.borderRadius}" />
        <Setter Property="Background" Value="${normalizeHexColorForWpf(bullet.color)}" />
      `.trim();
    }
    return `
        <Setter Property="Visibility" Value="Collapsed" />
    `.trim();
  }

  fromJSON(data: any[]): void {
    if (!verifyArrayTypes(
      data,
      "number",
      "string",
      "number",
      "number",
      "number",

      "number",
      "string",
      "number",
      "number",
      "number")
    )
      return;

    this.regular.visible = !!data[0];
    this.regular.color = data[1];
    this.regular.width = data[2];
    this.regular.height = data[3];
    this.regular.borderRadius = data[4];

    this.active.visible = !!data[5];
    this.active.color = data[6];
    this.active.width = data[7];
    this.active.height = data[8];
    this.active.borderRadius = data[9];
  }

  toJSON(): any[] {
    return [
      +this.regular.visible,
      this.regular.color,
      this.regular.width,
      this.regular.height,
      this.regular.borderRadius,

      +this.active.visible,
      this.active.color,
      this.active.width,
      this.active.height,
      this.active.borderRadius,
    ];
  }
}
