export interface HasFormatter {
  format(): number;
  reset(): void;
  fireButton(e: Event): void;
  setActiveButton(b: HTMLButtonElement): void;
  removeActiveButton(): void;
}
