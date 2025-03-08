export interface IState {
  toCssProperties(): Record<string, string>;
  toXamlString(): string;
  fromJSON(data: Record<string, any> | any[]): void;
  toJSON(): Record<string, any> | any[];
  reset(): void;
}
