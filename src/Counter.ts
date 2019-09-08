export class Counter {
  public number: number = 0;
  addOne(): void {
    this.number += 1;
  }
  addTwo(): void {
    this.number += 2;
  }
  minusOne(): void {
    this.number -= 1;
  }
  minusTwo(): void {
    this.number -= 2;
  }
}
