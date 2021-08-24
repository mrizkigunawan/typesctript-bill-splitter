import { HasFormatter } from "../interfaces/HasFormatter";

export class Split {
  constructor(
    private totalPerPerson: HTMLDivElement,
    private tipPerPerson: HTMLDivElement
  ) {}

  render(
    tip: HasFormatter,
    inputPeopleEl: HTMLInputElement,
    inputBillEl: HTMLInputElement
  ) {
    let people: number = inputPeopleEl.valueAsNumber || 0;
    let bill: number = inputBillEl.valueAsNumber || 0;
    const decimalTip: number = tip.format();

    if (people === 0) {
      inputPeopleEl.valueAsNumber = 1;
      people = 1;
    }

    if (bill === 0) {
      inputBillEl.valueAsNumber = 1;
      bill = 1;
    }

    const countBillPerPerson: number = (bill + bill * decimalTip) / people;
    const countTipPerPerson: number = (bill * decimalTip) / people;

    const resultBillPerPerson: number = Number(countBillPerPerson.toFixed(2));
    const resultTipPerPerson: number = Number(countTipPerPerson.toFixed(2));

    this.totalPerPerson.textContent = `$${resultBillPerPerson}`;
    this.tipPerPerson.textContent = `$${resultTipPerPerson}`;

    console.log(resultBillPerPerson, resultTipPerPerson);
  }

  reset(
    tip: HasFormatter,
    inputPeopleEl: HTMLInputElement,
    inputBillEl: HTMLInputElement
  ) {
    tip.reset();
    tip.removeActiveButton();
    inputBillEl.valueAsNumber = 0;
    inputPeopleEl.valueAsNumber = 0;
    this.totalPerPerson.textContent = "$0";
    this.tipPerPerson.textContent = "$0";
  }
}
