{
  // getter and setter
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    // setter
    set deposit(amount: number) {
      this._balance = this.balance + amount;
    }

    //getter
    get balance() {
      return this._balance;
    }
  }

  const myAccount = new BankAccount(2, "Nur", 50);

  myAccount.deposit = 50;

  const myBalance = myAccount.balance;
  console.log(myBalance);

  //
}
