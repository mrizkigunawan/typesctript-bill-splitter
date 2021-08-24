import { Split } from "./classes/Split";
import { Tip } from "./classes/Tip";

const buttons = document.querySelectorAll(
  ".button-tip"
) as NodeListOf<HTMLButtonElement>;
const totalPerPerson = document.getElementById(
  "total-per-person"
) as HTMLDivElement;
const tipPerPerson = document.getElementById(
  "tip-per-person"
) as HTMLDivElement;
const inputPeople = document.getElementById("people") as HTMLInputElement;
const inputBill = document.getElementById("bill") as HTMLInputElement;
const reset = document.getElementById("reset") as HTMLButtonElement;

const tip = new Tip(buttons);
const split = new Split(totalPerPerson, tipPerPerson);

inputPeople.addEventListener("input", function () {
  split.render(tip, inputPeople, inputBill);
});

inputBill.addEventListener("input", function () {
  split.render(tip, inputPeople, inputBill);
});

buttons.forEach((button) => {
  button.addEventListener("click", function (e: Event) {
    tip.fireButton(e);
    split.render(tip, inputPeople, inputBill);
  });
});

reset.addEventListener("click", function () {
  split.reset(tip, inputPeople, inputBill);
});
