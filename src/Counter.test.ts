import { Counter } from "./Counter";

let counter: Counter;
// jest 的钩子函数，describe 代码块有自己的钩子函数作用域.
// beforeAll
// afterAll
// afterEach
beforeEach(() => {
  counter = new Counter();
});

test("测试 Counter 的初始值是 0", () => {
  expect(counter.number).toBe(0);
});

describe("测试 Counter add 相关的代码", () => {
  test("测试 Counter addOne 方法", () => {
    counter.addOne();
    expect(counter.number).toBe(1);
  });

  test("测试 Counter addTwo 方法", () => {
    counter.addTwo();
    expect(counter.number).toBe(2);
  });
});

describe("测试 Counter minus 相关的代码", () => {
  test("测试 Counter minusOne 方法", () => {
    counter.minusOne();
    expect(counter.number).toBe(-1);
  });

  test("测试 Counter minusTwo 方法", () => {
    counter.minusTwo();
    expect(counter.number).toBe(-2);
  });
});
