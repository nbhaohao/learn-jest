import { add, minus } from "./math";
class Expect {
  constructor(private result: any) {}

  toBe = (expectResult: any): void => {
    if (this.result !== expectResult) {
      throw new Error(
        `预期与实际值不符: 预期: ${expectResult}; 结果:${this.result}`
      );
    }
  };
}

const test = (testName: string, testFn: () => void): void => {
  try {
    testFn();
    console.log(`${testName}通过测试`);
  } catch (e) {
    console.log(`${testName}没有通过测试: ${e}`);
  }
};

const expect = (result: any): Expect => {
  return new Expect(result);
};

test("测试加法 3 + 7", () => {
  expect(add(3, 7)).toBe(10);
});

test("测试减法 3 - 3", () => {
  expect(minus(3, 3)).toBe(0);
});
