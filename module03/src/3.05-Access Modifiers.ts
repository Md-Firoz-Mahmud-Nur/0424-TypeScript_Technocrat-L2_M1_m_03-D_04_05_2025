{
  // Access Modifiers

  class BankAccount {
    public readonly id: number;
    public name: string;
    // private _balance: number; // test()
    protected _balance: number;
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    deposit(amount: number) {
      this._balance = this._balance + amount;
    }

    getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this._balance;
    }
  }

  const myAccount = new BankAccount(1, "Firoz", 1000);
  console.log(myAccount);
  myAccount.deposit(100);
  const myBalance = myAccount.getBalance();
  console.log(myBalance);
}
