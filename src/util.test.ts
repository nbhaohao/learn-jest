import { Util } from "./util";

describe("测试 Util", () => {
  let UtilInstance: Util = new Util();
  beforeEach(() => {
    UtilInstance = new Util();
  });
  test("测试 a 方法", () => {
    expect(UtilInstance.a()).toBe("123");
  });
});
