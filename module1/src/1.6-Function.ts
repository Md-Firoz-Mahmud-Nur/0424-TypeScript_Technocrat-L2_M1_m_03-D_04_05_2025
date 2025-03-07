// Learning function
// Normal function

function add(a: number, b: number): number {
  return a + b;
}
add(2, 2);

// Arrow function
const addArrow = (a: number, b: number): number => a + b;
addArrow(2, 2);

// Object --> function --> method
const poorUser = {
  name: "Nur",
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance is : ${this.balance + balance}`;
  },
};

const array: number[] = [1, 2, 3];
const newArray: number[] = array.map(
  (element: number): number => element * element
);
