interface FinanceItem {
  type: "invoice" | "payment";
  tofrom: string;
  details: string;
  amount: number;
}

class FinanceLogger implements FinanceItem {
  type: "invoice" | "payment";
  tofrom: string;
  details: string;
  amount: number;

  constructor(
    type: "invoice" | "payment",
    tofrom: string,
    details: string,
    amount: number
  ) {
    this.type = type;
    this.tofrom = tofrom;
    this.details = details;
    this.amount = amount;
  }

  format(): string {
    if (this.type === "invoice") {
      return `<h4>Invoice to ${this.tofrom}</h4><p>for ${this.details}: £${this.amount}</p>`;
    } else {
      return `<h4>Payment from ${this.tofrom}</h4><p>for ${this.details}: £${this.amount}</p>`;
    }
  }
}

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const itemList = document.querySelector(".item-list") as HTMLUListElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  const logger = new FinanceLogger(
    type.value as "invoice" | "payment",
    tofrom.value,
    details.value,
    amount.valueAsNumber
  );

  const li = document.createElement("li");

  li.innerHTML = logger.format();

  itemList.appendChild(li);

  // Reset form fields
  form.reset();
});
