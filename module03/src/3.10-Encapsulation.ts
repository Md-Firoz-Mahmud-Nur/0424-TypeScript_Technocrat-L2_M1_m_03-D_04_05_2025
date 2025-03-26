{
  // Encapsulation
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    private getBalance() {
      return this._balance;
    }

    getHiddenMethod() {
      return this.getBalance();
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this._balance;
    }
  }

  const myAccount = new BankAccount(1, "Nur", 20);
  // myAccount.balance = 0;
  myAccount.addDeposit(20);
  // const myBalance = myAccount.getBalance();
  // console.log(myBalance);

  myAccount.getHiddenMethod;

  //
}
