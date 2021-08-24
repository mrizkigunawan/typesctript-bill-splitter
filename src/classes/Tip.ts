import { HasFormatter } from "../interfaces/HasFormatter";

export class Tip implements HasFormatter {
  constructor(
    readonly buttons: NodeListOf<HTMLButtonElement>,
    private number: number = 0
  ) {}

  format() {
    return this.number * 0.01;
  }

  fireButton(e: Event) {
    const target = e.target as HTMLButtonElement;
    this.number = +target.dataset["tip"]!;

    this.removeActiveButton();
    this.setActiveButton(target);
  }

  setActiveButton(button: HTMLButtonElement) {
    button.disabled = true;
    button.classList.remove("btn-indigo");
    button.classList.add("btn-disabled");
  }

  removeActiveButton() {
    this.buttons.forEach((button) => {
      if (!button.classList.contains("btn-indigo")) {
        button.classList.add("btn-indigo");
      }
      button.disabled = false;
      button.classList.remove("btn-disabled");
    });
  }

  reset() {
    this.number = 0;
  }
}
