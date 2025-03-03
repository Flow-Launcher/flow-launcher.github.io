import type {IState} from "@/components/theme-builder/state/IState.ts";
import {verifyArrayTypes} from "@/utils.ts";

export class SettingsState implements Omit<IState, "toCssProperties" | "toXamlString"> {
  name = $state("Hello World Theme");
  dark = $state(false);
  backgrounds = $state(false);
  progressBar = $state(false);
  caret = $state(false);
  activeResults = $state([false, false, true, false]);
  datetime = $state(false);
  previewPanel = $state(false);

  reset(): void {
    this.name = "Hello World Theme";
    this.dark = false;
    this.backgrounds = false;
    this.progressBar = false;
    this.caret = false;
    this.activeResults = [false, false, true, false];
    this.datetime = false;
    this.previewPanel = false;
  }

  fromJSON(data: any[]): void {
    if (!verifyArrayTypes(
      data,
      "string",
      "number",
      "number",
      "number",
      "number",
      "number",
      "number",
      "number",
    ))
      return;

    this.name = data[0];
    this.dark = !!data[1];
    this.backgrounds = !!data[2];
    this.progressBar = !!data[3];
    this.caret = !!data[4];
    this.activeResults[0] = !!(data[5] & 1 << 0);
    this.activeResults[1] = !!(data[5] & 1 << 1);
    this.activeResults[2] = !!(data[5] & 1 << 2);
    this.activeResults[3] = !!(data[5] & 1 << 3);
    this.datetime = !!data[6];
    this.previewPanel = !!data[7];
  }

  toJSON(): any[] {
    let activeResults = 0;

    for (let i = 0; i < this.activeResults.length; i++) {
      activeResults |= +this.activeResults[i] << i;
    }

    return [
      this.name,
      +this.dark,
      +this.backgrounds,
      +this.progressBar,
      +this.caret,
      activeResults,
      +this.datetime,
      +this.previewPanel
    ].flat();
  }
}
